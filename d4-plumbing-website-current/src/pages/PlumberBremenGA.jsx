import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SEOHead from '@/components/SEOHead';

const cityState = 'Bremen, GA';

const faqs = [
  {
    question: 'How fast can a plumber get to my Bremen home?',
    answer: 'Bremen is one of our closest service areas — 8 miles from our shop. Most non-emergency calls placed before noon get same-day service. After-hours emergencies typically arrive in 45–75 minutes.',
  },
  {
    question: 'Do you charge for estimates?',
    answer: 'No. Free estimates on most jobs.',
  },
  {
    question: 'Are you licensed in Georgia?',
    answer: 'Yes — Georgia Master Plumber license, fully bonded and insured. We pull permits with both Carroll County and Haralson County when work requires them.',
  },
  {
    question: 'Do you work on older homes in downtown Bremen?',
    answer: 'Yes — those are a big part of our work. Galvanized supply, cast iron drains, lead joints from earlier eras — we\'ve handled it all and we\'re careful with finishes and trim.',
  },
  {
    question: 'Can you handle a full repipe?',
    answer: 'Yes. Most repipes finish in 2-3 days with minimal wall damage. We patch behind us.',
  },
  {
    question: 'Do you service Tallapoosa, Buchanan, and the rest of Haralson County?',
    answer: 'Yes — Bremen, Tallapoosa, Buchanan, Waco — all part of our regular Haralson County route.',
  },
  {
    question: 'Can you replace my water heater the same day?',
    answer: 'Most standard 40 and 50-gallon tanks (gas or electric) are same-day. Tankless and oversized units may need a day to source.',
  },
  {
    question: 'Do you do gas line work?',
    answer: 'Yes — installation, repair, and pressure testing for natural gas and propane. We pull permits when required.',
  },
  {
    question: 'Do you offer financing on larger jobs?',
    answer: 'Yes — for repipes, water heater replacements, and major repairs. Ask your tech for current options.',
  },
];

