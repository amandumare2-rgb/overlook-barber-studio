import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Services', href: '#services' },
    { name: 'The Team', href: '#barbers' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-stone-border/60 py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-site mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-widest text-charcoal font-semibold">
              OVERLOOK
            </span>
            <span className="font-sans text-[9px] uppercase tracking-widest-2xl text-charcoal-50 -mt-1 group-hover:text-sage transition-colors">
              Barber Studio • Toronto
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs uppercase tracking-widest font-medium text-charcoal-100 hover:text-charcoal transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-charcoal hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-charcoal text-ivory px-6 py-3 font-sans text-xs uppercase tracking-widest font-semibold hover:bg-sage transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-sage focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-ivory/98 backdrop-blur-xl flex flex-col justify-between pt-28 pb-12 px-8 lg:hidden animate-fade-in">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl text-charcoal hover:text-sage transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-stone-border/60 flex flex-col space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full bg-charcoal text-ivory py-4 font-sans text-xs uppercase tracking-widest font-semibold text-center flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="font-sans text-xs text-charcoal-50 text-center tracking-wider">
              248 King Street West • Toronto, ON
            </p>
          </div>
        </div>
      )}
    </>
  );
};
