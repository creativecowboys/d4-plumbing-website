import React from 'react';
import PlumberDouglasvilleGA from '@/views/PlumberDouglasvilleGA';

export const metadata = {
  title: 'Douglasville Plumber | D4 Plumbing | Free Estimates | (770) 562-0406',
  description: 'Local Douglasville, GA plumber serving Chapel Hill, Mt. Carmel & all of Douglas County since 1979. Water heaters, drain cleaning, leak repair, 24/7 emergency. Call (770) 562-0406.',
  keywords: 'plumber Douglasville GA, Douglasville plumber, plumbing Douglasville, emergency plumber Douglasville, water heater Douglasville, drain cleaning Douglasville GA',
  alternates: {
    canonical: 'https://d4plumbing.com/plumber-douglasville-ga/',
  },
  openGraph: {
    type: 'website',
    title: 'Douglasville Plumber | D4 Plumbing | 35+ Years Local',
    description: 'Trusted Douglasville plumber serving Chapel Hill, Mt. Carmel, Arbor Place & all of Douglas County since 1979. Free estimates, same-day service.',
    url: 'https://d4plumbing.com/plumber-douglasville-ga/',
    images: [
      {
        url: 'https://d4plumbing.com/images/douglasville-plumber.jpg',
      },
    ],
  },
};

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

export default function PlumberDouglasvillePage() {
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
      <PlumberDouglasvilleGA />
    </>
  );
}
