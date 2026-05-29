"use client";

import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import Link from 'next/link';
import { createPageUrl } from '@/utils';

const city = 'Dallas, GA';
const cityState = 'Dallas, GA';

const faqs = [
  {
    question: 'How fast can you get to my Dallas, GA home?',
    answer: 'Same-day service for most non-emergency calls placed before noon. After-hours emergencies typically arrive in 60–90 minutes.',
  },
  {
    question: 'Do you charge for estimates?',
    answer: 'No — free estimates on most jobs.',
  },
  {
    question: 'Are you licensed in Georgia and Paulding County?',
    answer: 'Yes. D4 Plumbing carries a Georgia Master Plumber license, is bonded and insured, and pulls permits through Paulding County when work requires them.',
  },
  {
    question: 'Do you serve Seven Hills, Riverwood, and the other newer subdivisions?',
    answer: 'Yes — those are some of our most common service areas in Dallas, GA. We know the housing stock and the common issues.',
  },
  {
    question: 'Can you handle plumbing for a remodel or basement finish?',
    answer: 'Yes. We do rough-ins, fixture installs, line tie-ins, and full coordination with general contractors.',
  },
  {
    question: 'Do you handle commercial accounts in Dallas, GA?',
    answer: 'Yes — restaurants, retail, medical, daycare, churches, office. Including emergency response, backflow testing, and grease trap coordination.',
  },
  {
    question: 'Can you replace a water heater the same day?',
    answer: 'Most standard 40 and 50-gallon tank replacements (gas or electric) are same-day. Tankless and oversized units may need a day to source.',
  },
  {
    question: 'Do you offer financing?',
    answer: 'Yes — on larger jobs like repipes, water heater replacements, and major repairs. Ask your tech for current options.',
  },
];

