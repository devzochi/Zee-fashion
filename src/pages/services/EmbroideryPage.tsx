import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
export function EmbroideryPage() {
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

      {/* Hero */}
      <section className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=1600&auto=format&fit=crop&q=60"
            alt="Embroidery"
            className="w-full h-full object-cover" />

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Custom Branding &<br />
            Precision Embroidery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Elevate your institution's identity with high-quality monograms,
            logos, and personalized details.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy mb-6">
                The Art of Branding
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A uniform is incomplete without the badge of identity. Our
                state-of-the-art embroidery machines deliver precise, vibrant,
                and long-lasting designs that represent your brand with dignity.
              </p>
              <ul className="space-y-4 list-disc list-inside text-gray-700">
                <li>School Badges & Monograms</li>
                <li>Corporate Logos on Shirts</li>
                <li>Name Tags & Personalization</li>
                <li>Cap & Bag Branding</li>
                <li>Large Format Embroidery</li>
              </ul>
              <div className="mt-8">
                <Link to="/quote">
                  <Button variant="primary">Get Custom Branding</Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1520986606214-8b456906c813?w=800&auto=format&fit=crop&q=60"
                alt="Embroidery thread"
                className="w-full h-full object-cover rounded-lg" />

              <img
                src="https://images.unsplash.com/photo-1626292385983-a44781989434?w=800&auto=format&fit=crop&q=60"
                alt="Finished embroidery"
                className="w-full h-full object-cover rounded-lg mt-8" />

            </div>
          </div>
        </div>
      </section>
    </motion.div>);

}
