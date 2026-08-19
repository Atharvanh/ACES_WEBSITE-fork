import { Link } from 'react-router-dom';
import { Mail, Shield, Award, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-tint border-t border-primary/15 text-muted py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Brand tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-secondary fill-current" viewBox="0 0 52 60">
                <path d="M8 28 C6 20, 2 14, 4 8 C8 12, 10 16, 12 22 C14 16, 16 10, 22 6 C20 14, 18 20, 18 26Z" />
                <path d="M44 28 C46 20, 50 14, 48 8 C44 12, 42 16, 40 22 C38 16, 36 10, 30 6 C32 14, 34 20, 34 26Z" />
                <path d="M18 26 C20 22, 26 20, 28 20 C30 20, 36 22, 38 26 C36 30, 32 34, 28 36 C24 34, 20 30, 18 26Z" />
                <path d="M22 34 C20 40, 18 46, 16 50 C20 46, 24 42, 28 40 C32 42, 36 46, 40 50 C38 46, 36 40, 34 34Z" />
                <circle cx="28" cy="18" r="5" />
                <path d="M23 17 L18 19 L23 20Z" className="text-primary fill-current" />
              </svg>
              <span className="font-display font-black text-xl tracking-wider text-gradient-brand">
                ACES DIT
              </span>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Association of Computer Engineering Students (ACES), D. Y. Patil Institute of Technology, Pimpri, Pune.
            </p>
            <p className="text-xs text-muted/80">
              Empowering engineers to design, build, and deploy the technology of tomorrow.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="font-display font-semibold text-primary mb-4 uppercase tracking-wider text-sm">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/who-are-we" className="hover:text-secondary transition-colors">Who Are We</Link>
              </li>
              <li>
                <Link to="/golden-moments" className="hover:text-secondary transition-colors">Golden Moments</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-secondary transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/feed" className="hover:text-secondary transition-colors">Feed & Reels</Link>
              </li>
              <li>
                <Link to="/members" className="hover:text-secondary transition-colors">Club Members</Link>
              </li>
            </ul>
          </div>

          {/* Contact and Accreditation */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-primary mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>aces.dit@dypvp.edu.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-secondary" />
                <span>Lab 5, Computer Dept</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-muted/30 flex items-center gap-2 text-xs text-muted">
              <Award className="w-4 h-4 text-secondary" />
              <span>DIT Student Council Accredited</span>
            </div>
          </div>

        </div>

        {/* Copyright strip */}
        <div className="pt-8 mt-8 border-t border-muted/30 text-center text-xs text-muted flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} ACES DIT Pune. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline flex items-center gap-1 hover:text-secondary">
              <Shield className="w-3 h-3" /> Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:underline hover:text-secondary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
