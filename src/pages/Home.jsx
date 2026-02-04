import React from 'react';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServicesGrid from '@/components/ServicesGrid';
import AboutSection from '@/components/AboutSection';
import ServiceArea from '@/components/ServiceArea';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <AboutSection />
      <ServiceArea />
      <ContactSection />
    </div>
  );
}