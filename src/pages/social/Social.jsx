import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart, MessageCircle, ExternalLink, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { InstagramIcon } from '../../components/SocialIcons';

const REELS_DATA = [
  {
    id: 'reel-1',
    title: 'ACES Club Launch & Hackathon 2026',
    author: 'acunetix.dit',
    embedUrl: 'https://www.instagram.com/reel/DWRMReaiLGT/embed/',
    likes: '1.4k',
    comments: '86',
    tag: 'Flagship Event'
  },
  {
    id: 'reel-2',
    title: 'Hands-on Web3 & AI Workshop Teaser',
    author: 'aces.dit',
    embedUrl: 'https://www.instagram.com/reel/DWRMReaiLGT/embed/',
    likes: '890',
    comments: '42',
    tag: 'Technical Bootcamp'
  },
  {
    id: 'reel-3',
    title: 'Behind the Scenes: Core Design Committee',
    author: 'aces.dit',
    embedUrl: 'https://www.instagram.com/reel/DWRMReaiLGT/embed/',
    likes: '2.1k',
    comments: '134',
    tag: 'Campus Life'
  },
  {
    id: 'reel-4',
    title: 'Smart India Hackathon Victory Journey 🏆',
    author: 'aces.dit',
    embedUrl: 'https://www.instagram.com/reel/DWRMReaiLGT/embed/',
    likes: '3.4k',
    comments: '210',
    tag: 'National Award'
  }
];

const POSTS_DATA = [
  {
    id: 'post-1',
    title: 'National Coding Championship 2026 Winners!',
    caption: 'Huge congratulations to our algorithm team for securing 1st place among 120+ colleges at the Inter-College Tech Cup.',
    author: 'aces.dit',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80',
    date: '2 Days Ago',
    likes: '542',
    comments: '38',
    category: 'Achievement'
  },
  {
    id: 'post-2',
    title: 'Inaugural TechXpo 2026 Showcase Recap',
    caption: '40+ student innovations on display ranging from embedded IoT devices to generative AI agents. Thank you all for attending!',
    author: 'aces.dit',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
    date: '5 Days Ago',
    likes: '680',
    comments: '54',
    category: 'Exhibition'
  },
  {
    id: 'post-3',
    title: 'Mastering Full-Stack & System Design Workshop',
    caption: 'Interactive live coding session covering microservices, caching strategies, and frontend performance optimizations.',
    author: 'aces.dit',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80',
    date: '1 Week Ago',
    likes: '419',
    comments: '29',
    category: 'Workshop'
  },
  {
    id: 'post-4',
    title: 'Alumni Mentorship & Career Guidance Meet',
    caption: 'Welcoming back our distinguished alumni leaders from Google, Microsoft, and Uber for a special career Q&A panel.',
    author: 'aces.dit',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
    date: '2 Weeks Ago',
    likes: '890',
    comments: '72',
    category: 'Community'
  }
];

