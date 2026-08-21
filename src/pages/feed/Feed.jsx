import React from 'react';
import { Rss, Film, Play, Eye, Heart } from 'lucide-react';
import { posts, reels } from './feedData';
import BounceCards from '../../components/ui/BounceCards';

export default function Feed({ embedded = false }) {
  const bounceImages = posts.slice(0, 5);
  const transformStyles = [
    "rotate(10deg) translate(-180px)",
    "rotate(5deg) translate(-90px)",
    "rotate(-2deg)",
    "rotate(-8deg) translate(90px)",
    "rotate(6deg) translate(180px)"
  ];

  return (
    <div id="feed" className={`w-full bg-[#FFF4F2] ${embedded ? 'pt-14 pb-14 sm:pb-18' : 'min-h-screen pt-24 sm:pt-32 pb-16'} space-y-10 relative overflow-hidden select-none`}>
      {/* Header */}
      <div className="text-center space-y-2 max-w-xl mx-auto px-4 reveal-heading">
        <div className="inline-flex items-center gap-2 text-white bg-dark-overlay border border-muted/40 px-3.5 py-1 rounded-[4px] text-xs font-semibold tracking-wider uppercase shadow-brand-glow">
          <Rss className="w-3.5 h-3.5 text-secondary" /> Blogs & Achievements
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-near-black tracking-tight">
          Featured <span className="text-primary">Stories</span>
        </h2>
        <p className="text-body text-xs sm:text-sm font-sans font-medium">
          Hover over any card to bring the story into focus with interactive bouncy physics.
        </p>
      </div>

      {/* ─── Interactive Bounce Cards Section ─── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center py-4">
        <BounceCards
          images={bounceImages}
          containerWidth={600}
          containerHeight={320}
          animationDelay={0.4}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.7)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      </div>

      {/* ─── Student Vlogs & Reels Showcase ─── */}
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <div className="flex items-center justify-between border-b border-muted/30 pb-3 mb-6">
          <h3 className="font-display text-lg sm:text-xl font-extrabold uppercase text-near-black tracking-wider border-l-[3px] border-secondary pl-3 flex items-center gap-2">
            <Film className="w-5 h-5 text-secondary" /> Student Vlogs & Reels
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {reels.map((reel, idx) => (
            <div
              key={reel.id}
              className={`bg-white border border-muted/50 p-4 rounded-[14px] flex gap-4 items-center group hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-primary transition-all duration-250 cursor-pointer shadow-sm reveal-card delay-${(idx + 1) * 100}`}
            >
              <div className={`relative w-16 h-20 rounded-[8px] bg-gradient-to-br ${reel.videoPlaceholderColor} flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner`}>
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
