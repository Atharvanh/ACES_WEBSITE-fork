import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { categories, getMembersByCategory } from '../members/membersData';
import MemberCard from '../../components/members/MemberCard';

const MembersList = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = categories.find(c => c.id === categoryId);
  const membersList = getMembersByCategory(categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4 text-white">Category Not Found</h2>
        <button onClick={() => navigate('/members')} className="text-[#b22b2f] hover:underline flex items-center gap-2 cursor-pointer">
          <ArrowLeft className="w-4 h-4" /> Back to Members
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] pt-8 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate('/members')}
          className="flex items-center gap-2 text-gray-400 hover:text-[#b22b2f] mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Members</span>
        </button>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{category.title}</h1>
          <p className="text-gray-400">{category.description}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {membersList.length > 0 ? (
            membersList.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))
          ) : (
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8 text-center rounded-xl col-span-full">
              <p className="text-gray-400">No members found in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembersList;
