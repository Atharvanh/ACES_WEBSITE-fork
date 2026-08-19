import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { goldenMoments } from './momentsData';

export default function GoldenMoments() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Card themes matching luxury editorial style
  const cardThemes = [
    { bg: 'bg-[#2e3728]', border: 'border-[#434f3c]', accent: 'text-[#c6d1be]', btn: 'bg-[#c2c5be] text-[#222]' }, // Forest Olive
    { bg: 'bg-[#331d20]', border: 'border-[#522f34]', accent: 'text-[#e8b5ba]', btn: 'bg-[#d9c4c6] text-[#222]' }, // Wine Red
    { bg: 'bg-[#29241b]', border: 'border-[#473d2b]', accent: 'text-[#d6c5a0]', btn: 'bg-[#ded6c3] text-[#222]' }, // Vintage Gold
    { bg: 'bg-[#1b2229]', border: 'border-[#2d3a47]', accent: 'text-[#b0c4d6]', btn: 'bg-[#c4cfd9] text-[#222]' }, // Deep Slate
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev < goldenMoments.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : goldenMoments.length - 1));
  };

  const handleDragEnd = (_, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white py-12 px-2 sm:px-4 flex flex-col justify-center items-center overflow-hidden relative select-none">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl z-10 space-y-8">
        
        {/* Header Title */}
        <div className="text-center space-y-2 px-4">
          <div className="inline-flex items-center gap-2 text-phoenix bg-[#1a1a1a] border border-[#2e2e2e] px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" /> Landmark Milestones
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Golden Moments
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm max-w-sm mx-auto">
            Swipe left or right to browse landmark moments.
          </p>
        </div>

        {/* Carousel Viewport Container */}
        <div className="relative w-full flex flex-col items-center justify-center overflow-visible">
          
          {/* Swiper Animated Track */}
          <div className="relative w-full h-[580px] sm:h-[640px] flex items-center justify-center overflow-hidden">
            
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="flex items-center justify-center cursor-grab active:cursor-grabbing"
              style={{ touchAction: 'pan-y' }}
            >
              {goldenMoments.map((moment, idx) => {
                const offset = idx - activeIndex;
                const isCenter = idx === activeIndex;
                const isAdjacent = Math.abs(offset) === 1 || (activeIndex === 0 && idx === goldenMoments.length - 1) || (activeIndex === goldenMoments.length - 1 && idx === 0);

                if (!isCenter && !isAdjacent) return null;

                const theme = cardThemes[idx % cardThemes.length];

                return (
                  <motion.div
                    key={moment.id}
                    onClick={() => setActiveIndex(idx)}
                    animate={{
                      scale: isCenter ? 1 : 0.86,
                      opacity: isCenter ? 1 : 0.35,
                      x: offset * (typeof window !== 'undefined' && window.innerWidth < 640 ? 280 : 360),
                      zIndex: isCenter ? 30 : 10,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 28,
                    }}
                    className={`absolute w-[80vw] max-w-[320px] sm:w-[360px] h-[540px] sm:h-[600px] flex-shrink-0 cursor-pointer rounded-[32px] overflow-hidden border ${theme.border} ${theme.bg} shadow-2xl p-6 sm:p-7 flex flex-col justify-between`}
                  >
                    {/* Brand Tagline */}
                    <div className="text-center space-y-1 pt-1">
                      <span className={`text-[11px] font-sans tracking-[0.25em] uppercase font-semibold ${theme.accent}`}>
                        ACES DIT PUNE
                      </span>
                    </div>

                    {/* Middle Heading & Description */}
                    <div className="text-center space-y-4 my-auto px-1">
                      <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-tight">
                        {moment.title}
                      </h2>
                      <p className="text-gray-300 text-xs sm:text-sm font-sans leading-relaxed line-clamp-3">
                        {moment.description}
                      </p>

                      {/* Pill Action Button */}
                      <div className="pt-2">
                        <button className={`${theme.btn} font-sans font-semibold text-xs py-2.5 px-7 rounded-sm transition-all hover:opacity-90 shadow-md tracking-wider uppercase`}>
                          Read Story
                        </button>
                      </div>
                    </div>

                    {/* Bottom Arched Window Cutout Image */}
                    <div className="w-full h-48 sm:h-56 rounded-t-[120px] overflow-hidden border-t-2 border-white/20 shadow-2xl relative mt-4 flex-shrink-0 bg-black/40">
                      <img
                        src={moment.image}
                        alt={moment.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    {/* Year Stamp Badge */}
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] tracking-widest px-2.5 py-0.5 rounded-full">
                      {moment.year}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between w-full max-w-md px-6 pt-2">
            <button
              onClick={handlePrev}
              className="p-3 bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-[#333] text-gray-300 hover:text-white rounded-full transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Indicator Dots */}
            <div className="flex gap-2">
              {goldenMoments.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex 
                      ? 'w-7 bg-primary' 
                      : 'w-2 bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-[#333] text-gray-300 hover:text-white rounded-full transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Footer Meta info */}
        <div className="text-center pt-2">
          <div className="inline-flex items-center gap-4 text-xs font-mono text-gray-500 bg-[#161616] px-4 py-1.5 rounded-full border border-[#222]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary" /> {goldenMoments[activeIndex].year}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-phoenix" /> DIT Campus
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
