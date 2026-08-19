import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram, FiMail } from 'react-icons/fi';

const SocialLinks = ({ social }) => {
  if (!social) return null;

  const iconClass = "w-5 h-5 text-gray-400 hover:text-[#b22b2f] transition-colors duration-300";
  const containerClass = "p-3 bg-[#1e222e] border border-gray-700/50 rounded-lg hover:border-[#b22b2f] transition-all duration-300 cursor-pointer";

  return (
    <div className="flex gap-4">
      {social.linkedin && (
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className={containerClass}>
          <FiLinkedin className={iconClass} />
        </a>
      )}
      {social.github && (
        <a href={social.github} target="_blank" rel="noopener noreferrer" className={containerClass}>
          <FiGithub className={iconClass} />
        </a>
      )}
      {social.instagram && (
        <a href={social.instagram} target="_blank" rel="noopener noreferrer" className={containerClass}>
          <FiInstagram className={iconClass} />
        </a>
      )}
      {social.email && (
        <a href={social.email} className={containerClass}>
          <FiMail className={iconClass} />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
