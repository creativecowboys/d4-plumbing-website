import React from 'react';
import Services from '@/views/Services';

export const metadata = {
  title: 'Plumbing Services | D4 Plumbing — West Metro Atlanta',
  description: 'Residential repairs, water heater installation, drain cleaning, new construction & commercial plumbing across West Metro Atlanta. Call (770) 562-0406.',
  alternates: {
    canonical: 'https://d4plumbing.com/Services',
  },
  openGraph: {
    type: 'website',
    title: 'Plumbing Services | D4 Plumbing — West Metro Atlanta',
    description: 'Residential repairs, water heater installation, drain cleaning, new construction & commercial plumbing across West Metro Atlanta. Call (770) 562-0406.',
    url: 'https://d4plumbing.com/Services',
  },
};

export default function ServicesPage() {
  return <Services />;
}
