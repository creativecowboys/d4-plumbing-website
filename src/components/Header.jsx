import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const navItems = [
  { name: 'Home', page: 'Home' },
  { name: 'Services', page: 'Services' },
  { name: 'Products', page: 'Products' },
  { name: 'About Us', page: 'About' },
  { name: 'Locations', page: 'Locations' },
  { name: 'Contact', page: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#B08C47] py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">902 McBrayer Rd, Temple, GA 30179</span>
            <span className="sm:hidden">Temple, GA</span>
          </div>
          <a href="tel:470-613-2447" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            <span>470-613-2447</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-9 left-0 right-0 z-50 bg-[#252525]/95 backdrop-blur-md shadow-2xl py-3 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to={createPageUrl('Home')} className="flex items-center group">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69839312b784d053c6a2116e/00d571434_D4Logo.png"
            alt="D4 Plumbing - DeFoor Plumbing"
            className="h-24 w-auto group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={createPageUrl(item.page)}
              className="text-white/80 hover:text-[#B08C47] text-sm font-bold tracking-wide transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B08C47] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            to={createPageUrl('Contact')}
            className="hidden md:flex items-center gap-2 bg-[#B08C47] hover:bg-[#9a7a3d] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Get a Free Estimate</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#252525] backdrop-blur-lg transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={createPageUrl(item.page)}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-[#B08C47] text-lg font-medium py-2 border-b border-white/10 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:470-613-2447"
            className="flex items-center justify-center gap-2 bg-[#B08C47] text-white px-6 py-3 rounded-full font-semibold mt-4"
          >
            <Phone className="w-5 h-5" />
            Call Now: 470-613-2447
          </a>
        </nav>
      </div>
    </header>
    </>
  );
}