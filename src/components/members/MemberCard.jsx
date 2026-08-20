import React, { useState } from 'react';
import SkillBadge from './SkillBadge';
import SocialLinks from './SocialLinks';
import { RotateCcw } from 'lucide-react';

const MemberCardFront = ({ member }) => {
  return (
    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[16px] flex flex-col items-center justify-center p-6 text-center transition-all duration-300 member-card-front">
      
      {/* Profile Image with subtle glow & hover ring */}
      <div className="relative mb-5">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-md"></div>
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-muted/30 group-hover:ring-3 group-hover:ring-secondary relative z-10 transition-all duration-300"
        />
      </div>

      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-1">{member.name}</h3>
      <p className="text-sm sm:text-md text-[#B22B2F] font-semibold tracking-[0.04em] mb-4">{member.role}</p>
      
      <div className="text-xs sm:text-sm text-[#6B6D71] mb-6">
        <p>{member.branch}</p>
        <p>{member.year}</p>
      </div>

      <div className="mt-auto mb-4 social-links-wrapper" onClick={(e) => e.stopPropagation()}>
        <SocialLinks social={member.social} />
      </div>

      <div className="pt-2 border-t border-gray-300/60 w-full text-center text-[#6B6D71] text-xs flex items-center justify-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Click to flip</span>
      </div>
    </div>
  );
};

const MemberCardBack = ({ member }) => {
  return (
    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[16px] overflow-hidden relative member-card-back">
      
      {/* Background Layer: Phoenix Graphic */}
      <img
        src="/phoenix.jpg"
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-auto object-contain opacity-[0.26] pointer-events-none z-0 mix-blend-multiply"
      />

      {/* Content Layer */}
      <div className="absolute inset-0 w-full h-full p-5 sm:p-6 flex flex-col justify-between overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] z-10 text-center">
        
        {/* Header Section */}
        <div>
          {/* ACES Gold Branding */}
          <h2
            className="text-3xl font-black tracking-widest font-display uppercase mb-1"
            style={{ color: '#D1A550' }}
          >
            ACES
          </h2>
          {/* Name */}
          <h3 className="text-xl sm:text-2xl font-black text-[#1A1A1A] uppercase tracking-wide font-display mb-1">
            {member.name}
          </h3>
          {/* Role / Designation */}
          <p className="text-xs sm:text-sm text-[#B22B2F] font-bold tracking-wider uppercase">
            {member.role}
          </p>
          
          {/* Double Separator Line */}
          <div className="flex flex-col gap-[3px] items-center my-3">
            <div className="w-[90%] h-[0.5px] bg-[#6B6D71]/35" />
            <div className="w-[90%] h-[0.5px] bg-[#6B6D71]/35" />
          </div>
        </div>

        {/* Info Layout */}
        <div className="flex-1 flex flex-col justify-center gap-3.5 z-10 py-1">
          {/* About */}
          {member.bio && (
            <div className="px-2">
              <h4 className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-1">About</h4>
              <p className="text-xs sm:text-sm text-[#1A1A1A] font-medium leading-relaxed font-sans max-w-[92%] mx-auto">{member.bio}</p>
            </div>
          )}
        </div>

        {/* Footer Section */}
        <div className="z-10">
          {/* Single Separator Line */}
          <div className="w-[90%] h-[0.5px] bg-[#6B6D71]/35 mx-auto mb-3" />

          {/* Flip Back Indicator */}
          <div className="text-center text-[#6B6D71] text-xs flex items-center justify-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="font-mono text-[10px] uppercase tracking-wide">Click to flip back</span>
          </div>
        </div>

      </div>
    </div>
  );
};

const MemberCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full aspect-[3/4] max-h-[460px] min-h-[380px] group cursor-pointer member-card-container"
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className="relative w-full h-full transition-transform duration-500 ease-out member-card-inner"
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
