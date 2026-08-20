import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Terminal, Code2, Users, Award } from 'lucide-react';
import WhoAreWe from '../who-are-we/WhoAreWe';
import GoldenMoments from '../golden-moments/GoldenMoments';
import Gallery from '../gallery/Gallery';
import Feed from '../feed/Feed';
import Social from '../social/Social';
import Members from '../members/Members';

export default function Home() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* ─── Hero Section ─── */}
      <section id="home" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-muted/30 scroll-mt-20">
        {/* Subtle Radial Glow in Hero */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 pointer-events-none -z-10" 
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(209,165,80,0.12) 0%, transparent 70%)' }}
        />

        <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-[4px] shadow-brand-glow reveal-heading">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Student Body • Computer Engineering</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-gradient-brand tracking-tight leading-none max-w-4xl mx-auto reveal-heading">
            Innovate. Build. Empower.
          </h1>

          {/* Subtitle */}
          <p className="text-muted text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-sans reveal">
            Association of Computer Engineering Students (ACES) at D. Y. Patil Institute of Technology, Pimpri, Pune. Connecting visionary minds through technology, leadership, and collaboration.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 reveal">
            <button
              onClick={() => scrollToSection('who-are-we')}
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-[4px] hover:bg-primary/90 hover:-translate-y-0.5 shadow-brand-glow hover:shadow-[0_6px_28px_rgba(178,43,47,0.28)] transition-all group cursor-pointer"
            >
              <span>Explore ACES</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('gallery')}
              className="inline-flex items-center gap-2 border border-primary text-primary bg-white/80 font-semibold text-sm px-6 py-3 rounded-[4px] hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer shadow-sm"
            >
              <span>View Gallery</span>
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto">
            <div className="bg-white border border-[#e8e6e1] p-6 rounded-[12px] text-center hover:-translate-y-1 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 shadow-sm reveal-card delay-100">
              <span className="font-display text-3xl sm:text-4xl font-black text-primary block mb-1">500+</span>
              <span className="text-xs text-muted font-semibold uppercase tracking-wider">Active Members</span>
            </div>
            <div className="bg-white border border-[#e8e6e1] p-6 rounded-[12px] text-center hover:-translate-y-1 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 shadow-sm reveal-card delay-200">
              <span className="font-display text-3xl sm:text-4xl font-black text-secondary block mb-1">25+</span>
              <span className="text-xs text-muted font-semibold uppercase tracking-wider">Annual Events</span>
            </div>
            <div className="bg-white border border-[#e8e6e1] p-6 rounded-[12px] text-center hover:-translate-y-1 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 shadow-sm reveal-card delay-300">
              <span className="font-display text-3xl sm:text-4xl font-black text-primary block mb-1">10+</span>
              <span className="text-xs text-muted font-semibold uppercase tracking-wider">National Awards</span>
            </div>
            <div className="bg-white border border-[#e8e6e1] p-6 rounded-[12px] text-center hover:-translate-y-1 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 shadow-sm reveal-card delay-400">
              <span className="font-display text-3xl sm:text-4xl font-black text-secondary block mb-1">100%</span>
              <span className="text-xs text-muted font-semibold uppercase tracking-wider">Student Driven</span>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Highlights Section ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 border-b border-muted/30">
        <div className="text-center space-y-3 max-w-2xl mx-auto reveal-heading">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-secondary bg-light-tint border border-muted/30 px-3 py-1 rounded-[4px]">
            <Terminal className="w-3.5 h-3.5" /> What We Do
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-dark-overlay tracking-tight">
            Driving Technical <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-muted text-sm sm:text-base">
            From technical hackathons and competitive programming workshops to cultural celebrations and career mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-[#e8e6e1] p-8 rounded-[12px] hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 space-y-4 shadow-sm group reveal-card delay-100">
            <div className="w-12 h-12 rounded-[6px] bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-brand-glow">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold uppercase text-dark-overlay group-hover:text-primary transition-colors">
              Hackathons & Bootcamps
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Organizing flagship 36-hour national hackathons, coding sprints, and hands-on workshops across modern stacks and AI architectures.
            </p>
            <button 
              onClick={() => scrollToSection('golden-moments')} 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider pt-2 cursor-pointer"
            >
              <span>Read Stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#e8e6e1] p-8 rounded-[12px] hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 space-y-4 shadow-sm group reveal-card delay-200">
            <div className="w-12 h-12 rounded-[6px] bg-secondary/15 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-dark-overlay transition-all duration-300">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold uppercase text-dark-overlay group-hover:text-primary transition-colors">
              Community & Mentorship
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Fostering peer-to-peer learning with senior developers, alumni network panels, and research project incubations.
            </p>
            <button 
              onClick={() => scrollToSection('members')} 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider pt-2 cursor-pointer"
            >
              <span>Meet Core Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#e8e6e1] p-8 rounded-[12px] hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 space-y-4 shadow-sm group reveal-card delay-300">
            <div className="w-12 h-12 rounded-[6px] bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-brand-glow">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold uppercase text-dark-overlay group-hover:text-primary transition-colors">
              Competitions & Summits
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Representing DIT Pune on national stages, technical paper conferences, and inter-collegiate innovation cups.
            </p>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider pt-2 cursor-pointer"
            >
              <span>View Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── Who Are We Section ─── */}
      <WhoAreWe embedded={true} />

      {/* ─── Golden Moments Section (Manual navigation) ─── */}
      <GoldenMoments embedded={true} />

      {/* ─── Blogs & Tech Feed Section (Automatic moving carousel) ─── */}
      <Feed embedded={true} />

      {/* ─── Gallery Showcase Section (Hero with Explore Gallery CTA) ─── */}
      <Gallery embedded={true} />

      {/* ─── Social Highlights Section ─── */}
      <Social embedded={true} />

      {/* ─── Members Directory Preview Section ─── */}
      <Members embedded={true} />
    </div>
  );
}
