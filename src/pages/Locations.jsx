import React from 'react';
import { MapPin, Phone, ArrowRight, CheckCircle2, Clock, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';

const primaryLocations = [
  { name: 'Temple', description: 'Our headquarters and primary service area' },
  { name: 'Villa Rica', description: 'Full residential and commercial services' },
  { name: 'Carrollton', description: 'Complete plumbing solutions' },
  { name: 'Douglasville', description: 'Serving the Douglas County area' },
  { name: 'Atlanta', description: 'West Atlanta metro coverage' },
];

const additionalLocations = [
  'Bremen', 'Dallas', 'Hiram', 'Lithia Springs', 'Austell',
  'Mableton', 'Powder Springs', 'Rockmart', 'Buchanan', 'Tallapoosa',
];

export default function Locations() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#252525] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#B08C47]/10 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[#B08C47] font-semibold text-sm tracking-widest uppercase mb-4 block">
              Service Areas
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Serving
              <br />
              <span className="text-[#B08C47]">West Metro Atlanta</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              From Temple to Atlanta, we provide prompt, professional plumbing services 
              throughout West Metro Atlanta and surrounding communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Primary Locations */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-[#B08C47] font-semibold text-sm tracking-widest uppercase mb-4 block">
              Primary Service Areas
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4">
              Where We Work
            </h2>
            <p className="text-[#252525]/60">
              These are our primary service areas with the fastest response times and most comprehensive coverage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryLocations.map((location, idx) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#B08C47]/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B08C47]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#B08C47]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#252525] mb-1">{location.name}</h3>
                    <p className="text-[#252525]/60 text-sm">{location.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Locations */}
      <section className="py-20 bg-[#F1EADA]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-[#252525] mb-4">
              We Also Serve
            </h2>
            <p className="text-[#252525]/60">
              In addition to our primary areas, we serve these surrounding communities.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {additionalLocations.map((location, idx) => (
              <motion.span
                key={location}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="inline-flex items-center gap-2 bg-white text-[#252525] px-5 py-2.5 rounded-full text-sm font-medium shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-[#B08C47]" />
                {location}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Service Info */}
      <section className="py-20 lg:py-28 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Fast Response',
                description: 'Same-day service available for most locations. Emergency service 24/7.',
              },
              {
                icon: Truck,
                title: 'Fully Equipped',
                description: 'Our trucks carry all the supplies needed to handle most jobs on the first visit.',
              },
              {
                icon: MapPin,
                title: 'Local Experts',
                description: 'We know the area and can navigate quickly to get to you when you need us.',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#B08C47] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Headquarters */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#B08C47] font-semibold text-sm tracking-widest uppercase mb-4 block">
                Our Location
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-6">
                Headquarters
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <address className="not-italic space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#B08C47] mt-1" />
                    <div>
                      <p className="font-semibold text-[#252525]">Address</p>
                      <p className="text-[#252525]/70">902 McBrayer Rd<br />Temple, GA 30179</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#B08C47] mt-1" />
                    <div>
                      <p className="font-semibold text-[#252525]">Phone</p>
                      <a href="tel:770-562-0406" className="text-[#B08C47] hover:underline">770-562-0406</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#B08C47] mt-1" />
                    <div>
                      <p className="font-semibold text-[#252525]">Hours</p>
                      <p className="text-[#252525]/70">Monday - Friday: 7AM - 6PM<br />Emergency service available 24/7</p>
                    </div>
                  </div>
                </address>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#252525] rounded-3xl p-8 lg:p-12"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Not Sure If We Service Your Area?
              </h3>
              <p className="text-white/70 mb-8">
                Give us a call and we'll let you know if we can help. We're always expanding our service area!
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:770-562-0406"
                  className="inline-flex items-center justify-center gap-3 bg-[#B08C47] hover:bg-[#9a7a3d] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call 770-562-0406
                </a>
                <Link
                  to={createPageUrl('Contact')}
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/20 hover:border-[#B08C47] text-white hover:text-[#B08C47] px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  Send Us a Message
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}