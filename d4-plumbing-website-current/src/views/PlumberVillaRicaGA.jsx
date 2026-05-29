"use client";

import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import Link from 'next/link';
import { createPageUrl } from '@/utils';

const city = 'Villa Rica';
const cityState = 'Villa Rica, GA';

const faqs = [
  {
    question: 'How fast can you get to my Villa Rica home?',
    answer: 'Most non-emergency calls in Villa Rica get same-day service if you call before noon. For after-hours emergencies (burst pipes, sewer backups, no water at all), we typically arrive within 60–90 minutes.',
  },
  {
    question: 'Do you charge a service call fee?',
    answer: 'No. We provide free estimates for most jobs. You\'ll know the price before we begin any work.',
  },
  {
    question: 'Are you a licensed plumber in Georgia?',
    answer: 'Yes — D4 Plumbing is fully licensed, bonded, and insured in the State of Georgia. We carry a Master Plumber license and all required local credentials.',
  },
  {
    question: 'Do you service Mirror Lake, Fairfield Plantation, and the Highway 61 area?',
    answer: 'Yes — those are some of our most common service areas in Villa Rica. We know the housing stock and the common issues in each.',
  },
  {
    question: 'Can you replace my water heater the same day?',
    answer: 'In most cases, yes. We stock the most common sizes (40 and 50-gallon standard tanks) on the truck. Tankless and specialty units may take a day to source.',
  },
  {
    question: 'Do you offer financing for larger jobs?',
    answer: 'Yes — for repipes, water heater replacements, and major repairs. Ask your technician for current options.',
  },
  {
    question: 'What\'s your service area outside Villa Rica?',
    answer: 'We serve Temple, Villa Rica, Carrollton, Douglasville, Dallas, Bremen, Hiram, and the rest of West Metro Atlanta within roughly 30 miles of Temple.',
  },
  {
    question: 'Do you do new construction or just repair?',
    answer: 'Both — plus remodels. Whole-house repipes, kitchen and bath rough-ins, fixture installs for renovations, and tie-ins for additions.',
  },
];

