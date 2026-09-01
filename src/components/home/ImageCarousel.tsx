import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const carouselImages = [
{
  src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&auto=format&fit=crop&q=80',
  alt: 'Students in Premium School Uniforms',
  title: 'School Uniforms',
  subtitle: 'Crafted for comfort and durability'
},
{
  src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop&q=80',
  alt: 'Professional Tailoring',
  title: 'Expert Craftsmanship',
  subtitle: 'Precision in every stitch'
},
{
  src: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1600&auto=format&fit=crop&q=80',
  alt: 'Medical Professional Attire',
  title: 'Medical & Lab Wears',
  subtitle: 'Professional healthcare attire'
},
{
  src: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=1600&auto=format&fit=crop&q=80',
  alt: 'Custom Embroidery Work',
  title: 'Custom Branding',
  subtitle: 'Your identity, beautifully embroidered'
},
{
  src: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600&auto=format&fit=crop&q=80',
  alt: 'Premium Fabric Selection',
  title: 'Quality Fabrics',
  subtitle: 'Only the finest materials'
}];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
export function ImageCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const imageIndex =
  (page % carouselImages.length + carouselImages.length) %
  carouselImages.length;
  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );
  const goToSlide = (index: number) => {
    const newDirection = index > imageIndex ? 1 : -1;
    setPage([index, newDirection]);
  };
  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, paginate]);
  return (
    <section className="relative w-full bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3">
            Excellence in Every Detail
          </h2>
        </div>

        <div
          className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                },
                opacity: {
                  duration: 0.2
                }
              }}
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0
              }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing">

              <img
                src={carouselImages[imageIndex].src}
                alt={carouselImages[imageIndex].alt}
                className="w-full h-full object-cover" />


              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />

              {/* Caption */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: 0.3
                }}
                className="absolute bottom-0 left-0 right-0 p-8 md:p-12">

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                  {carouselImages[imageIndex].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {carouselImages[imageIndex].subtitle}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all duration-300"
            aria-label="Previous slide">

            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all duration-300"
            aria-label="Next slide">

            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-6">
          {carouselImages.map((_, index) =>
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${index === imageIndex ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-white/30 hover:bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`} />

          )}
        </div>
      </div>
    </section>);

}