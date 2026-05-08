// Vercel serverless function — POST /api/send-email
// Sends D4 Plumbing contact/quote form submissions via Resend.

export const config = {
  runtime: 'edge',
};

const SPAM_KEYWORDS = [
  'seo', 'marketing', 'software', 'ai ', ' ai,', 'artificial intelligence',
  'digital marketing', 'social media', 'backlink', 'rank', 'web design agency',
  'web development agency', 'outsource', 'freelance', 'content writing',
];

function isSpam(fields) {
  const text = Object.values(fields).join(' ').toLowerCase();
  return SPAM_KEYWORDS.some((kw) => text.includes(kw));
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

  // Basic spam guard
  if (isSpam({ name, email, message, service, referral })) {
    // Silently drop spam — return 200 so bots don't retry
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
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
    subject: `New Quote Request — ${name}`,
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
