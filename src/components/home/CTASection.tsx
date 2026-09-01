import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
export function CTASection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
          Ready to Elevate Your Institution's Image?
        </h2>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Partner with Chidera Garment Industry for premium quality, timely
          delivery, and professional service that scales with your needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button variant="primary" size="lg" withArrow>
              Get in Touch
            </Button>
          </Link>
          <a href="tel:+2348000000000">
            <Button variant="secondary" size="lg">
              Call Us Now
            </Button>
          </a>
        </div>
      </div>
    </section>);

}