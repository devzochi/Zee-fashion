import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                ZEE FASHION
                <span className="text-gold">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nigeria's trusted partner for premium school uniforms, medical
              wears, and institutional garments. Crafting excellence in every
              stitch.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors">

                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors">

                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors">

                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-serif text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm">

                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-400 hover:text-white transition-colors text-sm">

                  Our Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/why-schools"
                  className="text-gray-400 hover:text-white transition-colors text-sm">

                  Why Schools Choose Us
                </Link>
              </li>
              <li>
                <Link
                  to="/quote"
                  className="text-gray-400 hover:text-white transition-colors text-sm">

                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold font-serif text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/services/school-uniforms"
                  className="text-gray-400 hover:text-white transition-colors text-sm">

                  School Uniforms
                </Link>
              </li>
              <li>
                <Link
                  to="/services/medical-wears"
                  className="text-gray-400 hover:text-white transition-colors text-sm">

                  Medical & Lab Wears
                </Link>
              </li>
              <li>
                <Link
                  to="/services/embroidery"
                  className="text-gray-400 hover:text-white transition-colors text-sm">

                  Embroidery & Branding
                </Link>
              </li>
              <li>
                <Link
                  to="/services/school-uniforms"
                  className="text-gray-400 hover:text-white transition-colors text-sm">

                  Graduation Gowns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-serif text-lg mb-6">Get a Quote</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Lagos State, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span className="text-gray-400 text-sm">+234 800 000 0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span className="text-gray-400 text-sm">
                  info@zeefashion.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Zee Fashion. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-600 text-xs">Privacy Policy</span>
            <span className="text-gray-600 text-xs">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>);

}
