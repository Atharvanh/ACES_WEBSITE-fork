import { Target, Compass, Sparkles, BookOpen, Layers, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhoAreWe({ embedded = false }) {
  return (
    <div id="who-are-we" className={embedded ? "relative" : "min-h-screen"}>
      {/* ─── Hero Header ─── */}
      <section className={`relative bg-who-hero ${embedded ? 'pt-16 sm:pt-24' : 'pt-28 sm:pt-36'} pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden`}>
        {/* Ambient Glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 pointer-events-none -z-10" 
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(209,165,80,0.12) 0%, transparent 70%)' }}
        />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 reveal-heading">
          {/* Section Label Badge */}
          <div className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-[4px] shadow-brand-glow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHO ARE WE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-gradient-brand tracking-[-0.02em] leading-tight">
            Empowering the Next Generation of Engineers
          </h1>

          <p className="text-body text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-sans font-medium">
            The Association of Computer Engineering Students (ACES) is the premier student-led departmental organization at Dr. D. Y. Patil Institute of Technology, Pimpri, Pune.
          </p>
        </div>
      </section>

      {/* ─── Mission & Vision Grid ─── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white border border-[#e8e6e1] p-8 rounded-[16px] space-y-4 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 shadow-sm reveal-card delay-100">
            <div className="w-12 h-12 rounded-[8px] bg-primary/10 text-primary flex items-center justify-center shadow-brand-glow">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl font-extrabold uppercase text-near-black border-l-[3px] border-secondary pl-3">
              Our Mission
            </h2>
            <p className="text-body text-sm sm:text-base leading-relaxed font-medium">
              To cultivate an environment of technical excellence, continuous learning, and collaborative innovation among students, equipping them with industry-grade skills and ethical leadership values.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-[#e8e6e1] p-8 rounded-[16px] space-y-4 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 shadow-sm reveal-card delay-200">
            <div className="w-12 h-12 rounded-[8px] bg-secondary/15 text-secondary flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl font-extrabold uppercase text-near-black border-l-[3px] border-secondary pl-3">
              Our Vision
            </h2>
            <p className="text-body text-sm sm:text-base leading-relaxed font-medium">
              To be a benchmark student organization that bridges the gap between academic theory and real-world technology demands, driving impactful solutions for societal advancement.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Core Pillars ─── */}
      <section className="bg-who-pillars py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-xl mx-auto reveal-heading">
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-primary tracking-tight">
              Our Core Pillars
            </h2>
            <p className="text-body text-sm sm:text-base font-medium">
              The fundamental principles guiding our technical, creative, and organizational initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-[#e8e6e1] p-7 rounded-[16px] hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 space-y-3 shadow-sm reveal-card delay-100">
              <div className="text-primary font-mono text-xs font-black tracking-wider">01 / TECHNICAL</div>
              <h3 className="font-display text-lg font-extrabold text-near-black uppercase">Coding & Development</h3>
              <p className="text-body text-xs sm:text-sm leading-relaxed font-medium">
                Hosting algorithmic competitions, full-stack workshops, open-source cohorts, and hands-on hackathons.
              </p>
            </div>

            <div className="bg-white border border-[#e8e6e1] p-7 rounded-[16px] hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 space-y-3 shadow-sm reveal-card delay-200">
              <div className="text-secondary font-mono text-xs font-black tracking-wider">02 / LEADERSHIP</div>
              <h3 className="font-display text-lg font-extrabold text-near-black uppercase">Team & Governance</h3>
              <p className="text-body text-xs sm:text-sm leading-relaxed font-medium">
                Nurturing managerial, communication, and decision-making capabilities through institutional event leadership.
              </p>
            </div>

            <div className="bg-white border border-[#e8e6e1] p-7 rounded-[16px] hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 space-y-3 shadow-sm reveal-card delay-300">
              <div className="text-primary font-mono text-xs font-black tracking-wider">03 / COLLABORATION</div>
              <h3 className="font-display text-lg font-extrabold text-near-black uppercase">Industry & Alumni</h3>
              <p className="text-body text-xs sm:text-sm leading-relaxed font-medium">
                Connecting students directly with distinguished alumni and industry leaders for career guidance and internships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Call to Action ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto space-y-6 reveal">
        <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-near-black tracking-tight">
          Want to Be Part of the <span className="text-primary">Journey?</span>
        </h2>
        <p className="text-body text-sm sm:text-base max-w-lg mx-auto font-medium">
          Explore our members directory, attend our upcoming workshops, or connect with our committee leads.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Link
            to="/members"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold text-sm px-7 py-3.5 rounded-[4px] hover:bg-primary/90 hover:-translate-y-0.5 shadow-brand-glow hover:shadow-[0_6px_28px_rgba(178,43,47,0.28)] transition-all cursor-pointer uppercase tracking-wider"
          >
            Meet the Team
          </Link>
          <Link
            to="/feed"
            className="inline-flex items-center gap-2 border border-primary text-primary bg-white/90 font-bold text-sm px-7 py-3.5 rounded-[4px] hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer shadow-sm uppercase tracking-wider"
          >
            Club Feed
          </Link>
        </div>
      </section>
    </div>
  );
}
