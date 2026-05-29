import React from 'react';
import Contact from '@/views/Contact';

export const metadata = {
  title: 'Contact D4 Plumbing | Free Estimate — West Metro Atlanta',
  description: 'Get a free, no-obligation plumbing estimate from D4 Plumbing. Call (770) 562-0406 or fill out our online form. We serve all of West Metro Atlanta.',
  alternates: {
    canonical: 'https://d4plumbing.com/Contact',
  },
  openGraph: {
    type: 'website',
    title: 'Contact D4 Plumbing | Free Estimate — West Metro Atlanta',
    description: 'Get a free, no-obligation plumbing estimate from D4 Plumbing. Call (770) 562-0406 or fill out our online form. We serve all of West Metro Atlanta.',
    url: 'https://d4plumbing.com/Contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}
