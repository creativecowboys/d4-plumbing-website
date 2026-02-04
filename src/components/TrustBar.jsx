import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Rheem', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rheem_logo.svg/200px-Rheem_logo.svg.png' },
  { name: 'Moen', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Moen_logo.svg/200px-Moen_logo.svg.png' },
  { name: 'Delta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Delta_Faucet_Company_logo.svg/200px-Delta_Faucet_Company_logo.svg.png' },
  { name: 'Kohler', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Kohler_Logo.svg/200px-Kohler_Logo.svg.png' },
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
              <div className="h-12 w-32 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-[#252525]/60 font-bold text-xl">${partner.name}</span>`;
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