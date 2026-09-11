import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
export function QuotePage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        institution: '',
        message: ''
      });
    }, 1500);
  };
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        duration: 0.5
      }}
      className="pt-24 pb-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-navy mb-4">
            Request a Quote
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your requirements? We're here to help you find the
            perfect garment solution for your institution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-navy mb-8">
              Quote Information
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-navy shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Industrial Layout,
                    <br />
                    Lagos State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-navy shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-1">+234 800 000 0000</p>
                  <p className="text-gray-500 text-sm">Mon - Fri, 8am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-navy shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600">info@zeefashion.com</p>
                  <p className="text-gray-600">sales@zeefashion.com</p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <a
                  href="https://wa.me/2348000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-4 bg-[#25D366] text-white rounded-sm font-bold hover:bg-[#20bd5a] transition-colors shadow-lg">

                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">
              Tell Us About Your Order
            </h2>

            {isSuccess ?
            <div className="bg-green-50 text-green-800 p-6 rounded-lg text-center">
                <h3 className="font-bold text-xl mb-2">Thank You!</h3>
                <p>
                  Your message has been sent successfully. We will get back to
                  you shortly.
                </p>
                <button
                onClick={() => setIsSuccess(false)}
                className="mt-4 text-green-700 font-medium hover:underline">

                  Send another message
                </button>
              </div> :

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1">

                      Full Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    placeholder="John Doe" />

                  </div>
                  <div>
                    <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1">

                      Phone Number
                    </label>
                    <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    placeholder="+234..." />

                  </div>
                </div>

                <div>
                  <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1">

                    Email Address
                  </label>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com" />

                </div>

                <div>
                  <label
                  htmlFor="institution"
                  className="block text-sm font-medium text-gray-700 mb-1">

                    Institution Type
                  </label>
                  <select
                  id="institution"
                  name="institution"
                  value={formState.institution}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all">

                    <option value="">Select an option</option>
                    <option value="School (Primary/Secondary)">
                      School (Primary/Secondary)
                    </option>
                    <option value="University/College">
                      University/College
                    </option>
                    <option value="Hospital/Medical">Hospital/Medical</option>
                    <option value="Corporate">Corporate Organization</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1">

                    Message
                  </label>
                  <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your requirements..." />

                </div>

                <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}>

                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            }
          </div>
        </div>
      </div>
    </motion.div>);

}
