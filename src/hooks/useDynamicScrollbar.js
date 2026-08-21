import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Mapping of section IDs / routes to their designated background colors
const SECTION_COLORS = [
  { id: 'home', color: '#ffffff' },
  { id: 'who-are-we', color: '#FFF4F2' },
  { id: 'golden-moments', color: '#ffffff' },
  { id: 'feed', color: '#FFF4F2' },
  { id: 'gallery', color: '#ffffff' },
  { id: 'social', color: '#FFF4F2' },
  { id: 'members', color: '#ffffff' },
  { selector: '.aces-footer', color: '#FFF4F2' }
];

const ROUTE_PAGE_COLORS = {
  '/': '#ffffff',
  '/who-are-we': '#FFF4F2',
  '/golden-moments': '#ffffff',
  '/feed': '#FFF4F2',
  '/gallery': '#ffffff',
  '/social': '#FFF4F2',
  '/members': '#ffffff'
};

export function useDynamicScrollbar() {
  const { pathname } = useLocation();

  useEffect(() => {
    const updateScrollbarColor = (color) => {
      document.documentElement.style.setProperty('--scrollbar-track', color);
    };

    if (pathname !== '/') {
      const pageColor = ROUTE_PAGE_COLORS[pathname] || '#ffffff';
      updateScrollbarColor(pageColor);
      return;
    }

    const checkCurrentSection = () => {
      // Check middle of viewport to determine active visible section
      const middleViewport = window.scrollY + window.innerHeight * 0.45;

      // Check footer first if scrolled near bottom
      const footer = document.querySelector('.aces-footer');
      if (footer) {
        const footerTop = footer.offsetTop;
        if (middleViewport >= footerTop || window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
          updateScrollbarColor('#FFF4F2');
          return;
        }
      }

      // Check sections from bottom to top
      for (let i = SECTION_COLORS.length - 1; i >= 0; i--) {
        const item = SECTION_COLORS[i];
        if (item.id) {
          const el = document.getElementById(item.id);
          if (el && el.offsetTop <= middleViewport) {
            updateScrollbarColor(item.color);
            return;
          }
        }
      }

      // Default to Home color (white)
      updateScrollbarColor('#ffffff');
    };

    window.addEventListener('scroll', checkCurrentSection, { passive: true });
    window.addEventListener('resize', checkCurrentSection, { passive: true });
    checkCurrentSection();

    return () => {
      window.removeEventListener('scroll', checkCurrentSection);
      window.removeEventListener('resize', checkCurrentSection);
    };
  }, [pathname]);
}
