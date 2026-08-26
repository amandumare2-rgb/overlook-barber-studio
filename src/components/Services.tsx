import React, { useState } from 'react';
import { servicesData } from '../data/mockData';
import { Service } from '../types';
import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-site mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-stone-border/80">
          <div className="max-w-xl">
            <span className="font-sans text-xs uppercase tracking-widest-xl text-sage font-semibold block mb-3">
              Tailored Grooming Menu
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight">
              Our Services
            </h2>
          </div>
          <p className="font-sans text-sm text-charcoal-50 max-w-sm mt-4 md:mt-0 leading-relaxed">
            Every session begins with a one-on-one consultation and includes straight-edge neck cleanup, hot towel relaxation, and bespoke styling advice.
          </p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-stone-light border border-stone-border/70 flex flex-col justify-between overflow-hidden hover:border-charcoal/40 transition-all duration-500 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-stone-container img-zoom-container">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-ivory/90 backdrop-blur-sm px-3 py-1 font-serif text-sm text-charcoal font-semibold border border-stone-border/60">
                  {service.number}
                </span>
                <span className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur-sm text-ivory text-[11px] font-sans px-2.5 py-1 flex items-center gap-1.5 uppercase tracking-wider">
                  <Clock className="w-3 h-3" />
                  {service.duration}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-sage transition-colors">
                    {service.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal-100 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Explore Link / Action */}
                <div className="pt-4 border-t border-stone-border/60 flex items-center justify-between">
                  <button
                    onClick={() => setActiveService(service)}
                    className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-sage transition-colors"
                  >
                    <span>Explore Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectService(service.name)}
                    className="font-sans text-[11px] uppercase tracking-wider text-charcoal-50 hover:text-charcoal underline underline-offset-4"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note underneath */}
        <div className="mt-12 p-6 bg-stone-container/50 border border-stone-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
            <span className="font-sans text-xs sm:text-sm text-charcoal-100">
              All appointments include organic botanical shampoo, scalp stimulation, and artisan beverage service.
            </span>
          </div>
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-charcoal whitespace-nowrap">
            Toronto Studio
          </span>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-ivory border border-stone-border w-full max-w-lg p-6 sm:p-8 relative shadow-2xl animate-fade-in">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold">
                  Service {activeService.number}
                </span>
                <h3 className="font-serif text-3xl text-charcoal mt-1">
                  {activeService.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveService(null)}
                className="text-charcoal-50 hover:text-charcoal p-1"
              >
                ✕
              </button>
            </div>

            <div className="aspect-[16/9] mb-6 overflow-hidden bg-stone-container">
              <img
                src={activeService.image}
                alt={activeService.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-sans text-sm text-charcoal-100 leading-relaxed mb-6">
              {activeService.description}
            </p>

            <div className="p-4 bg-stone-container mb-6 flex justify-between items-center text-xs text-charcoal font-medium">
              <span>Standard Consultation & Cut</span>
              <span>Approx. {activeService.duration}</span>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  const s = activeService.name;
                  setActiveService(null);
                  onSelectService(s);
                }}
                className="w-full bg-charcoal text-ivory py-3.5 font-sans text-xs uppercase tracking-widest font-semibold hover:bg-sage transition-colors"
              >
                Inquire for {activeService.name}
              </button>
              <button
                onClick={() => setActiveService(null)}
                className="px-6 py-3.5 border border-stone-border text-charcoal font-sans text-xs uppercase tracking-widest font-semibold hover:bg-stone-container"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
