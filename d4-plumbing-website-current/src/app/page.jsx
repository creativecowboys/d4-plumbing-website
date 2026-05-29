import React from 'react';
import Home from '@/views/Home';

export const metadata = {
  title: 'D4 Plumbing | Expert Plumbing Services in West Metro Atlanta',
  description: 'Family-owned plumbing company with 35+ years of experience serving Temple, Villa Rica, Carrollton, Douglasville & West Metro Atlanta. Free estimates. Call (770) 562-0406.',
  keywords: 'plumber West Metro Atlanta, plumbing Temple GA, D4 Plumbing, DeFoor Plumbing, water heater installation, drain cleaning, plumbing repair',
  alternates: {
    canonical: 'https://d4plumbing.com/',
  },
  openGraph: {
    type: 'website',
    siteName: 'D4 Plumbing',
    title: 'D4 Plumbing | Expert Plumbing Services in West Metro Atlanta',
    description: 'Family-owned plumbing company with 35+ years of experience. Serving Temple, Villa Rica, Carrollton & West Metro Atlanta. Free estimates.',
    url: 'https://d4plumbing.com/',
    images: [
      {
        url: 'https://d4plumbing.com/og-image.jpg',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D4 Plumbing | Expert Plumbing Services in West Metro Atlanta',
    description: 'Family-owned plumbing company with 35+ years of experience. Serving West Metro Atlanta. Free estimates. Call (770) 562-0406.',
    images: ['https://d4plumbing.com/og-image.jpg'],
  },
};

const schemaLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "D4 Plumbing",
  "alternateName": "DeFoor Plumbing",
  "url": "https://d4plumbing.com",
  "logo": "https://d4plumbing.com/d4-favicon.png",
  "image": "https://d4plumbing.com/og-image.jpg",
  "description": "Family-owned plumbing company with over 35 years of experience serving West Metro Atlanta with residential and commercial plumbing services.",
  "foundingDate": "1989",
  "telephone": "+17705620406",
  "email": "info@d4plumbing.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "902 McBrayer Rd",
    "addressLocality": "Temple",
    "addressRegion": "GA",
    "postalCode": "30179",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.7351,
    "longitude": -85.0288
  },
  "areaServed": [
    { "@type": "City", "name": "Temple, GA" },
    { "@type": "City", "name": "Villa Rica, GA" },
    { "@type": "City", "name": "Carrollton, GA" },
    { "@type": "City", "name": "Douglasville, GA" },
    { "@type": "City", "name": "Atlanta, GA" },
    { "@type": "City", "name": "Bremen, GA" },
    { "@type": "City", "name": "Dallas, GA" },
    { "@type": "City", "name": "Hiram, GA" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plumbing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Plumbing Repairs" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Installation & Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drain Cleaning & Hydro Jetting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Construction Plumbing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Plumbing Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Remodeling" } }
    ]
  }
};

export default function RootPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
      />
      <Home />
    </>
  );
}
