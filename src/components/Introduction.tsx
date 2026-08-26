import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <section id="story" className="py-24 lg:py-32 bg-stone-light border-y border-stone-border/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Framing & EST Stamp */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative aspect-[4/5] bg-stone-container overflow-hidden border border-stone-border shadow-lg img-zoom-container">
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=85"
                alt="Refined scissor grooming and styling at OVERLOOK studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-ivory/90 backdrop-blur-sm px-4 py-2 border border-stone-border text-charcoal font-sans text-xs uppercase tracking-widest font-semibold">
                Est. 2018
              </div>
            </div>

            {/* Quote Pill below image */}
            <div className="mt-4 p-4 bg-ivory border border-stone-border/80 flex items-center justify-between">
              <span className="font-serif italic text-charcoal text-sm">
                “A haircut should look as sharp on day twenty as it does on day one.”
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 text-sage font-sans text-xs uppercase tracking-widest-xl font-semibold mb-4">
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight mb-8">
              Barbering, <br />
              <span className="italic font-normal">Refined.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-charcoal-100 leading-relaxed mb-6 font-normal">
              OVERLOOK is a modern barber studio built for people who appreciate great detail. From precision fades to timeless cuts and refined beard work, every service is tailored to the individual.
            </p>

            <p className="font-sans text-sm sm:text-base text-charcoal-50 leading-relaxed mb-10">
              Founded in Toronto’s King West design quarter, we stepped away from both the noisy novelty shops and rushed chain salons to create a calm, architectural space dedicated purely to classical scissor craft, clean blade work, and honest personal service.
            </p>

            {/* Core Values / 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-stone-border/80 mb-8">
              <div>
                <span className="block font-serif text-xl text-charcoal font-semibold mb-1">
                  Precision
                </span>
                <p className="font-sans text-xs text-charcoal-50 leading-relaxed">
                  Micron-level attention to lines, fades, and hair grain.
                </p>
              </div>

              <div>
                <span className="block font-serif text-xl text-charcoal font-semibold mb-1">
                  Craft
                </span>
                <p className="font-sans text-xs text-charcoal-50 leading-relaxed">
                  Decades of combined international master experience.
                </p>
              </div>

              <div>
                <span className="block font-serif text-xl text-charcoal font-semibold mb-1">
                  Personal Style
                </span>
                <p className="font-sans text-xs text-charcoal-50 leading-relaxed">
                  Designs that complement your natural bone structure.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-charcoal">
              <span className="w-8 h-[1px] bg-sage"></span>
              <span>Precision • Craft • Personal Style</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
