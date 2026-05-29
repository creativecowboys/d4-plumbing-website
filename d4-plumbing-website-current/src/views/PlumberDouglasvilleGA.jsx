"use client";

import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import Link from 'next/link';
import { createPageUrl } from '@/utils';

const cityState = 'Douglasville, GA';

const faqs = [
  {
    question: 'How fast can a plumber get to my Douglasville home?',
    answer: 'Most non-emergency calls placed before noon get same-day service. After-hours emergencies typically see us on-site within 60–90 minutes.',
  },
  {
    question: 'Do you charge for estimates?',
    answer: 'No. Free, no-pressure estimates on most jobs. We tell you what\'s wrong and what it\'ll cost before any work starts.',
  },
  {
    question: 'Are you licensed in Georgia and Douglas County?',
    answer: 'Yes. D4 Plumbing holds a Georgia Master Plumber license and is bonded and insured. We pull permits through Douglas County when work requires them.',
  },
  {
    question: 'Can you replace a water heater the same day?',
    answer: 'Most standard tank replacements (40 or 50-gallon, gas or electric) can be completed the same day. Tankless and oversized units may need a day to source.',
  },
  {
    question: 'Do you handle Douglasville\'s older galvanized pipe homes?',
    answer: 'Yes — repipes are one of our specialties. We can spot-repair when it makes sense or do a full PEX or copper repipe with minimal wall damage.',
  },
  {
    question: 'Do you do hydro jetting for sewer lines?',
    answer: 'Yes — for both residential mains and commercial laterals. Especially useful in older Douglasville neighborhoods with mature trees and recurring root intrusion.',
  },
  {
    question: 'Do you service commercial properties in Douglasville?',
    answer: 'Yes. Restaurants, retail, medical, daycare, office, and industrial. Including emergency commercial response, backflow testing, and grease trap service coordination.',
  },
  {
    question: 'What payment do you accept?',
    answer: 'Cash, check, all major credit cards. Financing is available on larger jobs like water heaters, repipes, and major repairs.',
  },
];

