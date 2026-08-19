import React, { useState } from 'react';
import SkillBadge from './SkillBadge';
import SocialLinks from './SocialLinks';
import { RotateCcw } from 'lucide-react';

const MemberCardFront = ({ member }) => {
  return (
    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white border border-[#e8e6e1] rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_40px_rgba(178,43,47,0.12),0_2px_8px_rgba(0,0,0,0.04)] group-hover:border-primary/30 flex flex-col items-center justify-center p-6 text-center transition-all duration-300">
      
      {/* Profile Image with subtle glow & hover ring */}
      <div className="relative mb-5">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-md"></div>
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-muted/30 group-hover:ring-3 group-hover:ring-secondary relative z-10 transition-all duration-300"
        />
      </div>

      <h3 className="font-display text-xl sm:text-2xl font-bold text-dark-overlay mb-1">{member.name}</h3>
      <p className="text-sm sm:text-md text-secondary font-semibold tracking-[0.04em] mb-4">{member.role}</p>
      
      <div className="text-xs sm:text-sm text-muted mb-6">
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
    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-light-tint border border-primary/30 rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_40px_rgba(178,43,47,0.12),0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden relative transition-all duration-300">
      
      {/* Gold ACES Branding */}
      <div className="absolute top-5 left-0 w-full text-center pointer-events-none z-0">
        <h2 
          className="font-display text-4xl font-black tracking-widest text-secondary opacity-60" 
        >
          ACES
        </h2>
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 w-full h-full p-6 pt-16 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] z-10">
        
        <div className="text-center mb-4 pb-4 border-b border-muted/30">
          <h3 className="font-display text-xl font-bold text-dark-overlay uppercase tracking-wide">{member.name}</h3>
          <p className="text-sm text-secondary font-semibold tracking-[0.04em]">{member.role}</p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {member.bio ? (
            <div>
              <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">About</h4>
              <p className="text-sm text-muted leading-relaxed max-w-[90%] mx-auto">{member.bio}</p>
            </div>
          ) : (
            <p className="text-sm text-muted/70 italic">No biography available.</p>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-muted/30 text-center text-muted text-xs flex items-center justify-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
          <RotateCcw className="w-3 h-3" />
          <span>Click to flip back</span>
        </div>
      </div>
    </div>
  );
};

const MemberCard = ({ member }) => {
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
};

export default MemberCard;
