import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Zap, UserPlus, ArrowRight, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramIcon, LinkedinIcon, GithubIcon } from './SocialIcons';

const MENU_ITEMS = [
  { id: 'home',           label: 'Home',            path: '/' },
  { id: 'who-are-we',    label: 'Who Are We',       path: '/who-are-we' },
  { id: 'golden-moments',label: 'Golden Moments',   path: '/golden-moments' },
  { id: 'gallery',        label: 'Gallery',          path: '/gallery' },
  { id: 'feed',           label: 'Feed',             path: '/feed' },
  { id: 'members',        label: 'Members 🔒',       path: '/members', isSecret: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* ─── Main Navbar Header ─── */}
      <header className="sticky top-0 z-30 w-full bg-black/85 backdrop-blur-md border-b border-neutral-800 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Left: Hamburger + Logo */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="relative p-2.5 rounded-xl bg-neutral-900 text-neutral-200 border border-neutral-800 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_12px_rgba(239,68,68,0.25)] hover:scale-105 active:scale-95 transition-all duration-150 focus:outline-none group cursor-pointer"
                title="Open Navigation Menu"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                {/* Red pulse dot */}
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              </button>

              {/* ACES Brand */}
              <button
                onClick={() => handleNav('/')}
                className="flex items-center space-x-2.5 sm:space-x-3 text-left group focus:outline-none cursor-pointer"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-red-600 via-rose-600 to-red-700 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-red-600/30 ring-1 ring-red-500/30 group-hover:scale-105 transition-all duration-150">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-red-400 text-lg sm:text-xl group-hover:text-red-400 transition-colors">
                      ACES
                    </span>
                    <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-red-600/10 text-red-400 border border-red-600/30 rounded-md group-hover:border-red-500 transition-all">
                      College Club
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-400 hidden sm:block font-medium">
                    Association of Computer Engineering Students
                  </span>
                </div>
              </button>
            </div>

            {/* Right: Join Club Button */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleNav('/who-are-we')}
                className="relative inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-all duration-150 bg-neutral-900 border border-neutral-700 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_14px_rgba(239,68,68,0.3)] hover:scale-105 active:scale-95 rounded-xl focus:outline-none cursor-pointer"
              >
                <UserPlus className="w-4 h-4 mr-1.5 text-red-500" />
                <span>Join Club</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Slide-out Sidebar Drawer ─── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-72 max-w-[85vw] bg-black/95 backdrop-blur-2xl border-r border-neutral-800 shadow-2xl flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-neutral-900 bg-neutral-950/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-rose-700 flex items-center justify-center text-white font-bold shadow-lg shadow-red-600/30 ring-1 ring-red-500/30">
                      <Zap className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-white text-lg">
                          ACES
                        </span>
                        <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-red-600/20 text-red-400 border border-red-600/30 rounded">
                          CLUB
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 text-neutral-400 hover:text-red-400 bg-neutral-900 rounded-md border border-neutral-800 hover:border-red-500 hover:scale-105 active:scale-95 transition-all duration-150 focus:outline-none cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Drawer Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <nav className="flex flex-col space-y-4" role="menu">
                  {MENU_ITEMS.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleNav(item.path)}
                        className={`group cursor-pointer py-1.5 border-l-2 pl-3 transition-all duration-150 ${
                          isActive ? 'border-red-500' : 'border-transparent hover:border-red-500'
                        }`}
                        role="menuitem"
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-base font-medium group-hover:text-red-400 group-hover:translate-x-1.5 transition-all duration-150 inline-block ${
                            isActive ? 'text-red-400' : 'text-neutral-300'
                          }`}>
                            {item.label}
                          </span>
                          {item.isSecret && (
                            <span className="text-[10px] uppercase font-mono tracking-widest bg-red-600/20 text-red-400 border border-red-600/30 px-2 py-0.5 rounded flex items-center gap-1">
                              <ShieldAlert className="w-3 h-3" /> Secret
                            </span>
                          )}
                          {!item.isSecret && (
                            <ArrowRight className="w-4 h-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer with Social Icons */}
              <div className="p-5 border-t border-neutral-900 bg-neutral-950/70 flex flex-col items-center justify-center space-y-3">
                <div className="flex items-center justify-center space-x-5">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 active:scale-95 transition-all duration-150 inline-flex items-center justify-center focus:outline-none hover:drop-shadow-[0_0_10px_rgba(225,48,108,0.6)] cursor-pointer"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-7 h-7" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 active:scale-95 transition-all duration-150 inline-flex items-center justify-center focus:outline-none hover:drop-shadow-[0_0_10px_rgba(10,102,194,0.6)] cursor-pointer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-7 h-7" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 active:scale-95 transition-all duration-150 inline-flex items-center justify-center focus:outline-none hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] cursor-pointer"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-7 h-7" />
                  </a>
                </div>
                <p className="text-[10px] text-neutral-400 font-medium tracking-wider text-center">
                  ACES • DIT PUNE
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
