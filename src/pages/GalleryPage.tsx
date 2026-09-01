import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
// Mock data
const galleryImages = [
{
  id: 1,
  src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
  category: 'School Uniforms',
  title: 'Primary School Set'
},
{
  id: 2,
  src: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=800&q=80',
  category: 'School Uniforms',
  title: 'Secondary Assembly'
},
{
  id: 3,
  src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  category: 'Craftsmanship',
  title: 'Tailoring Detail'
},
{
  id: 4,
  src: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80',
  category: 'Medical Wears',
  title: 'Lab Coat'
},
{
  id: 5,
  src: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=800&q=80',
  category: 'Embroidery',
  title: 'School Badge'
},
{
  id: 6,
  src: 'https://images.unsplash.com/photo-1551651766-2c6d7175b8e9?w=800&q=80',
  category: 'Medical Wears',
  title: 'Doctor Uniform'
},
{
  id: 7,
  src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
  category: 'Craftsmanship',
  title: 'Fabric Texture'
},
{
  id: 8,
  src: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=800&q=80',
  category: 'Embroidery',
  title: 'Thread Work'
}];

const categories = [
'All',
'School Uniforms',
'Medical Wears',
'Embroidery',
'Craftsmanship'];

export function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null>(
    null);
  const filteredImages =
  filter === 'All' ?
  galleryImages :
  galleryImages.filter((img) => img.category === filter);
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            Our Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of premium garments, showcasing our commitment
            to quality and detail.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat ? 'bg-navy text-white shadow-lg' : 'bg-cream text-navy hover:bg-gold hover:text-white'}`}>

              {cat}
            </button>
          )}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <AnimatePresence>
            {filteredImages.map((image) =>
            <motion.div
              layout
              key={image.id}
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.8
              }}
              transition={{
                duration: 0.3
              }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}>

                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                  <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                  <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-lg">
                      {image.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage &&
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}>

            <button
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}>

              <X className="w-8 h-8" />
            </button>
            <motion.img
            initial={{
              scale: 0.9
            }}
            animate={{
              scale: 1
            }}
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} />

            <div className="absolute bottom-6 left-0 right-0 text-center text-white">
              <h3 className="text-xl font-serif">{selectedImage.title}</h3>
              <p className="text-sm text-gray-400">{selectedImage.category}</p>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>);

}