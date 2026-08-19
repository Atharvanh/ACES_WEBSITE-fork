import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getMemberById, categories } from '../members/membersData';
import SkillBadge from '../../components/members/SkillBadge';
import SocialLinks from '../../components/members/SocialLinks';

const MemberProfile = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();
  
  const member = getMemberById(memberId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [memberId]);

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#111111]">
        <h2 className="text-2xl font-bold mb-4 text-white">Member Not Found</h2>
        <button onClick={() => navigate(-1)} className="text-[#b22b2f] hover:underline flex items-center gap-2 cursor-pointer">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>
    );
  }

  const category = categories.find(c => c.id === member.category);
  const categoryName = category ? category.title : 'Category';

  return (
    <div className="min-h-screen bg-[#111111] pt-8 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-radial-[ellipse_at_top,rgba(178,43,47,0.12),transparent_70%] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <button 
          onClick={() => navigate(`/members/${member.category}`)}
          className="flex items-center gap-2 text-gray-400 hover:text-[#b22b2f] mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to {categoryName}</span>
        </button>

        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-[#b22b2f]/30 rounded-full blur-xl animate-pulse"></div>
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#1e222e] shadow-2xl relative z-10"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{member.name}</h1>
          <h2 className="text-xl md:text-2xl text-[#b22b2f] font-medium mb-3">
            {member.role} — ACES
          </h2>
          <p className="text-gray-400 text-lg">
            {member.branch} • {member.year}
          </p>
        </div>

        <div className="space-y-8">
          {/* About Section */}
          <section className="bg-[#1a1a1a]/80 border border-[#2a2a2a] backdrop-blur-sm p-6 md:p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-800 pb-2">About</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              "{member.bio}"
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Responsibilities */}
            {member.responsibilities && member.responsibilities.length > 0 && (
              <section className="bg-[#1a1a1a]/80 border border-[#2a2a2a] backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-800 pb-2">Responsibilities</h3>
                <ul className="space-y-2">
                  {member.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-[#b22b2f] mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Skills */}
            {member.skills && member.skills.length > 0 && (
              <section className="bg-[#1a1a1a]/80 border border-[#2a2a2a] backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-800 pb-2">Skills & Expertise</h3>
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
              <h3 className="text-lg font-medium text-gray-400 mb-6">Connect with {member.name.split(' ')[0]}</h3>
              <SocialLinks social={member.social} />
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
