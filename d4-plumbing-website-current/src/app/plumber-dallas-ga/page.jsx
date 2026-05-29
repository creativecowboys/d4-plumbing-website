import React from 'react';
import PlumberDallasGA from '@/views/PlumberDallasGA';

export const metadata = {
  title: 'Plumber in Dallas, GA | D4 Plumbing | Paulding County | (770) 562-0406',
  description: 'Local Dallas, GA plumber serving Paulding County since 1979. Seven Hills, Riverwood, Hiram-Dallas area. Water heaters, drains, leaks, emergency service. Free estimates.',
  keywords: 'plumber Dallas GA, Dallas GA plumber, plumbing Dallas Georgia, Paulding County plumber, emergency plumber Dallas GA, water heater Dallas GA',
  alternates: {
    canonical: 'https://d4plumbing.com/plumber-dallas-ga/',
  },
  openGraph: {
    type: 'website',
    title: 'Plumber in Dallas, GA | D4 Plumbing | 35+ Years Local',
    description: 'Trusted Paulding County plumber serving Dallas, Seven Hills & Riverwood since 1979. Free estimates. Same-day service.',
    url: 'https://d4plumbing.com/plumber-dallas-ga/',
    images: [
      {
        url: 'https://d4plumbing.com/images/dallas-ga-plumber.jpg',
      },
    ],
  },
};

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

export default function PlumberDallasPage() {
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
      <PlumberDallasGA />
    </>
  );
}
