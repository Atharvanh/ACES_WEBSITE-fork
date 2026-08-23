import { useRef, useEffect, useState } from 'react';

export default function FooterReveal({ children }) {
  const sentinelRef = useRef(null);
  const contentRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  // Check prefers-reduced-motion
  const prefersReducedMotion = typeof window !== 'undefined' 
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <>
      {/* Sentinel div placed just above footer */}
      <div ref={sentinelRef} className="h-px w-full" aria-hidden="true" />
      
      {/* Footer container with overflow hidden */}
      <div className="overflow-hidden">
        <div
          ref={contentRef}
          style={{
            transform: revealed ? 'translateY(0)' : 'translateY(100%)',
            transition: prefersReducedMotion ? 'none' : 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: revealed ? 'auto' : 'transform',
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
