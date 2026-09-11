import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Check } from 'lucide-react';
export function SchoolUniformsPage() {
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
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&auto=format&fit=crop&q=60"
            alt="School Uniforms"
            className="w-full h-full object-cover" />

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            School Uniforms That
            <br />
            Make an Impression
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            From nursery to secondary, we craft durable, comfortable, and smart
            uniforms that students are proud to wear.
          </p>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy mb-6">
                Comprehensive Uniform Solutions
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We understand that a school uniform is more than just
                clothing—it's a symbol of identity, discipline, and pride. Our
                manufacturing process ensures consistency in color, fabric
                quality, and sizing across all batches.
              </p>

              <div className="space-y-4">
                {[
                'Primary & Secondary School Uniforms',
                'School Cardigans & Sweaters',
                'Sportswear & P.E. Kits',
                'Graduation Gowns & Mufflers',
                'Blazers & Ties',
                'School Socks & Accessories'].
                map((item) =>
                <div
                  key={item}
                  className="flex items-center p-4 bg-cream/30 rounded-lg">

                    <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center text-gold mr-4">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-navy">{item}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=800&auto=format&fit=crop&q=60"
                alt="Students in uniform"
                className="w-full h-full object-cover rounded-lg" />

              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60"
                alt="School plaid fabric"
                className="w-full h-full object-cover rounded-lg mt-8" />

            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy">
              Why Schools Choose Our Uniforms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-3">
                Durability First
              </h3>
              <p className="text-gray-600">
                We use high-grade fabrics that withstand daily wear and frequent
                washing, ensuring uniforms look good all year round.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-3">
                Comfort & Fit
              </h3>
              <p className="text-gray-600">
                Our patterns are designed for movement and comfort, with a wide
                range of sizes to fit every student perfectly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-3">
                Custom Branding
              </h3>
              <p className="text-gray-600">
                We incorporate your school's colors, logo, and identity with
                precision embroidery and custom fabric choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy mb-6">
            Equip Your Students with the Best
          </h2>
          <Link to="/quote">
            <Button variant="primary" size="lg">
              Request a Quote for Your School
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>);

}
