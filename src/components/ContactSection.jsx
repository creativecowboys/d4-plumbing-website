import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '770-562-0406', href: 'tel:770-562-0406' },
  { icon: Mail, label: 'Email', value: 'info@d4plumbing.com', href: 'mailto:info@d4plumbing.com' },
  { icon: MapPin, label: 'Address', value: '902 McBrayer Rd, Temple, GA 30179' },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri: 7AM-6PM' },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F1EADA] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#B08C47]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#252525]/5 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#B08C47] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#252525] mb-6">
            Request Your
            <br />
            <span className="text-[#B08C47]">Free Estimate</span>
          </h2>
          <p className="text-[#252525]/60 text-lg">
            Ready to get started? Contact us today for a free, no-obligation estimate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#B08C47]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#B08C47]" />
                </div>
                <div>
                  <p className="text-[#252525]/50 text-sm mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#252525] font-semibold hover:text-[#B08C47] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#252525] font-semibold">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Quick Call CTA */}
            <div className="bg-[#252525] rounded-2xl p-6 text-center">
              <p className="text-white/70 mb-3">Need immediate assistance?</p>
              <a
                href="tel:770-562-0406"
                className="inline-flex items-center gap-2 bg-[#B08C47] hover:bg-[#9a7a3d] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#252525] mb-3">Thank You!</h3>
                  <p className="text-[#252525]/60">
                    We've received your request and will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[#252525] font-medium text-sm mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 border-[#252525]/10 focus:border-[#B08C47] rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-[#252525] font-medium text-sm mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 border-[#252525]/10 focus:border-[#B08C47] rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[#252525] font-medium text-sm mb-2 block">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        placeholder="(770) 555-0123"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 border-[#252525]/10 focus:border-[#B08C47] rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-[#252525] font-medium text-sm mb-2 block">
                        Service Needed
                      </label>
                      <Input
                        placeholder="e.g., Water heater repair"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="h-12 border-[#252525]/10 focus:border-[#B08C47] rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#252525] font-medium text-sm mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your plumbing needs..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-[#252525]/10 focus:border-[#B08C47] rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 bg-[#B08C47] hover:bg-[#9a7a3d] text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Request
                  </Button>

                  <p className="text-center text-[#252525]/50 text-sm">
                    We'll respond within 24 hours. Your information is secure.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}