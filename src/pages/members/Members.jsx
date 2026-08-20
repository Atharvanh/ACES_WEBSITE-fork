import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, getMembersByCategory } from './membersData';
import MemberCard from '../../components/members/MemberCard';
import { Users, ArrowRight } from 'lucide-react';

export default function Members({ embedded = false }) {
  const navigate = useNavigate();

  return (
    <div id="members" className={`${embedded ? 'pt-8 pb-20' : 'min-h-screen pt-20 pb-24'} font-sans`}>
      {/* Full-width Faint Gradient Header Banner */}
      <div 
        className="w-full py-12 md:py-16 px-4 md:px-8 border-b border-muted/30 mb-12"
        style={{ background: 'linear-gradient(135deg, rgba(178,43,47,0.04) 0%, rgba(209,165,80,0.04) 100%)' }}
      >
        <div className="max-w-6xl mx-auto reveal-heading">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-[6px] bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-brand-glow">
              <Users className="w-5 h-5" />
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-black uppercase text-gradient-brand tracking-tight">
              ACES Members
            </h1>
          </div>
          <h2 className="font-display text-xl md:text-2xl font-bold text-primary mb-3">
            Meet the people behind ACES.
          </h2>
          <p className="text-muted leading-relaxed font-sans max-w-3xl text-sm sm:text-base">
            Meet the passionate individuals who inspire and drive ACES forward. We are the students and leaders who contribute to the technical, creative, and organizational activities of ACES.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-20">
        {categories.map((category) => {
          const membersList = getMembersByCategory(category.id);
          const previewMembers = membersList.slice(0, 3);

          return (
            <section key={category.id} className="border-t border-muted/40 pt-10 reveal">
              <div className="flex flex-col mb-8 reveal-heading">
                <h3 
                  className="font-display text-2xl font-black text-primary mb-2 uppercase tracking-[0.08em] border-l-[3px] border-secondary pl-3"
                >
                  {category.title}
                </h3>
                <p className="text-muted text-sm pl-3">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                {previewMembers.length > 0 ? (
                  previewMembers.map((member, idx) => (
                    <div key={member.id} className={`w-full max-w-xs reveal-card delay-${(idx + 1) * 100}`}>
                      <MemberCard member={member} />
                    </div>
                  ))
                ) : (
                  <div className="bg-light-tint border border-muted/50 p-8 text-center rounded-[8px] col-span-full w-full shadow-sm">
                    <p className="text-muted">No members found in this category yet.</p>
                  </div>
                )}
              </div>

              {membersList.length > 0 && category.id !== 'faculty-coordinator' && (
                <div className="mt-10 flex justify-center">
                  <button 
                    onClick={() => navigate(`/members/${category.id}`)}
                    className="flex items-center gap-2 text-primary hover:text-white transition-all duration-200 px-8 py-3 border border-primary rounded-[4px] bg-transparent hover:bg-primary hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(178,43,47,0.25)] cursor-pointer font-semibold text-sm shadow-sm"
                  >
                    <span>Explore the {category.title}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
