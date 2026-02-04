import React from 'react';
import { CheckCircle2, Award, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';

const highlights = [
  { icon: Award, label: '60+ Years Combined Experience' },
  { icon: Users, label: 'Family-Owned & Operated' },
  { icon: Clock, label: 'Always On Time' },
];

const qualityPoints = [
  'Charlotte Pipe quality materials',
  'FlowGuard Gold CPVC systems',
  'Licensed & insured professionals',
  'Guaranteed workmanship',
];

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#252525] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#B08C47]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B08C47]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab10380c9a5?w=800&q=80"
                alt="Professional plumber at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/60 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-[#B08C47] rounded-2xl p-6 shadow-2xl">
              <div className="text-white text-center">
                <div className="text-5xl font-bold">35+</div>
                <div className="text-white/80 text-sm mt-1">Years of<br />Excellence</div>
              </div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#B08C47]/30 rounded-3xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#B08C47] font-semibold text-sm tracking-widest uppercase mb-4 block">
              About D4 Plumbing
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              A Legacy of
              <br />
              <span className="text-[#B08C47]">Quality</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              At DeFoor Plumbing, we've built our reputation on trust, quality, and exceptional service. 
              With over 60 years of combined experience, our family-owned business has been serving 
              West Metro Atlanta with pride and dedication.
            </p>

            <p className="text-white/60 leading-relaxed mb-8">
              We use only the highest quality materials, including Charlotte Pipe and FlowGuard Gold CPVC, 
              because we believe your home deserves nothing less. Our commitment to excellence has made us 
              the trusted choice for thousands of homeowners and businesses.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-6 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#B08C47]/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#B08C47]" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Quality Points */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {qualityPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B08C47] flex-shrink-0" />
                  <span className="text-white/70">{point}</span>
                </div>
              ))}
            </div>

            <Link
              to={createPageUrl('About')}
              className="inline-flex items-center gap-3 bg-[#B08C47] hover:bg-[#9a7a3d] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}