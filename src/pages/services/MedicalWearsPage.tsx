import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { ShieldCheck } from 'lucide-react';
export function MedicalWearsPage() {
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
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1600&auto=format&fit=crop&q=60"
            alt="Medical Wears"
            className="w-full h-full object-cover" />

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Professional Medical &<br />
            Laboratory Attire
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Meeting the highest standards of hygiene, comfort, and
            professionalism for healthcare providers.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1551651766-2c6d7175b8e9?w=800&auto=format&fit=crop&q=60"
                alt="Doctor in lab coat"
                className="w-full rounded-lg shadow-xl" />

            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif font-bold text-navy mb-6">
                Designed for Healthcare Professionals
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                In the medical field, your attire is your armor. We produce
                high-quality medical wears that offer protection, breathability,
                and ease of movement for long shifts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                {
                  title: 'Lab Coats',
                  desc: 'Crisp, durable, and stain-resistant.'
                },
                {
                  title: 'Medical Scrubs',
                  desc: 'Comfortable fabrics in various colors.'
                },
                {
                  title: 'Nurse Uniforms',
                  desc: 'Professional and functional designs.'
                },
                {
                  title: 'Patient Gowns',
                  desc: 'Soft, dignified, and easy to wear.'
                }].
                map((item) =>
                <div key={item.title} className="bg-cream/30 p-6 rounded-lg">
                    <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <ShieldCheck className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Hygiene Standards</h3>
              <p className="text-gray-300">
                Fabrics selected for easy sterilization and resistance to
                contaminants.
              </p>
            </div>
            <div className="p-6">
              <ShieldCheck className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Premium Comfort</h3>
              <p className="text-gray-300">
                Breathable materials that keep professionals cool during
                demanding procedures.
              </p>
            </div>
            <div className="p-6">
              <ShieldCheck className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom Fit</h3>
              <p className="text-gray-300">
                Tailored options available for individuals and entire
                departments.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Order Medical Wears
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>);

}