const schemaPlumber = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://d4plumbing.com/plumber-douglasville-ga/#business",
  "name": "D4 Plumbing - Douglasville",
  "alternateName": "DeFoor Plumbing",
  "image": "https://d4plumbing.com/images/douglasville-plumber.jpg",
  "url": "https://d4plumbing.com/plumber-douglasville-ga/",
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
    "name": "Douglasville",
    "containedInPlace": {
      "@type": "State",
      "name": "Georgia"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.7515,
    "longitude": -84.7477
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

export default function PlumberDouglasvilleGA() {
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
                Douglasville's Trusted
                <span className="block text-[#B08C47] mt-1">Local Plumber</span>
              </h1>
              <p className="text-white/85 text-lg mb-4 font-semibold">
                Family-owned plumbing service for Douglas County since 1979. Same-day appointments. Free estimates.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
                Douglasville is the biggest city in our service area — and it's also the most diverse when it comes to plumbing. We're working on 1970s split-levels in Chapel Hill one morning and helping a homeowner in a newer Mt. Carmel build the next afternoon. <strong>D4 Plumbing</strong> has been the local choice for Douglasville families and businesses for over 35 years. We're based in Temple, GA, and most of our work day is spent inside the Douglasville city limits or just outside in unincorporated Douglas County. Call <strong>(770) 562-0406</strong> and a real person — usually a member of the DeFoor family or one of our long-time techs — will answer.
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
                  src="https://images.unsplash.com/photo-1628304433227-e4032bbd05ff?w=800&q=80"
                  alt={`Douglasville Plumbing Services - D4 Plumbing`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#B08C47] rounded-2xl p-6 shadow-xl">
                <p className="text-white font-bold text-lg">Same-Day Response</p>
                <p className="text-white/80 text-sm">Call before noon</p>
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
              Plumbing Services in Douglasville, GA
            </h2>
            <div className="w-24 h-1 bg-[#B08C47] mx-auto mb-6" />
            <p className="text-[#252525]/70 text-lg max-w-3xl mx-auto">
              We're a full-service residential and commercial plumber. Anything water-related in a Douglasville home or business, we handle it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Water Heater Repair, Replacement & Tankless Installation</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Lukewarm showers in a Mt. Carmel two-story or no hot water at all in a Chapel Hill ranch — water heater problems are one of our most common calls in Douglasville. We service and replace every major brand: Rheem, A.O. Smith, Bradford White, Rinnai, Navien. Most standard 40 or 50-gallon replacements are done the same day, including code-required updates like expansion tanks and seismic strapping. We also install whole-home tankless systems for families who've outgrown a single tank.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Drain Cleaning, Hydro Jetting & Sewer Service</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                A lot of Douglasville's older neighborhoods sit on long lateral sewer lines that run under big oak trees. Roots find those lines. We cable-clear, hydro-jet, and camera-inspect main lines daily — and we can quote a spot repair, pipe burst, or full sewer replacement on the same visit when needed. We pull a permit with Douglas County when one is required.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Slab Leak & Hidden Leak Detection</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Douglas County water rates aren't getting cheaper, and a slab leak under a Chapel Hill home can cost hundreds a month before you ever see a stain on the floor. We use acoustic and thermal leak detection so we don't have to break concrete on a guess.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Whole-House Repipes</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Many of the homes built in Douglasville between the late 1960s and early 1980s have galvanized steel water lines. Rust closes them off from the inside until your shower trickles. We repipe with PEX or copper and patch walls clean. Most repipes finish in 2-3 days.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Toilets, Faucets, Fixtures & Garbage Disposals</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                The everyday stuff: running toilets, leaking faucets, broken disposals, weak shower pressure, stuck shut-off valves. Quick visits, fair pricing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Sump Pumps & Crawlspace Plumbing</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Douglas County's clay-heavy soil holds water. A failed sump pump in a crawlspace or basement during a Georgia thunderstorm can flood out a finished room overnight. We test, repair, and replace primary and backup sump pumps.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Commercial Plumbing in Douglasville</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Restaurants along Highway 5 and Chapel Hill Road, retail at and around Arbor Place, medical offices, office parks, daycare facilities, churches — we service them all. Grease trap pumping coordination, backflow preventer testing and certification, and emergency commercial response.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[#B08C47]/5 border-2 border-[#B08C47]/30 hover:shadow-lg hover:border-[#B08C47] transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                24/7 Emergency Plumber Douglasville
              </h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                After hours, weekends, holidays — call <a href="tel:+17705620406" className="text-[#B08C47] font-bold hover:underline">(770) 562-0406</a>. Burst pipes, sewer backups, and water heater failures don't wait for business hours.
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
                Why Douglasville Homeowners Call D4 Plumbing
              </h2>
              <div className="w-16 h-1 bg-[#B08C47] mb-8" />
              
              <div className="space-y-6">
                {[
                  { title: 'Local since 1979', desc: 'The DeFoor family has been doing plumbing in West Metro Atlanta for over four decades. Douglasville has been part of our regular service area for nearly all of it.' },
                  { title: 'Licensed Georgia master plumbers', desc: 'Fully licensed, bonded, and insured team that holds the highest master credentials in the state.' },
                  { title: 'Free estimates on most jobs', desc: 'Including whole-house repipes and water heater replacements.' },
                  { title: 'Upfront, honest pricing', desc: 'You get the exact dollar amount before we pick up a tool. No surprises or diagnostic bait-and-switch.' },
                  { title: 'One-year workmanship warranty', desc: 'We stand behind most repairs and installations with a comprehensive warranty.' },
                  { title: 'We pull permits', desc: 'Required for water heaters, gas, and sewer in Douglas County — we handle the paperwork to ensure full code compliance.' }
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
                  alt={`Sewer and Drain cleaning - D4 Plumbing`}
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
            Douglasville Neighborhoods & Areas We Serve
          </h2>
          <div className="w-16 h-1 bg-[#B08C47] mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Chapel Hill', desc: 'Ranches and split-levels from the 1970s and 80s plus newer infill homes.' },
              { name: 'Mt. Carmel', desc: 'Mix of established homes and newer subdivisions.' },
              { name: 'Arbor Place / Stewart Mill area', desc: 'Retail shops, restaurants, and surrounding residential subdivisions.' },
              { name: 'Historic Downtown Douglasville', desc: 'Older historic homes that need an experienced, careful plumber.' },
              { name: 'The Tributary', desc: 'Newer master-planned community off Riverside Parkway.' },
              { name: 'Lithia Springs & Bill Arp', desc: 'Surrounding Douglas County communities regularly on our daily service routes.' },
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
            Anywhere in the 30134 or 30135 ZIP code — we cover the entire city.
          </p>
        </div>
      </section>

      {/* Plumbing Realities Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4 text-center">
            What Douglasville Homeowners Should Know About Their Plumbing
          </h2>
          <div className="w-16 h-1 bg-[#B08C47] mx-auto mb-12" />

          <div className="prose prose-slate max-w-none space-y-6 text-[#252525]/75 text-base leading-relaxed">
            <p>
              Douglasville's housing stock spans nearly six decades, and the plumbing under those houses tells the story.
            </p>
            <p>
              <strong>Homes built before 1985</strong> were largely plumbed with <strong>galvanized steel supply</strong> and <strong>cast iron drains</strong>. Both have finite lifespans, and most are at or past the end of them. The most common symptoms we see in Chapel Hill, downtown, and the older sections of Mt. Carmel: low water pressure, brown or rust-tinged water at first morning use, recurring drain backups even after a "good cleaning." If your home matches that timeframe, get an inspection before a failure.
            </p>
            <p>
              <strong>1990s-era subdivisions</strong> typically used <strong>copper supply lines</strong> and <strong>double-layered PVC drains</strong> — both generally reliable. But the <strong>brass fittings</strong>, <strong>shut-off valves</strong>, and <strong>pressure regulators</strong> from that era are now 25-35 years old. Failures of those small parts are some of our most common Douglasville calls.
            </p>
            <p>
              <strong>Newer construction</strong> (post-2005, including The Tributary and similar developments) is mostly <strong>PEX with manifold systems</strong>. Easy to work on, but the original builder-grade fixtures — faucets, toilet flush valves, water heaters — tend to need replacement in the 7-12 year window.
            </p>
            <p>
              <strong>Douglasville-Douglas County Water and Sewer Authority</strong> generally delivers consistent pressure. If yours has dropped suddenly, it's almost always something on your side of the meter: a failing pressure regulator, a partially closed valve, or a leak.
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
                <h2 className="text-3xl font-bold mb-4">Fast Service from Just Down I-20</h2>
                <p className="text-white/70 leading-relaxed text-sm">
                  We're at <strong>902 McBrayer Road in Temple, GA 30179</strong> — about 13 miles west on I-20. Most days our trucks are already on the eastern end of our service area when a Douglasville call comes in, so same-day arrival is the norm, not the exception.
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
            Douglasville Plumbing FAQs
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
            Call Douglasville's Local Plumber
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            Whether it's a slow drain in Chapel Hill, a water heater failure in Mt. Carmel, or a sewer backup at a Highway 5 restaurant — call <strong>D4 Plumbing</strong> at <strong>(770) 562-0406</strong>. We'll have a tech on the way today.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 mb-8 text-white max-w-md mx-auto text-sm space-y-1">
            <p className="font-bold text-base">D4 Plumbing</p>
            <p>902 McBrayer Road, Temple, GA 30179</p>
            <p>Family-owned. Serving Douglasville since 1979.</p>
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
            <Link href="/plumber-carrollton-ga" className="hover:text-[#B08C47] transition-colors border-b border-white/10 pb-1">
              plumber in Carrollton
            </Link>
            <Link href="/plumber-dallas-ga" className="hover:text-[#B08C47] transition-colors border-b border-white/10 pb-1">
              Dallas, GA plumber
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
