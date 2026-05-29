import React from 'react';
import PlumberBremenGA from '@/views/PlumberBremenGA';

export const metadata = {
  title: 'Bremen GA Plumber | D4 Plumbing | Free Estimates | (770) 562-0406',
  description: 'Local Bremen, GA plumber since 1979. Haralson County water heaters, drain cleaning, leak repair & 24/7 emergency plumbing. Free estimates. Call (770) 562-0406.',
  keywords: 'plumber Bremen GA, Bremen plumber, plumbing Bremen GA, Haralson County plumber, emergency plumber Bremen, water heater Bremen GA',
  alternates: {
    canonical: 'https://d4plumbing.com/plumber-bremen-ga/',
  },
  openGraph: {
    type: 'website',
    title: 'Bremen GA Plumber | D4 Plumbing | 35+ Years Local',
    description: 'Trusted Bremen, GA plumber. Family-owned since 1979. Same-day service for Bremen, Tallapoosa, Buchanan, and Haralson County.',
    url: 'https://d4plumbing.com/plumber-bremen-ga/',
    images: [
      {
        url: 'https://d4plumbing.com/images/bremen-plumber.jpg',
      },
    ],
  },
};

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

export default function PlumberBremenPage() {
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
      <PlumberBremenGA />
    </>
  );
}
