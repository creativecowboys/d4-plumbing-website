import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(770) 480-9911', href: 'tel:7704809911', action: 'Call now' },
  { icon: Mail, label: 'Email', value: 'info@d4plumbing.com', href: 'mailto:info@d4plumbing.com', action: 'Send email' },
  { icon: MapPin, label: 'Address', value: '902 McBrayer Rd, Temple, GA 30179', action: 'Get directions', href: 'https://maps.google.com/?q=902+McBrayer+Rd,+Temple,+GA+30179' },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri: 7AM-6PM', action: '' },
];

const teamContacts = [
  {
    name: 'Jimmy DeFoor',
    phone: '(770) 480-9911',
    phoneDial: '7704809911',
    email: 'Jimmy@D4Plumbing.com',
  },
  {
    name: 'Evan DeFoor',
    phone: '(770) 853-6472',
    phoneDial: '7708536472',
    email: 'Evan@d4plumbing.com',
  },
];

const services = [
  'Remodel / Repairs',
  'New Construction',
  'Commercial',
  'Water Heater Service',
  'Drain Cleaning',
  'Other',
];

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    referral: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New Quote Request — D4 Plumbing',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          location: formData.location,
          referral: formData.referral,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please call us directly at (770) 480-9911.');
      }
    } catch {
      alert('Something went wrong. Please call us directly at (770) 480-9911.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      <SEOHead
        title="Contact D4 Plumbing | Free Estimate — West Metro Atlanta"
        description="Get a free, no-obligation plumbing estimate from D4 Plumbing. Call (770) 480-9911 or fill out our online form. We serve all of West Metro Atlanta."
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
                    {item.action && <p className="text-[#B08C47] text-sm font-medium">{item.action} →</p>}
                  </a>
                ) : (
                  <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                    <div className="w-12 h-12 bg-[#B08C47]/10 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-[#B08C47]" />
                    </div>
                    <p className="text-[#252525]/50 text-sm mb-1">{item.label}</p>
                    <p className="text-[#252525] font-semibold mb-2">{item.value}</p>
                    {item.action && <p className="text-[#B08C47] text-sm font-medium">{item.action}</p>}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-12 bg-[#F7F7F7] border-t border-[#252525]/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-[#252525]">Contact Our Team Directly</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {teamContacts.map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#B08C47]/10 rounded-full flex items-center justify-center mb-4">
                  <User className="w-7 h-7 text-[#B08C47]" />
                </div>
                <h3 className="text-lg font-bold text-[#252525] mb-3">{person.name}</h3>
                <div className="space-y-2">
                  <a
                    href={`tel:${person.phoneDial}`}
                    className="flex items-center gap-2 text-[#252525]/70 hover:text-[#B08C47] transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 text-[#B08C47]" />
                    {person.phone}
                  </a>
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-2 text-[#252525]/70 hover:text-[#B08C47] transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 text-[#B08C47]" />
                    {person.email}
                  </a>
                </div>
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
                        How did you find out about us?
                      </label>
                      <select
                        value={formData.referral}
                        onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                        className="w-full h-12 px-3 border border-[#252525]/10 focus:border-[#B08C47] rounded-xl bg-white text-[#252525] text-sm outline-none focus:ring-1 focus:ring-[#B08C47]"
                      >
                        <option value="">Select an option...</option>
                        <option value="Google">Google</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Word of Mouth">Word of Mouth</option>
                        <option value="Yard Sign">Yard Sign</option>
                        <option value="Repeat Customer">Repeat Customer</option>
                        <option value="Other">Other</option>
                      </select>
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

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-14 bg-[#B08C47] hover:bg-[#9a7a3d] disabled:opacity-60 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      {submitting ? 'Sending…' : 'Request Free Estimate'}
                    </button>

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
