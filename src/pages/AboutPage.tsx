import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { CheckCircle } from 'lucide-react';
export function AboutPage() {
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
      className="pt-24">

      {/* Header */}
      <section className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600&auto=format&fit=crop&q=60"
            alt="Fabric texture"
            className="w-full h-full object-cover" />

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            The Chidera Story
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A legacy of craftsmanship, dedication, and service to Nigerian
            institutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-medium tracking-wider uppercase text-sm">
                Who We Are
              </span>
              <h2 className="text-4xl font-serif font-bold text-navy mt-3 mb-6">
                More Than Just a Garment Manufacturer
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008 in Enugu State, Chidera Garment Industry began
                  with a simple mission: to provide schools and institutions
                  with uniforms that don't just look good, but last.
                </p>
                <p>
                  Over the years, we have grown from a modest tailoring workshop
                  into a full-scale industrial garment manufacturing hub. We
                  understand the unique challenges schools and organizations
                  face—from sourcing quality fabrics to ensuring timely delivery
                  for hundreds of students.
                </p>
                <p>
                  Today, we are proud to be a trusted partner to over 500
                  institutions across Nigeria. Our commitment to excellence is
                  stitched into every hem, button, and embroidery we produce.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                'Quality Assurance',
                'Timely Delivery',
                'Modern Machinery',
                'Expert Tailors'].
                map((item) =>
                <div
                  key={item}
                  className="flex items-center text-navy font-medium">

                    <CheckCircle className="w-5 h-5 text-gold mr-3" />
                    {item}
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60"
                  alt="Tailor working"
                  className="w-full h-full object-cover" />

              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cream rounded-lg -z-10" />
              <div className="absolute -top-10 -right-10 w-64 h-64 border-2 border-gold rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-gold">
              <h3 className="text-2xl font-serif font-bold text-navy mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower institutions with high-quality, durable, and
                professionally crafted garments that instill pride and
                confidence. We strive to set the standard for garment
                manufacturing in Nigeria through innovation, reliability, and
                customer-centric service.
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-navy">
              <h3 className="text-2xl font-serif font-bold text-navy mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading garment manufacturing industry in West Africa,
                known for our scale, precision, and ability to transform
                institutional identity through exceptional attire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let us help you create a lasting impression with garments that speak
            quality.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Work With Us
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>);

}