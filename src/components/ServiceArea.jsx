import React from 'react';
import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';

const locations = [
  { name: 'Temple', featured: true },
  { name: 'Villa Rica', featured: true },
  { name: 'Carrollton', featured: true },
  { name: 'Bremen', featured: true },
  { name: 'Dallas', featured: true },
  { name: 'Douglasville', featured: true },
  { name: 'Hiram', featured: true },
  { name: 'Atlanta', featured: true },
];

export default function ServiceArea() {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F7F7] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #B08C47 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#B08C47] font-semibold text-sm tracking-widest uppercase mb-4 block">
              Service Area
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#252525] mb-6 leading-tight">
              Serving
              <br />
              <span className="text-[#B08C47]">West Metro Atlanta</span>
            </h2>

            <p className="text-[#252525]/70 text-lg leading-relaxed mb-10">
              We proudly serve communities throughout West Metro Atlanta and surrounding areas. 
              No matter where you are in our service area, you can count on prompt, professional service.
            </p>

            {/* Locations Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {locations.map((location, idx) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                    location.featured
                      ? 'bg-white shadow-md border border-[#B08C47]/20'
                      : 'bg-[#F1EADA]/50'
                  }`}
                >
                  <MapPin className={`w-5 h-5 flex-shrink-0 ${
                    location.featured ? 'text-[#B08C47]' : 'text-[#252525]/40'
                  }`} />
                  <span className={`font-medium ${
                    location.featured ? 'text-[#252525]' : 'text-[#252525]/60'
                  }`}>
                    {location.name}
                  </span>
                  {location.featured && (
                    <CheckCircle2 className="w-4 h-4 text-[#B08C47] ml-auto" />
                  )}
                </motion.div>
              ))}
            </div>

            <Link
              to={createPageUrl('Locations')}
              className="inline-flex items-center gap-3 text-[#B08C47] font-semibold group"
            >
              View All Service Areas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Map/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#252525] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#B08C47]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#B08C47]/5 rounded-full blur-2xl" />

              <div className="relative text-center">
                <div className="w-20 h-20 bg-[#B08C47] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#B08C47]/30">
                  <MapPin className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Headquarters
                </h3>

                <address className="text-white/70 not-italic text-lg leading-relaxed mb-8">
                  902 McBrayer Rd<br />
                  Temple, GA 30179
                </address>

                <div className="flex flex-col gap-4">
                  <a
                    href="tel:770-562-0406"
                    className="inline-flex items-center justify-center gap-3 bg-[#B08C47] hover:bg-[#9a7a3d] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    Call: 770-562-0406
                  </a>
                  <a
                    href="https://maps.google.com/?q=902+McBrayer+Rd,+Temple,+GA+30179"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 border-2 border-white/20 hover:border-[#B08C47] text-white hover:text-[#B08C47] px-6 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#B08C47]/20 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}