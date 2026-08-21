import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart, MessageCircle, ExternalLink, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { InstagramIcon } from '../../components/SocialIcons';

const REELS_DATA = [
  {
    id: 'reel-1',
    title: 'ACES Club Launch & Hackathon 2026',
    author: 'acunetix.dit',
    videoSrc: '/videos/reel-hackathon-2026.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
    instagramUrl: 'https://www.instagram.com/reel/DWRMReaiLGT/',
    likes: '1.4k',
    comments: '86',
    tag: 'Flagship Event'
  },
  {
    id: 'reel-2',
    title: 'Hands-on Web3 & AI Workshop Teaser',
    author: 'aces.dit',
    videoSrc: '/videos/reel-workshop-2026.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    instagramUrl: 'https://www.instagram.com/acesdit/',
    likes: '890',
    comments: '42',
    tag: 'Technical Bootcamp'
  },
  {
    id: 'reel-3',
    title: 'Behind the Scenes: Core Design Committee',
    author: 'aces.dit',
    videoSrc: '/videos/reel-bts-design.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80',
    instagramUrl: 'https://www.instagram.com/acesdit/',
    likes: '2.1k',
    comments: '134',
    tag: 'Campus Life'
  },
  {
    id: 'reel-4',
    title: 'Smart India Hackathon Victory Journey 🏆',
    author: 'aces.dit',
    videoSrc: '/videos/reel-sih-victory.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
    instagramUrl: 'https://www.instagram.com/acesdit/',
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

export default function Social({ embedded = false }) {
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

  const getCardSpacing = () => {
    if (typeof window === 'undefined') return 330;
    const w = window.innerWidth;
    if (w < 640) return 270;
    if (w < 1024) return 310;
    if (w < 1440) return 330;
    return 350;
  };

  const cardSpacing = getCardSpacing();

  return (
    <div id="social" className={`bg-social-atmosphere ${embedded ? 'py-16 sm:py-24' : 'min-h-screen pt-28 sm:pt-36 pb-24'} px-2 sm:px-4 flex flex-col items-center font-sans relative overflow-hidden select-none`}>
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
        <p className="text-body text-xs sm:text-sm font-sans font-medium">
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

      {/* 3D Carousel Viewport */}
      <div className="relative w-full max-w-6xl h-[560px] sm:h-[620px] flex items-center justify-center overflow-hidden [perspective:1200px] mb-6">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ touchAction: 'pan-y' }}
        >
          <AnimatePresence mode="popLayout">
            {activeList.map((item, idx) => {
              let offset = idx - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              return (
                <motion.div
                  key={`${activeTab}-${item.id}`}
                  onClick={() => setActiveIndex(idx)}
                  initial={false}
                  animate={{
                    scale: isCenter ? 1 : 0.85,
                    opacity: isCenter ? 1 : isVisible ? 0.55 : 0,
                    x: offset * cardSpacing,
                    rotateY: offset * -10,
                    zIndex: isCenter ? 30 : 20 - Math.abs(Math.round(offset)) * 5,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 30,
                    mass: 0.8,
                  }}
                  className={`absolute w-[80vw] max-w-[310px] sm:w-[330px] lg:w-[340px] h-[520px] sm:h-[570px] flex-shrink-0 cursor-pointer rounded-[24px] overflow-hidden border border-[#e8e6e1] bg-white transition-colors duration-200 flex flex-col justify-between shadow-sm ${
                    isCenter 
                      ? 'shadow-[0_16px_48px_rgba(178,43,47,0.16),0_2px_8px_rgba(0,0,0,0.04)] border-primary/40' 
                      : 'shadow-md hover:border-primary/30'
                  }`}
                >
                  {/* Card Header Strip */}
                  <div className="p-4 bg-white/95 border-b border-muted/30 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white">
                        <InstagramIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-xs text-near-black font-sans">{item.author}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary/15 text-dark-overlay px-2 py-0.5 rounded-[4px]">
                      {item.tag || item.category}
                    </span>
                  </div>

                  {/* Card Main Media Area */}
                  {activeTab === 'reels' ? (
                    <div className="flex-1 w-full relative bg-black flex items-center justify-center overflow-hidden group/video">
                      <video
                        src={item.videoSrc}
                        poster={item.posterSrc}
                        controls
                        playsInline
                        preload="none"
                        className="w-full h-full object-cover"
                        onClick={(e) => e.stopPropagation()}
                      />
                      {/* Overlay fallback if video isn't loaded */}
                      {!item.videoSrc && (
                        <div className="absolute inset-0 bg-dark-overlay/80 flex flex-col items-center justify-center gap-3 pointer-events-none">
                          <Play className="w-12 h-12 text-white opacity-60" />
                          <span className="text-white/50 text-xs font-mono">Video coming soon</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex-1 w-full relative overflow-hidden bg-light-tint flex flex-col justify-between p-4 space-y-3">
                      <div className="w-full h-48 rounded-[12px] overflow-hidden relative shadow-inner">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-display font-extrabold text-sm sm:text-base text-near-black leading-snug line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-body text-xs leading-relaxed line-clamp-3 font-medium">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Card Footer Strip with Instagram Link */}
                  <div className="p-3.5 bg-white border-t border-muted/30 flex items-center justify-between text-xs font-mono text-muted">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-primary font-bold">
                        <Heart className="w-3.5 h-3.5 fill-current" /> {item.likes}
                      </span>
                      <span className="flex items-center gap-1 text-body">
                        <MessageCircle className="w-3.5 h-3.5" /> {item.comments}
                      </span>
                    </div>
                    <a 
                      href={item.instagramUrl || "https://www.instagram.com/acesdit/"}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-white text-[11px] font-bold px-3 py-1.5 rounded-[4px] transition-all cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navigation Buttons & Indicators */}
      <div className="flex items-center justify-between w-full max-w-sm px-6">
        <button
          onClick={handlePrev}
          className="p-3 bg-white hover:bg-light-tint border border-muted/50 text-muted hover:text-primary hover:border-primary rounded-full transition-all cursor-pointer shadow-md active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

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
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 bg-white hover:bg-light-tint border border-muted/50 text-muted hover:text-primary hover:border-primary rounded-full transition-all cursor-pointer shadow-md active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
