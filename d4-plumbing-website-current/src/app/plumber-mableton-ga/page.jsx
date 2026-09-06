import React from 'react';
import CityPlumberPage from '@/views/CityPlumberPage';

const city = {
  "city": "Mableton",
  "county": "Cobb County",
  "miles": 33,
  "neighbors": [
    "Austell",
    "Smyrna",
    "Lithia Springs"
  ]
};

const faqs = [
  {
    "question": "How fast can a plumber get to my Mableton home?",
    "answer": "Mableton is about 33 miles from our shop in Temple. Most non-emergency calls placed in the morning are scheduled the same day or the next, and emergencies get priority."
  },
  {
    "question": "Do you charge for estimates?",
    "answer": "No. Free estimates on most jobs."
  },
  {
    "question": "Are you licensed in Georgia?",
    "answer": "Yes \u2014 Georgia Master Plumber license, fully bonded and insured. We pull permits with Cobb County when the work requires them."
  },
  {
    "question": "Can you replace my water heater the same day?",
    "answer": "Most standard 40 and 50-gallon tanks (gas or electric) are same-day. Tankless and oversized units may need a day to source."
  },
  {
    "question": "Do you do gas line work?",
    "answer": "Yes \u2014 installation, repair, and pressure testing for natural gas and propane. We pull permits when required."
  },
  {
    "question": "Do you offer financing on larger jobs?",
    "answer": "Yes \u2014 for repipes, water heater replacements, and major repairs. Ask your tech for current options."
  },
  {
    "question": "Do you service the rest of Cobb County?",
    "answer": "Yes \u2014 Austell, Smyrna, Lithia Springs and the surrounding area are all part of our regular route."
  }
];

export const metadata = {
  title: "Plumber in Mableton, GA | DeFoor Plumbing",
  description: "Looking for a trusted plumber in Mableton, GA? DeFoor Plumbing offers fast, reliable plumbing services including drain cleaning, water heater repair, leak detection, and more. Call (770) 562-0406.",
  keywords: "plumber Mableton GA, Mableton plumber, plumbing Mableton GA, Cobb County plumber, emergency plumber Mableton, water heater Mableton GA",
  alternates: { canonical: "https://www.d4plumbing.com/plumber-mableton-ga" },
  openGraph: { type: 'website', title: "Plumber in Mableton, GA | DeFoor Plumbing", description: "Looking for a trusted plumber in Mableton, GA? DeFoor Plumbing offers fast, reliable plumbing services including drain cleaning, water heater repair, leak detection, and more. Call (770) 562-0406.", url: "https://www.d4plumbing.com/plumber-mableton-ga" },
};

const schemaPlumber = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://www.d4plumbing.com/plumber-mableton-ga#business",
  "name": "D4 Plumbing - Mableton",
  "alternateName": "DeFoor Plumbing",
  "image": "https://www.d4plumbing.com/og-image.jpg",
  "url": "https://www.d4plumbing.com/plumber-mableton-ga",
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
    "name": "Mableton",
    "containedInPlace": {
      "@type": "State",
      "name": "Georgia"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.8187,
    "longitude": -84.5824
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
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
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPlumber) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      <CityPlumberPage {...city} faqs={faqs} />
    </>
  );
}
