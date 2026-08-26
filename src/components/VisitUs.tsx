import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

interface VisitUsProps {
  onOpenContact: () => void;
}

export const VisitUs: React.FC<VisitUsProps> = ({ onOpenContact }) => {
  return (
    <section id="visit" className="py-24 lg:py-32 bg-ivory border-b border-stone-border/60">
      <div className="max-w-site mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 pb-8 border-b border-stone-border/80">
          <span className="font-sans text-xs uppercase tracking-widest-xl text-sage font-semibold block mb-3">
            Location & Hours
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight">
            Come Over.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact & Hours Details */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-stone-light p-8 sm:p-10 border border-stone-border/80 shadow-md">
            <div>
              <div className="mb-8">
                <span className="font-sans text-xs uppercase tracking-widest-xl text-sage font-semibold block mb-1">
                  Toronto Flagship
                </span>
                <h3 className="font-serif text-3xl text-charcoal font-semibold mb-2">
                  OVERLOOK Studio
                </h3>
                <p className="font-sans text-sm text-charcoal-100 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                  <span>
                    248 King Street West<br />
                    Toronto, ON M5V 1H8<br />
                    Canada
                  </span>
                </p>
              </div>

              {/* Direct Communications */}
              <div className="space-y-3 py-6 border-y border-stone-border/80 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-sage" />
                  <a
                    href="tel:+14165550184"
                    className="font-sans text-sm font-semibold text-charcoal hover:text-sage transition-colors"
                  >
                    +1 (416) 555-0184
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sage" />
                  <a
                    href="mailto:hello@overlookstudio.com"
                    className="font-sans text-sm text-charcoal-100 hover:text-charcoal transition-colors"
                  >
                    hello@overlookstudio.com
                  </a>
                </div>
              </div>

              {/* Studio Hours */}
              <div className="mb-8">
                <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-charcoal font-semibold mb-3">
                  <Clock className="w-3.5 h-3.5 text-sage" />
                  <span>Studio Hours</span>
                </div>
                <div className="space-y-2 font-sans text-xs text-charcoal-100">
                  <div className="flex justify-between py-1 border-b border-stone-border/40">
                    <span>Monday — Friday</span>
                    <span className="font-semibold text-charcoal">9:00 AM — 8:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-border/40">
                    <span>Saturday</span>
                    <span className="font-semibold text-charcoal">9:00 AM — 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Sunday</span>
                    <span className="font-semibold text-charcoal">10:00 AM — 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-stone-border/80">
              <a
                href="https://maps.google.com/?q=248+King+Street+West+Toronto+ON"
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex justify-center items-center gap-2 bg-charcoal text-ivory py-3.5 px-4 font-sans text-xs uppercase tracking-widest font-semibold hover:bg-sage transition-colors text-center"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
              <a
                href="tel:+14165550184"
                className="flex-1 inline-flex justify-center items-center gap-2 border border-charcoal/30 bg-ivory text-charcoal py-3.5 px-4 font-sans text-xs uppercase tracking-widest font-semibold hover:border-charcoal hover:bg-stone-container transition-all text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Studio</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Architectural Map Placeholder */}
          <div className="lg:col-span-7 bg-stone-container border border-stone-border/80 relative overflow-hidden flex flex-col justify-between min-h-[420px] shadow-md">
            
            {/* Map Imagery / Graphic Background */}
            <div className="absolute inset-0 bg-[#e5e3dc] opacity-90 flex items-center justify-center">
              {/* Stylized Minimal Grid Map */}
              <div className="w-full h-full p-8 flex flex-col justify-between relative">
                {/* Street Lines Representation */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1a1c1a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-stone-muted/70 -translate-y-1/2 flex items-center justify-center">
                  <span className="font-sans text-[10px] tracking-widest-xl uppercase text-charcoal-50 font-semibold">
                    King Street West
                  </span>
                </div>
                <div className="absolute left-1/3 top-0 bottom-0 w-3 bg-stone-muted/70 flex items-center justify-center">
                  <span className="font-sans text-[9px] tracking-widest uppercase text-charcoal-50 rotate-90 whitespace-nowrap">
                    University Ave
                  </span>
                </div>
                <div className="absolute right-1/4 top-0 bottom-0 w-3 bg-stone-muted/70 flex items-center justify-center">
                  <span className="font-sans text-[9px] tracking-widest uppercase text-charcoal-50 rotate-90 whitespace-nowrap">
                    Spadina Ave
                  </span>
                </div>

                {/* Map Pin Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center animate-bounce">
                  <div className="p-3 bg-charcoal text-ivory rounded-full shadow-2xl border-2 border-ivory">
                    <MapPin className="w-6 h-6 text-amber-500 fill-amber-500" />
                  </div>
                  <div className="mt-2 px-3 py-1 bg-ivory text-charcoal text-[11px] font-sans font-semibold uppercase tracking-wider border border-stone-border shadow-md whitespace-nowrap">
                    OVERLOOK Studio
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom floating badge */}
            <div className="relative z-10 m-6 p-4 bg-ivory/95 backdrop-blur-sm border border-stone-border/80 max-w-sm flex items-center justify-between shadow-lg">
              <div>
                <p className="font-sans text-xs font-semibold text-charcoal">King West Entertainment District</p>
                <p className="font-sans text-[11px] text-charcoal-50">5 min walk from St. Andrew Subway Station</p>
              </div>
              <button
                onClick={onOpenContact}
                className="font-sans text-xs font-semibold uppercase tracking-wider text-sage hover:text-charcoal"
              >
                Inquire
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
