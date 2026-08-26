import React, { useState, useRef } from 'react';
import { transformationsData } from '../data/mockData';
import { MoveHorizontal, Check } from 'lucide-react';

export const Transformations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeTrans = transformationsData[activeTab];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformations" className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-site mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest-xl text-sage font-semibold block mb-3">
            Real Results
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight mb-4">
            Before. After. Different.
          </h2>
          <p className="font-sans text-sm sm:text-base text-charcoal-100 font-normal">
            Real transformations. Real clients. Real confidence.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {transformationsData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(index);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 font-sans text-xs uppercase tracking-widest font-semibold border transition-all duration-300 ${
                activeTab === index
                  ? 'bg-charcoal text-ivory border-charcoal shadow-md'
                  : 'bg-stone-light text-charcoal border-stone-border hover:bg-stone-container'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-stone-light p-6 sm:p-10 border border-stone-border/80 shadow-xl">
          
          {/* Draggable Slider Container */}
          <div className="lg:col-span-8 relative">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden select-none cursor-ew-resize bg-stone-container shadow-2xl border border-stone-border"
            >
              {/* After Image (Background / Right side) */}
              <img
                src={activeTrans.afterImage}
                alt={`${activeTrans.title} - After`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <span className="absolute top-4 right-4 bg-charcoal/80 text-ivory text-xs font-sans px-3 py-1 font-semibold tracking-widest uppercase backdrop-blur-sm z-10">
                AFTER
              </span>

              {/* Before Image (Foreground / Left side with clip-path) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img
                  src={activeTrans.beforeImage}
                  alt={`${activeTrans.title} - Before`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <span className="absolute top-4 left-4 bg-ivory/90 text-charcoal text-xs font-sans px-3 py-1 font-semibold tracking-widest uppercase backdrop-blur-sm border border-stone-border z-10">
                  BEFORE
                </span>
              </div>

              {/* Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-ivory shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-ivory text-charcoal border-2 border-charcoal shadow-2xl flex items-center justify-center">
                  <MoveHorizontal className="w-4 h-4 text-charcoal" />
                </div>
              </div>

            </div>

            {/* Slider Drag Hint */}
            <p className="font-sans text-[11px] text-center text-charcoal-50 uppercase tracking-widest mt-4">
              ← Drag slider left or right to compare transformation →
            </p>
          </div>

          {/* Transformation Story / Details */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold block mb-2">
                Case Study {activeTab + 1} of 4
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal mb-4">
                {activeTrans.title}
              </h3>

              <div className="space-y-3 py-4 border-y border-stone-border/80 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-sans text-charcoal-50 uppercase tracking-wider">Client</span>
                  <span className="font-sans font-semibold text-charcoal">{activeTrans.client}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-sans text-charcoal-50 uppercase tracking-wider">Service</span>
                  <span className="font-sans font-semibold text-charcoal">{activeTrans.service}</span>
                </div>
              </div>

              <p className="font-sans text-sm text-charcoal-100 leading-relaxed mb-6">
                {activeTrans.notes}
              </p>
            </div>

            <div className="p-4 bg-ivory border border-stone-border">
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal mb-1">
                <Check className="w-4 h-4 text-sage" />
                <span>Customised to hair density and growth direction</span>
              </div>
              <p className="font-sans text-[11px] text-charcoal-50 pl-6">
                Consulted, sectioned, cut and styled in our Toronto flagship studio.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
