import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCtaProps {
  onOpenContact: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 lg:py-36 bg-stone-light relative overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-sans text-xs uppercase tracking-widest-xl text-sage font-semibold block mb-4">
              Begin The Experience
            </span>

            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-charcoal tracking-tight leading-[1.05] mb-6">
              Your Next Look <br />
              <span className="italic font-normal">Starts Here.</span>
            </h2>

            <p className="font-sans text-lg sm:text-xl text-charcoal-100 mb-10 max-w-lg font-normal">
              Come in for the cut. Leave with the confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#visit"
                className="inline-flex justify-center items-center px-8 py-4 bg-charcoal text-ivory font-sans text-xs uppercase tracking-widest font-semibold hover:bg-sage transition-colors duration-300 text-center"
              >
                Visit OVERLOOK
              </a>
              <button
                onClick={onOpenContact}
                className="inline-flex justify-center items-center gap-2 px-8 py-4 border border-charcoal/30 bg-ivory text-charcoal font-sans text-xs uppercase tracking-widest font-semibold hover:border-charcoal hover:bg-stone-container transition-all duration-300 text-center"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Editorial Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] bg-stone-container border border-stone-border shadow-2xl overflow-hidden img-zoom-container">
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=85"
                alt="Refined grooming finish at OVERLOOK Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent flex items-end p-6 text-ivory">
                <span className="font-serif italic text-lg">
                  “Sharp cuts. Individual style.”
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
