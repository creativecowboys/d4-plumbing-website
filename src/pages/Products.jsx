import React from 'react';
import { CheckCircle2, ArrowRight, Award, Shield, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';

const products = [
  {
    category: 'Water Heaters',
    brand: 'Rheem',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
    description: 'Industry-leading water heaters with superior efficiency and reliability.',
    features: ['Energy Star certified', 'Tank & tankless options', 'Extended warranties', 'Professional installation'],
  },
  {
    category: 'Faucets & Fixtures',
    brand: 'Moen',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
    description: 'Premium faucets combining style with lasting durability.',
    features: ['Lifetime warranty', 'WaterSense certified', 'Modern designs', 'Easy installation'],
  },
  {
    category: 'Kitchen & Bath',
    brand: 'Delta',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
    description: 'Innovative fixtures with Touch2O® and ShieldSpray® technology.',
    features: ['Touch technology', 'Diamond Seal valve', 'MagnaTite docking', 'Limited lifetime warranty'],
  },
  {
    category: 'Toilets & Sinks',
    brand: 'Kohler',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    description: 'Bold design meets precision engineering for superior performance.',
    features: ['AquaPiston technology', 'Water-saving designs', 'Premium finishes', 'Complete collections'],
  },
];

const materials = [
  {
    name: 'Charlotte Pipe',
    description: 'America\'s leading manufacturer of cast iron and plastic pipe and fittings.',
    benefits: ['Made in USA', 'Industry standard', 'Proven durability', 'Code compliant'],
  },
  {
    name: 'FlowGuard Gold',
    description: 'Premium CPVC piping system designed for residential potable water distribution.',
    benefits: ['Corrosion resistant', 'Scale resistant', '50-year track record', 'Chlorine resistant'],
  },
];

export default function Products() {
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
              Quality Products
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Premium Brands
              <br />
              <span className="text-[#B08C47]">We Trust</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              We only install products from manufacturers we trust. Quality materials 
              mean lasting results and peace of mind for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-[#B08C47] font-semibold text-sm tracking-widest uppercase mb-4 block">
              Featured Brands
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4">
              Top-Quality Fixtures & Equipment
            </h2>
            <p className="text-[#252525]/60">
              We partner with industry-leading brands to deliver the best products for your home or business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.brand}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.brand}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-[#B08C47] text-sm font-semibold mb-1">{product.category}</p>
                    <h3 className="text-3xl font-bold text-white">{product.brand}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[#252525]/70 mb-6">{product.description}</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#252525]/70">
                        <CheckCircle2 className="w-4 h-4 text-[#B08C47] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 lg:py-28 bg-[#F1EADA]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-[#B08C47] font-semibold text-sm tracking-widest uppercase mb-4 block">
              Quality Materials
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-4">
              Built to Last
            </h2>
            <p className="text-[#252525]/60">
              We use only the highest quality piping materials for lasting performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((material, idx) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-[#252525] mb-3">{material.name}</h3>
                <p className="text-[#252525]/70 mb-6">{material.description}</p>
                <div className="flex flex-wrap gap-3">
                  {material.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 bg-[#F1EADA] text-[#252525] px-4 py-2 rounded-full text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#B08C47]" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Quality Matters */}
      <section className="py-20 lg:py-28 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Warranty Protection', desc: 'Premium products come with manufacturer warranties for your peace of mind.' },
              { icon: Shield, title: 'Reliability', desc: 'Quality materials mean fewer repairs and longer-lasting installations.' },
              { icon: Leaf, title: 'Efficiency', desc: 'Modern fixtures save water and energy, lowering your utility bills.' },
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
                <p className="text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#B08C47]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for Quality Plumbing?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Let us help you choose the right products for your project.
          </p>
          <Link
            to={createPageUrl('Contact')}
            className="inline-flex items-center gap-3 bg-white text-[#B08C47] hover:bg-[#252525] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}