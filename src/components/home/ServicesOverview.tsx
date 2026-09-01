import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Stethoscope, Scissors, ArrowRight } from 'lucide-react';
const services = [
{
  icon: GraduationCap,
  title: 'School Uniforms',
  description:
  'Complete uniform solutions for educational institutions of all levels. Durable, comfortable, and perfectly tailored.',
  link: '/services/school-uniforms',
  image:
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=60'
},
{
  icon: Stethoscope,
  title: 'Medical & Lab Wears',
  description:
  'Professional attire for healthcare and laboratory environments. Meeting hygiene standards with premium comfort.',
  link: '/services/medical-wears',
  image:
  'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&auto=format&fit=crop&q=60'
},
{
  icon: Scissors,
  title: 'Embroidery & Branding',
  description:
  'Custom monograms, logos, and institutional branding. High-precision embroidery that elevates your identity.',
  link: '/services/embroidery',
  image:
  'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=800&auto=format&fit=crop&q=60'
}];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            What We Do
          </span>
          <h2 className="text-4xl font-serif font-bold text-navy mt-3 mb-4">
            Our Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in large-scale garment production with a focus on
            quality, durability, and professional finishing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <motion.div
            key={service.title}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.5
            }}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">

              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                <div className="absolute inset-0 bg-navy/80 group-hover:bg-navy/70 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-96 flex flex-col justify-end text-white">
                <div className="mb-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 text-gold">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {service.description}
                </p>

                <Link
                to={service.link}
                className="inline-flex items-center text-gold font-medium hover:text-white transition-colors">

                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}