import { Link } from 'react-router-dom';
import { Mail, Shield, Award, Terminal } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-footer-rich text-body py-16 sm:py-20 relative">
      {/* 1px Brand Gradient Separator Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, #b22b2f, #d1a550, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Brand tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/mascot.svg" alt="ACES Mascot" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-black text-2xl tracking-wider text-gradient-brand">
                ACES DIT
              </span>
            </div>
            <p className="max-w-sm text-sm text-body font-medium leading-relaxed">
              Association of Computer Engineering Students (ACES), D. Y. Patil Institute of Technology, Pimpri, Pune.
            </p>
            <p className="text-xs text-muted font-normal">
              Empowering engineers to design, build, and deploy the technology of tomorrow.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="font-display font-bold text-primary mb-4 uppercase tracking-wider text-xs sm:text-sm">Navigation</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-body hover:text-primary hover:underline transition-colors font-medium">Home</Link>
              </li>
              <li>
                <Link to="/who-are-we" className="text-body hover:text-primary hover:underline transition-colors font-medium">Who Are We</Link>
              </li>
              <li>
                <Link to="/golden-moments" className="text-body hover:text-primary hover:underline transition-colors font-medium">Golden Moments</Link>
              </li>
              <li>
                <Link to="/feed" className="text-body hover:text-primary hover:underline transition-colors font-medium">Blogs & Articles</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-body hover:text-primary hover:underline transition-colors font-medium">Gallery</Link>
              </li>
              <li>
                <Link to="/social" className="text-body hover:text-primary hover:underline transition-colors font-medium">Social & Reels</Link>
              </li>
              <li>
                <Link to="/members" className="text-body hover:text-primary hover:underline transition-colors font-medium">Club Members</Link>
              </li>
            </ul>
          </div>

          {/* Contact and Accreditation */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-primary mb-4 uppercase tracking-wider text-xs sm:text-sm">Contact Us</h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2 text-body font-medium">
                <Mail className="w-4 h-4 text-primary" />
                <span>aces.dit@dypvp.edu.in</span>
              </li>
              <li className="flex items-center gap-2 text-body font-medium">
                <Terminal className="w-4 h-4 text-secondary" />
                <span>Lab 5, Computer Dept</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-muted/20 flex items-center gap-2 text-xs text-muted">
              <Award className="w-4 h-4 text-secondary" />
              <span>DIT Student Council Accredited</span>
            </div>
          </div>

        </div>

        {/* Copyright strip */}
        <div className="pt-8 mt-10 border-t border-muted/25 text-center text-xs text-muted flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} ACES DIT Pune. All rights reserved.</p>
          
          {/* Social Icons Strip */}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/acesdit/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors p-1" title="Instagram">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/aces-dit/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors p-1" title="LinkedIn">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href="https://github.com/acesdit" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors p-1" title="GitHub">
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          <p className="text-[11px] text-muted font-mono">
            Built by ACES Technical Team
          </p>
        </div>
      </div>
    </footer>
  );
}
