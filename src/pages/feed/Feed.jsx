import React from 'react';
import { Rss, Clock, ArrowRight, Film, Play, Eye, Heart } from 'lucide-react';
import { posts, reels } from './feedData';

export default function Feed({ embedded = false }) {
  // Duplicate for seamless infinite continuous glide
  const marqueePosts = [...posts, ...posts, ...posts];

  return (
    <div id="feed" className={`w-full bg-feed-editorial ${embedded ? 'pt-16 pb-16 sm:pb-20' : 'min-h-screen pt-28 sm:pt-36 pb-16'} space-y-8 relative overflow-hidden select-none`}>
      {/* Embedded CSS for smooth continuous marquee flow */}
      <style>{`
        @keyframes continuousBlogStream {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }

        .blog-marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: continuousBlogStream 26s linear infinite;
          will-change: transform;
        }

        .blog-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="text-center space-y-2 max-w-xl mx-auto px-4 reveal-heading">
        <div className="inline-flex items-center gap-2 text-white bg-dark-overlay border border-muted/40 px-3.5 py-1 rounded-[4px] text-xs font-semibold tracking-wider uppercase shadow-brand-glow">
          <Rss className="w-3.5 h-3.5 text-secondary" /> Blogs & Achievements
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-near-black tracking-tight">
          Featured <span className="text-primary">Stories</span>
        </h2>
        <p className="text-body text-xs sm:text-sm font-sans font-medium">
          Auto-sliding technology articles, competition victories, and engineering insights.
        </p>
      </div>

      {/* ─── Photo-Centric Infinite Continuous Marquee Stream ─── */}
      <div className="w-full overflow-hidden py-4">
        <div className="blog-marquee-track cursor-pointer">
          {marqueePosts.map((post, idx) => (
            <div
              key={`post-${post.id}-${idx}`}
              className="w-[280px] sm:w-[320px] bg-white border border-[#e8e6e1] hover:border-primary/50 hover:shadow-[0_16px_40px_rgba(178,43,47,0.14)] p-4 sm:p-5 rounded-[22px] transition-all duration-300 flex-shrink-0 flex flex-col justify-between group shadow-sm"
            >
              {/* Category & Date Header */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-0.5 rounded-[4px]">
                    {post.category || 'Article'}
                  </span>
                  <span className="text-[10px] text-muted font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-muted" /> {post.date}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-extrabold text-near-black leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </div>

              {/* High-Resolution Photo (Primary Focal Point) */}
              <div className="w-full h-44 sm:h-52 rounded-[16px] overflow-hidden relative my-3 bg-light-tint border border-muted/30 shadow-inner">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-overlay/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Author & Action Footer */}
              <div className="flex items-center justify-between pt-2.5 border-t border-muted/30 text-xs">
                <span className="text-body text-xs">
                  By <span className="font-bold text-near-black">{post.author}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-primary font-bold group-hover:translate-x-0.5 transition-transform uppercase text-[11px] tracking-wider">
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Compact Reels Showcase ─── */}
      <div className="max-w-5xl mx-auto px-4 pt-4">
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
