"use client";

import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import Link from 'next/link';
import { createPageUrl } from '@/utils';

const cityState = 'Carrollton, GA';

const faqs = [
  {
    question: 'How quickly can you get to my Carrollton home?',
    answer: 'Same-day for most non-emergency calls placed before noon. For after-hours emergencies, 60–90 minutes is typical.',
  },
  {
    question: 'Do you charge for estimates?',
    answer: 'No — free estimates on most jobs. We diagnose the problem and quote it before we begin work.',
  },
  {
    question: 'Are you licensed in Georgia?',
    answer: 'Yes — D4 Plumbing holds a Georgia Master Plumber license. Fully bonded and insured.',
  },
  {
    question: 'Do you work on historic homes in downtown Carrollton?',
    answer: 'Yes — these are some of our favorite jobs. We\'re careful with finishes and trim, and we have decades of experience working with galvanized, copper, and cast iron in older homes.',
  },
  {
    question: 'Can you handle UWG-area rental properties?',
    answer: 'Yes — we do plenty of work for Carrollton landlords. Quick turnarounds, fair pricing, invoices that work with property management software.',
  },
  {
    question: 'Do you pull permits for water heater replacements?',
    answer: 'Yes — Carroll County requires permits for water heater installations, and we handle that paperwork as part of the job.',
  },
  {
    question: 'Do you do gas line work?',
    answer: 'Yes — full gas line installation, repair, and pressure testing. We\'re licensed for natural gas and propane.',
  },
  {
    question: 'Do you offer financing?',
    answer: 'Yes, on larger jobs like repipes, water heater replacement, and major repairs. Ask your tech for current options.',
  },
  {
    question: 'What if my problem is in Bowdon, Whitesburg, or Mt. Zion?',
    answer: 'We serve those too — all part of our regular Carroll County route.',
  },
];

