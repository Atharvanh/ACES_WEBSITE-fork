import React from 'react';

const SkillBadge = ({ skill }) => {
  return (
    <span className="px-3 py-1 text-xs font-semibold text-muted bg-light-tint border border-muted/50 rounded-[4px] shadow-sm">
      {skill}
    </span>
  );
};

export default SkillBadge;
