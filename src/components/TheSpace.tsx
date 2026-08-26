import React from 'react';
import { Armchair, Sparkles, Coffee, ShieldCheck } from 'lucide-react';

export const TheSpace: React.FC = () => {
  const highlights = [
    { icon: Armchair, title: 'Private Grooming Stations', desc: 'Custom leather chairs spaced widely apart for personal privacy.' },
    { icon: Sparkles, title: 'Premium Products', desc: 'Imported water-soluble clays, botanical pomades, and natural oils.' },
    { icon: Coffee, title: 'Complimentary Consultation', desc: 'Dedicated 5-minute pre-cut dialogue over artisanal espresso or bourbon.' },
    { icon: ShieldCheck, title: 'Relaxed Atmosphere', desc: 'No loud clippers or chaotic crowds—curated acoustics and calm lighting.' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-stone-light border-b border-stone-border/60">
      <div className="max-w-site mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-stone-border/80">
          <div className="max-w-xl">
            <span className="font-sans text-xs uppercase tracking-widest-xl text-sage font-semibold block mb-3">
              The Studio
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight">
              Step Inside
            </h2>
          </div>
          <p className="font-sans text-base text-charcoal-100 max-w-sm mt-4 md:mt-0 font-normal">
            Designed to feel relaxed, considered and effortlessly comfortable.
          </p>
        </div>

        {/* Large Editorial Interior Image with Overlaid Badges */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-stone-container border border-stone-border shadow-2xl mb-12 img-zoom-container">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=85"
            alt="OVERLOOK Barber Studio interior architecture in Toronto"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-6 sm:p-12 text-ivory">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-stone-muted block mb-1">
                Studio Architecture
              </span>
              <p className="font-serif text-2xl sm:text-3xl font-medium tracking-wide">
                King West Flagship • Toronto
              </p>
            </div>
          </div>
        </div>

        {/* 4 Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-ivory p-6 border border-stone-border flex items-start gap-4 shadow-sm"
              >
                <div className="p-3 bg-stone-container text-sage rounded-sm flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-charcoal mb-1">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-charcoal-50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
