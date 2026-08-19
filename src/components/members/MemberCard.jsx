import React, { useState } from 'react';
import SkillBadge from './SkillBadge';
import SocialLinks from './SocialLinks';
import { RotateCcw } from 'lucide-react';

const MemberCardFront = ({ member }) => {
  return (
    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-[#111]/80 backdrop-blur-sm border border-[#2a2a2a] rounded-2xl flex flex-col items-center justify-center p-6 text-center hover:border-[#b22b2f]/50 transition-all duration-300">
      
      {/* Profile Image with subtle glow */}
      <div className="relative mb-5">
        <div className="absolute inset-0 bg-[#b22b2f]/20 rounded-full blur-md"></div>
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-[#333] relative z-10"
        />
      </div>

      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
      <p className="text-md text-[#b22b2f] font-medium mb-4">{member.role}</p>
      
      <div className="text-sm text-gray-400 mb-6">
        <p>{member.branch}</p>
        <p>{member.year}</p>
      </div>

      <div className="mt-auto mb-4" onClick={(e) => e.stopPropagation()}>
        <SocialLinks social={member.social} />
      </div>

      <div className="pt-2 border-t border-gray-800/50 w-full text-center text-gray-500 text-xs flex items-center justify-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
        <RotateCcw className="w-3 h-3" />
        <span>Click to flip</span>
      </div>
    </div>
  );
};

const MemberCardBack = ({ member }) => {
  return (
    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0f0f0f]/95 backdrop-blur-sm border border-[#b22b2f]/30 rounded-2xl overflow-hidden relative">
      
      {/* Gold ACES Branding */}
      <div className="absolute top-5 left-0 w-full text-center pointer-events-none z-0">
        <h2 
          className="text-4xl font-black tracking-widest" 
          style={{ color: '#D4AF37', textShadow: '0 4px 12px rgba(212, 175, 55, 0.3)' }}
        >
          ACES
        </h2>
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 w-full h-full p-6 pt-16 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] z-10">
        
        <div className="text-center mb-4 pb-4 border-b border-gray-800/60">
          <h3 className="text-xl font-bold text-white uppercase tracking-wide">{member.name}</h3>
          <p className="text-sm text-[#b22b2f] font-medium">{member.role}</p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {member.bio ? (
            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">About</h4>
              <p className="text-sm text-gray-200 leading-relaxed max-w-[90%] mx-auto">{member.bio}</p>
            </div>
          ) : (
            <p className="text-sm text-gray-400 italic">No biography available.</p>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800/60 text-center text-gray-400 text-xs flex items-center justify-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
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
        className={`relative w-full h-full transition-transform duration-700 group-hover:-translate-y-2`}
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
