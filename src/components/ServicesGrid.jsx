import React from 'react';
import { Home, Building2, Wrench, Droplets, Flame, ShowerHead, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Home,
    title: 'Residential Repairs',
    description: 'Leak detection, water heaters, fixture upgrades, and complete home plumbing solutions.',
    features: ['Leak Detection', 'Water Heaters', 'Fixture Upgrades', 'Drain Cleaning'],
  },
  {
    icon: Building2,
    title: 'New Construction',
    description: 'Full-service plumbing for residential and commercial builds from ground up.',
    features: ['Residential Builds', 'Commercial Projects', 'Complete Systems', 'Code Compliance'],
  },
  {
    icon: Wrench,
    title: 'Commercial Services',
    description: 'Specialized solutions for businesses and large-scale developments.',
    features: ['Business Plumbing', 'Industrial Systems', 'Maintenance Plans', '24/7 Emergency'],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F7F7] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F1EADA]/50 to-transparent" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#B08C47]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#B08C47] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#252525] mb-6">
            Professional Plumbing
            <br />
            <span className="text-[#B08C47]">Solutions</span>
          </h2>
          <p className="text-[#252525]/60 text-lg leading-relaxed">
            From simple repairs to complete installations, we deliver excellence in every project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 h-full shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#252525]/5 hover:border-[#B08C47]/20 relative overflow-hidden">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#B08C47]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#F1EADA] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#B08C47] transition-colors duration-500">
                    <service.icon className="w-8 h-8 text-[#B08C47] group-hover:text-white transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#252525] mb-3 group-hover:text-[#B08C47] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#252525]/60 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#252525]/70">
                        <span className="w-1.5 h-1.5 bg-[#B08C47] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    to={createPageUrl('Services')}
                    className="inline-flex items-center gap-2 text-[#B08C47] font-semibold group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to={createPageUrl('Services')}
            className="inline-flex items-center gap-3 bg-[#252525] hover:bg-[#B08C47] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}