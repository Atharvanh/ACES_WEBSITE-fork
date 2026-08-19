import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Image as ImageIcon, 
  MapPin, 
  Calendar, 
  ChevronDown, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  SearchX, 
  Sparkles 
} from 'lucide-react';
import { galleryItems, marqueeImages } from './galleryData';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const heroRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Touch swipe handling for modal
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const categories = ['All', 'Hackathons', 'Workshops', 'Cultural', 'Technical', 'Leadership'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  // Split marquee images into 4 columns
  const col1 = [...marqueeImages.slice(0, 3), ...marqueeImages.slice(0, 3)];
  const col2 = [...marqueeImages.slice(3, 6), ...marqueeImages.slice(3, 6)];
  const col3 = [...marqueeImages.slice(6, 9), ...marqueeImages.slice(6, 9)];
  const col4 = [...marqueeImages.slice(9, 12), ...marqueeImages.slice(9, 12)];

  // IntersectionObserver to pause marquee when off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Category switch loading simulation
  const handleCategoryChange = (category) => {
    if (category === selectedCategory) return;
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  };

  // Keyboard navigation for Lightbox Modal
  useEffect(() => {
    if (activeItemIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveItemIndex(null);
      if (e.key === 'ArrowLeft') {
        setActiveItemIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveItemIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (closeBtnRef.current) closeBtnRef.current.focus();

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex, filteredItems.length]);

  // Touch handlers for Lightbox swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next image
      setActiveItemIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Previous image
      setActiveItemIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="w-full bg-[#111111] text-white">
      {/* Embedded CSS for keyframes & responsive marquee styling */}
      <style>{`
        @keyframes galleryMarqueeUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes galleryMarqueeDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }

        .marquee-container {
          animation-play-state: ${isHeroVisible ? 'running' : 'paused'};
          will-change: transform;
        }

        .animate-marquee-sync {
          animation: galleryMarqueeUp 26s linear infinite;
        }

        @media (min-width: 1280px) {
          .animate-marquee-col1 { animation: galleryMarqueeUp 28s linear infinite; }
          .animate-marquee-col2 { animation: galleryMarqueeDown 22s linear infinite; }
          .animate-marquee-col3 { animation: galleryMarqueeUp 32s linear infinite; }
          .animate-marquee-col4 { animation: galleryMarqueeDown 24s linear infinite; }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-container {
            animation-play-state: paused !important;
          }
        }
      `}</style>

      {/* SECTION 1: HERO WITH AUTO-SCROLLING COLLAGE */}
      <section 
        ref={heroRef} 
        className="relative w-full h-[65vh] max-h-[520px] min-h-[400px] overflow-hidden bg-[#0a0a0a] border-b border-[#222222]"
        aria-label="Gallery Hero Showcase"
      >
        {/* Background Dark Scrolling Collage Grid */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 p-2 sm:p-4 opacity-50 contrast-125">
          {/* Column 1 (Visible Mobile + Desktop) */}
          <div className="overflow-hidden relative h-full">
            <div className={`flex flex-col gap-3 sm:gap-4 marquee-container animate-marquee-sync xl:animate-marquee-col1`}>
              {col1.map((img, idx) => (
                <div key={`${img.id}-c1-${idx}`} className="relative rounded-lg overflow-hidden shrink-0 h-44 sm:h-56 bg-[#181818]">
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading={idx < 3 ? "eager" : "lazy"}
                    className="w-full h-full object-cover brightness-[0.6] [@media(hover:hover)_and_(pointer:fine)]:hover:brightness-100 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-105 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 (Visible Mobile + Desktop) */}
          <div className="overflow-hidden relative h-full">
            <div className={`flex flex-col gap-3 sm:gap-4 marquee-container animate-marquee-sync xl:animate-marquee-col2`}>
              {col2.map((img, idx) => (
                <div key={`${img.id}-c2-${idx}`} className="relative rounded-lg overflow-hidden shrink-0 h-44 sm:h-56 bg-[#181818]">
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading={idx < 3 ? "eager" : "lazy"}
                    className="w-full h-full object-cover brightness-[0.6] [@media(hover:hover)_and_(pointer:fine)]:hover:brightness-100 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-105 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 (Tablet >= 768px) */}
          <div className="hidden md:block overflow-hidden relative h-full">
            <div className={`flex flex-col gap-3 sm:gap-4 marquee-container animate-marquee-sync xl:animate-marquee-col3`}>
              {col3.map((img, idx) => (
                <div key={`${img.id}-c3-${idx}`} className="relative rounded-lg overflow-hidden shrink-0 h-44 sm:h-56 bg-[#181818]">
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading={idx < 3 ? "eager" : "lazy"}
                    className="w-full h-full object-cover brightness-[0.6] [@media(hover:hover)_and_(pointer:fine)]:hover:brightness-100 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-105 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 4 (Desktop >= 1280px) */}
          <div className="hidden xl:block overflow-hidden relative h-full">
            <div className={`flex flex-col gap-3 sm:gap-4 marquee-container animate-marquee-col4`}>
              {col4.map((img, idx) => (
                <div key={`${img.id}-c4-${idx}`} className="relative rounded-lg overflow-hidden shrink-0 h-44 sm:h-56 bg-[#181818]">
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading={idx < 3 ? "eager" : "lazy"}
                    className="w-full h-full object-cover brightness-[0.6] [@media(hover:hover)_and_(pointer:fine)]:hover:brightness-100 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-105 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solid Dark Scrim & Radial Gradient Overlay (No glassmorphism/blur) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/90 via-[#0d0d0d]/80 to-[#111111] pointer-events-none" />

        {/* Centered Solid Hero Overlay Card */}
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 z-10">
          <div className="w-full max-w-xl bg-[#141414] border border-[#2b2b2b] rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-2xl">
            {/* Phoenix Gold Accent Badge */}
            <div className="inline-flex items-center gap-2 bg-[#211a10] border border-[#d1a550]/40 text-[#d1a550] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#d1a550]" />
              <span>ACES Archives</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-tight leading-tight">
              Capturing Moments, <span className="text-[#d1a550]">Coding History</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
              Explore the rich history of technical workshops, national hackathons, cultural festivals, and student leadership at DIT Pune.
            </p>

            {/* Action CTA with smooth scroll target */}
            <div className="pt-2">
              <a
                href="#gallery-grid"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-xs tracking-wider uppercase px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-md hover:shadow-primary/30"
              >
                <span>Explore Gallery</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ACTUAL GALLERY PAGE (GRID & FILTERS) */}
      <section 
        id="gallery-grid" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8 scroll-mt-24"
      >
        {/* Section Title & Info */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#d1a550] bg-[#1a1a1a] border border-[#2d2d2d] px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            <ImageIcon className="w-3.5 h-3.5" /> Club Records
          </div>
          <h2 className="font-display text-3xl font-extrabold uppercase text-white tracking-tight">Event Gallery</h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            Filter moments by domain or click any photo to open full preview.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-[#222222] pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-400 hover:text-white hover:bg-[#222222]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading Skeletons State */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((skel) => (
              <div key={`skel-${skel}`} className="bg-[#1a1a1a] border border-[#252525] rounded-xl overflow-hidden animate-pulse">
                <div className="h-52 bg-[#252525]" />
                <div className="p-6 space-y-3">
                  <div className="h-5 bg-[#2a2a2a] rounded w-3/4" />
                  <div className="h-4 bg-[#222222] rounded w-full" />
                  <div className="h-4 bg-[#222222] rounded w-2/3" />
                  <div className="pt-4 flex justify-between border-t border-[#222222]">
                    <div className="h-3 bg-[#252525] rounded w-16" />
                    <div className="h-3 bg-[#252525] rounded w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredItems.length === 0 ? (
          /* Empty State UI */
          <div className="text-center py-16 px-4 bg-[#141414] border border-[#252525] rounded-2xl max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 bg-[#222222] text-gray-400 rounded-full flex items-center justify-center mx-auto">
              <SearchX className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">No Moments Found</h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              There are currently no gallery items matching the "{selectedCategory}" category.
            </p>
            <button
              onClick={() => handleCategoryChange('All')}
              className="inline-flex items-center gap-2 bg-[#252525] hover:bg-[#333333] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Reset to All Categories
            </button>
          </div>
        ) : (
          /* Grid Display */
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setActiveItemIndex(idx)}
                  className="bg-[#1a1a1a] border border-[#252525] rounded-xl overflow-hidden group cursor-pointer hover:border-primary/60 transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-52 bg-[#141414]">
                    <img
                      src={item.thumb || item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#111111]/90 text-[#d1a550] border border-[#333333] text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-lg font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {item.caption}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#222222] text-[11px] text-gray-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gray-500" /> {item.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-primary" /> {item.location || 'DIT Pune'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* LIGHTBOX MODAL (TOUCH-FIRST & ACCESSIBLE) */}
      <AnimatePresence>
        {activeItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-none"
            onClick={() => setActiveItemIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview detail"
          >
            <div 
              className="relative w-full max-w-4xl bg-[#141414] border border-[#2b2b2b] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Header bar with title and visible close button */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#222222] bg-[#181818]">
                <div className="flex items-center gap-2 text-xs text-[#d1a550] uppercase font-bold tracking-wider">
                  <span>{filteredItems[activeItemIndex].category}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-400">{activeItemIndex + 1} of {filteredItems.length}</span>
                </div>
                <button
                  ref={closeBtnRef}
                  onClick={() => setActiveItemIndex(null)}
                  className="p-2 text-gray-400 hover:text-white bg-[#222222] hover:bg-[#333333] rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image View */}
              <div className="relative flex-grow overflow-hidden bg-black flex items-center justify-center min-h-[260px] sm:min-h-[380px]">
                <img
                  src={filteredItems[activeItemIndex].image}
                  alt={filteredItems[activeItemIndex].title}
                  className="max-h-[60vh] w-auto max-w-full object-contain select-none"
                />

                {/* Left Arrow Button */}
                <button
                  onClick={() => setActiveItemIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-[#333333] transition-colors cursor-pointer hidden sm:flex items-center justify-center"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={() => setActiveItemIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : 0))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-[#333333] transition-colors cursor-pointer hidden sm:flex items-center justify-center"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Caption & Metadata Footer */}
              <div className="p-6 bg-[#141414] border-t border-[#222222] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold font-display text-white">
                    {filteredItems[activeItemIndex].title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" /> {filteredItems[activeItemIndex].year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-primary" /> {filteredItems[activeItemIndex].location || 'DIT Pune'}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {filteredItems[activeItemIndex].caption}
                </p>
                <div className="text-[11px] text-gray-500 sm:hidden pt-1 italic">
                  Tip: Swipe left or right to navigate between photos.
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
