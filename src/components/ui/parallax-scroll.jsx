import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

export function ParallaxScroll({ items = [], images = [], className = "", onItemClick }) {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -160]);

  // Convert raw string images to item objects if images array is passed
  const displayItems = items.length > 0 
    ? items 
    : images.map((img, idx) => ({
        id: `img-${idx}`,
        image: typeof img === 'string' ? img : img.image || img.url,
        title: typeof img === 'object' ? img.title : `Gallery Moment ${idx + 1}`,
        category: typeof img === 'object' ? img.category : 'Highlight',
        year: typeof img === 'object' ? img.year : '2026',
        location: typeof img === 'object' ? img.location : 'DIT Pune',
        caption: typeof img === 'object' ? img.caption : '',
      }));

  const third = Math.ceil(displayItems.length / 3);
  const firstPart = displayItems.slice(0, third);
  const secondPart = displayItems.slice(third, 2 * third);
  const thirdPart = displayItems.slice(2 * third);

  const renderCard = (item, idx, realIndex) => {
    return (
      <div
        key={item.id || `card-${realIndex}`}
        onClick={() => onItemClick && onItemClick(item, realIndex)}
        className="bg-white border border-[#e8e6e1] rounded-[18px] overflow-hidden group cursor-pointer hover:border-primary/50 shadow-sm hover:shadow-brand-hover transition-all duration-300 flex flex-col justify-between"
      >
        <div className="relative overflow-hidden h-56 sm:h-64 bg-light-tint">
          <img
            src={item.thumb || item.image || item.url}
            alt={item.title || "Gallery Moment"}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {item.category && (
            <span className="absolute bottom-3 left-3 bg-secondary text-dark-overlay text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-[4px] shadow-sm">
              {item.category}
            </span>
          )}
        </div>

        <div className="p-5 sm:p-6 space-y-2.5">
          <h3 className="font-display text-base sm:text-lg font-extrabold text-near-black tracking-tight group-hover:text-primary transition-colors leading-snug">
            {item.title}
          </h3>
          {item.caption && (
            <p className="text-body text-xs sm:text-sm leading-relaxed line-clamp-2 font-medium">
              {item.caption}
            </p>
          )}
          <div className="flex items-center justify-between pt-3.5 border-t border-muted/30 text-[11px] text-muted font-mono">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-muted" /> {item.year || '2026'}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-primary" /> {item.location || 'DIT Pune'}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={gridRef}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 sm:gap-8 max-w-7xl mx-auto py-6 sm:py-10 px-2 sm:px-4 ${className}`}
    >
      {/* Column 1: Parallax Up */}
      <div className="grid gap-6 sm:gap-8">
        {firstPart.map((item, idx) => (
          <motion.div style={{ y: translateFirst }} key={`col1-${item.id || idx}`}>
            {renderCard(item, idx, idx)}
          </motion.div>
        ))}
      </div>

      {/* Column 2: Parallax Down */}
      <div className="grid gap-6 sm:gap-8">
        {secondPart.map((item, idx) => (
          <motion.div style={{ y: translateSecond }} key={`col2-${item.id || idx}`}>
            {renderCard(item, idx, third + idx)}
          </motion.div>
        ))}
      </div>

      {/* Column 3: Parallax Up */}
      <div className="grid gap-6 sm:gap-8">
        {thirdPart.map((item, idx) => (
          <motion.div style={{ y: translateThird }} key={`col3-${item.id || idx}`}>
            {renderCard(item, idx, 2 * third + idx)}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
