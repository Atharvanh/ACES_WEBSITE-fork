import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Calendar } from 'lucide-react';
import { goldenMoments } from './momentsData';

export default function GoldenMoments({ embedded = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = goldenMoments.length;

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
    if (typeof window === 'undefined') return 330;
    const w = window.innerWidth;
    if (w < 640) return 270;
    if (w < 1024) return 310;
    if (w < 1440) return 330;
    return 350;
  };

  const cardSpacing = getCardSpacing();

  return (
    <div id="golden-moments" className={`bg-golden-atmosphere ${embedded ? 'pt-16 sm:pt-20 pb-4' : 'min-h-screen pt-28 sm:pt-36 pb-16'} px-2 sm:px-4 flex flex-col justify-center items-center overflow-hidden relative select-none`}>
      
      {/* Background ambient warm amber light tint */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none -z-10" 
        style={{ background: 'radial-gradient(circle, rgba(209,165,80,0.12) 0%, rgba(178,43,47,0.06) 45%, transparent 70%)' }}
      />

      <div className="w-full max-w-7xl z-10 space-y-8">
        
        {/* Header Title */}
        <div className="text-center space-y-2 px-4 reveal-heading">
          <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-1.5 rounded-[4px] text-xs font-bold tracking-widest uppercase shadow-brand-glow">
            <Award className="w-3.5 h-3.5" /> Landmark Milestones
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-gradient-brand tracking-tight">
            Golden Moments
          </h1>
          <p className="text-body text-xs sm:text-sm max-w-md mx-auto font-sans font-medium">
            Swipe left or right or drag across the cards to explore our landmark history.
          </p>
        </div>

        {/* Carousel Viewport Container */}
        <div className="relative w-full flex flex-col items-center justify-center overflow-visible">
          
          {/* Swiper Animated Track (Displays multiple cards on desktop) */}
          <div className="relative w-full h-[560px] sm:h-[620px] flex items-center justify-center overflow-hidden [perspective:1200px]">
            
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
                      scale: isCenter ? 1 : Math.abs(offset) <= 1.2 ? 0.88 : 0.76,
                      opacity: isCenter ? 1 : Math.abs(offset) <= 1.2 ? 0.65 : isVisible ? 0.35 : 0,
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
                    className={`absolute w-[78vw] max-w-[310px] sm:w-[330px] lg:w-[340px] h-[520px] sm:h-[570px] flex-shrink-0 cursor-pointer rounded-[24px] overflow-hidden border border-[#e8e6e1] bg-white hover:border-primary/40 p-6 flex flex-col justify-between transition-colors duration-200 ${
                      isCenter 
                        ? 'shadow-[0_16px_48px_rgba(178,43,47,0.16),0_2px_8px_rgba(0,0,0,0.04)] border-primary/40' 
                        : 'shadow-md'
                    }`}
                  >
                    {/* Brand Tagline */}
                    <div className="text-center space-y-1 pt-1">
                      <span className="text-[11px] font-sans tracking-[0.25em] uppercase font-black text-secondary">
                        ACES DIT PUNE
                      </span>
                    </div>

                    {/* Middle Heading & Description */}
                    <div className="text-center space-y-3 my-auto px-1">
                      <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-primary leading-tight">
                        {moment.title}
                      </h2>
                      <p className={`text-body text-xs sm:text-sm font-sans font-medium leading-relaxed ${isCenter ? '' : 'line-clamp-3'}`}>
                        {moment.description}
                      </p>

                      {/* Pill Action Button */}
                      <div className="pt-2">
                        <button className="border border-primary text-primary bg-transparent font-sans font-bold text-xs py-2.5 px-6 rounded-[4px] transition-all hover:bg-primary hover:text-white hover:shadow-brand-glow tracking-wider uppercase cursor-pointer">
                          Read Story
                        </button>
                      </div>
                    </div>

                    {/* Bottom Arched Window Cutout Image */}
                    <div className="w-full h-48 sm:h-52 rounded-t-[120px] overflow-hidden border-t-2 border-muted/30 shadow-md relative mt-3 flex-shrink-0 bg-light-tint">
                      <img
                        src={moment.image}
                        alt={moment.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-overlay/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Year Stamp Badge */}
                    <div className="absolute top-4 right-4 bg-secondary text-dark-overlay font-bold font-mono text-[10px] tracking-widest px-3 py-1 rounded-[4px] shadow-sm">
                      {moment.year}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Event / Photo Detail caption below card matching wireframe */}
        <div className="text-center space-y-2 pt-2 px-4 max-w-2xl mx-auto">
          <p className="font-display text-base sm:text-lg font-bold text-near-black tracking-wide">
            {goldenMoments[activeIndex].title} — <span className="text-secondary font-semibold">{goldenMoments[activeIndex].year}</span>
          </p>
          <p className="text-body text-xs sm:text-sm leading-relaxed font-sans font-medium max-w-lg mx-auto">
            {goldenMoments[activeIndex].description}
          </p>
        </div>

      </div>
    </div>
  );
}
