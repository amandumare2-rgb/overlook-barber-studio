import React, { useState } from 'react';
import { galleryData } from '../data/mockData';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryData.findIndex((i) => i.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryData.length;
    setSelectedImage(galleryData[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = galleryData.findIndex((i) => i.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    setSelectedImage(galleryData[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-stone-light border-b border-stone-border/60">
      <div className="max-w-site mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-stone-border/80">
          <div className="max-w-xl">
            <span className="font-sans text-xs uppercase tracking-widest-xl text-sage font-semibold block mb-3">
              Editorial Portfolio
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight">
              The OVERLOOK Look
            </h2>
          </div>
          <p className="font-sans text-sm text-charcoal-50 max-w-sm mt-4 md:mt-0 leading-relaxed">
            A curated visual record of fresh cuts, textured crops, refined tapers, and client craft captured right off the chair.
          </p>
        </div>

        {/* Masonry / Dynamic Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative bg-stone-container overflow-hidden cursor-pointer aspect-[4/5] border border-stone-border/70 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay with Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-ivory">
                <div className="flex justify-end">
                  <span className="p-2 bg-ivory/20 backdrop-blur-md rounded-full text-ivory">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-stone-muted block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-xl tracking-wide font-medium">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-ivory/70 hover:text-ivory p-2 focus:outline-none z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-ivory/10 hover:bg-ivory/20 text-ivory backdrop-blur-md transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-ivory/10 hover:bg-ivory/20 text-ivory backdrop-blur-md transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[70vh] w-auto object-contain shadow-2xl border border-ivory/10"
            />
            <div className="mt-4 text-center text-ivory">
              <span className="font-sans text-[11px] uppercase tracking-widest text-stone-muted block mb-1">
                {selectedImage.tag}
              </span>
              <h4 className="font-serif text-2xl tracking-wide">
                {selectedImage.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
