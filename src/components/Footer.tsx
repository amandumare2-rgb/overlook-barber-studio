import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ivory border-t border-stone-border/80 pt-20 pb-12">
      <div className="max-w-site mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-border/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl md:text-4xl tracking-widest text-charcoal font-semibold block mb-2">
                OVERLOOK
              </span>
              <p className="font-serif italic text-base text-charcoal-100 mb-6">
                “Sharp Cuts. Individual Style.”
              </p>
              <p className="font-sans text-xs sm:text-sm text-charcoal-50 max-w-sm leading-relaxed mb-8">
                A modern barber studio dedicated to classical scissor craft, clean blade work, and honest personal service in Toronto.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-stone-light border border-stone-border text-charcoal hover:text-sage hover:border-charcoal transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-stone-light border border-stone-border text-charcoal hover:text-sage hover:border-charcoal transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-stone-light border border-stone-border text-charcoal hover:text-sage hover:border-charcoal transition-colors font-sans text-xs font-bold"
                aria-label="TikTok"
              >
                TK
              </a>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-widest text-charcoal font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Our Story', href: '#story' },
                { name: 'Services', href: '#services' },
                { name: 'The Team', href: '#barbers' },
                { name: 'Transformations', href: '#transformations' },
                { name: 'Client Reviews', href: '#reviews' },
                { name: 'The Studio Space', href: '#gallery' },
                { name: 'Visit Us', href: '#visit' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-xs sm:text-sm text-charcoal-100 hover:text-sage transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4">
            <h4 className="font-sans text-xs uppercase tracking-widest text-charcoal font-semibold mb-6">
              Studio Contact
            </h4>
            <div className="space-y-4 font-sans text-xs sm:text-sm text-charcoal-100">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                <span>
                  248 King Street West<br />
                  Toronto, ON M5V 1H8, Canada
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sage flex-shrink-0" />
                <a href="tel:+14165550184" className="hover:text-sage transition-colors">
                  +1 (416) 555-0184
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sage flex-shrink-0" />
                <a href="mailto:hello@overlookstudio.com" className="hover:text-sage transition-colors">
                  hello@overlookstudio.com
                </a>
              </p>
            </div>

            <div className="mt-8 p-4 bg-stone-light border border-stone-border text-xs text-charcoal-50">
              <span className="font-semibold text-charcoal block mb-1">Hours:</span>
              Mon–Fri 9am–8pm • Sat 9am–6pm • Sun 10am–5pm
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-50 font-sans">
          <p>© 2026 OVERLOOK. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Portfolio Demo • Toronto, Canada</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-charcoal transition-colors p-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
