import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '470-613-2447', href: 'tel:470-613-2447', action: 'Call now' },
  { icon: Mail, label: 'Email', value: 'info@d4plumbing.com', href: 'mailto:info@d4plumbing.com', action: 'Send email' },
  { icon: MapPin, label: 'Address', value: '902 McBrayer Rd, Temple, GA 30179', action: 'Get directions', href: 'https://maps.google.com/?q=902+McBrayer+Rd,+Temple,+GA+30179' },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri: 7AM-6PM', action: 'Emergency 24/7' },
];

const services = [
  'Residential Repairs',
  'Water Heater Service',
  'Drain Cleaning',
  'New Construction',
  'Commercial Plumbing',
  'Bathroom Remodeling',
  'Emergency Service',
  'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      <SEOHead
        title="Contact D4 Plumbing | Free Estimate — West Metro Atlanta"
        description="Get a free, no-obligation plumbing estimate from D4 Plumbing. Call 470-613-2447 or fill out our online form. We serve all of West Metro Atlanta."
      />
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
              Contact Us
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Get Your
              <br />
              <span className="text-[#B08C47]">Free Estimate</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Ready to get started? Contact us today for a free, no-obligation estimate.
              We're here to help with all your plumbing needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 block h-full group"
                  >
                    <div className="w-12 h-12 bg-[#B08C47]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#B08C47] transition-colors">
                      <item.icon className="w-6 h-6 text-[#B08C47] group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-[#252525]/50 text-sm mb-1">{item.label}</p>
                    <p className="text-[#252525] font-semibold mb-2">{item.value}</p>
                    <p className="text-[#B08C47] text-sm font-medium">{item.action} →</p>
                  </a>
                ) : (
                  <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                    <div className="w-12 h-12 bg-[#B08C47]/10 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-[#B08C47]" />
                    </div>
                    <p className="text-[#252525]/50 text-sm mb-1">{item.label}</p>
                    <p className="text-[#252525] font-semibold mb-2">{item.value}</p>
                    <p className="text-[#B08C47] text-sm font-medium">{item.action}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-28 bg-[#F1EADA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#252525] mb-6">
                Request a Quote
              </h2>
              <p className="text-[#252525]/70 mb-8 leading-relaxed">
                Fill out the form and we'll get back to you within 24 hours with a free estimate.
                For urgent issues, please call us directly.
              </p>

              <div className="bg-[#252525] rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#B08C47] rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Need immediate help?</p>
                    <p className="text-white font-bold text-lg">Call 470-613-2447</p>
                  </div>
                </div>
                <a
                  href="tel:470-613-2447"
                  className="block w-full text-center bg-[#B08C47] hover:bg-[#9a7a3d] text-white py-3 rounded-full font-semibold transition-colors"
                >
                  Call Now
                </a>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-[#252525]">Why Choose Us?</h3>
                {[
                  'Free estimates with no obligation',
                  'Same-day service available',
                  'Licensed and insured',
                  'Satisfaction guaranteed',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[#252525]/70">
                    <CheckCircle2 className="w-5 h-5 text-[#B08C47] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#252525] mb-3">Thank You!</h3>
                    <p className="text-[#252525]/60 mb-6">
                      We've received your request and will contact you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="rounded-full"
                    >
                      Submit Another Request
                    </Button>
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
                          Your Location
                        </label>
                        <Input
                          placeholder="City, GA"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="h-12 border-[#252525]/10 focus:border-[#B08C47] rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[#252525] font-medium text-sm mb-2 block">
                        Service Needed
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="h-12 border-[#252525]/10 focus:border-[#B08C47] rounded-xl">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-[#252525] font-medium text-sm mb-2 block">
                        Tell Us About Your Project
                      </label>
                      <Textarea
                        placeholder="Describe your plumbing needs, any urgency, preferred appointment times, etc."
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
                      Request Free Estimate
                    </Button>

                    <p className="text-center text-[#252525]/50 text-sm">
                      We'll respond within 24 hours. Your information is secure and will never be shared.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}