const schemaPlumber = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://d4plumbing.com/plumber-dallas-ga/#business",
  "name": "D4 Plumbing - Dallas, GA",
  "alternateName": "DeFoor Plumbing",
  "image": "https://d4plumbing.com/images/dallas-ga-plumber.jpg",
  "url": "https://d4plumbing.com/plumber-dallas-ga/",
  "telephone": "+17705620406",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "902 McBrayer Road",
    "addressLocality": "Temple",
    "addressRegion": "GA",
    "postalCode": "30179",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Dallas",
    "containedInPlace": {
      "@type": "State",
      "name": "Georgia"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.9237,
    "longitude": -84.8407
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "founder": "DeFoor Family",
  "foundingDate": "1979",
  "sameAs": [
    "https://www.d4plumbing.com/",
    "https://www.defoorplumbing.com/"
  ]
};

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function PlumberDallasGA() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 bg-[#F7F7F7]">


      {/* Hero Section */}
      <section className="bg-[#252525] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B08C47]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-[#B08C47] font-semibold text-sm tracking-widest uppercase mb-4 block">
                Serving {cityState}
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Local Plumber in
                <span className="block text-[#B08C47] mt-1">{city}</span>
              </h1>
              <p className="text-white/85 text-lg mb-4 font-semibold">
                Paulding County's family-owned plumbing company since 1979. Same-day appointments. Free estimates.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
                Paulding County is one of the fastest-growing counties in the United States, and Dallas, GA — the county seat — is right in the middle of that growth. New subdivisions go in every year. New restaurants and retail keep coming. But behind every new build is plumbing that someone has to repair, replace, and maintain. <strong>D4 Plumbing</strong> has been serving the Dallas, GA area for over 35 years. We're 11 miles south in Temple, and our trucks are in Paulding County most days of the week. Call <strong>(770) 562-0406</strong> for same-day service — a real person, often a member of the DeFoor family, answers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+17705620406"
                  className="inline-flex items-center justify-center gap-3 bg-[#B08C47] hover:bg-[#9a7a3d] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call (770) 562-0406
                </a>
                <Link
                  href={createPageUrl('Contact')}
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:border-[#B08C47] hover:text-[#B08C47] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  Get a Free Estimate
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white/10">
                <img
                  src="/plumbing_repair.png"
                  alt={`Dallas, GA Plumbing Services - D4 Plumbing`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#B08C47] rounded-2xl p-6 shadow-xl">
                <p className="text-white font-bold text-lg">Fast Response</p>
                <p className="text-white/80 text-sm">Serving Paulding County</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4">
              Plumbing Services in Dallas, GA
            </h2>
            <div className="w-24 h-1 bg-[#B08C47] mx-auto mb-6" />
            <p className="text-[#252525]/70 text-lg max-w-3xl mx-auto">
              Full-service residential and commercial plumbing for Dallas, GA and the rest of Paulding County.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Water Heater Installation, Repair & Tankless Conversion</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Most of Dallas, GA's housing stock is newer construction, which means most water heaters in the area were installed by the original builder — and many of them are hitting the 10-15 year replacement window right now. We service every major brand: Rheem, A.O. Smith, Bradford White, Rinnai, Navien. Most standard 40 or 50-gallon tank replacements are completed the same day. We also install tankless systems for larger homes and growing families.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">New Construction & Remodel Plumbing</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Dallas, GA is full of growing families adding bathrooms, finishing basements, redoing kitchens. We handle plumbing rough-ins, fixture installs, water line tie-ins, drain work for additions — and we coordinate with your general contractor or designer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Drain Cleaning & Sewer Service</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Dallas, GA's newer subdivisions mostly run modern PVC drains — which clog less often than old cast iron, but still clog. Roots, grease, kids' toys, "flushable" wipes that aren't actually flushable. We clear drains with mechanical cables and hydro jetting, camera-inspect when we need to see what's going on, and repair sewer lines when something has broken.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Slab Leak & Hidden Leak Detection</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                A slab leak in a Seven Hills or Riverwood home can ruin flooring and run up a Paulding County water bill fast. We use electronic and acoustic leak detection equipment so we find the leak without breaking concrete on a guess.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Toilet, Faucet, Disposal & Fixture Replacement</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                The everyday things: running toilets, dripping faucets, broken disposals, weak shower pressure, leaking shower valves, stuck shutoffs. Fair pricing, no upsells.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Sump Pumps & Crawlspace Plumbing</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                A lot of Paulding County homes have crawlspaces — and Georgia thunderstorms can flood them out fast if your sump pump fails. We test, repair, and replace primary and backup sump pumps.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Gas Line Service</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Installation, repair, and pressure testing for natural gas and propane. Ranges, dryers, water heaters, outdoor grills, fireplaces, generators. We pull permits when Paulding County requires them.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[#B08C47]/5 border-2 border-[#B08C47]/30 hover:shadow-lg hover:border-[#B08C47] transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                24/7 Emergency Plumber in Dallas, GA
              </h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Burst pipes, sewer backups, water heater ruptures — they don't wait for business hours. Call <a href="tel:+17705620406" className="text-[#B08C47] font-bold hover:underline">(770) 562-0406</a> any time. A real person picks up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4">
                Why Dallas, GA Trusts D4 Plumbing
              </h2>
              <div className="w-16 h-1 bg-[#B08C47] mb-8" />
              
              <div className="space-y-6">
                {[
                  { title: '35+ Years Local Experience', desc: 'The DeFoor family has been doing plumbing in West Metro Atlanta for over four decades. Founded in 1979.' },
                  { title: 'Georgia Master Plumber License', desc: 'Fully licensed, bonded, and insured team holding the highest state-level plumbing certifications.' },
                  { title: 'Free Estimates on Most Jobs', desc: 'We offer free diagnostics and upfront quotes before any repairs or installations start.' },
                  { title: 'Upfront, Fair Pricing', desc: 'No surprise charges. You know the exact number before we pick up a tool.' },
                  { title: 'One-year workmanship warranty', desc: 'We stand behind most of our jobs with a solid workmanship warranty.' },
                  { title: 'We pull permits', desc: 'Permits are required for water heaters, gas, and sewer in Paulding County — we handle the complete paperwork process.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#B08C47] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#252525]">{item.title}</h4>
                      <p className="text-[#252525]/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80"
                  alt={`Licensed Plumber Working in Dallas, GA`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Served Section */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4 text-center">
            Dallas, GA Areas & Subdivisions We Serve
          </h2>
          <div className="w-16 h-1 bg-[#B08C47] mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Seven Hills', desc: 'Large master-planned community with a clubhouse, pools, and a wide range of home sizes.' },
              { name: 'Riverwood', desc: 'Modern farmhouse and Craftsman-style new builds, amenity-rich community.' },
              { name: 'Creekside', desc: 'Established subdivisions with newer infill houses.' },
              { name: 'Hiram-Dallas corridor', desc: 'Residential areas around Highway 92 and Highway 278.' },
              { name: 'Historic Downtown Dallas, GA', desc: 'Older historic homes built around the Paulding County Courthouse.' },
              { name: 'Bobo Road & Hwy 61', desc: 'Residential acreage, estates, and newer Paulding County communities.' },
            ].map((n, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-[#252525]/5">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-[#B08C47]" />
                  <h4 className="font-bold text-[#252525]">{n.name}</h4>
                </div>
                <p className="text-[#252525]/65 text-sm">{n.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[#252525]/60 font-medium">
            All of 30132 and 30157 ZIP codes. We also routinely serve Hiram, Powder Springs, Acworth (Paulding side), and the rest of Paulding County.
          </p>
        </div>
      </section>

      {/* Plumbing Realities Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4 text-center">
            Dallas, GA Plumbing — What You Should Know
          </h2>
          <div className="w-16 h-1 bg-[#B08C47] mx-auto mb-12" />

          <div className="prose prose-slate max-w-none space-y-6 text-[#252525]/75 text-base leading-relaxed">
            <p>
              Dallas, GA's housing stock is unusual: it's one of the <strong>youngest</strong> in our service area. Most homes were built in the last 25 years, and a big chunk in the last 15. That changes which plumbing problems you're likely to see.
            </p>
            <p>
              <strong>Newer construction (post-2005, including Seven Hills, Riverwood, and most of the recent subdivisions)</strong> is mostly <strong>PEX supply with manifold systems</strong> and PVC drains. The good news: those systems are easy to service and rarely have catastrophic failures. The bad news: <strong>builder-grade fixtures</strong> — faucets, toilet flush valves, shower valves, water heaters — tend to wear out in the 7-12 year window. If your home is in that range and you haven't replaced anything yet, you'll start.
            </p>
            <p>
              <strong>Mid-2000s subdivisions</strong> had some <strong>CPVC supply lines</strong> in places — generally fine, but the plastic fittings can become brittle with age. We're starting to see CPVC fitting failures in 20-year-old homes.
            </p>
            <p>
              <strong>Older homes near downtown Dallas, GA and in the historic district</strong> may still have copper or even galvanized supply. These need the same care as the older homes in Carrollton and Douglasville — and we handle them.
            </p>
            <p>
              <strong>Paulding County's water</strong> is delivered through the Paulding County Water System. Pressure is generally good. A sudden drop almost always means a problem on your side of the meter — a failing pressure regulator, a closed valve, or a leak.
            </p>
          </div>
        </div>
      </section>

      {/* Same-Day Service Section */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#252525] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B08C47]/10 rounded-full blur-3xl" />
            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-4">Same-Day Service from Temple, GA</h2>
                <p className="text-white/70 leading-relaxed text-sm">
                  We're at <strong>902 McBrayer Road, Temple, GA 30179</strong> — about 11 miles south of downtown Dallas, GA. That's a 15-20 minute drive. Same-day arrival is standard for non-emergency calls placed before noon. After-hours emergencies typically see us on-site within 60–90 minutes.
                </p>
              </div>
              <div className="text-center md:text-right">
                <a
                  href="tel:+17705620406"
                  className="inline-flex items-center gap-2 bg-[#B08C47] hover:bg-[#9a7a3d] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call (770) 562-0406
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4 text-center">
            Dallas, GA Plumbing FAQs
          </h2>
          <div className="w-16 h-1 bg-[#B08C47] mx-auto mb-12" />

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#252525]/10 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 bg-[#F7F7F7]/50 hover:bg-[#F7F7F7] text-left font-bold text-[#252525] transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="text-[#B08C47]" /> : <ChevronDown className="text-[#252525]/40" />}
                  </button>
                  {isOpen && (
                    <div className="p-6 bg-white border-t border-[#252525]/5 text-[#252525]/70 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#B08C47]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Call the Paulding County Plumber Locals Trust
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            If you need a plumber in Dallas, GA, call <strong>D4 Plumbing</strong> at <strong>(770) 562-0406</strong>. We'll have a tech on the way today.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 mb-8 text-white max-w-md mx-auto text-sm space-y-1">
            <p className="font-bold text-base">D4 Plumbing</p>
            <p>902 McBrayer Road, Temple, GA 30179</p>
            <p>Family-owned since 1979. Serving Dallas, GA and all of Paulding County.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17705620406"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-[#F1EADA] text-[#B08C47] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call (770) 562-0406
            </a>
            <Link
              href={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#B08C47] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Get a Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sibling City Section */}
      <section className="py-16 bg-[#252525] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-6 text-[#B08C47]">We Also Serve</h3>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/plumber-villa-rica-ga" className="hover:text-[#B08C47] transition-colors border-b border-white/10 pb-1">
              Villa Rica plumber
            </Link>
            <Link href="/plumber-douglasville-ga" className="hover:text-[#B08C47] transition-colors border-b border-white/10 pb-1">
              Douglasville plumber
            </Link>
            <Link href="/plumber-carrollton-ga" className="hover:text-[#B08C47] transition-colors border-b border-white/10 pb-1">
              plumber in Carrollton
            </Link>
            <Link href="/plumber-bremen-ga" className="hover:text-[#B08C47] transition-colors border-b border-white/10 pb-1">
              Bremen plumber
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
