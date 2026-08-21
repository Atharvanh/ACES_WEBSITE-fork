import React from 'react';
import { Rss, Film, Play, Eye, Heart } from 'lucide-react';
import { posts, reels } from './feedData';
import AccordionGallery from '../../components/AccordionGallery';

export default function Feed({ embedded = false }) {
  return (
    <div id="feed" className={`w-full bg-[#FFF4F2] ${embedded ? 'pt-16 pb-16 sm:pb-20' : 'min-h-screen pt-28 sm:pt-36 pb-20'} space-y-10 relative overflow-hidden select-none`}>
      
      {/* Section Header */}
      <div className="text-center space-y-2 max-w-xl mx-auto px-4 reveal-heading">
        <div className="inline-flex items-center gap-2 text-white bg-dark-overlay border border-muted/40 px-3.5 py-1 rounded-[4px] text-xs font-bold tracking-wider uppercase shadow-brand-glow">
          <Rss className="w-3.5 h-3.5 text-secondary" /> Blogs & Achievements
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-near-black tracking-tight">
          Featured <span className="text-primary">Stories</span>
        </h2>
        <p className="text-body text-xs sm:text-sm font-sans font-medium">
          Hover across stories to expand technical breakthroughs, student insights, and competition victories.
        </p>
      </div>

      {/* ─── Interactive Accordion Gallery Animation ─── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AccordionGallery
          items={posts}
          defaultIndex={1}
          expandRatio={0.46}
          trigger="hover"
          accentColor="#b22b2f"
          overlayColor="#0a0812"
          textColor="#ffffff"
          grayscale={false}
          showLabels={true}
          duration={0.8}
          ease="power3.out"
          parallax={0.5}
          tilt={10}
          stagger={0.08}
          height={480}
          gap={12}
          radius={24}
          orientation="horizontal"
        />
      </div>

      {/* ─── Compact Reels Showcase ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between border-b border-muted/30 pb-3 mb-6">
          <h3 className="font-display text-lg sm:text-xl font-extrabold uppercase text-near-black tracking-wider border-l-[3px] border-secondary pl-3 flex items-center gap-2">
            <Film className="w-5 h-5 text-secondary" /> Student Vlogs & Reels
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reels.map((reel, idx) => (
            <div
              key={reel.id}
              className={`bg-white border border-[#e8e6e1] p-4 rounded-[16px] flex gap-4 items-center group hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(178,43,47,0.12)] hover:border-primary/50 transition-all duration-250 cursor-pointer shadow-sm reveal-card delay-${(idx + 1) * 100}`}
            >
              <div className={`relative w-16 h-20 rounded-[10px] bg-gradient-to-br ${reel.videoPlaceholderColor} flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner`}>
                <div className="absolute inset-0 bg-dark-overlay/20 group-hover:bg-dark-overlay/5 transition-colors" />
                <Play className="w-5 h-5 text-white absolute group-hover:scale-110 transition-transform" />
              </div>
              
              <div className="space-y-1.5 flex-1">
                <h4 className="font-display text-xs sm:text-sm font-bold text-near-black leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {reel.title}
                </h4>
                <div className="flex gap-3 text-[10px] text-muted font-mono">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3 text-muted" /> {reel.views}
                  </span>
                  <span className="flex items-center gap-1 text-primary font-bold">
                    <Heart className="w-3 h-3 fill-current" /> {reel.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
