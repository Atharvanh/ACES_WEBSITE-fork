import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { categories, getMembersByCategory } from '../members/membersData';
import MemberCard from '../../components/members/MemberCard';

export default function MembersList() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = categories.find(c => c.id === categoryId);
  const membersList = getMembersByCategory(categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="font-display text-2xl font-bold mb-4 text-dark-overlay">Category Not Found</h2>
        <button onClick={() => navigate('/members')} className="text-primary hover:underline flex items-center gap-2 cursor-pointer font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Members
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-24 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate('/members')}
          className="flex items-center gap-2 text-muted hover:text-primary mb-8 transition-colors cursor-pointer text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Members</span>
        </button>

        <header className="mb-12 space-y-2 border-l-[3px] border-secondary pl-4 reveal-heading">
          <h1 className="font-display text-3xl md:text-5xl font-black uppercase text-gradient-brand mb-2">{category.title}</h1>
          <p className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl">{category.description}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {membersList.length > 0 ? (
            membersList.map((member, idx) => (
              <div key={member.id} className={`w-full max-w-xs reveal-card delay-${((idx % 3) + 1) * 100}`}>
                <MemberCard member={member} />
              </div>
            ))
          ) : (
            <div className="bg-light-tint border border-muted/50 p-8 text-center rounded-[8px] col-span-full w-full shadow-sm">
              <p className="text-muted">No members found in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
