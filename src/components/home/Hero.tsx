import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Simple particle animation for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(window.innerWidth / 10, 100); // Responsive count
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 162, 39, ${particle.opacity})`; // Gold color
        ctx.fill();
      });
      // Draw connecting lines if close
      ctx.strokeStyle = 'rgba(201, 162, 39, 0.05)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    resizeCanvas();
    createParticles();
    animate();
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <div className="relative h-screen w-full overflow-hidden bg-navy">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60" />


      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/50 to-navy z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}>

          <span className="inline-block py-1 px-3 rounded-full bg-gold/10 text-gold border border-gold/20 text-sm font-medium tracking-wide mb-6">
            EST. 2008 • ENUGU, NIGERIA
          </span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">

          Crafting Excellence in <br />
          <span className="text-gold italic">Every Stitch</span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">

          Nigeria's trusted partner for premium school uniforms, medical wears,
          and institutional garments. Quality that speaks. Scale that delivers.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

          <Link to="/contact">
            <Button
              variant="primary"
              size="lg"
              withArrow
              className="w-full sm:w-auto">

              Request a Quote
            </Button>
          </Link>
          <Link to="/gallery">
            <Button
              variant="outline-white"
              size="lg"
              className="w-full sm:w-auto">

              Explore Our Work
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center">

        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 2
          }}>

          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </div>);

}