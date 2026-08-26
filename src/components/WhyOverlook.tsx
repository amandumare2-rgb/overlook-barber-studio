import React from 'react';
import { Scissors, UserCheck, Award, Sparkles } from 'lucide-react';

export const WhyOverlook: React.FC = () => {
  const features = [
    {
      num: '01',
      title: 'Precision',
      tagline: 'Every detail matters.',
      desc: 'Micro-taper transitions, exact perimeter lines, and calibrated scissor sectioning designed to maintain structure as it grows.',
      icon: Scissors
    },
    {
      num: '02',
      title: 'Personal Style',
      tagline: 'Your haircut should feel like yours.',
      desc: 'We never apply generic templates. We factor in your lifestyle, daily routine, hair density, and personal aesthetic.',
      icon: UserCheck
    },
    {
      num: '03',
      title: 'Experienced Barbers',
      tagline: 'Skilled hands. Modern techniques.',
      desc: 'Only career artisans with deep technical discipline across classic British scissor work and North American precision fades.',
      icon: Award
    },
    {
      num: '04',
      title: 'Premium Experience',
      tagline: 'Relaxed atmosphere. Exceptional service.',
      desc: 'Spacious architectural seating, curated soundscapes, premium botanical hair treatments, and single-malt beverage offerings.',
      icon: Sparkles
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-ivory border-b border-stone-border/60">
      <div className="max-w-site mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 pb-8 border-b border-stone-border/80">
          <span className="font-sans text-xs uppercase tracking-widest-xl text-sage font-semibold block mb-3">
            The Studio Standard
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight">
            Why OVERLOOK
          </h2>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.num}
                className="bg-stone-light border border-stone-border/80 p-8 flex flex-col justify-between hover:border-charcoal/40 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-serif text-3xl font-semibold text-charcoal-50">
                      {f.num}
                    </span>
                    <div className="p-2.5 bg-stone-container rounded-sm text-sage">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-charcoal mb-2 font-medium">
                    {f.title}
                  </h3>

                  <p className="font-sans text-xs uppercase tracking-wider text-sage font-semibold mb-4">
                    {f.tagline}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-charcoal-100 leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-border/60">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-charcoal-50">
                    OVERLOOK Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
