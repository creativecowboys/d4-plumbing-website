import React from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SEOHead from '@/components/SEOHead';

const city = 'Rockmart';
const cityState = 'Rockmart, GA';

const services = [
  { title: 'Drain Cleaning', description: `Slow or clogged drains? Our team clears blockages fast in ${cityState} so your plumbing flows freely again — without the mess or guesswork.` },
  { title: 'Water Heater Repair & Replacement', description: `No hot water is never convenient. We repair and replace water heaters in ${cityState} quickly so your family or business stays comfortable.` },
  { title: 'Leak Detection', description: `Hidden leaks cause serious water damage over time. Our team locates leaks fast in ${cityState} and fixes them before they become bigger problems.` },
  { title: 'Pipe Repair & Replacement', description: `Burst pipe or aging lines? DeFoor Plumbing handles pipe work of all kinds for homes and businesses in ${cityState}.` },
  { title: 'Fixture Installation', description: `Upgrading a faucet, installing a toilet, or replacing a shower head — we handle all fixture installations cleanly and correctly the first time.` },
  { title: 'Residential & Commercial Plumbing', description: `From family homes to local businesses, we bring the same level of care and quality to every job in ${cityState} and the surrounding West Georgia area.` },
  { title: 'Emergency Plumbing', description: `Plumbing emergencies don't wait for business hours. When something goes wrong, call DeFoor Plumbing and we'll get to you as fast as we can.` },
];

const trustPoints = [
  { title: 'Local Expertise', description: `We're not a national chain — we're your neighbors. DeFoor Plumbing has served ${cityState} and West Georgia for years, and we know this area inside and out.` },
  { title: 'Licensed & Insured', description: 'Every job we do is backed by proper licensing and full insurance. You can trust that the work is done right and your home or business is protected.' },
  { title: 'Fast Response', description: `When you have a plumbing problem, waiting isn't an option. We respond quickly to calls from ${cityState} and work efficiently to solve your issue.` },
  { title: 'Fair, Honest Pricing', description: 'No surprise bills, no upselling. We give you a straight answer and a fair price — every time.' },
];

export default function PlumberRockmartGA() {
  return (
    <div className="pt-24">
      <SEOHead
        title={`Plumber in ${cityState} | DeFoor Plumbing`}
        description={`Looking for a trusted plumber in ${cityState}? DeFoor Plumbing offers fast, reliable plumbing services including drain cleaning, water heater repair, leak detection, and more. Call (770) 480-9911.`}
      />
      <section className="bg-[#252525] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B08C47]/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <span className="text-[#B08C47] font-semibold text-sm tracking-widest uppercase mb-4 block">Serving {cityState}</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Plumber in {cityState}<span className="block text-[#B08C47] mt-1">DeFoor Plumbing</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed mb-8 max-w-2xl">
            When you need a dependable plumber in {cityState}, DeFoor Plumbing is ready. Based in nearby
            Temple, GA, we've proudly served {city} and West Georgia with honest, reliable plumbing work.
            Big jobs, small jobs — we handle them all with the same commitment to quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:7704809911" className="inline-flex items-center justify-center gap-3 bg-[#B08C47] hover:bg-[#9a7a3d] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg">
              <Phone className="w-5 h-5" />Call (770) 480-9911
            </a>
            <Link to={createPageUrl('Contact')} className="inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:border-[#B08C47] text-white hover:text-[#B08C47] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Free Estimate<ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4">Plumbing Services in {cityState}</h2>
          <div className="w-16 h-1 bg-[#B08C47] mb-8" />
          <p className="text-[#252525]/70 text-lg leading-relaxed mb-12">DeFoor Plumbing offers a full range of plumbing services for homeowners and businesses in {cityState}. No job is too big or too small:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-2 bg-[#B08C47] rounded-full mt-2 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-[#252525]">{service.title}</h3>
                </div>
                <p className="text-[#252525]/65 leading-relaxed text-sm pl-5">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4">Why {city} Trusts DeFoor Plumbing</h2>
          <div className="w-16 h-1 bg-[#B08C47] mb-8" />
          <p className="text-[#252525]/70 text-lg leading-relaxed mb-12">There are plenty of plumbers out there, but {cityState} residents keep calling DeFoor Plumbing because we do things the right way — every time.</p>
          <div className="space-y-6">
            {trustPoints.map((point) => (
              <div key={point.title} className="flex items-start gap-5">
                <div className="w-10 h-10 bg-[#B08C47]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-[#B08C47]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#252525] mb-1">{point.title}</h3>
                  <p className="text-[#252525]/65 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#B08C47]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Need a Plumber in {cityState}?</h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            Don't let a plumbing problem sit and get worse. Call DeFoor Plumbing at{' '}
            <a href="tel:7704809911" className="font-bold underline hover:no-underline">(770) 480-9911</a>{' '}
            or reach out online for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7704809911" className="inline-flex items-center justify-center gap-3 bg-white hover:bg-[#F1EADA] text-[#B08C47] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg">
              <Phone className="w-5 h-5" />Call (770) 480-9911
            </a>
            <Link to={createPageUrl('Contact')} className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#B08C47] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
              Get a Free Estimate<ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