export default function Social() {
  const [activeTab, setActiveTab] = useState('reels');
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [activePostIndex, setActivePostIndex] = useState(0);

  const activeList = activeTab === 'reels' ? REELS_DATA : POSTS_DATA;
  const activeIndex = activeTab === 'reels' ? activeReelIndex : activePostIndex;
  const setActiveIndex = activeTab === 'reels' ? setActiveReelIndex : setActivePostIndex;
  const total = activeList.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleDragEnd = (_, info) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, activeReelIndex, activePostIndex]);

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-24 px-2 sm:px-4 flex flex-col items-center font-sans relative overflow-hidden select-none">
      {/* Subtle Background Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] pointer-events-none -z-10" 
        style={{ background: 'radial-gradient(circle, rgba(209,165,80,0.12) 0%, rgba(178,43,47,0.06) 45%, transparent 70%)' }}
      />

      {/* Header */}
      <div className="text-center space-y-2 mb-6 max-w-xl mx-auto reveal-heading">
        <div className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-[4px] shadow-brand-glow">
          <InstagramIcon className="w-3.5 h-3.5" /> Official Social
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black uppercase text-gradient-brand tracking-tight">
          Social Highlights
        </h1>
        <p className="text-muted text-xs sm:text-sm font-sans">
          Swipe left or right or use arrow buttons to explore interactive reels and updates.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="bg-white/90 backdrop-blur-md border border-[#e8e6e1] rounded-full flex p-1 mb-8 w-72 relative shadow-md reveal-card">
        <button 
          className={`flex-1 text-center py-2 rounded-full font-bold text-xs uppercase tracking-wider cursor-pointer transition-all duration-200 ease-out ${
            activeTab === 'reels' 
              ? 'bg-primary text-white shadow-[0_2px_12px_rgba(178,43,47,0.3)]' 
              : 'bg-transparent text-muted hover:text-primary hover:bg-light-tint'
          }`}
          onClick={() => setActiveTab('reels')}
        >
          Reels
        </button>
        <button 
          className={`flex-1 text-center py-2 rounded-full font-bold text-xs uppercase tracking-wider cursor-pointer transition-all duration-200 ease-out ${
            activeTab === 'posts' 
              ? 'bg-primary text-white shadow-[0_2px_12px_rgba(178,43,47,0.3)]' 
              : 'bg-transparent text-muted hover:text-primary hover:bg-light-tint'
          }`}
          onClick={() => setActiveTab('posts')}
        >
          Posts
        </button>
      </div>

      {/* ─── 3D Framer Motion Carousel Container ─── */}
      <div className="w-full max-w-6xl flex flex-col items-center justify-center relative">
        <div className="relative w-full h-[600px] sm:h-[660px] flex items-center justify-center overflow-hidden [perspective:1200px]">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              style={{ touchAction: 'pan-y' }}
            >
              {activeList.map((item, idx) => {
                // Shortest circular offset calculation
                let offset = idx - activeIndex;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isCenter = offset === 0;
                const isVisible = Math.abs(offset) <= 1.5;
                const cardSpacing = typeof window !== 'undefined' && window.innerWidth < 640 ? 300 : 380;

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    initial={false}
                    animate={{
                      scale: isCenter ? 1 : 0.86,
                      opacity: isCenter ? 1 : isVisible ? 0.45 : 0,
                      x: offset * cardSpacing,
                      rotateY: offset * -12,
                      zIndex: isCenter ? 30 : 20 - Math.abs(Math.round(offset)) * 5,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 30,
                      mass: 0.8,
                    }}
                    className={`absolute w-[86vw] max-w-[340px] sm:w-[360px] h-[560px] sm:h-[620px] flex-shrink-0 cursor-pointer rounded-[20px] overflow-hidden border border-[#e8e6e1] bg-white transition-all duration-300 ${
                      isCenter 
                        ? 'shadow-[0_16px_48px_rgba(178,43,47,0.16),0_2px_8px_rgba(0,0,0,0.04)] border-primary/40' 
                        : 'shadow-md hover:border-primary/30'
                    }`}
                  >
                    {activeTab === 'reels' ? (
                      /* ─── High-Quality Reel Embed ─── */
                      <div className="w-full h-full flex flex-col bg-white">
                        {/* Reel Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-light-tint/60 border-b border-muted/30">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                              A
                            </div>
                            <div>
                              <p className="text-xs font-bold text-dark-overlay leading-none">{item.author}</p>
                              <span className="text-[10px] text-secondary font-medium">{item.tag}</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-[4px]">
                            REEL
                          </span>
                        </div>

                        {/* Interactive Playable Embed Video Viewport */}
                        <div className="flex-1 w-full relative bg-black flex items-center justify-center overflow-hidden">
                          <iframe
                            src={item.embedUrl}
                            className="w-full h-full border-none pointer-events-auto"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            allowFullScreen
                            title={item.title}
                            scrolling="no"
                          />
                        </div>

                        {/* Reel Footer Strip */}
                        <div className="p-3.5 bg-white border-t border-muted/30 flex items-center justify-between text-xs font-mono text-muted">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1 text-primary font-semibold">
                              <Heart className="w-3.5 h-3.5 fill-current" /> {item.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="w-3.5 h-3.5" /> {item.comments}
                            </span>
                          </div>
                          <a 
                            href="https://www.instagram.com/reel/DWRMReaiLGT/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[11px] text-secondary hover:text-primary flex items-center gap-1 font-semibold transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Open</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ) : (
                      /* ─── Framer Motion Post Card ─── */
                      <div className="w-full h-full flex flex-col justify-between p-5 bg-white">
                        {/* Post Header */}
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shadow-sm">
                                A
                              </div>
                              <div>
                                <h3 className="text-xs font-bold text-dark-overlay leading-tight">{item.author}</h3>
                                <p className="text-[10px] text-muted font-mono">{item.date}</p>
                              </div>
                            </div>
                            <span className="bg-secondary/15 text-dark-overlay text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px]">
                              {item.category}
                            </span>
                          </div>

                          <h2 className="font-display text-lg font-bold text-dark-overlay leading-tight mb-2">
                            {item.title}
                          </h2>
                        </div>

                        {/* Post Image with subtle zoom on hover */}
                        <div className="w-full h-56 rounded-[12px] overflow-hidden relative my-2 bg-light-tint border border-muted/30 shadow-inner group">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            draggable={false}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-overlay/40 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Caption & Interaction */}
                        <div className="space-y-3 pt-1">
                          <p className="text-xs text-muted leading-relaxed line-clamp-2">
                            {item.caption}
                          </p>

                          <div className="flex items-center justify-between pt-3 border-t border-muted/30 text-xs font-mono">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1 text-primary font-semibold">
                                <Heart className="w-3.5 h-3.5 fill-current" /> {item.likes}
                              </span>
                              <span className="flex items-center gap-1 text-muted">
                                <MessageCircle className="w-3.5 h-3.5" /> {item.comments}
                              </span>
                            </div>
                            <a 
                              href="https://instagram.com" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[11px] text-secondary hover:text-primary font-semibold flex items-center gap-1 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Instagram</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

        </div>

        {/* ─── Navigation Controls ─── */}
        <div className="flex items-center justify-between w-full max-w-md px-6 pt-4">
          <button
            onClick={handlePrev}
            className="p-3 bg-white hover:bg-light-tint border border-muted/50 text-muted hover:text-primary hover:border-primary rounded-full transition-all cursor-pointer shadow-md active:scale-95"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pagination Indicator Dots */}
          <div className="flex gap-2 items-center">
            {activeList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex 
                    ? 'w-7 bg-primary shadow-brand-glow' 
                    : 'w-2 bg-muted/40 hover:bg-muted'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 bg-white hover:bg-light-tint border border-muted/50 text-muted hover:text-primary hover:border-primary rounded-full transition-all cursor-pointer shadow-md active:scale-95"
            aria-label="Next item"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
