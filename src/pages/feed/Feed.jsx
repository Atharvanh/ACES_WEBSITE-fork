import { Rss, Film, Heart, Eye, Play } from 'lucide-react';
import { posts, reels } from './feedData';

export default function Feed() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 space-y-16 relative">
      {/* Radial Glow Ambient Effect */}
      <div 
        className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 pointer-events-none -z-10" 
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(209,165,80,0.12) 0%, transparent 70%)' }}
      />

      {/* Header */}
      <div className="text-center space-y-3 max-w-xl mx-auto reveal-heading">
        <div className="inline-flex items-center gap-2 text-white bg-dark-overlay border border-muted/40 px-3.5 py-1 rounded-[4px] text-xs font-semibold tracking-wider uppercase shadow-brand-glow">
          <Rss className="w-3.5 h-3.5" /> Club Broadcast
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black uppercase text-gradient-brand tracking-tight">
          Social Feed
        </h1>
        <p className="text-muted text-sm sm:text-base font-sans">
          Keep up with the latest tech articles, event vlogs, and short educational reels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Posts Section (Col-span 2) */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="font-display text-2xl font-bold uppercase text-dark-overlay tracking-wider border-l-[3px] border-secondary pl-3 flex items-center gap-2 reveal-heading">
            Recent Articles
          </h2>
          
          <div className="space-y-8">
            {posts.map((post, idx) => (
              <div
                key={post.id}
                className={`bg-white border border-muted/50 rounded-[8px] overflow-hidden flex flex-col md:flex-row hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(178,43,47,0.12)] hover:border-primary transition-all duration-250 group shadow-sm reveal-card delay-${(idx + 1) * 100}`}
              >
                {/* Image Container with Gradient Overlay */}
                <div className="relative w-full md:w-60 h-52 md:h-auto overflow-hidden shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(178,43,47,0.14), rgba(209,165,80,0.14))' }}
                  />
                </div>

                <div className="p-6 flex flex-col justify-between space-y-4 flex-1">
                  <div className="space-y-2">
                    <span className="text-[11px] text-secondary font-mono font-bold tracking-wider uppercase">{post.date}</span>
                    <h3 className="font-display text-xl font-bold text-dark-overlay leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed font-sans">
                      {post.summary}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-muted/30 text-xs">
                    <span className="text-muted">By: <span className="text-dark-overlay font-semibold">{post.author}</span></span>
                    <button className="flex items-center gap-1.5 text-primary hover:scale-110 active:scale-95 transition-all cursor-pointer font-medium">
                      <Heart className="w-4 h-4 fill-current text-primary" /> {post.likes}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reels Section (Col-span 1) */}
        <div className="space-y-8">
          <h2 className="font-display text-2xl font-bold uppercase text-dark-overlay tracking-wider border-l-[3px] border-secondary pl-3 flex items-center gap-2 reveal-heading">
            <Film className="w-5 h-5 text-secondary" /> Short Reels
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {reels.map((reel, idx) => (
              <div
                key={reel.id}
                className={`bg-white border border-muted/50 p-4 rounded-[8px] flex gap-4 items-center group hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-primary transition-all duration-250 cursor-pointer shadow-sm reveal-card delay-${(idx + 1) * 100}`}
              >
                {/* Visual Video Placeholder */}
                <div className={`relative w-20 h-28 rounded-[6px] bg-gradient-to-br ${reel.videoPlaceholderColor} flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner group-hover:shadow-md transition-shadow`}>
                  <div className="absolute inset-0 bg-dark-overlay/20 group-hover:bg-dark-overlay/5 transition-colors" />
                  <Play className="w-6 h-6 text-white absolute group-hover:scale-110 transition-transform" />
                </div>
                
                <div className="space-y-2 flex-1">
                  <h3 className="font-display text-sm font-bold text-dark-overlay leading-snug group-hover:text-primary transition-colors">
                    {reel.title}
                  </h3>
                  <div className="flex gap-4 text-[11px] text-muted font-mono">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-muted" /> {reel.views}
                    </span>
                    <span className="flex items-center gap-1 text-primary font-semibold">
                      <Heart className="w-3.5 h-3.5 fill-current" /> {reel.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
