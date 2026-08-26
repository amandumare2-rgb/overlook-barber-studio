import React from 'react';
import { reviewsData } from '../data/mockData';
import { Star, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-ivory border-b border-stone-border/60">
      <div className="max-w-site mx-auto px-6 md:px-12">
        
        {/* Section Header with Overall Rating Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-stone-border/80 gap-8">
          <div className="max-w-xl">
            <span className="font-sans text-xs uppercase tracking-widest-xl text-sage font-semibold block mb-3">
              Client Testimonials
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight">
              Good Hair Gets Noticed.
            </h2>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-stone-light p-6 border border-stone-border flex items-center gap-6 shadow-sm">
            <div>
              <span className="font-serif text-4xl font-bold text-charcoal block">4.9 / 5</span>
              <div className="flex text-amber-600 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-sans text-[11px] uppercase tracking-wider text-charcoal-50">
                Based on 500+ client reviews
              </span>
            </div>
            <div className="h-12 w-[1px] bg-stone-border hidden sm:block"></div>
            <div className="hidden sm:block">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-sage block mb-0.5">
                Verified Clients
              </span>
              <span className="font-sans text-xs text-charcoal-50">
                Toronto & Greater Area
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, index) => (
            <div
              key={review.id}
              className={`bg-stone-light border border-stone-border/80 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 bg-stone-container/40' : ''
              }`}
            >
              <div>
                {/* Star Rating & Quote Icon */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex text-amber-600">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-stone-border" />
                </div>

                {/* Review Text */}
                <p className="font-serif text-lg text-charcoal leading-relaxed italic mb-8">
                  "{review.content}"
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-6 border-t border-stone-border/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {review.image && (
                    <img
                      src={review.image}
                      alt={review.author}
                      className="w-10 h-10 rounded-full object-cover border border-stone-border"
                    />
                  )}
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-charcoal">
                      {review.author}
                    </h4>
                    <span className="font-sans text-xs text-charcoal-50">
                      {review.location}
                    </span>
                  </div>
                </div>

                <span className="font-sans text-[11px] uppercase tracking-wider font-semibold text-sage bg-ivory px-2.5 py-1 border border-stone-border/80">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
