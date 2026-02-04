import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Rheem', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69839312b784d053c6a2116e/a59b07dcc_rheem.png' },
  { name: 'Moen', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69839312b784d053c6a2116e/0daf44aa9_Moen_logosvg.png' },
  { name: 'Delta', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69839312b784d053c6a2116e/d431dc72f_deltalogonew.png' },
  { name: 'Kohler', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69839312b784d053c6a2116e/16b12f5df_kohler-1-logo-png-transparent.png' },
];

export default function TrustBar() {
  return (
    <section className="bg-[#F1EADA] py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNC0yIDQtMiA0LTItMi0yLTR6IiBzdHJva2U9IiNCMDhDNDciIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-[#252525]/60 text-sm font-medium tracking-widest uppercase">
            Trusted Partners & Quality Brands
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="h-20 w-48 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain filter brightness-0 opacity-60 hover:filter-none hover:opacity-100 transition-all duration-500"
                  onError={(e) => {
                    console.error(`Failed to load logo: ${partner.name}`, e);
                    e.target.parentElement.innerHTML = `<span class="text-[#252525]/60 font-bold text-lg">${partner.name}</span>`;
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}