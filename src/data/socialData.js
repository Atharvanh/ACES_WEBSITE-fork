// Social Data for Reels and Posts in Social Highlights
// Videos are stored in /public/videos/ and served directly

export const ACES_INSTAGRAM_URL = 'https://www.instagram.com/aces.dit/';

export const BASE_REELS_DATA = [
  {
    id: 'reel-1',
    title: 'Flagship HackACES 36-Hour Hackathon',
    subtitle: 'High-energy coding sprints, mentorship & final pitches',
    author: 'aces.dit',
    videoSrc: '/videos/reel-1.mp4',
    posterSrc: '/images/gallery/hackseries-25-1.jpg',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Flagship Event'
  },
  {
    id: 'reel-2',
    title: 'AI & Web3 Bootcamp Hands-on Live',
    subtitle: 'Neural networks, smart contracts, and real-time demos',
    author: 'aces.dit',
    videoSrc: '/videos/reel-2.mp4',
    posterSrc: '/images/gallery/hackseries-25-8.jpg',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Bootcamp'
  },
  {
    id: 'reel-3',
    title: 'Robotics & Hardware Demo Showcase',
    subtitle: 'Autonomous rovers, IoT sensors, and embedded builds',
    author: 'aces.dit',
    videoSrc: '/videos/reel-3.mp4',
    posterSrc: '/images/gallery/hackathon-main-1.jpg',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Hardware Hub'
  },
  {
    id: 'reel-4',
    title: 'National Hackathon Pitch Finals 🏆',
    subtitle: 'Celebrating top prototype pitches before our distinguished jury panel',
    author: 'aces.dit',
    videoSrc: '/videos/reel-4.mp4',
    posterSrc: '/images/gallery/hackathon-main-20.jpg',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'National Award'
  },
  {
    id: 'reel-5',
    title: 'Indo-German Tech & Academic Colloquium',
    subtitle: 'Global perspectives, higher education, and research exchange',
    author: 'aces.dit',
    videoSrc: '/videos/reel-5.mp4',
    posterSrc: '/images/gallery/german-event-1.jpg',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Global Exchange'
  },
  {
    id: 'reel-6',
    title: 'ACES TechXpo Innovation Highlights',
    subtitle: '40+ student innovations, live interactive project demos',
    author: 'aces.dit',
    videoSrc: '/videos/reel-6.mp4',
    posterSrc: '/images/gallery/hackseries-25-16.jpg',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Exhibition'
  },
  {
    id: 'reel-7',
    title: 'Core Committee Behind-The-Scenes',
    subtitle: 'Late night brainstorming, stage management, and event execution',
    author: 'aces.dit',
    videoSrc: '/videos/reel-7.mp4',
    posterSrc: '/images/gallery/hackathon-bts-1.jpg',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Behind The Scenes'
  },
  {
    id: 'reel-8',
    title: 'Open Source Community Sprint',
    subtitle: 'First pull requests, Git mastery, and contributor onboarding',
    author: 'aces.dit',
    videoSrc: '/videos/reel-8.mp4',
    posterSrc: '/images/gallery/hackseries-01-1.jpg',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Open Source'
  },
  {
    id: 'reel-9',
    title: 'Competitive Programming League',
    subtitle: 'Speed coding battles, algorithmic rounds & leaderboards',
    author: 'aces.dit',
    videoSrc: '/videos/reel-9.mp4',
    posterSrc: '/images/gallery/hackseries-25-25.jpg',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Coding Battle'
  },
  {
    id: 'reel-10',
    title: 'Technical Mentorship & Code Review',
    subtitle: 'System architecture reviews, API debugging & live insights',
    author: 'aces.dit',
    videoSrc: '/videos/reel-10.mp4',
    posterSrc: '/images/gallery/hackathon-main-14.jpg',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Mentorship'
  },
  {
    id: 'reel-11',
    title: 'Cloud DevOps & System Architecture',
    subtitle: 'Kubernetes orchestration, CI/CD pipelines & cloud native',
    author: 'aces.dit',
    videoSrc: '/videos/reel-11.mp4',
    posterSrc: '/images/gallery/hackseries-25-35.jpg',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Cloud & DevOps'
  },
  {
    id: 'reel-12',
    title: 'Student Leadership & Induction Gala',
    subtitle: 'Welcoming the new domain leads and organizing officers',
    author: 'aces.dit',
    videoSrc: '/videos/reel-12.mp4',
    posterSrc: '/images/gallery/hackathon-bts-5.jpg',
    instagramUrl: ACES_INSTAGRAM_URL,
    tag: 'Leadership'
  }
];

// 🚀 Automatic Video Detection: Scans ALL .mp4 / .webm files in public/videos/
const videoModules = import.meta.glob('/public/videos/*.{mp4,webm,mov,MP4,WEBM,MOV}', { eager: true });

