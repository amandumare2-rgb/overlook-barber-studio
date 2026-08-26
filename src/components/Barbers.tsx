import React from 'react';
import { barbersData } from '../data/mockData';
import { Instagram, Award, ArrowUpRight } from 'lucide-react';

interface BarbersProps {
  onInquireBarber: (barberName: string) => void;
}

export const Barbers: React.FC<BarbersProps> = ({ onInquireBarber }) => {
  return (
    <section id="barbers" className="py-24 lg:py-32 bg-stone-light border-y border-stone-border/60">
      <div className="max-w-site mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-stone-border/80">
          <div className="max-w-xl">
            <span className="font-sans text-xs uppercase tracking-widest-xl text-sage font-semibold block mb-3">
              Master Craftsmen
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight">
              Meet Your Barber
            </h2>
          </div>
          <p className="font-sans text-sm text-charcoal-50 max-w-sm mt-4 md:mt-0 leading-relaxed">
            Our team brings together international experience from premier studios in London, New York, and Toronto. No rush, no apprentices—only seasoned craft.
          </p>
        </div>

        {/* 4 Barbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {barbersData.map((barber) => (
            <div
              key={barber.id}
              className="group bg-ivory border border-stone-border/80 overflow-hidden flex flex-col justify-between hover:border-charcoal/50 hover:shadow-2xl transition-all duration-500"
            >
              {/* Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-container img-zoom-container">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Specialty Pill */}
                <div className="absolute bottom-3 inset-x-3 bg-ivory/95 backdrop-blur-md p-2.5 border border-stone-border/60 text-center transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-sage font-semibold block">
                    Specialty
                  </span>
                  <span className="font-sans text-xs text-charcoal font-medium truncate block">
                    {barber.specialty}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-serif text-2xl text-charcoal font-medium">
                      {barber.name}
                    </h3>
                  </div>

                  <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold block mb-3">
                    {barber.role}
                  </span>

                  <p className="font-sans text-xs sm:text-sm text-charcoal-100 leading-relaxed mb-4">
                    {barber.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-border/60 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-charcoal-50 font-medium">
                      <Award className="w-3.5 h-3.5 text-sage" />
                      {barber.experience}
                    </span>

                    <a
                      href={`https://instagram.com/${barber.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-charcoal-50 hover:text-charcoal transition-colors p-1"
                      title={`Instagram ${barber.instagram}`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    onClick={() => onInquireBarber(barber.name)}
                    className="w-full text-center py-2 bg-stone-light border border-stone-border text-charcoal font-sans text-[11px] uppercase tracking-wider font-semibold hover:bg-charcoal hover:text-ivory transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Inquire with {barber.name.split(' ')[0]}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
