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
};

export default function HomePageCompatible() {
  return <Home />;
}
