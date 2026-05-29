import React from 'react';
import Locations from '@/views/Locations';

export const metadata = {
  title: 'Service Areas | D4 Plumbing — West Metro Atlanta',
  description: 'D4 Plumbing serves Temple, Villa Rica, Carrollton, Douglasville, Atlanta & surrounding West Metro Atlanta communities. Fast response, local experts.',
  alternates: {
    canonical: 'https://d4plumbing.com/Locations',
  },
  openGraph: {
    type: 'website',
    title: 'Service Areas | D4 Plumbing — West Metro Atlanta',
    description: 'D4 Plumbing serves Temple, Villa Rica, Carrollton, Douglasville, Atlanta & surrounding West Metro Atlanta communities. Fast response, local experts.',
    url: 'https://d4plumbing.com/Locations',
  },
};

export default function LocationsPage() {
  return <Locations />;
}
