import { useRef, useEffect } from 'react';
import { Power } from 'lucide-react';

export default function CyberHeroAnimation({ onExploreClick }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (tiltRef.current) {
        const mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
        const mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
        const xAxis = -mouseY * 10;
        const yAxis = mouseX * 10;
        tiltRef.current.style.transform = `perspective(1000px) rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden select-none bg-transparent"
    >
      {/* Ambient Warm Radial Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(209,165,80,0.12) 0%, rgba(178,43,47,0.06) 50%, transparent 80%)',
        }}
      />

      {/* Seamless Bottom Blend Gradient (Smooth transition into 2nd page #who-are-we) */}
      <div
        className="absolute bottom-0 left-0 w-full h-44 sm:h-64 pointer-events-none z-[3]"
        style={{
          background:
            'linear-gradient(to top, #FFF4F2 0%, rgba(255, 244, 242, 0.9) 35%, rgba(255, 244, 242, 0.4) 70%, transparent 100%)',
        }}
      />

      {/* Soft Top Blend Gradient (Smooth transition under navbar) */}
      <div
        className="absolute top-0 left-0 w-full h-24 sm:h-32 pointer-events-none z-[3]"
        style={{
          background: 'linear-gradient(to bottom, #FFF4F2 0%, rgba(255, 244, 242, 0.6) 50%, transparent 100%)',
        }}
      />

      {/* Central 3D Content (Grand, Bold, Glowing Style Matching Screenshot) */}
      <div
        ref={tiltRef}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto space-y-5 transition-transform duration-100 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Top Technical Chip */}
        <div className="inline-flex items-center gap-2 border border-black/20 bg-[#161211]/90 backdrop-blur-md px-3.5 py-1 rounded-[3px] shadow-[0_0_15px_rgba(209,165,80,0.25)] transition-all hover:scale-105">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            SYS.INIT // ACES_NODE_01
          </span>
        </div>

        {/* Main Grand Glowing Title: ACES */}
        <div className="relative group">
          <h1
            className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tight text-primary uppercase leading-none"
            style={{
              textShadow:
                '0 0 25px rgba(178, 43, 47, 0.45), 0 0 50px rgba(178, 43, 47, 0.2)',
            }}
          >
            ACES
          </h1>
        </div>

        {/* Technical Subtitle Bar */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="inline-block bg-[#1f1918]/90 text-white border-l-4 border-primary px-6 py-2.5 rounded-[4px] shadow-lg backdrop-blur-md">
            <h2 className="font-mono text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.22em] text-[#f2eeeb] leading-relaxed">
              ASSOCIATION OF COMPUTER ENGINEERING STUDENTS
            </h2>
          </div>
        </div>

        {/* Action Button & Live Telemetry Coordinates */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
          {/* INITIALIZE Action Button */}
          <button
            type="button"
            onClick={onExploreClick}
            className="inline-flex items-center gap-2.5 border-2 border-primary bg-primary/10 hover:bg-primary text-primary hover:text-white font-mono font-bold text-xs sm:text-sm tracking-[0.2em] uppercase px-7 py-3 rounded-[4px] transition-all duration-300 shadow-[0_0_20px_rgba(178,43,47,0.25)] hover:shadow-[0_0_35px_rgba(178,43,47,0.65)] cursor-pointer group hover:scale-105 active:scale-95"
          >
            <Power className="w-4 h-4 text-primary group-hover:text-white transition-colors group-hover:rotate-90 duration-300" />
            <span>INITIALIZE</span>
          </button>

          {/* Telemetry Coordinates Badge */}
          <div className="inline-flex flex-col justify-center text-left bg-[#181312]/90 border border-black/20 px-4 py-2 rounded-[4px] font-mono text-[10px] sm:text-xs text-[#b8b0aa] shadow-md backdrop-blur-md">
            <div className="flex items-center gap-1.5">
              <span className="text-[#888]">COORD:</span>
              <span className="text-[#e2ded9] font-semibold">18.6256° N, 73.8122° E</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#888]">STATUS:</span>
              <span className="text-secondary font-bold flex items-center gap-1">
                ONLINE <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
