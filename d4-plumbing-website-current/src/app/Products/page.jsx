import React from 'react';
import Products from '@/views/Products';

export const metadata = {
  title: 'Quality Plumbing Products | D4 Plumbing',
  description: 'We install premium brands — Rheem, Moen, Delta & Kohler — backed by manufacturer warranties and expert installation in West Metro Atlanta.',
  alternates: {
    canonical: 'https://d4plumbing.com/Products',
  },
  openGraph: {
    type: 'website',
    title: 'Quality Plumbing Products | D4 Plumbing',
    description: 'We install premium brands — Rheem, Moen, Delta & Kohler — backed by manufacturer warranties and expert installation in West Metro Atlanta.',
    url: 'https://d4plumbing.com/Products',
  },
};

export default function ProductsPage() {
  return <Products />;
}
