import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Services',
    path: '/services',
    isDropdown: true,
    items: [
    {
      name: 'School Uniforms',
      path: '/services/school-uniforms'
    },
    {
      name: 'Medical & Lab Wears',
      path: '/services/medical-wears'
    },
    {
      name: 'Embroidery & Branding',
      path: '/services/embroidery'
    }]

  },
  {
    name: 'Gallery',
    path: '/gallery'
  },
  {
    name: 'Why Schools',
    path: '/why-schools'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  const isHome = location.pathname === '/';
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled || !isHome ? 'bg-navy shadow-lg py-4' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span
              className={`font-serif text-2xl font-bold tracking-wider ${isScrolled || !isHome ? 'text-white' : 'text-white'}`}>

              CHIDERA
              <span className="text-gold">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <div key={link.name} className="relative group">
                {link.isDropdown ?
              <button
                className="flex items-center text-sm font-medium text-white/90 hover:text-gold transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}>

                    {link.name}
                    <ChevronDown className="ml-1 w-4 h-4" />

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isServicesOpen &&
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    exit={{
                      opacity: 0,
                      y: 10
                    }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-sm shadow-xl py-2">

                          {link.items?.map((item) =>
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-3 text-sm text-navy hover:bg-cream hover:text-gold transition-colors">

                              {item.name}
                            </Link>
                    )}
                        </motion.div>
                  }
                    </AnimatePresence>
                  </button> :

              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors relative ${location.pathname === link.path ? 'text-gold' : 'text-white/90 hover:text-gold'}`}>

                    {link.name}
                    {location.pathname === link.path &&
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gold" />

                }
                  </Link>
              }
              </div>
            )}
            <Link to="/contact">
              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="px-5 py-2 bg-gold text-navy text-sm font-semibold rounded-sm hover:bg-gold-light transition-colors">

                Get a Quote
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">

            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            x: '100%'
          }}
          animate={{
            x: 0
          }}
          exit={{
            x: '100%'
          }}
          transition={{
            type: 'tween',
            duration: 0.3
          }}
          className="fixed inset-y-0 right-0 w-full sm:w-80 bg-navy shadow-2xl z-50 p-6 md:hidden overflow-y-auto">

            <div className="flex justify-end mb-8">
              <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2 hover:text-gold transition-colors">

                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              {navLinks.map((link) =>
            <div key={link.name}>
                  {link.isDropdown ?
              <div className="space-y-4">
                      <div className="text-lg font-serif font-medium text-gold border-b border-white/10 pb-2">
                        {link.name}
                      </div>
                      <div className="pl-4 flex flex-col space-y-4">
                        {link.items?.map((item) =>
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-white/80 hover:text-white transition-colors">

                            {item.name}
                          </Link>
                  )}
                      </div>
                    </div> :

              <Link
                to={link.path}
                className={`block text-lg font-serif font-medium transition-colors ${location.pathname === link.path ? 'text-gold' : 'text-white hover:text-gold'}`}>

                      {link.name}
                    </Link>
              }
                </div>
            )}
              <div className="pt-6 border-t border-white/10">
                <Link to="/contact" className="block w-full">
                  <button className="w-full py-3 bg-gold text-navy font-bold rounded-sm hover:bg-gold-light transition-colors">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}