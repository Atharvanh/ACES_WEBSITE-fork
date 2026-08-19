import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Links visible in the standard desktop nav bar (excludes Members)
  const desktopLinks = [
    { name: 'Home', path: '/' },
    { name: 'Who Are We', path: '/who-are-we' },
    { name: 'Golden Moments', path: '/golden-moments' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Feed', path: '/feed' },
  ];

  // Links visible inside the Hamburger Menu (includes Members)
  const hamburgerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Who Are We', path: '/who-are-we' },
    { name: 'Golden Moments', path: '/golden-moments' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Feed', path: '/feed' },
    { name: 'Members Directory 🔒', path: '/members', isSecret: true },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glassmorphism border-b border-[#222] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <svg className="w-8 h-8 text-phoenix fill-current" viewBox="0 0 52 60">
                <path d="M8 28 C6 20, 2 14, 4 8 C8 12, 10 16, 12 22 C14 16, 16 10, 22 6 C20 14, 18 20, 18 26Z" />
                <path d="M44 28 C46 20, 50 14, 48 8 C44 12, 42 16, 40 22 C38 16, 36 10, 30 6 C32 14, 34 20, 34 26Z" />
                <path d="M18 26 C20 22, 26 20, 28 20 C30 20, 36 22, 38 26 C36 30, 32 34, 28 36 C24 34, 20 30, 18 26Z" />
                <path d="M22 34 C20 40, 18 46, 16 50 C20 46, 24 42, 28 40 C32 42, 36 46, 40 50 C38 46, 36 40, 34 34Z" />
                <circle cx="28" cy="18" r="5" />
                <path d="M23 17 L18 19 L23 20Z" className="text-primary fill-current" />
              </svg>
              <span className="font-display font-bold text-lg tracking-wider text-primary">
                ACES <span className="text-white">DIT</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation (Standard Links) */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-6">
              {desktopLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Hamburger Toggle Button (Always visible on mobile, and as a premium menu launcher on desktop) */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2a2a2a] focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-out Drawer Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-96 bg-[#161616] border-l border-[#222] p-8 flex flex-col justify-between"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex justify-between items-center mb-12">
                  <span className="font-display font-bold text-sm tracking-widest text-gray-500 uppercase">
                    Navigation Menu
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-[#222]"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-6">
                  {hamburgerLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between py-2 border-b border-[#222] text-xl font-bold tracking-wide transition-colors ${
                        isActive(link.path)
                          ? 'text-primary'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      
                      {link.isSecret ? (
                        <span className="text-[10px] uppercase font-mono tracking-widest bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded flex items-center gap-1">
                          Secret Route
                        </span>
                      ) : (
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Drawer Footer details */}
              <div className="space-y-4">
                <div className="bg-[#222]/30 border border-[#333] rounded-lg p-4 flex gap-3 items-start">
                  <ShieldAlert className="w-5 h-5 text-phoenix flex-shrink-0 mt-0.5" />
                  <p className="text-[11px] text-gray-400 leading-normal">
                    The Members Directory is configured as a secret tab and is only accessible from within this menu drawer.
                  </p>
                </div>
                <div className="text-[10px] text-gray-600 font-mono text-center">
                  ACES DIT Pune • Est. 2016
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
