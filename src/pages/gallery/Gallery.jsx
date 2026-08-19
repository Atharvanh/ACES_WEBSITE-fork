import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, MapPin, Calendar } from 'lucide-react';
import { galleryItems } from './galleryData';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Hackathons', 'Workshops', 'Cultural', 'Technical', 'Leadership'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 text-phoenix bg-[#222] border border-[#333] px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
          <ImageIcon className="w-3.5 h-3.5" /> Club Records
        </div>
        <h1 className="font-display text-4xl font-extrabold uppercase text-white">Event Gallery</h1>
        <p className="text-gray-400 text-sm">
          Browse moments from our technical workshops, national hackathons, and student gatherings.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-[#222] pb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all cursor-pointer ${
              selectedCategory === category
                ? 'bg-primary text-white shadow'
                : 'text-gray-400 hover:text-white hover:bg-[#222]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-near-black border border-[#252525] rounded-xl overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-[#111]/80 backdrop-blur-sm text-phoenix border border-[#333] text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded">
                  {item.category}
                </span>
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="font-display text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.caption}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#222] text-[11px] text-gray-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {item.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> DIT Pune
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
