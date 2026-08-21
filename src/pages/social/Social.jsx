import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from '../../components/SocialIcons';
import { REELS_DATA, POSTS_DATA, ACES_INSTAGRAM_URL } from '../../data/socialData';

export default function Social({ embedded = false }) {
  const [activeTab, setActiveTab] = useState('reels');
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [activePostIndex, setActivePostIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [showPlayIcon, setShowPlayIcon] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  const videoRefs = useRef([]);

  const activeList = activeTab === 'reels' ? REELS_DATA : POSTS_DATA;
  const activeIndex = activeTab === 'reels' ? activeReelIndex : activePostIndex;
  const setActiveIndex = activeTab === 'reels' ? setActiveReelIndex : setActivePostIndex;
  const total = activeList.length;

  // Window resize handler for dynamic 3D spacing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure ALL video cards play automatically simultaneously in a loop
  useEffect(() => {
    if (activeTab !== 'reels') return;
    
    videoRefs.current.forEach((videoEl) => {
      if (!videoEl) return;
      videoEl.muted = isMuted;
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          videoEl.muted = true;
          videoEl.play().catch(() => {});
        });
      }
    });
  }, [activeTab, isMuted, activeReelIndex]);

  // Synchronize muted state across all video elements
  useEffect(() => {
    videoRefs.current.forEach((videoEl) => {
      if (videoEl) {
        videoEl.muted = isMuted;
      }
    });
  }, [isMuted]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleCardClick = (idx, item) => {
    if (idx !== activeIndex) {
      setActiveIndex(idx);
      return;
    }
    // Clicking the active center card redirects directly to ACES Instagram
    window.open(item.instagramUrl || ACES_INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
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
      if (activeTab === 'reels' && e.key === 'm') {
        setIsMuted((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, activeIndex, activeReelIndex, isMuted]);

  // Card spacing tuned so 5 cards seamlessly span to the left and right screen edges on PC screens,
  // while showing 3 cards (center + peeking sides) on mobile phones.
  const getCardSpacing = () => {
    if (windowWidth < 640) return 290;
    if (windowWidth < 1024) return 350;
    if (windowWidth < 1440) return 390;
    return 430;
  };

  const cardSpacing = getCardSpacing();

  return (
    <div
      id="social"
      className={`w-full bg-[#FFF4F2] ${
        embedded ? 'pt-16 sm:pt-24 pb-16' : 'min-h-screen pt-28 sm:pt-36 pb-24'
      } px-0 flex flex-col justify-center items-center overflow-hidden relative select-none`}
    >
      {/* Background ambient warm glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(209,165,80,0.16) 0%, rgba(178,43,47,0.08) 50%, transparent 75%)'
        }}
      />

      <div className="w-full z-10 space-y-7">
        
        {/* Header Title */}
        <div className="text-center space-y-2 px-4 reveal-heading max-w-3xl mx-auto">
          <a
            href={ACES_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-1.5 rounded-[4px] text-xs font-bold tracking-widest uppercase shadow-brand-glow transition-all hover:scale-105"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-white" /> @aces.dit Instagram
          </a>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-gradient-brand tracking-tight">
            Social Highlights
          </h1>
          <p className="text-body text-xs sm:text-sm md:text-base max-w-lg mx-auto font-sans font-medium">
            Swipe left or right or use arrow buttons to explore interactive reels and updates.
          </p>
        </div>

        {/* Tab Switcher: REELS / POSTS */}
        <div className="flex justify-center items-center px-4">
          <div className="inline-flex p-1 rounded-full bg-[#faece9] border border-[#edd7d1] shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('reels')}
              className={`px-8 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-250 cursor-pointer ${
                activeTab === 'reels'
                  ? 'bg-primary text-white shadow-brand-glow'
                  : 'text-muted hover:text-near-black hover:bg-white/40'
              }`}
            >
              Reels
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('posts')}
              className={`px-8 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-250 cursor-pointer ${
                activeTab === 'posts'
                  ? 'bg-primary text-white shadow-brand-glow'
                  : 'text-muted hover:text-near-black hover:bg-white/40'
              }`}
            >
              Posts
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container (Spans full viewport width with far-left and far-right desktop arrow buttons) */}
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden py-2 px-0">
          
          {/* Left Arrow Button (Only on PCs / Laptops, vertically centered at far left edge) */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-4 lg:left-8 xl:left-12 top-1/2 -translate-y-1/2 z-40 w-12 h-12 lg:w-14 lg:h-14 bg-white/95 hover:bg-white text-near-black hover:text-primary rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-brand-glow border border-[#e8e6e1] hover:border-primary/50 transition-all duration-200 cursor-pointer items-center justify-center hover:scale-110 active:scale-95 backdrop-blur-md"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
          </button>

          {/* Right Arrow Button (Only on PCs / Laptops, vertically centered at far right edge) */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-4 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 z-40 w-12 h-12 lg:w-14 lg:h-14 bg-white/95 hover:bg-white text-near-black hover:text-primary rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-brand-glow border border-[#e8e6e1] hover:border-primary/50 transition-all duration-200 cursor-pointer items-center justify-center hover:scale-110 active:scale-95 backdrop-blur-md"
            aria-label="Next card"
          >
            <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
          </button>

          {/* Swiper Animated Track */}
          <div className="relative w-full h-[600px] sm:h-[650px] lg:h-[700px] flex items-center justify-center [perspective:1400px]">
            
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              style={{ touchAction: 'pan-y' }}
            >
              {activeList.map((item, idx) => {
                // Shortest circular distance calculation
                let offset = idx - activeIndex;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isCenter = offset === 0;
                const isVisible = Math.abs(offset) <= 2.5;

                return (
                  <motion.div
                    key={`${activeTab}-${item.id}`}
                    onClick={() => handleCardClick(idx, item)}
                    initial={false}
                    animate={{
                      scale: isCenter ? 1 : Math.abs(offset) <= 1.2 ? 0.88 : 0.77,
                      opacity: isCenter ? 1 : Math.abs(offset) <= 1.2 ? 0.82 : isVisible ? 0.52 : 0,
                      x: offset * cardSpacing,
                      rotateY: offset * -8,
                      zIndex: isCenter ? 30 : 20 - Math.abs(Math.round(offset)) * 5,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 30,
                      mass: 0.8,
                    }}
                    className={`absolute w-[88vw] max-w-[340px] sm:w-[380px] md:w-[410px] lg:w-[440px] h-[550px] sm:h-[600px] lg:h-[650px] flex-shrink-0 cursor-pointer rounded-[32px] overflow-hidden border bg-white flex flex-col justify-between transition-all duration-300 p-4 sm:p-5 ${
                      isCenter 
                        ? 'shadow-[0_24px_70px_rgba(178,43,47,0.22),0_6px_20px_rgba(0,0,0,0.08)] border-primary/50 ring-2 ring-primary/20' 
                        : 'shadow-[0_12px_36px_rgba(0,0,0,0.08)] border-[#e8e6e1]'
                    }`}
                  >
                    {/* Card Top Header Strip */}
                    <div className="flex items-center justify-between pb-3 border-b border-muted/20">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 flex items-center justify-center shadow-sm">
                          <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-0.5">
                            <InstagramIcon className="w-full h-full" />
                          </div>
                        </div>
                        <span className="font-bold text-xs sm:text-sm text-near-black font-sans tracking-tight hover:text-primary transition-colors">
                          {item.author}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#F9EFE6] text-[#A67C2E] border border-[#ECD9C6] px-2.5 py-1 rounded-[4px]">
                          {item.tag || item.category}
                        </span>
                        {isCenter && (
                          <span className="text-primary/70 text-[10px] font-bold flex items-center gap-0.5">
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Main Media Area (Edge-to-edge seamless body) */}
                    {activeTab === 'reels' ? (
                      /* ─── REEL CARD BODY ─── */
                      <div className="flex-1 w-full mt-3 relative rounded-[24px] overflow-hidden bg-black flex items-center justify-center group/video shadow-inner">
                        <video
                          ref={(el) => (videoRefs.current[idx] = el)}
                          src={item.videoSrc}
                          poster={item.posterSrc}
                          playsInline
                          loop
                          muted={isMuted}
                          autoPlay
                          preload="auto"
                          className="w-full h-full object-cover select-none pointer-events-none"
                        />

                        {/* Top Right Floating Sound Toggle Button on Center Card */}
                        {isCenter && (
                          <button
                            onClick={toggleMute}
                            className="absolute top-3.5 right-3.5 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md active:scale-95"
                            aria-label={isMuted ? 'Unmute reel' : 'Mute reel'}
                            title={isMuted ? 'Click to unmute' : 'Click to mute'}
                          >
                            {isMuted ? (
                              <VolumeX className="w-4 h-4 text-white/90" />
                            ) : (
                              <Volume2 className="w-4 h-4 text-emerald-400" />
                            )}
                          </button>
                        )}

                        {/* Bottom Gradient with Reel Title */}
                        <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none text-left">
                          <h3 className="font-display text-sm sm:text-base font-bold text-white leading-snug drop-shadow-md">
                            {item.title}
                          </h3>
                          {item.subtitle && (
                            <p className="text-[11px] sm:text-xs text-white/80 font-sans line-clamp-1 mt-0.5 font-medium">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* ─── POST CARD BODY ─── */
                      <div className="flex-1 w-full mt-2 flex flex-col justify-between overflow-hidden">
                        <div className="w-full h-56 sm:h-64 lg:h-72 rounded-[24px] overflow-hidden relative shadow-sm mt-1 bg-light-tint flex-shrink-0 border border-[#e8e6e1]">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            draggable={false}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                        </div>

                        <div className="space-y-2 py-3 px-1 text-left flex-1 flex flex-col justify-center">
                          <h3 className="font-display font-extrabold text-base sm:text-lg lg:text-xl text-near-black leading-snug line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-body text-xs sm:text-sm leading-relaxed font-sans font-medium line-clamp-3">
                            {item.caption}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Bottom Pagination Dots & Mobile Navigation */}
        <div className="flex items-center justify-center gap-3 pt-2">
          {/* Mobile Prev Arrow */}
          <button
            onClick={handlePrev}
            className="md:hidden p-2 rounded-full bg-white border border-[#e8e6e1] text-near-black hover:text-primary shadow-sm active:scale-95"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {activeList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? 'w-9 bg-primary shadow-brand-glow'
                    : 'w-2.5 bg-muted/40 hover:bg-muted'
                }`}
                aria-label={`Card ${idx + 1}`}
              />
            ))}
          </div>

          {/* Mobile Next Arrow */}
          <button
            onClick={handleNext}
            className="md:hidden p-2 rounded-full bg-white border border-[#e8e6e1] text-near-black hover:text-primary shadow-sm active:scale-95"
            aria-label="Next card"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Active Item Caption Text below Carousel */}
        <div className="text-center space-y-1 pt-1 px-4 max-w-2xl mx-auto">
          <a
            href={ACES_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-base sm:text-lg font-bold text-near-black hover:text-primary transition-colors inline-flex items-center gap-1.5"
          >
            <span>{activeList[activeIndex]?.title}</span>
            <ExternalLink className="w-4 h-4 text-primary" />
          </a>
          <p className="text-body text-xs sm:text-sm leading-relaxed font-sans font-medium max-w-xl mx-auto line-clamp-2">
            {activeTab === 'reels' 
              ? activeList[activeIndex]?.subtitle 
              : activeList[activeIndex]?.caption}
          </p>
        </div>

      </div>
    </div>
  );
}
