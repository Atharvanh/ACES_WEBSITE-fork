import React from 'react';

const SkillBadge = ({ skill }) => {
  return (
    <span className="px-3 py-1 text-sm text-gray-300 bg-[#1e222e] border border-gray-700/50 rounded-full">
      {skill}
    </span>
  );
};

export default SkillBadge;
