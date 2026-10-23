// Vercel serverless function — POST /api/send-email
// Sends D4 Plumbing contact/quote form submissions via Resend.

import { pitchNote, pitchSubjectPrefix, screenPitch } from './_lib/pitch.js';

export const config = {
  runtime: 'edge',
};

// Spam screening.
// Bots: a hidden "website" field people never fill, a form submitted in under
// 3 seconds, or a post that did not come from one of our pages. Those get a
// normal-looking success and nothing is sent.
// Vendor pitches (SEO / web / marketing / app / loan offers, see
// _lib/pitch.js): this site keeps no other copy of a submission, so a pitch
// is still emailed, with "[Filtered: pitch]" in the subject; a borderline one
// gets "[Check]". (This replaces a substring keyword list that silently
// dropped real customers: "rank" matched "Frank", "ai " matched "Thai ".)
const OWN_HOSTS = ['d4plumbing.com', 'www.d4plumbing.com', 'defoorplumbing.com', 'www.defoorplumbing.com'];
const MIN_FORM_MS = 3000;

function hostOf(value) {
  if (!value || value === 'null') return '';
  try {
    return new URL(value).hostname.toLowerCase();
  } catch {
    return '';
  }
}

function botReason(req, body) {
  if (typeof body.website === 'string' && body.website.trim()) return 'honeypot filled';
  if (typeof body.formAge === 'number' && body.formAge >= 0 && body.formAge < MIN_FORM_MS) {
    return `submitted in ${Math.round(body.formAge)}ms`;
  }
  const from = hostOf(req.headers.get('origin')) || hostOf(req.headers.get('referer'));
  const own = (req.headers.get('x-forwarded-host') || req.headers.get('host') || '').split(',')[0].trim().split(':')[0].toLowerCase();
  if (!from) return 'no origin (posted directly)';
  if (!OWN_HOSTS.includes(from) && from !== own) return `posted from ${from}`;
  return '';
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: 'Server misconfiguration' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, phone, service, location, referral, message } = body;

  const bot = botReason(req, body);
  if (bot) {
    console.warn(`[send-email] dropped bot submission: ${bot}`);
    // Same answer a person gets, so bots learn nothing.
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const pitch = screenPitch([message, referral], { profile: 'default' });
  const note = pitchNote(pitch);
  if (pitch.verdict !== 'clean') {
    console.warn(`[send-email] pitch screen: ${pitch.verdict} (${pitch.reasons.join('; ')})`);
  }

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Service', service],
    ['Location', location],
    ['Referral', referral],
    ['Message', message],
  ]
    .filter(([, v]) => v)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;color:#555;font-weight:600;white-space:nowrap">${label}</td><td style="padding:8px 12px;color:#222">${value}</td></tr>`
    )
    .join('');

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#252525;padding:24px 32px;border-radius:12px 12px 0 0">
        <h1 style="color:#B08C47;margin:0;font-size:22px">New Quote Request — D4 Plumbing</h1>
      </div>
      <div style="background:#f9f9f9;padding:24px 32px;border-radius:0 0 12px 12px">
        ${note ? `<p style="background:#fef3c7;border:1px solid #f59e0b;color:#78350f;padding:10px 12px;margin:0 0 16px">${escapeHtml(note)}</p>` : ''}
        <table style="width:100%;border-collapse:collapse">
          <tbody>${rows}</tbody>
        </table>
        <hr style="border:none;border-top:1px solid #e0e0e0;margin:20px 0"/>
        <p style="color:#888;font-size:12px;margin:0">Submitted via D4Plumbing.com contact form</p>
      </div>
    </div>
  `;

  const resendPayload = {
    from: 'D4 Plumbing <noreply@d4plumbing.com>',
    to: ['jimmy@d4plumbing.com', 'evan@d4plumbing.com'],
    reply_to: email,
    subject: `${pitchSubjectPrefix(pitch)}New Quote Request — ${name}`,
    html,
  };

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify(resendPayload),
  });

  if (!resendRes.ok) {
    const errText = await resendRes.text();
    console.error('Resend error:', errText);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
