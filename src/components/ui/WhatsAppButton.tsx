import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
export function WhatsAppButton() {
  const phoneNumber = '2348000000000'; // Replace with actual number
  const message = encodeURIComponent(
    "Hello, I found Chidera Garment Industry through your website and I'd like to make an inquiry."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{
        scale: 0,
        opacity: 0
      }}
      animate={{
        scale: 1,
        opacity: 1
      }}
      transition={{
        delay: 1,
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      whileHover={{
        scale: 1.1
      }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl cursor-pointer"
      aria-label="Chat on WhatsApp">

      <motion.div
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut'
        }}>

        <MessageCircle className="w-8 h-8" />
      </motion.div>
    </motion.a>);

}