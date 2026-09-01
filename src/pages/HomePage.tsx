import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/home/Hero';
import { ImageCarousel } from '../components/home/ImageCarousel';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { TrustSignals } from '../components/home/TrustSignals';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { CTASection } from '../components/home/CTASection';
export function HomePage() {
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
      }}>

      <Hero />
      <ImageCarousel />
      <ServicesOverview />
      <TrustSignals />
      <GalleryPreview />
      <CTASection />
    </motion.div>);

}