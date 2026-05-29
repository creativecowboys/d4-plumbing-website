import React from 'react';
import About from '@/views/About';

export const metadata = {
  title: 'About D4 Plumbing | 35+ Years Family-Owned Since 1989',
  description: "Learn about D4 Plumbing's 35-year legacy serving West Metro Atlanta with honest, quality plumbing. Family-owned and operated since 1989 in Temple, GA.",
  alternates: {
    canonical: 'https://d4plumbing.com/About',
  },
  openGraph: {
    type: 'website',
    title: 'About D4 Plumbing | 35+ Years Family-Owned Since 1989',
    description: "Learn about D4 Plumbing's 35-year legacy serving West Metro Atlanta with honest, quality plumbing. Family-owned and operated since 1989 in Temple, GA.",
    url: 'https://d4plumbing.com/About',
  },
};

export default function AboutPage() {
  return <About />;
}