function formatTitleFromFilename(filename) {
  const cleanName = filename
    .replace(/\.[^/.]+$/, '') // remove extension
    .replace(/[-_]+/g, ' ')   // replace dashes & underscores with space
    .trim();

  // Capitalize words
  return cleanName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Build dynamic reels list from all detected video files
function buildReelsData() {
  const detectedKeys = Object.keys(videoModules);
  
  if (detectedKeys.length === 0) {
    return BASE_REELS_DATA;
  }

  // Deduplicate and map each unique video file
  const seenPaths = new Set();
  const result = [];

  detectedKeys.forEach((path, idx) => {
    const filename = path.split('/').pop();
    const videoSrc = `/videos/${filename}`;
    
    if (seenPaths.has(videoSrc)) return;
    seenPaths.add(videoSrc);

    // Check if we have pre-configured metadata matching this exact video path or name
    const existing = BASE_REELS_DATA.find(r => r.videoSrc === videoSrc);

    if (existing) {
      result.push({
        ...existing,
        id: `reel-${filename.replace(/\.[^/.]+$/, '')}`,
        videoSrc
      });
    } else {
      result.push({
        id: `auto-reel-${filename.replace(/\.[^/.]+$/, '')}-${idx}`,
        title: formatTitleFromFilename(filename),
        subtitle: 'Latest video reel from ACES DIT',
        author: 'aces.dit',
        videoSrc: videoSrc,
        posterSrc: '/images/gallery/hackseries-25-1.jpg',
        instagramUrl: ACES_INSTAGRAM_URL,
        tag: 'Instagram Reel'
      });
    }
  });

  return result.length > 0 ? result : BASE_REELS_DATA;
}

export const REELS_DATA = buildReelsData();

export const POSTS_DATA = [
  {
    id: 'post-1',
    title: 'Acunetix National Tech Symposium 🔥',
    caption: 'The flagship annual technical symposium uniting top coders, robotics enthusiasts, and creators across the state for competitive engineering showdowns!',
    author: 'aces.dit',
    image: '/images/golden-moments/gm-acunetix.jpg',
    date: '1 Day Ago',
    category: 'Symposium',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-2',
    title: 'National Hackathon Pitch Stage Finals 🚀',
    caption: 'Top finalist teams presenting working prototypes across AI, Web3, and HealthTech live to our esteemed panel of jury members and industry evaluators.',
    author: 'aces.dit',
    image: '/images/golden-moments/gm-hackathon.jpg',
    date: '3 Days Ago',
    category: 'Hackathon',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-3',
    title: 'HackSeries 00: Inaugural Foundation ⚡',
    caption: 'Where the legacy started! 500+ builders assembling to build high-impact real-world solutions during our foundational flagship hackathon.',
    author: 'aces.dit',
    image: '/images/golden-moments/gm-hackseries-00.jpg',
    date: '5 Days Ago',
    category: 'HackSeries',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-4',
    title: 'Hacktoberfest Open Source Sprint 💻',
    caption: 'Empowering student developers to master Git workflows, create verified pull requests, and contribute to production open-source ecosystems.',
    author: 'aces.dit',
    image: '/images/golden-moments/gm-hacktoberfest.jpg',
    date: '1 Week Ago',
    category: 'Open Source',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-5',
    title: 'HackSeries 0.1: Freshman Development Lab 🌱',
    caption: 'First-year engineers getting their hands dirty with Git, modern web frameworks, and algorithmic problem solving at the freshman inception sprint.',
    author: 'aces.dit',
    image: '/images/golden-moments/gm-hackseries-01.jpg',
    date: '1 Week Ago',
    category: 'Bootcamp',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-6',
    title: 'Indo-German Technical Colloquium 🌍',
    caption: 'Honored to host distinguished international guest faculty for an insightful session on global engineering careers, autonomous robotics, and higher education research.',
    author: 'aces.dit',
    image: '/images/golden-moments/gm-indo-german.jpg',
    date: '2 Weeks Ago',
    category: 'International',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-7',
    title: 'The Backstage Heroes: ACES Organizing Crew 🤝',
    caption: 'From stage logistics and technical infrastructure to participant support and live coverage—huge shoutout to our event managers and volunteers!',
    author: 'aces.dit',
    image: '/images/golden-moments/gm-aces-crew.jpg',
    date: '2 Weeks Ago',
    category: 'Behind The Scenes',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-8',
    title: 'Grand Awards Ceremony & Winner Felicitation 🏆',
    caption: 'Celebrating outstanding brilliance! Heartiest congratulations to all winning squads and participants for setting new benchmarks in problem solving.',
    author: 'aces.dit',
    image: '/images/gallery/hackathon-main-20.jpg',
    date: '3 Weeks Ago',
    category: 'Achievement',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-9',
    title: 'Midnight Coding Sprints in Full Swing 🌙',
    caption: 'Laptops glowing, coffee flowing, and terminals alive! Participants pushing live commits and refining system architecture into the early morning hours.',
    author: 'aces.dit',
    image: '/images/gallery/hackseries-25-8.jpg',
    date: '3 Weeks Ago',
    category: 'Technical',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-10',
    title: '1-on-1 Mentor Review & Architecture Diagnostics 💡',
    caption: 'Industry mentors providing actionable technical feedback, cloud architecture guidance, and git review directly to team workstations.',
    author: 'aces.dit',
    image: '/images/gallery/hackseries-25-16.jpg',
    date: '1 Month Ago',
    category: 'Mentorship',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-11',
    title: 'Collaborative Dev Hub in Full Energy 🔥',
    caption: 'Cross-functional engineering squads collaborating seamlessly—designers, backend engineers, and AI modelers building together under one roof.',
    author: 'aces.dit',
    image: '/images/gallery/hackseries-25-25.jpg',
    date: '1 Month Ago',
    category: 'Technical',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-12',
    title: 'ACES Leadership & Strategy Induction ✨',
    caption: 'Welcoming the new student officers and domain leads dedicated to driving technical excellence and community growth for the upcoming year.',
    author: 'aces.dit',
    image: '/images/gallery/hackseries-25-35.jpg',
    date: '1 Month Ago',
    category: 'Leadership',
    instagramUrl: ACES_INSTAGRAM_URL
  }
];


