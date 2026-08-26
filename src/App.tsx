import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { Barbers } from './components/Barbers';
import { Transformations } from './components/Transformations';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { WhyOverlook } from './components/WhyOverlook';
import { TheSpace } from './components/TheSpace';
import { SocialGrid } from './components/SocialGrid';
import { VisitUs } from './components/VisitUs';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService('');
    }
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans flex flex-col selection:bg-sage/20 selection:text-charcoal">
      {/* Sticky Top Header */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* 2. Introduction & Ethos */}
        <Introduction />

        {/* 3. Services (No Pricing) */}
        <Services onSelectService={(service) => handleOpenContact(service)} />

        {/* 4. The Barbers / Artisans */}
        <Barbers onInquireBarber={(barber) => handleOpenContact(`Barber Consultation: ${barber}`)} />

        {/* 5. Transformations (Before / After with Interactive Draggable Slider) */}
        <Transformations />

        {/* 6. Client Lookbook Gallery (with Lightbox) */}
        <Gallery />

        {/* 7. Verified Client Reviews */}
        <Reviews />

        {/* 8. Why OVERLOOK */}
        <WhyOverlook />

        {/* 9. The Space / Studio Architecture */}
        <TheSpace />

        {/* 10. Social / Instagram Proof */}
        <SocialGrid />

        {/* 11. Location & Hours */}
        <VisitUs onOpenContact={() => handleOpenContact()} />

        {/* 12. Final Call to Action */}
        <FinalCta onOpenContact={() => handleOpenContact()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact / In Touch Concierge Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        prefillService={selectedService}
      />
    </div>
  );
};

export default App;
