import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80"
          alt="Modern bathroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#252525]/95 via-[#252525]/80 to-[#252525]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#B08C47]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#B08C47]/5 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#B08C47]/20 backdrop-blur-sm border border-[#B08C47]/30 text-[#B08C47] px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-[#B08C47] rounded-full animate-pulse" />
              35+ Years of Trusted Service
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Expert Plumbing
            <br />
            <span className="text-[#B08C47]">Solutions</span> for
            <br />
            West Metro Atlanta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed"
          >
            Family-owned and operated with over 35 years of trusted experience.
            Quality craftsmanship you can rely on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to={createPageUrl('Contact')}
              className="group inline-flex items-center justify-center gap-3 bg-[#B08C47] hover:bg-[#9a7a3d] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#B08C47]/30 hover:shadow-xl hover:scale-105"
            >
              Request Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:7704809911"
              className="group inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:border-[#B08C47] text-white hover:text-[#B08C47] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              Call (770) 480-9911
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { value: '35+', label: 'Years Experience' },
              { value: '5000+', label: 'Projects Completed' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-[#B08C47]">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#B08C47] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