const schemaPlumber = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://d4plumbing.com/plumber-carrollton-ga/#business",
  "name": "D4 Plumbing - Carrollton",
  "alternateName": "DeFoor Plumbing",
  "image": "https://d4plumbing.com/images/carrollton-plumber.jpg",
  "url": "https://d4plumbing.com/plumber-carrollton-ga/",
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
    "name": "Carrollton",
    "containedInPlace": {
      "@type": "State",
      "name": "Georgia"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.5801,
    "longitude": -85.0766
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

export default function PlumberCarrolltonGA() {
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
                Carrollton, GA Plumber
                <span className="block text-[#B08C47] mt-1">You Can Reach</span>
              </h1>
              <p className="text-white/85 text-lg mb-4 font-semibold">
                Family-owned. Locally based in West Georgia. Serving Carrollton since 1979.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
                Carrollton is the heart of Carroll County and one of the most established towns in West Georgia. Between the historic homes around Adamson Square, the student rentals near the University of West Georgia, and the newer subdivisions out toward Hwy 27, there's a wide variety of plumbing under the city. <strong>D4 Plumbing</strong> has been the plumber Carrollton families and businesses trust for over 35 years. We're 16 miles up the road in Temple, and our trucks are in Carrollton most days. Call <strong>(770) 562-0406</strong> for same-day service or a free estimate — a member of the DeFoor family or one of our long-time techs picks up.
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
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?w=800&q=80"
                  alt={`Carrollton Plumbing Services - D4 Plumbing`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#B08C47] rounded-2xl p-6 shadow-xl">
                <p className="text-white font-bold text-lg">Local Professionals</p>
                <p className="text-white/80 text-sm">Serving since 1979</p>
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
              Full-Service Plumbing for Carrollton Homes & Businesses
            </h2>
            <div className="w-24 h-1 bg-[#B08C47] mx-auto mb-6" />
            <p className="text-[#252525]/70 text-lg max-w-3xl mx-auto">
              We're residential and commercial. We do quick fixes and we do major projects. We don't upsell, and we don't disappear after the job is done.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Water Heater Installation, Repair & Tankless Conversion</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Cold morning shower in a Maple Street historic home or no hot water at all in a newer build near Hwy 113? We service every major brand. Most standard tank replacements are same-day, including expansion tank installs and code-required updates. We also convert tanks to tankless systems for larger families and homes with multiple bathrooms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Drain Cleaning, Camera Inspection & Sewer Repair</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Carrollton's older neighborhoods have older drain lines — often a mix of cast iron inside the house and clay or Orangeburg pipe under the yard. Both clog more often than modern PVC, and both can collapse without warning. We clear, camera-inspect, locate, and repair sewer lines from the cleanout to the city tap.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Leak Detection & Repair</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Slab leaks, hidden wall leaks, persistent unexplained water bills from the Carrollton Water Authority — we use electronic leak detection so we find it without tearing your house apart. Hidden leaks are one of the most common reasons West Carrollton homeowners call us.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Toilet, Faucet, Disposal & Fixture Work</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Running toilets, dripping faucets, weak shower heads, broken disposals — all the day-to-day stuff. Fair pricing, no upsells.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Repipes for Older Carrollton Homes</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Homes in the historic areas around downtown often have galvanized steel supply lines that are 50+ years old and corroded shut from the inside. We repipe with PEX or copper, work clean, and patch behind us.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Gas Line Work</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                We install, repair, and pressure-test natural gas and propane lines for ranges, dryers, water heaters, fireplaces, generators, and outdoor grills/cooktops. (We pull a permit when one is required — make sure whoever does your gas work always does.)
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Commercial Plumbing in Carrollton</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Restaurants on Bankhead Highway and around the courthouse square, retail along Hwy 27, dental and medical offices, salons, churches, daycare facilities — we handle commercial accounts of every size. Including backflow testing/certification and grease trap coordination.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[#B08C47]/5 border-2 border-[#B08C47]/30 hover:shadow-lg hover:border-[#B08C47] transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                24/7 Emergency Plumber in Carrollton
              </h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Burst pipes don't keep business hours. Call <a href="tel:+17705620406" className="text-[#B08C47] font-bold hover:underline">(770) 562-0406</a> any time — we'll dispatch the closest tech.
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
                Why Carrollton Calls D4 Plumbing First
              </h2>
              <div className="w-16 h-1 bg-[#B08C47] mb-8" />
              
              <div className="space-y-6">
                {[
                  { title: 'Established 1979', desc: 'Founded as DeFoor Plumbing in Temple. Same family, same standards for over four decades.' },
                  { title: 'Georgia Master Plumber License', desc: 'Fully licensed, bonded, and insured. We perform all work to strictly meet code requirements.' },
                  { title: 'Free estimates on most calls', desc: 'Including water heater replacements, repipes, and major repairs.' },
                  { title: 'Upfront pricing', desc: 'You know the exact number before we start. No hidden diagnostics or surprise fees.' },
                  { title: 'One-year workmanship warranty', desc: 'We stand behind most of our jobs with a solid guarantee.' },
                  { title: 'We pull permits', desc: 'Required for water heaters, gas, and sewer in Carroll County — we handle the paperwork for you.' }
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
                  alt={`Plumber working in Carrollton, GA`}
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
            Carrollton Areas & Neighborhoods We Serve
          </h2>
          <div className="w-16 h-1 bg-[#B08C47] mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Historic Downtown / Adamson Square', desc: 'Early 1900s homes that require a careful, highly experienced plumber.' },
              { name: 'Maple Street Historic District', desc: 'Beautiful older homes with character (and older plumbing infrastructure).' },
              { name: 'University of West Georgia area', desc: 'Student rentals and faculty homes spanning various plumbing eras.' },
              { name: 'Bonner Park / The Greenbelt area', desc: 'Established residential areas with standard copper and PVC piping.' },
              { name: 'Lake Carroll subdivisions', desc: 'Premium lake-facing homes with modern, multi-bathroom setups.' },
              { name: 'Arterial Corridors', desc: 'Hwy 113 toward Bowdon and Hwy 27 toward Roopville and the airport.' },
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
            We also serve Whitesburg, Bowdon, Roopville, Mt. Zion, and all of 30116 and 30117 ZIP codes.
          </p>
        </div>
      </section>

      {/* Plumbing Realities Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4 text-center">
            Carrollton Plumbing — What's Common Here
          </h2>
          <div className="w-16 h-1 bg-[#B08C47] mx-auto mb-12" />

          <div className="prose prose-slate max-w-none space-y-6 text-[#252525]/75 text-base leading-relaxed">
            <p>
              Carrollton's housing stock is wider in age than most West Metro Atlanta towns. The plumbing issues we see correlate closely with which decade a home was built.
            </p>
            <p>
              <strong>Pre-1960s homes near downtown and Maple Street:</strong> Often original galvanized supply, cast iron drains, and even occasional remnants of lead-jointed pipe. These homes are charming but need plumbing modernization sooner rather than later. We do a lot of selective repiping — keeping the home's character intact while replacing the failing infrastructure.
            </p>
            <p>
              <strong>1970s-80s ranches and split-levels:</strong> Mostly copper supply with cast iron stacks. Copper is durable, but the <strong>shutoff valves</strong>, <strong>angle stops under sinks and toilets</strong>, and <strong>pressure regulators</strong> from that era are at the end of their life. These small parts cause most of our service calls in this housing stock.
            </p>
            <p>
              <strong>1990s-2000s subdivisions:</strong> Copper or CPVC supply, PVC drains. Reliable, but <strong>water heaters and builder-grade fixtures</strong> have aged out. We're replacing a lot of them.
            </p>
            <p>
              <strong>Newer construction (post-2005):</strong> PEX with manifold systems. Easy and fast to work on when something does go wrong.
            </p>
            <p>
              <strong>Carrollton's water</strong> is sourced through the City of Carrollton Water Utility and the Carroll County Water Authority. Generally consistent pressure. If yours has dropped suddenly, the problem is almost always on your side of the meter.
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
                <h2 className="text-3xl font-bold mb-4">Carrollton Service from Temple, GA</h2>
                <p className="text-white/70 leading-relaxed text-sm">
                  We're at <strong>902 McBrayer Road, Temple, GA 30179</strong>. We're 16 miles from downtown Carrollton — a 20-minute drive up Hwy 27. Same-day arrival is standard for non-emergency calls placed before noon. Emergencies typically get us on-site in 60–90 minutes.
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
            Carrollton Plumbing FAQs
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
            Call Carrollton's Local Plumber
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            If you need a plumber in Carrollton, GA, you've found the right one. Call <strong>(770) 562-0406</strong> for same-day service or use the form below for a free estimate.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 mb-8 text-white max-w-md mx-auto text-sm space-y-1">
            <p className="font-bold text-base">D4 Plumbing</p>
            <p>902 McBrayer Road, Temple, GA 30179</p>
            <p>Family-owned. Serving Carrollton since 1979.</p>
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
