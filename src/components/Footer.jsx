import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const quickLinks = [
  { name: 'Home', page: 'Home' },
  { name: 'Services', page: 'Services' },
  { name: 'Products', page: 'Products' },
  { name: 'About Us', page: 'About' },
  { name: 'Locations', page: 'Locations' },
  { name: 'Contact', page: 'Contact' },
];

const services = [
  'Residential Repairs',
  'New Construction',
  'Commercial Services',
  'Water Heaters',
  'Drain Cleaning',
  'Emergency Services',
];

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-[#252525] text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div>
              <div className="mb-6">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69839312b784d053c6a2116e/00d571434_D4Logo.png"
                  alt="D4 Plumbing - DeFoor Plumbing"
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-white/60 mb-6 leading-relaxed">
                Family-owned plumbing experts serving West Metro Atlanta with over 35 years of trusted experience.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B08C47] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B08C47] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="text-white/60 hover:text-[#B08C47] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white/60">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B08C47] mt-0.5 flex-shrink-0" />
                  <span className="text-white/60">
                    902 McBrayer Rd<br />Temple, GA 30179
                  </span>
                </li>
                <li>
                  <a
                    href="tel:770-562-0406"
                    className="flex items-center gap-3 text-white/60 hover:text-[#B08C47] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#B08C47]" />
                    770-562-0406
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@d4plumbing.com"
                    className="flex items-center gap-3 text-white/60 hover:text-[#B08C47] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#B08C47]" />
                    info@d4plumbing.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#B08C47]" />
                  <span className="text-white/60">Mon-Fri: 7AM-6PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} D4 Plumbing (DeFoor Plumbing). All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Footer */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-[#B08C47] z-50 shadow-2xl shadow-black/30">
        <a
          href="tel:770-562-0406"
          className="flex items-center justify-center gap-3 py-4 text-white font-bold text-lg"
        >
          <Phone className="w-6 h-6" />
          Call Now: 770-562-0406
        </a>
      </div>
    </>
  );
}