import React from 'react';
import PlumberCarrolltonGA from '@/views/PlumberCarrolltonGA';

export const metadata = {
  title: 'Carrollton GA Plumber | D4 Plumbing | Same-Day Service | (770) 562-0406',
  description: "Carrollton, GA's local plumber since 1979. Serving Adamson Square, UWG area, Maple Street & all of Carroll County. Water heaters, drains, leaks, 24/7 emergency. Free estimates.",
  keywords: 'plumber Carrollton GA, Carrollton plumber, plumbing Carrollton, emergency plumber Carrollton GA, water heater Carrollton, drain cleaning Carrollton',
  alternates: {
    canonical: 'https://d4plumbing.com/plumber-carrollton-ga/',
  },
  openGraph: {
    type: 'website',
    title: 'Carrollton GA Plumber | D4 Plumbing | 35+ Years Local',
    description: 'Trusted Carrollton, GA plumber. Family-owned since 1979. Same-day service to Carrollton, UWG area & all of Carroll County.',
    url: 'https://d4plumbing.com/plumber-carrollton-ga/',
    images: [
      {
        url: 'https://d4plumbing.com/images/carrollton-plumber.jpg',
      },
    ],
  },
};

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

export default function PlumberCarrolltonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPlumber) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <PlumberCarrolltonGA />
    </>
  );
}
