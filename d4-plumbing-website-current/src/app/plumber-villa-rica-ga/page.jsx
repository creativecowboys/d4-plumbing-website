import React from 'react';
import PlumberVillaRicaGA from '@/views/PlumberVillaRicaGA';

export const metadata = {
  title: 'Villa Rica Plumber | D4 Plumbing | Same-Day Service | (770) 562-0406',
  description: 'Family-owned plumber serving Villa Rica, GA since 1979. Water heaters, drain cleaning, leak repair & 24/7 emergency plumbing. Free estimates. Call (770) 562-0406.',
  keywords: 'plumber Villa Rica GA, Villa Rica plumber, plumbing Villa Rica, emergency plumber Villa Rica, water heater Villa Rica, drain cleaning Villa Rica',
  alternates: {
    canonical: 'https://d4plumbing.com/plumber-villa-rica-ga/',
  },
  openGraph: {
    type: 'website',
    title: 'Villa Rica Plumber | D4 Plumbing | 35+ Years Local',
    description: 'Trusted Villa Rica plumber serving Mirror Lake, Fairfield Plantation & all of Villa Rica since 1979. Free estimates, same-day service.',
    url: 'https://d4plumbing.com/plumber-villa-rica-ga/',
    images: [
      {
        url: 'https://d4plumbing.com/images/villa-rica-plumber.jpg',
      },
    ],
  },
};

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

export default function PlumberVillaRicaPage() {
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
      <PlumberVillaRicaGA />
    </>
  );
}
