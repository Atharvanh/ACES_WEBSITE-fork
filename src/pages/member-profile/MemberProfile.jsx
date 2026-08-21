import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getMemberById, categories } from '../members/membersData';
import SkillBadge from '../../components/members/SkillBadge';
import SocialLinks from '../../components/members/SocialLinks';

export default function MemberProfile() {
  const { memberId } = useParams();
  const navigate = useNavigate();
  
  const member = getMemberById(memberId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [memberId]);

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
        <h2 className="font-display text-2xl font-bold mb-4 text-dark-overlay">Member Not Found</h2>
        <button onClick={() => navigate(-1)} className="text-primary hover:underline flex items-center gap-2 cursor-pointer font-medium">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>
    );
  }

  const category = categories.find(c => c.id === member.category);
  const categoryName = category ? category.title : 'Category';

  return (
    <div className="min-h-screen bg-members-atmosphere pt-28 sm:pt-36 pb-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-radial-[ellipse_at_top,rgba(178,43,47,0.06),transparent_70%] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <button 
          onClick={() => navigate(`/members/${member.category}`)}
          className="flex items-center gap-2 text-body hover:text-primary mb-8 transition-colors cursor-pointer text-sm font-bold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {categoryName}</span>
        </button>

        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-primary/15 rounded-full blur-xl animate-pulse" />
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl relative z-10"
            />
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-near-black mb-2">{member.name}</h1>
          <h2 className="font-display text-lg sm:text-xl text-secondary font-bold mb-3">
            {member.role} — ACES
          </h2>
          <p className="text-muted text-base">
            {member.branch} • {member.year}
          </p>
        </div>

        <div className="space-y-8">
          {/* About Section */}
          <section className="bg-light-tint border border-muted/50 p-6 md:p-8 rounded-[4px] shadow-sm">
            <h3 className="font-display text-lg font-bold text-dark-overlay mb-4 border-b border-muted/30 pb-2 uppercase tracking-wide">About</h3>
            <p className="text-muted leading-relaxed text-base">
              "{member.bio}"
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Responsibilities */}
            {member.responsibilities && member.responsibilities.length > 0 && (
              <section className="bg-light-tint border border-muted/50 p-6 rounded-[4px] shadow-sm">
                <h3 className="font-display text-lg font-bold text-dark-overlay mb-4 border-b border-muted/30 pb-2 uppercase tracking-wide">Responsibilities</h3>
                <ul className="space-y-2">
                  {member.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted text-sm">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Skills */}
            {member.skills && member.skills.length > 0 && (
              <section className="bg-light-tint border border-muted/50 p-6 rounded-[4px] shadow-sm">
                <h3 className="font-display text-lg font-bold text-dark-overlay mb-4 border-b border-muted/30 pb-2 uppercase tracking-wide">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Connect */}
          {member.social && Object.keys(member.social).length > 0 && (
            <section className="mt-12 text-center flex flex-col items-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-6">Connect with {member.name.split(' ')[0]}</h3>
              <SocialLinks social={member.social} />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
