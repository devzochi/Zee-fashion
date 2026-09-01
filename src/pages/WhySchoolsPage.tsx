import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import {
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  DollarSign,
  HeartHandshake } from
'lucide-react';
const benefits = [
{
  icon: CheckCircle,
  title: 'Uncompromising Quality',
  description:
  'We use only premium fabrics and materials that are tested for durability and colorfastness.'
},
{
  icon: Users,
  title: 'Custom Branding Solutions',
  description:
  'From specific color matching to custom embroidery, we ensure your identity is perfectly represented.'
},
{
  icon: Clock,
  title: 'Timely Delivery',
  description:
  'We respect academic calendars. Our production planning ensures your uniforms are ready before resumption.'
},
{
  icon: TrendingUp,
  title: 'Scalable Production',
  description:
  'Whether you need 50 or 5,000 uniforms, our factory capacity handles large orders efficiently.'
},
{
  icon: DollarSign,
  title: 'Competitive Pricing',
  description:
  'Direct manufacturing means no middleman costs, giving you the best value for premium quality.'
},
{
  icon: HeartHandshake,
  title: 'Dedicated Support',
  description:
  'Our team works closely with your administration to handle sizing, logistics, and after-sales support.'
}];

export function WhySchoolsPage() {
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
      <section className="bg-navy text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Why Leading Schools
            <br />
            Choose Chidera
          </h1>
          <p className="text-xl text-gray-300">
            We don't just make uniforms; we build long-term partnerships that
            solve your garment challenges.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) =>
            <motion.div
              key={benefit.title}
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
                delay: index * 0.1,
                duration: 0.5
              }}
              className="bg-white p-8 rounded-lg shadow-lg border-b-4 border-gold hover:-translate-y-1 transition-transform duration-300">

                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center text-navy mb-6">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="py-20 bg-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-navy mb-12">
            Trusted by Educators
          </h2>
          <div className="bg-white p-10 rounded-xl shadow-sm relative">
            <div className="text-gold text-6xl font-serif absolute top-4 left-6 opacity-20">
              "
            </div>
            <p className="text-lg text-gray-700 italic mb-6 relative z-10">
              Chidera Garment Industry transformed how our students look. The
              quality of the uniforms has significantly improved our school's
              image, and their delivery is always on time for the new session.
            </p>
            <div>
              <div className="font-bold text-navy">Mrs. N. Okonkwo</div>
              <div className="text-sm text-gray-500">
                Proprietress, Grace International School, Enugu
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy mb-6">
            Ready to Upgrade Your School's Look?
          </h2>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>);

}