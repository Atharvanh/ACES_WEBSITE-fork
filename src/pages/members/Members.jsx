import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, getMembersByCategory } from './membersData';
import MemberCard from '../../components/members/MemberCard';
import { Users, ArrowRight } from 'lucide-react';

const Members = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#111111] pt-10 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-[#b22b2f]" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">ACES Members</h1>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-4">
            Meet the people behind ACES.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Meet the passionate individuals who inspire and drive ACES forward. We are the students and leaders who contribute to the technical, creative, and organizational activities of ACES.
          </p>
        </header>

        <div className="space-y-20">
          {categories.map((category) => {
            const membersList = getMembersByCategory(category.id);
            const previewMembers = membersList.slice(0, 3);

            return (
              <section key={category.id} className="border-t border-gray-800/50 pt-10">
                <div className="flex flex-col mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide uppercase">
                    {category.title}
                  </h3>
                  <p className="text-gray-400">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                  {previewMembers.length > 0 ? (
                    previewMembers.map((member) => (
                      <MemberCard key={member.id} member={member} />
                    ))
                  ) : (
                    <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8 text-center rounded-xl col-span-full w-full">
                      <p className="text-gray-400">No members found in this category yet.</p>
                    </div>
                  )}
                </div>

                {membersList.length > 0 && category.id !== 'faculty-coordinator' && (
                  <div className="mt-10 flex justify-center">
                    <button 
                      onClick={() => navigate(`/members/${category.id}`)}
                      className="flex items-center gap-2 text-[#b22b2f] hover:text-white transition-all duration-300 px-8 py-3 border border-[#b22b2f]/30 rounded-lg bg-[#b22b2f]/5 hover:bg-[#b22b2f]/10 cursor-pointer"
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
    </div>
  );
};

export default Members;
