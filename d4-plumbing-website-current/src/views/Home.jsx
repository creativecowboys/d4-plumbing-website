import React from 'react';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import AboutSection from '@/components/AboutSection';
import ServiceArea from '@/components/ServiceArea';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      <AboutSection />
      <ServiceArea />
      <ContactSection />
    </div>
  );
}
