import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  children: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm';
  const variants = {
    primary: 'bg-gold text-navy hover:bg-gold-light hover:shadow-lg',
    secondary: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
    white: 'bg-white text-navy hover:bg-cream',
    'outline-white':
    'border-2 border-white text-white hover:bg-white hover:text-navy'
  };
  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4'
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}>

      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </motion.button>);

}