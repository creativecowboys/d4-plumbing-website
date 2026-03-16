import React from 'react';
import { CheckCircle2, Award, Users, Clock, Heart, Shield, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';

const values = [
  {
    icon: Heart,
    title: 'Family Values',
    description: 'We treat every customer like family, providing honest service and fair pricing.',
  },
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    description: 'We take pride in our work and stand behind every job with our satisfaction guarantee.',
  },
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'We do what we say and say what we do. No hidden fees, no surprises.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'When we set an appointment, we show up on time, every time.',
  },
];

const milestones = [
  { year: '1989', event: 'DeFoor Plumbing founded as a family business in Temple, GA' },
  { year: '2000', event: 'Expanded services to cover all of West Metro Atlanta' },
  { year: '2010', event: 'Added commercial plumbing division' },
  { year: '2020', event: 'Rebranded as D4 Plumbing, welcoming the next generation' },
  { year: 'Today', event: 'Serving thousands of satisfied customers across the region' },
];

export default function About() {
  return (
    <div className="pt-24">
      <SEOHead
        title="About D4 Plumbing | 35+ Years Family-Owned Since 1989"
        description="Learn about D4 Plumbing's 35-year legacy serving West Metro Atlanta with honest, quality plumbing. Family-owned and operated since 1989 in Temple, GA."
      />
      {/* Hero Section */}
      <section className="bg-[#252525] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#B08C47]/10 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-[#B08C47] font-semibold text-sm tracking-widest uppercase mb-4 block">
                About Us
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                A Legacy of
                <br />
                <span className="text-[#B08C47]">Quality</span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                For over 35 years, the DeFoor family has been serving West Metro Atlanta
                with professional plumbing services built on trust, quality, and integrity.
              </p>
              <div className="flex flex-wrap gap-8">
                {[
                  { value: '35+', label: 'Years Experience' },
                  { value: '60+', label: 'Combined Years' },
                  { value: '5000+', label: 'Happy Customers' },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-bold text-[#B08C47]">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                  alt="Professional plumber"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#B08C47] rounded-2xl p-6 shadow-2xl">
                <p className="text-white font-bold text-lg">Family-Owned</p>
                <p className="text-white/80 text-sm">Since 1989</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-6">
                Our Story
              </h2>
              <p className="text-[#252525]/70 leading-relaxed mb-6">
                D4 Plumbing, originally DeFoor Plumbing, was founded in Temple, Georgia in 1989
                by a master plumber with a simple vision: provide honest, quality plumbing services
                that families can trust.
              </p>
              <p className="text-[#252525]/70 leading-relaxed mb-6">
                What started as a one-man operation has grown into a trusted name in West Metro Atlanta,
                serving thousands of homeowners and businesses. Today, with over 60 years of combined
                experience on our team, we continue the tradition of excellence that our founder established.
              </p>
              <p className="text-[#252525]/70 leading-relaxed">
                We believe in using only the highest quality materials—like Charlotte Pipe and FlowGuard
                Gold CPVC—because your home deserves nothing less. Our commitment to quality, fair pricing,
                and exceptional service has earned us the trust of our community.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-[#B08C47] rounded-full" />
                    {idx < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-[#B08C47]/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-[#B08C47] font-bold">{milestone.year}</p>
                    <p className="text-[#252525]/70">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-[#F1EADA]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-[#B08C47] font-semibold text-sm tracking-widest uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4">
              What We Stand For
            </h2>
            <p className="text-[#252525]/60">
              Our values guide everything we do, from how we treat customers to the quality of our work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#B08C47]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#B08C47]" />
                </div>
                <h3 className="text-lg font-bold text-[#252525] mb-2">{value.title}</h3>
                <p className="text-[#252525]/60 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 lg:py-28 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Promise to You
              </h2>
              <ul className="space-y-4">
                {[
                  'Honest, upfront pricing with no hidden fees',
                  'On-time arrivals for every appointment',
                  'Clean, respectful work in your home',
                  'Quality materials and expert workmanship',
                  'Satisfaction guaranteed on every job',
                  'Licensed and insured professionals',
                ].map((promise, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-[#B08C47] flex-shrink-0" />
                    {promise}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#B08C47] rounded-3xl p-8 lg:p-12 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-white/80 mb-8">
                Join thousands of satisfied customers who trust D4 Plumbing for all their plumbing needs.
              </p>
              <div className="flex flex-col gap-4">
                <Link
                  to={createPageUrl('Contact')}
                  className="inline-flex items-center justify-center gap-3 bg-white text-[#B08C47] hover:bg-[#252525] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  Get a Free Estimate
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:770-562-0406"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#B08C47] px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call 770-562-0406
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}