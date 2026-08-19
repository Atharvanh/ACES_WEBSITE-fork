import { Link } from 'react-router-dom';
import { Users, Mail, ArrowRight } from 'lucide-react';
import { members } from './membersData';

export default function Members() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 text-phoenix bg-[#222] border border-[#333] px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
          <Users className="w-3.5 h-3.5" /> Club Directory
        </div>
        <h1 className="font-display text-4xl font-extrabold uppercase text-white">Our Team</h1>
        <p className="text-gray-400 text-sm">
          Meet the officers, developers, and creatives guiding the ACES community.
        </p>
      </div>

      {/* Grid of Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-near-black border border-[#252525] rounded-xl overflow-hidden flex flex-col justify-between hover:border-primary/50 transition-all duration-300 group"
          >
            {/* Avatar section */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 bg-primary text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded shadow">
                {member.role}
              </span>
            </div>

            {/* Info details */}
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <h3 className="font-display text-lg font-bold text-white tracking-tight">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-xs font-mono">{member.academicYear}</p>
              </div>

              <p className="text-gray-400 text-xs line-clamp-2 italic">
                "{member.quote}"
              </p>

              {/* Drill-down action link */}
              <div className="pt-4 border-t border-[#222] flex items-center justify-between">
                {member.socials.email ? (
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                ) : (
                  <span />
                )}
                
                <Link
                  to={`/members/${member.id}`}
                  className="text-primary hover:text-red-400 text-xs font-bold tracking-wider uppercase flex items-center gap-1"
                >
                  Profile <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
