import React, { useState } from 'react';
import SkillBadge from './SkillBadge';
import SocialLinks from './SocialLinks';
import { RotateCcw } from 'lucide-react';

const MemberCardFront = ({ member }) => {
  return (
    <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-[#e8e6e1] rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_40px_rgba(178,43,47,0.12),0_2px_8px_rgba(0,0,0,0.04)] group-hover:border-primary/30 flex flex-col items-center justify-center p-6 text-center transition-all duration-300">
      
      {/* Profile Image with subtle glow & hover ring */}
      <div className="relative mb-5">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-md" />
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-muted/30 group-hover:ring-3 group-hover:ring-secondary relative z-10 transition-all duration-300"
        />
      </div>

      <h3 className="font-display text-xl sm:text-2xl font-extrabold text-near-black mb-1">{member.name}</h3>
      <p className="text-sm sm:text-md text-secondary font-bold tracking-[0.04em] mb-4">{member.role}</p>
      
      <div className="text-xs sm:text-sm text-body font-medium mb-6">
        <p>{member.branch}</p>
        <p>{member.year}</p>
      </div>

      <div className="mt-auto mb-4" onClick={(e) => e.stopPropagation()}>
        <SocialLinks social={member.social} />
      </div>

      <div className="pt-2 border-t border-muted/30 w-full text-center text-muted text-xs flex items-center justify-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
        <RotateCcw className="w-3 h-3" />
        <span>Click to flip</span>
      </div>
    </div>
  );
};

const MemberCardBack = ({ member }) => {
  return (
    <div className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)] bg-[#0f0f0f]/95 backdrop-blur-sm border border-[#b22b2f]/30 rounded-2xl overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      
      {/* Background Layer: Phoenix Graphic */}
      <img
        src="/phoenix.png"
        alt=""
        className="absolute top-1/2 right-[-20%] -translate-y-1/2 w-[130%] h-auto object-contain opacity-20 pointer-events-none z-0 mix-blend-lighten"
      />

      {/* Content Layer */}
      <div className="absolute inset-0 w-full h-full p-6 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] z-10 justify-between">
        
        {/* Header with Inline Gold ACES Branding */}
        <div className="text-center mb-3 pb-3 border-b border-gray-800/60 relative">
          <div className="absolute inset-0 bg-[#0b0d12]/40 -mx-6 px-6 blur-md -z-10" />
          
          <h2
            className="text-3xl font-black tracking-widest mb-1.5 font-display uppercase"
            style={{ color: '#D4AF37', textShadow: '0 2px 8px rgba(212, 175, 55, 0.25)' }}
          >
            ACES
          </h2>
          <h3 className="text-lg sm:text-xl font-extrabold text-white uppercase tracking-wide font-display">
            {member.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#b22b2f] font-bold tracking-wider uppercase mt-0.5">
            {member.role}
          </p>
        </div>

        {/* Bio Body */}
        <div className="flex-1 flex flex-col items-center justify-center text-center relative py-2">
          <div className="absolute inset-0 bg-[#0b0d12]/40 -mx-6 px-6 blur-xl -z-10" />
          {member.bio ? (
            <div>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">About</h4>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-[92%] mx-auto font-sans font-normal">{member.bio}</p>
            </div>
          ) : (
            <p className="text-xs text-gray-400 italic">No biography available.</p>
          )}

          {member.responsibilities && (
            <div className="mt-3 pt-2.5 border-t border-gray-800/40 w-full">
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1.5">Responsibilities</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {member.responsibilities.map(r => (
                  <span key={r} className="bg-white/10 text-white text-[10px] px-2 py-0.5 rounded-[4px] border border-white/10 font-mono">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Flip Back Indicator */}
        <div className="mt-3 pt-3 border-t border-gray-800/60 text-center text-gray-400 text-xs flex items-center justify-center gap-1.5 opacity-75 group-hover:opacity-100 transition-opacity relative">
          <div className="absolute inset-0 bg-[#0b0d12]/30 -mx-6 px-6 blur-md -z-10" />
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="font-mono text-[11px]">Click to flip back</span>
        </div>
      </div>
    </div>
  );
};

export default function MemberCard({ member }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full aspect-[3/4] max-h-[460px] min-h-[380px] group cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className="relative w-full h-full transition-transform duration-500 ease-out group-hover:-translate-y-1.5"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <MemberCardFront member={member} />
        <MemberCardBack member={member} />
      </div>
    </div>
  );
}
