import React from 'react';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServicesGrid from '@/components/ServicesGrid';
import AboutSection from '@/components/AboutSection';
import ServiceArea from '@/components/ServiceArea';
import ContactSection from '@/components/ContactSection';
import SEOHead from '@/components/SEOHead';

export default function Home() {
  return (
    <div>
      <SEOHead
        title="D4 Plumbing | Expert Plumbing Services in West Metro Atlanta"
        description="Family-owned plumbing company with 35+ years of experience serving Temple, Villa Rica, Carrollton, Douglasville & West Metro Atlanta. Free estimates. Call 470-613-2447."
      />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <AboutSection />
      <ServiceArea />
      <ContactSection />
    </div>
  );
}