const schemaPlumber = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://d4plumbing.com/plumber-villa-rica-ga/#business",
  "name": "D4 Plumbing - Villa Rica",
  "alternateName": "DeFoor Plumbing",
  "image": "https://d4plumbing.com/images/villa-rica-plumber.jpg",
  "url": "https://d4plumbing.com/plumber-villa-rica-ga/",
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
    "name": "Villa Rica",
    "containedInPlace": {
      "@type": "State",
      "name": "Georgia"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.7321,
    "longitude": -84.9177
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

export default function PlumberVillaRicaGA() {
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
                Trusted Plumber in
                <span className="block text-[#B08C47] mt-1">{city}, GA</span>
              </h1>
              <p className="text-white/85 text-lg mb-4 font-semibold">
                Family-owned. Locally operated. Serving Villa Rica homes and businesses since 1979.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
                When something goes wrong with the plumbing at your Villa Rica home, you don't want to call a stranger from across the metro. You want a local plumber who actually knows the neighborhood — who's worked on homes from the older streets near Main Street to the newer builds out by Mirror Lake and Fairfield Plantation. <strong>D4 Plumbing</strong> has been the West Metro Atlanta plumber Villa Rica families call for more than 35 years. We're seven miles down Highway 78, and we can usually be at your front door the same day you call.
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
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                  alt={`Villa Rica Plumbing Services - D4 Plumbing`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#B08C47] rounded-2xl p-6 shadow-xl">
                <p className="text-white font-bold text-lg">Same-Day Service</p>
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
              Plumbing Services We Provide in Villa Rica
            </h2>
            <div className="w-24 h-1 bg-[#B08C47] mx-auto mb-6" />
            <p className="text-[#252525]/70 text-lg max-w-3xl mx-auto">
              We're a full-service plumbing company — residential and commercial. If it carries water, drains water, or heats water in your Villa Rica home, we can fix it, replace it, or install it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Water Heater Repair & Installation in Villa Rica</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Cold showers in a Mirror Lake home or a downtown bungalow off W. Wilson Street? We service every major brand of tank and tankless water heater. Most replacements can be done the same day, including the haul-off of your old unit. We install standard 40 and 50-gallon tanks, high-efficiency models, and full tankless systems for whole-home hot water.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Drain Cleaning & Sewer Line Service</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Slow drains, gurgling toilets, water backing up in the tub — those are signs your main line needs attention. We use professional drain machines and hydro jetting to clear roots, grease, and years of buildup. We also locate and repair sewer line breaks, which is a recurring issue in older Villa Rica neighborhoods where cast iron and clay pipe are still in the ground.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Leak Detection & Repair</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                A slab leak or a hidden pinhole leak in a wall can run up a water bill from the Villa Rica utility department fast — and cause framing and drywall damage even faster. We use electronic leak detection equipment so we don't have to tear up your floors guessing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Toilet Repair & Replacement</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Running toilets, weak flushes, leaks at the base, full replacements with comfort-height models — we handle them all.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Faucet, Fixture & Garbage Disposal Repair</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Dripping kitchen faucet keeping you up at night? Disposal seized? Shower valve stuck on hot? These are everyday calls for our Villa Rica technicians.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Whole-House Repipes</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                If your home was built before the mid-1980s, it may have galvanized steel supply lines that are corroding from the inside out. We repipe with PEX or copper and minimize wall damage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Commercial Plumbing</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                We service restaurants, retail, medical offices, and warehouses across Villa Rica — including grease trap maintenance, backflow testing, and emergency commercial response.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[#B08C47]/5 border-2 border-[#B08C47]/30 hover:shadow-lg hover:border-[#B08C47] transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                24/7 Emergency Plumber in Villa Rica
              </h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Burst pipe at midnight. Water heater rupture on a Sunday. Sewer backup during a holiday dinner. Call <a href="tel:+17705620406" className="text-[#B08C47] font-bold hover:underline">(770) 562-0406</a> — a real person answers.
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
                Why Villa Rica Homeowners Choose D4 Plumbing
              </h2>
              <div className="w-16 h-1 bg-[#B08C47] mb-8" />
              
              <div className="space-y-6">
                {[
                  { title: '35+ years serving West Georgia', desc: 'Founded as DeFoor Plumbing in 1979, now operating as D4 Plumbing — same family, same standards.' },
                  { title: 'Licensed, insured, and bonded', desc: 'Georgia master plumbers holding all necessary state and local credentials.' },
                  { title: 'Free, no-pressure estimates', desc: 'We tell you what\'s wrong and what it\'ll cost before any work starts.' },
                  { title: 'Local. Actually local.', desc: 'We\'re based in Temple, less than 10 minutes from downtown Villa Rica. We\'re not a national franchise dispatching from Atlanta.' },
                  { title: 'Upfront pricing', desc: 'No surprise charges. No "diagnostic fee then bait-and-switch".' },
                  { title: 'One-year workmanship warranty', desc: 'We stand behind most of our repairs and installations for a full year.' }
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
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                  alt={`Licensed Plumber Working in Villa Rica`}
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
            Villa Rica Neighborhoods We Serve
          </h2>
          <div className="w-16 h-1 bg-[#B08C47] mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Mirror Lake', desc: 'One of the largest master-planned communities in West Georgia, with a mix of homes from the late 1990s through recent builds.' },
              { name: 'Fairfield Plantation', desc: 'Older established lake community with a wide range of plumbing systems.' },
              { name: 'Downtown Villa Rica', desc: 'Historic homes on Main Street, Wilson Street, and the side streets around the railroad.' },
              { name: 'Hidden Falls / The Georgian / The Reserve', desc: 'Newer single-family subdivisions with modern fixtures.' },
              { name: 'Highway 61 & Highway 101 corridors', desc: 'Commercial and residential properties lining these main arterial corridors.' },
              { name: 'Villa Rica Highway / Liberty Road', desc: 'Farms, estates, and newer residential properties.' },
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
            Anywhere with a 30180 ZIP code — we cover all of Villa Rica, both the Carroll County and Douglas County sides of town.
          </p>
        </div>
      </section>

      {/* Plumbing Realities Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4 text-center">
            Plumbing Realities Specific to Villa Rica
          </h2>
          <div className="w-16 h-1 bg-[#B08C47] mx-auto mb-12" />

          <div className="prose prose-slate max-w-none space-y-6 text-[#252525]/75 text-base leading-relaxed">
            <p>
              Villa Rica is a "WaterFirst Community" in Georgia, which means the city takes water infrastructure seriously — but it also means there are a few things every Villa Rica homeowner should know.
            </p>
            <p>
              <strong>Older homes near downtown</strong> (built pre-1985) often still have galvanized steel supply lines or cast iron drains. Both are corrosion-prone and tend to fail in the same decade-long window. If you've started seeing rusty water at first morning use, that's almost always your supply lines telling you it's time.
            </p>
            <p>
              <strong>Mirror Lake homes from the late 90s and early 2000s</strong> were largely built with copper supply and PVC drain — generally durable, but the fittings and shutoff valves from that era are starting to age out. We're replacing a lot of angle stops and washing machine valves in Mirror Lake right now.
            </p>
            <p>
              <strong>Newer construction</strong> in The Georgian, The Reserve, and Hidden Falls is mostly PEX with modern fixtures — usually a quick fix when something goes wrong, but builder-grade fixtures often need replacement within 5-10 years.
            </p>
            <p>
              <strong>Water pressure in Villa Rica</strong> is generally healthy thanks to the Carroll County Water Authority and the City of Villa Rica utility department. If yours is suddenly low, that's a sign of a problem on your side of the meter, not theirs — and worth a call.
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
                  Our shop is at <strong>902 McBrayer Road, Temple, GA 30179</strong>. Villa Rica is a straight 9-minute drive east on Highway 78. That's why we can promise same-day arrival on most calls placed before noon — and why our trucks are usually already in Villa Rica when you call.
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
            Frequently Asked Questions — Plumbing in Villa Rica, GA
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
            Call Villa Rica's Local Plumber
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            If you've got a leak, a clog, a cold shower, or anything else water-related at your Villa Rica home or business, call <strong>(770) 562-0406</strong> or use the form below for a free estimate. A DeFoor family member or one of our long-time techs will be on the line — not a call center.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 mb-8 text-white max-w-md mx-auto text-sm space-y-1">
            <p className="font-bold text-base">D4 Plumbing</p>
            <p>902 McBrayer Road, Temple, GA 30179</p>
            <p>Serving Villa Rica and all of West Metro Atlanta since 1979.</p>
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
            <Link href="/plumber-carrollton-ga" className="hover:text-[#B08C47] transition-colors border-b border-white/10 pb-1">
              plumber in Carrollton
            </Link>
            <Link href="/plumber-douglasville-ga" className="hover:text-[#B08C47] transition-colors border-b border-white/10 pb-1">
              Douglasville plumber
            </Link>
            <Link href="/plumber-dallas-ga" className="hover:text-[#B08C47] transition-colors border-b border-white/10 pb-1">
              plumber in Dallas, GA
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
