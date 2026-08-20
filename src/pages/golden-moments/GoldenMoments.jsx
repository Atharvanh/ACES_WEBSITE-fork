import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { goldenMoments } from './momentsData';

export default function GoldenMoments({ embedded = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const total = goldenMoments.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
  }, []);

  const getCardSpacing = () => {
    if (windowWidth < 640) return 300;
    if (windowWidth < 1024) return 360;
    if (windowWidth < 1440) return 400;
    return 430;
  };

  const cardSpacing = getCardSpacing();

  return (
    <div id="golden-moments" className={`w-full bg-golden-atmosphere ${embedded ? 'pt-16 sm:pt-20 pb-12' : 'min-h-screen pt-28 sm:pt-36 pb-20'} px-0 flex flex-col justify-center items-center overflow-hidden relative select-none`}>
      
      {/* Background ambient warm amber light tint */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none -z-10" 
        style={{ background: 'radial-gradient(circle, rgba(209,165,80,0.14) 0%, rgba(178,43,47,0.06) 50%, transparent 75%)' }}
      />

      <div className="w-full z-10 space-y-8">
        
        {/* Header Title */}
        <div className="text-center space-y-2 px-4 reveal-heading max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-1.5 rounded-[4px] text-xs font-bold tracking-widest uppercase shadow-brand-glow">
            <Award className="w-3.5 h-3.5" /> Landmark Milestones
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-gradient-brand tracking-tight">
            Golden Moments
          </h1>
          <p className="text-body text-xs sm:text-sm md:text-base max-w-lg mx-auto font-sans font-medium">
            Swipe left or right or drag across the cards to explore our landmark history.
          </p>
        </div>

        {/* Carousel Viewport Container (Spans full viewport width) */}
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden py-4">
          
          {/* Swiper Animated Track (Displays multiple cards spanning across screen) */}
          <div className="relative w-full h-[580px] sm:h-[640px] lg:h-[680px] flex items-center justify-center [perspective:1400px]">
            
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              style={{ touchAction: 'pan-y' }}
            >
              {goldenMoments.map((moment, idx) => {
                // Shortest circular distance calculation
                let offset = idx - activeIndex;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isCenter = offset === 0;
                const isVisible = Math.abs(offset) <= 2.5;

                return (
                  <motion.div
                    key={moment.id}
                    onClick={() => setActiveIndex(idx)}
                    initial={false}
                    animate={{
                      scale: isCenter ? 1 : Math.abs(offset) <= 1.2 ? 0.88 : 0.78,
                      opacity: isCenter ? 1 : Math.abs(offset) <= 1.2 ? 0.72 : isVisible ? 0.45 : 0,
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
                    className={`absolute w-[84vw] max-w-[340px] sm:w-[370px] lg:w-[400px] h-[550px] sm:h-[610px] lg:h-[650px] flex-shrink-0 cursor-pointer rounded-[28px] overflow-hidden border border-[#e8e6e1] bg-white hover:border-primary/50 p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 ${
                      isCenter 
                        ? 'shadow-[0_20px_60px_rgba(178,43,47,0.18),0_4px_16px_rgba(0,0,0,0.06)] border-primary/40' 
                        : 'shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {/* Brand Tagline */}
                    <div className="text-center space-y-1 pt-1">
                      <span className="text-[11px] sm:text-xs font-sans tracking-[0.25em] uppercase font-black text-secondary">
                        ACES DIT PUNE
                      </span>
                    </div>

                    {/* Middle Heading & Description */}
                    <div className="text-center space-y-3 sm:space-y-4 my-auto px-1">
                      <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl font-black uppercase tracking-tight text-primary leading-tight">
                        {moment.title}
                      </h2>
                      <p className={`text-body text-xs sm:text-sm lg:text-base font-sans font-medium leading-relaxed ${isCenter ? '' : 'line-clamp-3'}`}>
                        {moment.description}
                      </p>

                      {/* Pill Action Button */}
                      <div className="pt-2">
                        <button className="border-2 border-primary text-primary bg-transparent font-sans font-bold text-xs sm:text-sm py-2.5 px-7 rounded-[4px] transition-all hover:bg-primary hover:text-white hover:shadow-brand-glow tracking-wider uppercase cursor-pointer">
                          Read Story
                        </button>
                      </div>
                    </div>

                    {/* Bottom Arched Window Cutout Image */}
                    <div className="w-full h-52 sm:h-56 lg:h-64 rounded-t-[140px] overflow-hidden border-t-2 border-muted/30 shadow-md relative mt-3 flex-shrink-0 bg-light-tint">
                      <img
                        src={moment.image}
                        alt={moment.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-overlay/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Year Stamp Badge */}
                    <div className="absolute top-4 right-4 bg-secondary text-dark-overlay font-bold font-mono text-xs tracking-widest px-3.5 py-1 rounded-[4px] shadow-sm">
                      {moment.year}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Carousel Navigation Arrow Buttons & Indicators */}
        <div className="flex items-center justify-center gap-6 pt-2">
          <button
            onClick={handlePrev}
            className="p-3 bg-white hover:bg-light-tint border border-muted/50 text-muted hover:text-primary hover:border-primary rounded-full transition-all cursor-pointer shadow-md active:scale-95"
            aria-label="Previous milestone"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2 items-center">
            {goldenMoments.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex 
                    ? 'w-8 bg-primary shadow-brand-glow' 
                    : 'w-2.5 bg-muted/40 hover:bg-muted'
                }`}
                aria-label={`Milestone ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 bg-white hover:bg-light-tint border border-muted/50 text-muted hover:text-primary hover:border-primary rounded-full transition-all cursor-pointer shadow-md active:scale-95"
            aria-label="Next milestone"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Event / Photo Detail caption below card */}
        <div className="text-center space-y-2 pt-2 px-4 max-w-2xl mx-auto">
          <p className="font-display text-base sm:text-xl font-bold text-near-black tracking-wide">
            {goldenMoments[activeIndex].title} — <span className="text-secondary font-bold">{goldenMoments[activeIndex].year}</span>
          </p>
          <p className="text-body text-xs sm:text-sm lg:text-base leading-relaxed font-sans font-medium max-w-xl mx-auto">
            {goldenMoments[activeIndex].description}
          </p>
        </div>

      </div>
    </div>
  );
}
