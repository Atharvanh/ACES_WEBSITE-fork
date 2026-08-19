import { Rss, Film, Heart, Eye, Play } from 'lucide-react';
import { posts, reels } from './feedData';

export default function Feed() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 text-phoenix bg-[#222] border border-[#333] px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
          <Rss className="w-3.5 h-3.5" /> Club Broadcast
        </div>
        <h1 className="font-display text-4xl font-extrabold uppercase text-white">Social Feed</h1>
        <p className="text-gray-400 text-sm">
          Keep up with the latest tech articles, event vlogs, and short educational reels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Posts Section (Col-span 2) */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="font-display text-2xl font-bold uppercase text-white tracking-wider border-b border-[#222] pb-3 flex items-center gap-2">
            Recent Articles
          </h2>
          
          <div className="space-y-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-near-black border border-[#252525] rounded-xl overflow-hidden flex flex-col md:flex-row hover:border-primary/50 transition-colors"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full md:w-56 h-48 md:h-auto object-cover"
                />
                <div className="p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] text-gray-500 font-mono">{post.date}</span>
                    <h3 className="font-display text-xl font-bold text-white leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {post.summary}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[#222] text-xs">
                    <span className="text-gray-500">By: <span className="text-white font-medium">{post.author}</span></span>
                    <button className="flex items-center gap-1.5 text-primary hover:text-red-400 transition-colors cursor-pointer">
                      <Heart className="w-4 h-4 fill-current" /> {post.likes}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reels Section (Col-span 1) */}
        <div className="space-y-8">
          <h2 className="font-display text-2xl font-bold uppercase text-white tracking-wider border-b border-[#222] pb-3 flex items-center gap-2">
            <Film className="w-5 h-5 text-phoenix" /> Short Reels
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="bg-near-black border border-[#252525] p-4 rounded-xl flex gap-4 items-center group hover:border-primary/50 transition-all cursor-pointer"
              >
                {/* Visual Video Placeholder */}
                <div className={`relative w-20 h-28 rounded-lg bg-gradient-to-br ${reel.videoPlaceholderColor} flex-shrink-0 flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <Play className="w-6 h-6 text-white absolute" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display text-sm font-bold text-white leading-snug">
                    {reel.title}
                  </h3>
                  <div className="flex gap-4 text-[10px] text-gray-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> {reel.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-primary" /> {reel.likes}
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
