import React from 'react';
import { socialPosts } from '../data/mockData';
import { Instagram, Heart, ArrowUpRight } from 'lucide-react';

export const SocialGrid: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-stone-light border-b border-stone-border/60">
      <div className="max-w-site mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-stone-border/80 gap-6">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest-xl text-sage font-semibold block mb-3">
              Social Community
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight">
              Seen at OVERLOOK
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-sans text-sm font-semibold text-charcoal">
              @overlookstudio
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ivory border border-stone-border text-charcoal font-sans text-xs uppercase tracking-widest font-semibold hover:border-charcoal hover:bg-stone-container transition-all"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Follow Along</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 4 Social Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-ivory border border-stone-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-container img-zoom-container">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />

                {/* Overlay with Likes on Hover */}
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-ivory">
                  <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold">
                    <Heart className="w-4 h-4 fill-ivory text-ivory" />
                    <span>{post.likes} Likes</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="font-sans text-xs text-charcoal-100 leading-relaxed line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
