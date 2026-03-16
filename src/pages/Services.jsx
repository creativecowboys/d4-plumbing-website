import React from 'react';
import { Home, Building2, Wrench, ShowerHead, Waves, ThermometerSun, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';

const services = [
  {
    icon: Home,
    title: 'Residential Repairs',
    description: 'Complete home plumbing solutions from minor fixes to major overhauls.',
    features: [
      'Leak detection and repair',
      'Pipe repair and replacement',
      'Fixture installation and upgrades',
      'Garbage disposal repair',
      'Sump pump services',
      'Whole-house repiping',
    ],
  },
  {
    icon: ThermometerSun,
    title: 'Water Heaters',
    description: 'Installation, repair, and maintenance for all types of water heaters.',
    features: [
      'Tank water heater installation',
      'Tankless water heater systems',
      'Water heater repair',
      'Annual maintenance',
      'Energy-efficient upgrades',
      'Emergency replacements',
    ],
  },
  {
    icon: Waves,
    title: 'Drain Services',
    description: 'Keep your drains flowing freely with our comprehensive drain solutions.',
    features: [
      'Drain cleaning',
      'Clog removal',
      'Video camera inspection',
      'Hydro jetting',
      'Root removal',
      'Preventive maintenance',
    ],
  },
  {
    icon: Building2,
    title: 'New Construction',
    description: 'Full-service plumbing for residential and commercial builds.',
    features: [
      'Complete system design',
      'Rough-in plumbing',
      'Finish plumbing',
      'Code compliance',
      'Fixture selection assistance',
      'Project coordination',
    ],
  },
  {
    icon: Wrench,
    title: 'Commercial Services',
    description: 'Specialized solutions for businesses of all sizes.',
    features: [
      'Restaurant plumbing',
      'Office building services',
      'Retail space plumbing',
      'Industrial facilities',
      'Maintenance contracts',
      '24/7 emergency service',
    ],
  },
  {
    icon: ShowerHead,
    title: 'Bathroom Remodeling',
    description: 'Transform your bathroom with expert plumbing upgrades.',
    features: [
      'Shower installation',
      'Tub replacement',
      'Toilet upgrades',
      'Vanity installation',
      'Accessibility modifications',
      'Luxury fixture installation',
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-24">
      <SEOHead
        title="Plumbing Services | D4 Plumbing — West Metro Atlanta"
        description="Residential repairs, water heater installation, drain cleaning, new construction & commercial plumbing across West Metro Atlanta. Call (770) 562-0406."
      />
      {/* Hero Section */}
      <section className="bg-[#252525] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#B08C47]/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B08C47]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[#B08C47] font-semibold text-sm tracking-widest uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Professional Plumbing
              <br />
              <span className="text-[#B08C47]">Services</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              From emergency repairs to complete installations, we deliver excellence
              in every project. Our experienced team is ready to solve your plumbing needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#252525]/5 group"
              >
                <div className="w-14 h-14 bg-[#F1EADA] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#B08C47] transition-colors duration-500">
                  <service.icon className="w-7 h-7 text-[#B08C47] group-hover:text-white transition-colors duration-500" />
                </div>

                <h3 className="text-xl font-bold text-[#252525] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#252525]/60 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#252525]/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#B08C47] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#B08C47] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Contact us today for a free estimate on your plumbing project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-3 bg-white text-[#B08C47] hover:bg-[#252525] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Request Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:7705620406"
              className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#B08C47] px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              (770) 562-0406
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}