// Social Data for Reels and Posts in Social Highlights
// Videos are stored in /public/videos/ and served directly

export const ACES_INSTAGRAM_URL = 'https://www.instagram.com/aces.dit/';

export const REELS_DATA = [
  {
    id: 'reel-1',
    title: 'Flagship HackACES 36-Hour Hackathon',
    subtitle: 'High-energy coding sprints, mentorship & final pitches',
    author: 'aces.dit',
    videoSrc: '/videos/reel-1.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Flagship Event'
  },
  {
    id: 'reel-2',
    title: 'AI & Web3 Bootcamp Hands-on Live',
    subtitle: 'Neural networks, smart contracts, and real-time demos',
    author: 'aces.dit',
    videoSrc: '/videos/reel-2.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Bootcamp'
  },
  {
    id: 'reel-3',
    title: 'Robotics & Hardware Demo Showcase',
    subtitle: 'Autonomous rovers, IoT sensors, and embedded builds',
    author: 'aces.dit',
    videoSrc: '/videos/reel-3.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Hardware Hub'
  },
  {
    id: 'reel-4',
    title: 'Smart India Hackathon Victory 🏆',
    subtitle: 'Celebrating 1st place among top national engineering colleges',
    author: 'aces.dit',
    videoSrc: '/videos/reel-4.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'National Award'
  },
  {
    id: 'reel-5',
    title: 'Phoenix Annual Cultural Night',
    subtitle: 'Acoustic performances, student talent, and awards ceremony',
    author: 'aces.dit',
    videoSrc: '/videos/reel-5.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Campus Life'
  },
  {
    id: 'reel-6',
    title: 'ACES TechXpo Innovation Highlights',
    subtitle: '40+ student innovations, live interactive project demos',
    author: 'aces.dit',
    videoSrc: '/videos/reel-6.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Exhibition'
  },
  {
    id: 'reel-7',
    title: 'Core Committee Behind-The-Scenes',
    subtitle: 'Late night brainstorming, video editing, and stage prep',
    author: 'aces.dit',
    videoSrc: '/videos/reel-7.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Behind The Scenes'
  },
  {
    id: 'reel-8',
    title: 'Open Source Community Sprint',
    subtitle: 'First pull requests, Git mastery, and contributor onboarding',
    author: 'aces.dit',
    videoSrc: '/videos/reel-8.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Open Source'
  },
  {
    id: 'reel-9',
    title: 'Competitive Programming League',
    subtitle: 'Speed coding battles, algorithmic rounds & leaderboards',
    author: 'aces.dit',
    videoSrc: '/videos/reel-9.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Coding Battle'
  },
  {
    id: 'reel-10',
    title: 'Technical Paper Presentation Summit',
    subtitle: 'Publishing research, neural architecture designs & keynotes',
    author: 'aces.dit',
    videoSrc: '/videos/reel-10.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Research'
  },
  {
    id: 'reel-11',
    title: 'Cloud DevOps & System Architecture',
    subtitle: 'Kubernetes orchestration, CI/CD pipelines & cloud native',
    author: 'aces.dit',
    videoSrc: '/videos/reel-11.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Cloud & DevOps'
  },
  {
    id: 'reel-12',
    title: 'ACES Alumni Meet & Industry Insights',
    subtitle: 'Panel discussions with senior engineers from top tech firms',
    author: 'aces.dit',
    videoSrc: '/videos/reel-12.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Alumni Network'
  }
];

export const POSTS_DATA = [
  {
    id: 'post-1',
    title: 'National Coding Championship 2026 Winners!',
    caption: 'Huge congratulations to our algorithm team for securing 1st place among 120+ colleges at the Inter-College Tech Cup.',
    author: 'aces.dit',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80',
    date: '2 Days Ago',
    category: 'Achievement',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-2',
    title: 'Inaugural TechXpo 2026 Showcase Recap',
    caption: '40+ student innovations on display ranging from embedded IoT devices to generative AI agents. Thank you all for attending!',
    author: 'aces.dit',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
    date: '5 Days Ago',
    category: 'Exhibition',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-3',
    title: 'Mastering Full-Stack & System Design Workshop',
    caption: 'Interactive live coding session covering microservices, caching strategies, and frontend performance optimizations.',
    author: 'aces.dit',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80',
    date: '1 Week Ago',
    category: 'Workshop',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-4',
    title: 'Alumni Mentorship & Career Guidance Meet',
    caption: 'Welcoming back our distinguished alumni leaders from Google, Microsoft, and Uber for a special career Q&A panel.',
    author: 'aces.dit',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
    date: '2 Weeks Ago',
    category: 'Community',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-5',
    title: 'Open Source Genesis: Git & GitHub Bootcamp',
    caption: 'Empowering 200+ first and second year engineers to make their first open source contributions and pull requests.',
    author: 'aces.dit',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    date: '3 Weeks Ago',
    category: 'Bootcamp',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-6',
    title: 'Annual Phoenix Cultural Night Celebrations',
    caption: 'An unforgettable evening of live band performances, cultural dance, and student felicitation ceremonies.',
    author: 'aces.dit',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
    date: '1 Month Ago',
    category: 'Cultural',
    instagramUrl: ACES_INSTAGRAM_URL
  }
];
