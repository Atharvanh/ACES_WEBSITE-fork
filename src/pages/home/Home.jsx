import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Terminal, Code2, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import WhoAreWe from '../who-are-we/WhoAreWe';
import GoldenMoments from '../golden-moments/GoldenMoments';
import Gallery from '../gallery/Gallery';
import Feed from '../feed/Feed';
import Social from '../social/Social';
import Members from '../members/Members';

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

function StatCard({ target, suffix = "+", label, color = "text-primary", delay = 100 }) {
  const { count, ref } = useCountUp(target, 1600);

  return (
    <div className={`bg-white border border-[#e8e6e1] p-6 rounded-[14px] text-center hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 shadow-sm reveal-card delay-${delay}`}>
      <span ref={ref} className={`font-display text-3xl sm:text-4xl font-black ${color} block mb-1 tracking-tight`}>
        {count}{suffix}
      </span>
      <span className="text-xs text-muted font-semibold uppercase tracking-wider block">
        {label}
      </span>
    </div>
  );
}

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
    <div className="min-h-screen overflow-x-hidden bg-white">
      {/* ─── 1. Home / Hero Section (Color: White) ─── */}
      <section id="home" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white scroll-mt-20">
        {/* Subtle Ambient Radial Glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 pointer-events-none -z-10" 
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(209,165,80,0.14) 0%, transparent 70%)' }}
        />

        <motion.div 
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center space-y-8 relative z-10"
        >
          {/* Badge Pill */}
          <motion.div variants={heroItem}>
            <div className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-[4px] shadow-brand-glow">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Student Body • Computer Engineering</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={heroItem}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-gradient-brand tracking-[-0.02em] leading-none max-w-4xl mx-auto"
          >
            Innovate. Build. Empower.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={heroItem}
            className="text-body text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-sans font-medium"
          >
            Association of Computer Engineering Students (ACES) at D. Y. Patil Institute of Technology, Pimpri, Pune. Connecting visionary minds through technology, leadership, and collaboration.
          </motion.p>

          {/* CTA Button Group */}
          <motion.div variants={heroItem} className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection('who-are-we')}
              className="inline-flex items-center gap-2 bg-primary text-white font-bold text-sm px-7 py-3.5 rounded-[4px] hover:bg-primary/90 hover:-translate-y-0.5 shadow-brand-glow hover:shadow-[0_6px_28px_rgba(178,43,47,0.28)] transition-all group cursor-pointer tracking-wider uppercase"
            >
              <span>Explore ACES</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('gallery')}
              className="inline-flex items-center gap-2 border border-primary text-primary bg-white/90 font-bold text-sm px-7 py-3.5 rounded-[4px] hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer shadow-sm tracking-wider uppercase"
            >
              <span>View Gallery</span>
            </button>
          </motion.div>

          {/* Quick Stats Grid with Count-up Animation */}
          <motion.div variants={heroItem} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 max-w-4xl mx-auto">
            <StatCard target={500} suffix="+" label="Active Members" color="text-primary" delay={100} />
            <StatCard target={25} suffix="+" label="Annual Events" color="text-secondary" delay={200} />
            <StatCard target={10} suffix="+" label="National Awards" color="text-primary" delay={300} />
            <StatCard target={100} suffix="%" label="Student Driven" color="text-secondary" delay={400} />
          </motion.div>

        </motion.div>
      </section>

      {/* ─── Highlights Section (What We Do) ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-white-to-peach relative overflow-hidden">
        {/* Ambient Faint Circle */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full pointer-events-none -z-10" 
          style={{ background: 'radial-gradient(circle, rgba(178,43,47,0.04) 0%, rgba(209,165,80,0.03) 50%, transparent 70%)' }}
        />

        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto reveal-heading">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-secondary bg-light-tint border border-muted/30 px-3 py-1 rounded-[4px]">
              <Terminal className="w-3.5 h-3.5" /> What We Do
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-near-black tracking-tight">
              Driving Technical <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-body text-sm sm:text-base font-medium">
              From technical hackathons and competitive programming workshops to cultural celebrations and career mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-[#e8e6e1] p-8 rounded-[16px] hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 space-y-4 shadow-sm group reveal-card delay-100 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[8px] bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-brand-glow">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-extrabold uppercase text-near-black group-hover:text-primary transition-colors">
                  Hackathons & Bootcamps
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  Organizing flagship 36-hour national hackathons, coding sprints, and hands-on workshops across modern stacks and AI architectures.
                </p>
              </div>
              <button 
                onClick={() => scrollToSection('golden-moments')} 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider pt-3 cursor-pointer"
              >
                <span>Read Stories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#e8e6e1] p-8 rounded-[16px] hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 space-y-4 shadow-sm group reveal-card delay-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[8px] bg-secondary/15 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-dark-overlay transition-all duration-300">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-extrabold uppercase text-near-black group-hover:text-primary transition-colors">
                  Community & Mentorship
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  Fostering peer-to-peer learning with senior developers, alumni network panels, and research project incubations.
                </p>
              </div>
              <button 
                onClick={() => scrollToSection('members')} 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider pt-3 cursor-pointer"
              >
                <span>Meet Core Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#e8e6e1] p-8 rounded-[16px] hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 space-y-4 shadow-sm group reveal-card delay-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[8px] bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-brand-glow">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-extrabold uppercase text-near-black group-hover:text-primary transition-colors">
                  Competitions & Summits
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  Representing DIT Pune on national stages, technical paper conferences, and inter-collegiate innovation cups.
                </p>
              </div>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider pt-3 cursor-pointer"
              >
                <span>View Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who Are We Section ─── */}
      <WhoAreWe embedded={true} />

      {/* ─── Golden Moments Section (Manual navigation) ─── */}
      <GoldenMoments embedded={true} />

      {/* ─── Blogs & Tech Feed Section (Infinite Marquee) ─── */}
      <Feed embedded={true} />

      {/* ─── Gallery Showcase Section (Hero with Explore CTA) ─── */}
      <Gallery embedded={true} />

      {/* ─── Social Highlights Section ─── */}
      <Social embedded={true} />

      {/* ─── Members Directory Preview Section ─── */}
      <Members embedded={true} />
    </div>
  );
}
