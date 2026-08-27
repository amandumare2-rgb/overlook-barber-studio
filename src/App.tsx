import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    titleLine1: 'Sharp Cuts.',
    titleLine2: 'Individual Style.',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1800&q=90',
    alt: 'Master barber meticulously styling hair in luxury studio',
  },
  {
    id: 2,
    titleLine1: 'Masterful',
    titleLine2: 'Precision.',
    image:
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1800&q=90',
    alt: 'Editorial lifestyle photography of client with sharp fade haircut',
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Before / After Slider state
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Auto-advance hero slideshow every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  // Handle Drag logic for Before/After Slider
  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderContainerRef.current) return;
      const rect = sliderContainerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handlePointerUp = () => setIsDragging(false);
    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    if (isDragging) {
      window.addEventListener('pointerup', handlePointerUp);
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointercancel', handlePointerUp);
    }

    return () => {
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1c1a] antialiased selection:bg-[#e8ffe4] selection:text-[#637762]">
      {/* Sticky Navigation Header */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#faf9f6]/90 backdrop-blur-md border-b border-[#757873]/10 transition-all duration-300">
        <div className="flex justify-between items-center px-6 md:px-16 py-4 max-w-[1280px] mx-auto">
          <a
            href="#"
            className="font-serif text-[28px] md:text-[32px] tracking-tight text-[#1a1c1a] select-none"
          >
            OVERLOOK
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            <a
              href="#"
              className="text-[#615e57] border-b border-[#615e57] pb-1 text-[12px] font-semibold tracking-[0.1em] uppercase hover:text-[#1a1c1a] transition-colors"
            >
              Home
            </a>
            <a
              href="#our-story"
              className="text-[#454843] text-[12px] font-semibold tracking-[0.1em] uppercase hover:text-[#615e57] transition-colors"
            >
              Our Story
            </a>
            <a
              href="#services"
              className="text-[#454843] text-[12px] font-semibold tracking-[0.1em] uppercase hover:text-[#615e57] transition-colors"
            >
              Services
            </a>
            <a
              href="#team"
              className="text-[#454843] text-[12px] font-semibold tracking-[0.1em] uppercase hover:text-[#615e57] transition-colors"
            >
              The Team
            </a>
            <a
              href="#transformations"
              className="text-[#454843] text-[12px] font-semibold tracking-[0.1em] uppercase hover:text-[#615e57] transition-colors"
            >
              Transformations
            </a>
            <a
              href="#reviews"
              className="text-[#454843] text-[12px] font-semibold tracking-[0.1em] uppercase hover:text-[#615e57] transition-colors"
            >
              Reviews
            </a>
            <a
              href="#visit"
              className="text-[#454843] text-[12px] font-semibold tracking-[0.1em] uppercase hover:text-[#615e57] transition-colors"
            >
              Visit Us
            </a>
          </nav>

          <button className="hidden md:block bg-[#1a1c1a] text-[#ffffff] px-6 py-3 text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-[#615e57] transition-colors duration-300 rounded-none">
            Get in Touch
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1a1c1a] p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#faf9f6] border-b border-[#757873]/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#1a1c1a] text-[13px] font-semibold tracking-[0.1em] uppercase py-1"
            >
              Home
            </a>
            <a
              href="#our-story"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#454843] text-[13px] font-semibold tracking-[0.1em] uppercase py-1 hover:text-[#1a1c1a]"
            >
              Our Story
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#454843] text-[13px] font-semibold tracking-[0.1em] uppercase py-1 hover:text-[#1a1c1a]"
            >
              Services
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#454843] text-[13px] font-semibold tracking-[0.1em] uppercase py-1 hover:text-[#1a1c1a]"
            >
              The Team
            </a>
            <a
              href="#transformations"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#454843] text-[13px] font-semibold tracking-[0.1em] uppercase py-1 hover:text-[#1a1c1a]"
            >
              Transformations
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#454843] text-[13px] font-semibold tracking-[0.1em] uppercase py-1 hover:text-[#1a1c1a]"
            >
              Reviews
            </a>
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#454843] text-[13px] font-semibold tracking-[0.1em] uppercase py-1 hover:text-[#1a1c1a]"
            >
              Visit Us
            </a>
            <div className="pt-2">
              <button className="w-full bg-[#1a1c1a] text-[#ffffff] px-6 py-3 text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-[#615e57] transition-colors rounded-none">
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-[80px]">
        {/* Hero Section */}
        <section className="min-h-[850px] md:min-h-[920px] flex flex-col md:flex-row items-center px-6 md:px-16 max-w-[1280px] mx-auto gap-8 md:gap-12 py-12 md:py-0">
          {/* Left Content Area */}
          <div className="flex-1 flex flex-col items-start justify-center pr-0 md:pr-12 relative z-20 w-full">
            {/* Rating pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border-thin-charcoal rounded-full mb-8 bg-[#faf9f6]">
              <Star className="w-3.5 h-3.5 fill-[#637762] text-[#637762]" />
              <span className="text-[12px] font-semibold tracking-[0.1em] text-[#454843]">
                4.9/5 (2,000+ Clients)
              </span>
            </div>

            {/* Slideshow Title Container */}
            <div className="relative w-full h-[150px] md:h-[190px] mb-6">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`slide ${
                    currentSlide === index ? 'active' : ''
                  } absolute inset-0 flex flex-col justify-center`}
                >
                  <h1 className="font-serif text-[44px] md:text-[76px] lg:text-[80px] text-[#1a1c1a] leading-[1.08] tracking-[-0.02em] title-fade">
                    {slide.titleLine1}
                    <br />
                    {slide.titleLine2}
                  </h1>
                </div>
              ))}
            </div>

            {/* Subtitle */}
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#454843] max-w-md mb-10">
              Modern barbering built around precision, personality and the way
              you want to look.
            </p>

            {/* CTA Button */}
            <button className="bg-[#1a1c1a] text-[#ffffff] px-8 py-4 text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-[#615e57] transition-colors duration-300 rounded-none mb-10 md:mb-0 shadow-sm">
              Book an Appointment
            </button>

            {/* Slide Navigation Indicator */}
            <div className="flex items-center gap-6 mt-8 md:mt-20">
              <span className="text-[12px] font-semibold tracking-[0.15em] text-[#454843]">
                0{currentSlide + 1}/0{heroSlides.length}
              </span>
              <div className="flex gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1 transition-all duration-300 rounded-full ${
                      currentSlide === idx
                        ? 'w-12 bg-[#1a1c1a]'
                        : 'w-12 bg-[#c5c7c1] hover:bg-[#757873]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Slideshow Area */}
          <div className="flex-1 w-full relative h-[480px] sm:h-[580px] md:h-[720px] lg:h-[780px] mt-6 md:mt-0 overflow-hidden">
            {/* Architectural Charcoal Outline Offset Box */}
            <div className="absolute inset-0 border-thin-charcoal translate-x-4 translate-y-4 hidden md:block z-0 pointer-events-none" />

            {/* Image Slides */}
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${
                  currentSlide === index ? 'active' : ''
                } relative z-10 w-full h-full`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover grayscale-[15%]"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Intro / Our Story Section */}
        <section
          id="our-story"
          className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto border-t border-[#757873]/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Image with EST. 2018 Badge */}
            <div className="md:col-span-5 relative h-[440px] md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1800&q=90"
                alt="Detailed close-up of premium barbering tools"
                className="w-full h-full object-cover shadow-sm"
              />
              {/* EST. 2018 Floating Circle */}
              <div className="absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6 bg-[#faf9f6] p-4 md:p-6 border-thin-charcoal rounded-full w-28 h-28 md:w-32 md:h-32 flex items-center justify-center shadow-md">
                <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.1em] text-center leading-tight text-[#1a1c1a]">
                  EST.
                  <br />
                  2018
                </span>
              </div>
            </div>

            <div className="md:col-span-1 hidden md:block" />

            {/* Right Text Philosophy Content */}
            <div className="md:col-span-6 flex flex-col justify-center mt-8 md:mt-0 pl-0 md:pl-8">
              <h2 className="font-serif text-[36px] md:text-[48px] text-[#1a1c1a] leading-tight mb-6">
                Barbering, Refined.
              </h2>
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#454843] mb-10">
                We treat hair as an art form and our studio as a gallery.
                Rejecting the cluttered tropes of traditional barbershops, we've
                created a space of calm, exclusivity, and meticulous attention
                to detail.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#615e57] mt-2.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-[22px] md:text-[24px] text-[#1a1c1a] mb-1">
                      Precision
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#454843]">
                      Exact, tailored cuts that respect your natural growth and
                      structure.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#615e57] mt-2.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-[22px] md:text-[24px] text-[#1a1c1a] mb-1">
                      Craft
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#454843]">
                      Heritage techniques elevated by contemporary architectural
                      sensibilities.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#615e57] mt-2.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-[22px] md:text-[24px] text-[#1a1c1a] mb-1">
                      Personal Style
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#454843]">
                      A collaborative approach to define the look that suits your
                      life.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Transformations Before / After Comparison Section */}
        <section
          id="transformations"
          className="py-24 px-6 md:px-16 border-t border-[#757873]/10 bg-[#f4f4f0]"
        >
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-serif text-[36px] md:text-[48px] text-[#1a1c1a] mb-4">
                Transformations
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#454843] max-w-2xl mx-auto">
                Witness the impact of precise, tailored grooming.
              </p>
            </div>

            {/* Interactive Before / After Slider Container */}
            <div
              ref={sliderContainerRef}
              onPointerDown={handlePointerDown}
              className="max-w-4xl mx-auto relative h-[520px] md:h-[650px] lg:h-[700px] slider-container bg-[#000000] border-thin-charcoal cursor-ew-resize shadow-md touch-none"
            >
              {/* Before Image (Left Base Layer) */}
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1800&q=90"
                alt="Before haircut - unkempt natural style"
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              />

              {/* Before Cut Label */}
              <div className="absolute top-6 left-6 bg-[#faf9f6]/95 backdrop-blur-sm px-4 py-2 text-[12px] font-semibold tracking-[0.1em] uppercase text-[#1a1c1a] border border-[#757873]/20 z-20 select-none shadow-sm">
                Before Cut
              </div>

              {/* After Image (Clipped Layer on Right) */}
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1800&q=90"
                alt="After haircut - crisp skin fade, textured crop, sculpted beard"
                draggable={false}
                style={{
                  clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
                }}
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              />

              {/* After Cut Label */}
              <div className="absolute top-6 right-6 bg-[#1a1c1a]/95 backdrop-blur-sm px-4 py-2 text-[12px] font-semibold tracking-[0.1em] uppercase text-[#ffffff] border border-[#757873]/20 z-20 select-none shadow-sm">
                After Cut
              </div>

              {/* Draggable Divider Handle */}
              <div
                style={{ left: `${sliderPosition}%` }}
                className="slider-handle"
              >
                <div className="slider-handle-button">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#1a1c1a] -mr-1" />
                  <ChevronRight className="w-3.5 h-3.5 text-[#1a1c1a] -ml-1" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="visit"
          className="bg-[#f4f4f0] border-t border-[#757873]/10 w-full py-16 transition-all"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 px-6 md:px-16 max-w-[1280px] mx-auto">
            {/* Column 1: Brand & Address */}
            <div className="col-span-1 flex flex-col gap-4">
              <span className="font-serif text-[32px] md:text-[36px] text-[#1a1c1a] tracking-tight">
                OVERLOOK
              </span>
              <p className="text-[15px] leading-relaxed text-[#454843] mt-2">
                248 King Street West
                <br />
                Toronto, ON
                <br />
                M5V 1H7
              </p>
            </div>

            {/* Column 2: Empty Spacer */}
            <div className="hidden md:block col-span-1" />

            {/* Column 3: Connect Links */}
            <div className="col-span-1 flex flex-col gap-3.5">
              <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#1a1c1a] mb-2">
                Connect
              </h4>
              <a
                href="#"
                className="text-[#454843] text-[15px] hover:text-[#615e57] transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-[#454843] text-[15px] hover:text-[#615e57] transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Column 4: Legal Links */}
            <div className="col-span-1 flex flex-col gap-3.5">
              <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#1a1c1a] mb-2">
                Legal
              </h4>
              <a
                href="#"
                className="text-[#454843] text-[15px] hover:text-[#615e57] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#454843] text-[15px] hover:text-[#615e57] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[#454843] text-[15px] hover:text-[#615e57] transition-colors"
              >
                Press
              </a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="px-6 md:px-16 max-w-[1280px] mx-auto mt-14 pt-8 border-t border-[#757873]/10 text-center md:text-left">
            <p className="text-[13px] text-[#454843]">
              © 2024 OVERLOOK Barber Studio. All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