const schemaPlumber = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://d4plumbing.com/plumber-bremen-ga/#business",
  "name": "D4 Plumbing - Bremen",
  "alternateName": "DeFoor Plumbing",
  "image": "https://d4plumbing.com/images/bremen-plumber.jpg",
  "url": "https://d4plumbing.com/plumber-bremen-ga/",
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
    "name": "Bremen",
    "containedInPlace": {
      "@type": "State",
      "name": "Georgia"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.7212,
    "longitude": -85.1452
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

export default function PlumberBremenGA() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 bg-[#F7F7F7]">
      <SEOHead
        title="Bremen GA Plumber | D4 Plumbing | Free Estimates | (770) 562-0406"
        description="Local Bremen, GA plumber since 1979. Haralson County water heaters, drain cleaning, leak repair & 24/7 emergency plumbing. Free estimates. Call (770) 562-0406."
        keywords="plumber Bremen GA, Bremen plumber, plumbing Bremen GA, Haralson County plumber, emergency plumber Bremen, water heater Bremen GA"
        canonical="https://d4plumbing.com/plumber-bremen-ga/"
        ogTitle="Bremen GA Plumber | D4 Plumbing | 35+ Years Local"
        ogDescription="Trusted Bremen, GA plumber. Family-owned since 1979. Same-day service for Bremen, Tallapoosa, Buchanan, and Haralson County."
        ogUrl="https://d4plumbing.com/plumber-bremen-ga/"
        ogType="website"
        ogImage="https://d4plumbing.com/images/bremen-plumber.jpg"
        schemas={[schemaPlumber, schemaFaq]}
      />

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
                Bremen, GA's
                <span className="block text-[#B08C47] mt-1">Local Plumber</span>
              </h1>
              <p className="text-white/85 text-lg mb-4 font-semibold">
                Family-owned. Eight miles up the road in Temple. Serving Bremen since 1979.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
                Bremen is a tight-knit town on the Carroll/Haralson County line, and when something goes wrong with your plumbing, the last thing you want is to wait a day and a half for a plumber to drive in from Atlanta. <strong>D4 Plumbing</strong> is just <strong>eight miles east on I-20</strong> in Temple, GA, and we've been Bremen's local plumber for over 35 years. We know the old downtown homes around the Sewell Mill area. We know the newer subdivisions out toward Mt. Zion and the I-20 corridor. Call <strong>(770) 562-0406</strong> and a real person — usually a DeFoor family member or one of our long-time techs — picks up.
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
                  to={createPageUrl('Contact')}
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
                  alt={`Bremen, GA Plumbing Services - D4 Plumbing`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#B08C47] rounded-2xl p-6 shadow-xl">
                <p className="text-white font-bold text-lg">8 Miles Away</p>
                <p className="text-white/80 text-sm">Temple Headquarters</p>
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
              Plumbing Services in Bremen, GA
            </h2>
            <div className="w-24 h-1 bg-[#B08C47] mx-auto mb-6" />
            <p className="text-[#252525]/70 text-lg max-w-3xl mx-auto">
              We're a full-service residential and commercial plumber for Bremen and the rest of Haralson County.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Water Heater Repair & Installation</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Cold showers in a downtown Bremen home or no hot water in a newer build along Highway 27? We service every major brand of water heater. Most standard 40 or 50-gallon replacements are completed the same day, including any code-required updates. We also install tankless systems for families who want endless hot water.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Drain Cleaning & Sewer Service</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Many of Bremen's older homes still have cast iron drain stacks inside and clay or Orangeburg pipe under the yard — both of which clog and break more often than modern PVC. We cable-clear, hydro jet, camera inspect, and repair sewer lines when something has failed. We also coordinate with the City of Bremen for utility-side issues so you're not bouncing between providers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Leak Detection & Repair</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Hidden leaks behind walls or under slabs can damage flooring and drive up a Bremen water bill quietly for months. We use electronic leak detection so we find the source without tearing your home apart.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Toilet, Faucet, Disposal & Fixture Work</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Everyday plumbing: running toilets, leaking faucets, weak shower pressure, broken garbage disposals, stuck shutoffs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Whole-House Repipes for Older Bremen Homes</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Older Bremen homes — especially those built before the mid-1980s in the original downtown grid — often still have <strong>galvanized steel supply lines</strong> that are corroded shut from the inside. Symptoms: rust-colored water in the morning, pressure that's progressively gotten worse over the years, leaks that keep popping up. We repipe with PEX or copper, patch behind us, and finish most homes in 2-3 days.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Gas Line Service</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Natural gas and propane line installation, repair, and pressure testing. Ranges, dryers, water heaters, fireplaces, outdoor grills, generators. We pull permits when required.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#252525]/5 hover:border-[#B08C47]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3">Commercial Plumbing in Bremen</h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Restaurants on Highway 27 and around the downtown square, retail, the medical and dental offices along Tallapoosa Street, daycare, churches, and industrial accounts. Including backflow testing and grease trap coordination.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[#B08C47]/5 border-2 border-[#B08C47]/30 hover:shadow-lg hover:border-[#B08C47] transition-all duration-300">
              <h3 className="text-xl font-bold text-[#252525] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                24/7 Emergency Plumber Bremen
              </h3>
              <p className="text-[#252525]/75 leading-relaxed text-sm">
                Burst pipes, sewer backups, no water at all — call <a href="tel:+17705620406" className="text-[#B08C47] font-bold hover:underline">(770) 562-0406</a> any hour.
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
                Why Bremen Calls D4 Plumbing
              </h2>
              <div className="w-16 h-1 bg-[#B08C47] mb-8" />
              
              <div className="space-y-6">
                {[
                  { title: 'Local since 1979', desc: 'The DeFoor family has been doing plumbing in West Georgia for over four decades. Same standards, same family.' },
                  { title: 'Eight miles down the road', desc: 'We\'re closer than most Atlanta-based plumbers — and we don\'t tack on a "drive time" fee like some of them do.' },
                  { title: 'Georgia Master Plumber license', desc: 'Fully certified, bonded, and insured team to guarantee proper execution.' },
                  { title: 'Free estimates on most jobs', desc: 'Diagnosing your issue is free, so you can make informed decisions.' },
                  { title: 'Upfront, transparent pricing', desc: 'No surprises or hidden fees. We quote before we work.' },
                  { title: 'We pull permits', desc: 'Required for water heater swaps, gas, and sewer work — and we handle all the municipal paperwork.' }
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
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?w=800&q=80"
                  alt={`Bremen plumbing repairs - D4 Plumbing`}
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
            Bremen Areas We Serve
          </h2>
          <div className="w-16 h-1 bg-[#B08C47] mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Historic Downtown Bremen', desc: 'Older homes around the square, the railroad, and Tallapoosa Street.' },
              { name: 'Sewell Mill area', desc: 'Established residential areas with a mix of plumbing eras.' },
              { name: 'I-20 / Highway 100 corridor', desc: 'Commercial properties and nearby subdivisions.' },
              { name: 'Highway 27 north', desc: 'Properties leading north toward Cedartown.' },
              { name: 'Highway 78 corridor', desc: 'Farms, residential acreage, and commercial listings.' },
              { name: 'Mt. Zion area', desc: 'Subdivisions and homes crossing the Carroll County line.' },
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
            All of 30110 ZIP code. We also regularly serve Tallapoosa, Buchanan, Waco, and the rest of Haralson County.
          </p>
        </div>
      </section>

      {/* Plumbing Realities Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4 text-center">
            Bremen Plumbing — What's Common Here
          </h2>
          <div className="w-16 h-1 bg-[#B08C47] mx-auto mb-12" />

          <div className="prose prose-slate max-w-none space-y-6 text-[#252525]/75 text-base leading-relaxed">
            <p>
              Bremen's housing stock skews older than most of West Metro Atlanta, especially in the original downtown grid. That means a few patterns we see repeatedly.
            </p>
            <p>
              <strong>Pre-1985 homes in downtown Bremen and the Sewell Mill area</strong> were largely plumbed with <strong>galvanized steel supply</strong> and <strong>cast iron drains</strong>. Galvanized lines corrode shut over decades — usually showing up as low pressure and rusty water at first use in the morning. Cast iron drains usually fail at the joints first, often where the kitchen sink meets the main stack. We see both regularly, and we know how to handle them without destroying historic finishes.
            </p>
            <p>
              <strong>1990s-era homes out toward the I-20 corridor and Mt. Zion</strong> typically used <strong>copper supply</strong> and <strong>PVC drains</strong>. Durable, but the shutoff valves and pressure regulators from that era are now reaching the end of their service life. Failures of those small parts are some of our most common Bremen calls.
            </p>
            <p>
              <strong>Newer construction</strong> is mostly PEX with manifold systems — generally easy to work on. Builder-grade fixtures (faucets, water heaters, toilet flush valves) tend to wear out in the 7-12 year window.
            </p>
            <p>
              <strong>Bremen's water</strong> is delivered through the <strong>City of Bremen Utility Department</strong> and the Haralson County water systems. Pressure is generally consistent. A sudden drop almost always means a problem on your side of the meter.
            </p>
            <p>
              <strong>One Bremen-specific thing worth knowing:</strong> because the city sits on the dividing line between Carroll and Haralson Counties, permit and inspection rules can vary depending on which side of the line your home sits on. We handle the permit paperwork either way.
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
                  We're at <strong>902 McBrayer Road, Temple, GA 30179</strong> — eight miles east of downtown Bremen, a 10-12 minute drive. Same-day service is standard for non-emergency calls placed before noon. After-hours emergencies are typically on-site within 45–75 minutes (Bremen is one of our closest service areas).
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
            Bremen Plumbing FAQs
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
            Call Bremen's Local Plumber
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            When you need a plumber in Bremen, GA, call the one that's actually local. <strong>(770) 562-0406</strong> — same-day service, real people, fair prices.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 mb-8 text-white max-w-md mx-auto text-sm space-y-1">
            <p className="font-bold text-base">D4 Plumbing</p>
            <p>902 McBrayer Road, Temple, GA 30179</p>
            <p>Family-owned. Serving Bremen and Haralson County since 1979.</p>
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
              to={createPageUrl('Contact')}
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
            <Link to="/plumber-villa-rica-ga" className="hover:text-[#B08C47] transition-colors border-b border-white/10 pb-1">
              Villa Rica plumber
            </Link>
            <Link to="/plumber-douglasville-ga" className="hover:text-[#B08C47] transition-colors border-b border-white/10 pb-1">
              Douglasville plumber
            </Link>
            <Link to="/plumber-carrollton-ga" className="hover:text-[#B08C47] transition-colors border-b border-white/10 pb-1">
              plumber in Carrollton
            </Link>
            <Link to="/plumber-dallas-ga" className="hover:text-[#B08C47] transition-colors border-b border-white/10 pb-1">
              plumber in Dallas, GA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
