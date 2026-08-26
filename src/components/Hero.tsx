import React from 'react';
import { ArrowDown, Star, MapPin, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 bg-ivory">
      <div className="max-w-site mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-8">
            
            {/* Top Brand Pill & Social Proof */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-stone-container border border-stone-border/80 text-charcoal font-sans text-[11px] uppercase tracking-widest font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
                Editorial Studio • Toronto
              </span>

              <div className="flex items-center gap-2 text-charcoal text-xs font-medium tracking-wide">
                <div className="flex text-amber-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span><strong>4.9 ★</strong> rating · 2,000+ clients</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] text-charcoal leading-[1.05] tracking-tight mb-8">
              Sharp Cuts. <br />
              <span className="italic font-normal text-charcoal-100">Individual Style.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-charcoal-100 leading-relaxed max-w-xl mb-10 font-normal">
              Modern barbering built around precision, personality and the way you want to look. Every service is a bespoke consultation between master barber and client.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href="#services"
                className="inline-flex justify-center items-center px-8 py-4 bg-charcoal text-ivory font-sans text-xs uppercase tracking-widest font-semibold hover:bg-sage transition-colors duration-300 text-center"
              >
                Explore Our Services
              </a>
              <button
                onClick={onOpenContact}
                className="inline-flex justify-center items-center gap-2 px-8 py-4 border border-charcoal/30 text-charcoal font-sans text-xs uppercase tracking-widest font-semibold hover:border-charcoal hover:bg-stone-container transition-all duration-300 text-center"
              >
                <span>Visit OVERLOOK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Location Badge */}
            <div className="flex items-center gap-3 text-xs text-charcoal-50 tracking-wider">
              <MapPin className="w-4 h-4 text-sage" />
              <span>248 King Street West, Toronto • Walk-ins & Consultations Welcome</span>
            </div>
          </div>

          {/* Right Column: Large Editorial Photography (Asymmetric Composition) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Line */}
              <div className="absolute -inset-3 border border-stone-border/70 pointer-events-none hidden sm:block"></div>

              {/* Main Editorial Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-container shadow-2xl img-zoom-container">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85"
                  alt="Master barber crafting a precision haircut at OVERLOOK Studio"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Image Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent p-6 text-ivory flex justify-between items-end">
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-widest-xl text-stone-muted block">
                      Toronto Flagship
                    </span>
                    <span className="font-serif text-lg tracking-wide">
                      Station 01 — Scissor & Razor Work
                    </span>
                  </div>
                  <span className="font-sans text-xs font-semibold px-2.5 py-1 bg-ivory/20 backdrop-blur-sm border border-ivory/30">
                    EST. 2018
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Accent Card */}
              <div className="absolute -bottom-6 -left-6 bg-ivory p-4 sm:p-5 border border-stone-border shadow-xl max-w-[210px] hidden sm:block">
                <p className="font-serif text-2xl text-charcoal font-semibold mb-1">
                  100%
                </p>
                <p className="font-sans text-[11px] text-charcoal-50 leading-snug uppercase tracking-wider">
                  Tailored to your head shape & hair grain
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#story"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-charcoal-50 hover:text-charcoal transition-colors group"
      >
        <span className="font-sans text-[10px] uppercase tracking-widest-xl">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
      </a>
    </section>
  );
};
