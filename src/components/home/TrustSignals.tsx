import React from 'react';
import { motion } from 'framer-motion';
const stats = [
{
  label: 'Years of Excellence',
  value: '15+',
  suffix: ''
},
{
  label: 'Institutions Served',
  value: '500',
  suffix: '+'
},
{
  label: 'Garments Delivered',
  value: '1',
  suffix: 'M+'
},
{
  label: 'Quality Commitment',
  value: '100',
  suffix: '%'
}];

export function TrustSignals() {
  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-500 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) =>
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5
            }}
            className="p-4">

              <div className="text-4xl md:text-5xl font-bold text-gold mb-2 font-serif">
                {stat.value}
                <span className="text-2xl md:text-3xl">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base text-gray-300 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}