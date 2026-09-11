import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
const images = [
{
  src: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=800&auto=format&fit=crop&q=60',
  alt: 'School Uniform Group',
  category: 'Uniforms'
},
{
  src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60',
  alt: 'Tailoring Detail',
  category: 'Craftsmanship'
},
{
  src: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&auto=format&fit=crop&q=80',
  alt: 'Lab Coat Detail',
  category: 'Medical'
},
{
  src: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=800&auto=format&fit=crop&q=60',
  alt: 'Embroidery Machine',
  category: 'Branding'
}];

export function GalleryPreview() {
  return (
    <section className="py-24 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <span className="text-gold font-medium tracking-wider uppercase text-sm">
              Portfolio
            </span>
            <h2 className="text-4xl font-serif font-bold text-navy mt-3">
              Our Craftsmanship
            </h2>
          </div>
          <Link to="/gallery">
            <Button variant="secondary" withArrow>
              View Full Gallery
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) =>
          <motion.div
            key={index}
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
            className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer">

              <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-gold text-sm font-medium uppercase tracking-wider mb-1">
                  {image.category}
                </span>
                <h3 className="text-white font-serif text-lg">{image.alt}</h3>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
