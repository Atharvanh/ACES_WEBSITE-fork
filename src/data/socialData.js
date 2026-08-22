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
    title: 'Acunetix National Tech Symposium Live! 🔥',
    caption: 'Hundreds of enthusiastic engineers competing in algorithmic coding, hardware expos, and robotics showdowns at Acunetix!',
    author: 'aces.dit',
    image: '/images/posts/post-acunetix-1.jpg',
    date: '2 Days Ago',
    category: 'Symposium',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-2',
    title: 'National Hackathon Finalist Pitches 🚀',
    caption: 'Top engineering squads demonstrating working full-stack and AI prototypes live before our panel of industry evaluators.',
    author: 'aces.dit',
    image: '/images/posts/post-hackathon-1.jpg',
    date: '4 Days Ago',
    category: 'Hackathon',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-3',
    title: 'HackSeries 00 Inaugural Flagship ⚡',
    caption: 'Reliving the founding energy of HackSeries 00! Where builders from across universities came together for 36 hours of code.',
    author: 'aces.dit',
    image: '/images/posts/post-hackseries00-1.jpg',
    date: '1 Week Ago',
    category: 'HackSeries',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-4',
    title: 'HackSeries 0.1 Freshman Inception Lab 💻',
    caption: 'First-year students gaining real-world development experience, mastering terminal tools, Git, and modern frontend frameworks.',
    author: 'aces.dit',
    image: '/images/posts/post-hackseries01-1.jpg',
    date: '1 Week Ago',
    category: 'Bootcamp',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-5',
    title: 'Acunetix Project Expo & Hardware Arena 🤖',
    caption: 'Mind-blowing student engineering projects on display—autonomous systems, IoT smart monitoring, and web innovations.',
    author: 'aces.dit',
    image: '/images/posts/post-acunetix-2.jpg',
    date: '2 Weeks Ago',
    category: 'Exhibition',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-6',
    title: 'Midnight Hacking: Terminal Glow 🌙',
    caption: 'Code commits flowing at 3 AM! Participants pushing features, troubleshooting APIs, and refining pitch decks.',
    author: 'aces.dit',
    image: '/images/posts/post-hackathon-2.jpg',
    date: '2 Weeks Ago',
    category: 'Technical',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-7',
    title: 'HackSeries 00 Mentor Reviews & Tech Support 💡',
    caption: 'Senior engineers and alumni offering actionable code reviews, system architecture tips, and debugging support.',
    author: 'aces.dit',
    image: '/images/posts/post-hackseries00-2.jpg',
    date: '3 Weeks Ago',
    category: 'Mentorship',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-8',
    title: 'Collaborative Problem Solving in Action 🤝',
    caption: 'Designers and developers syncing in real time to build accessible and scalable solutions for national challenges.',
    author: 'aces.dit',
    image: '/images/posts/post-hackseries01-2.jpg',
    date: '3 Weeks Ago',
    category: 'Community',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-9',
    title: 'Acunetix Stage Talks & Faculty Keynote 🎓',
    caption: 'Eminent professors and tech leaders addressing the student community on modern research and industry opportunities.',
    author: 'aces.dit',
    image: '/images/posts/post-acunetix-3.jpg',
    date: '1 Month Ago',
    category: 'Leadership',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-10',
    title: 'National Hackathon Awards & Trophies 🏆',
    caption: 'Heartiest congratulations to the top winning teams taking home accolades, cash prizes, and incubation mentorship!',
    author: 'aces.dit',
    image: '/images/posts/post-hackathon-3.jpg',
    date: '1 Month Ago',
    category: 'Achievement',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-11',
    title: 'HackSeries 00 Ceremonial Lamp Lighting ✨',
    caption: 'Inaugurating the national hackathon with traditional blessings, faculty felicitations, and an enthusiastic crowd.',
    author: 'aces.dit',
    image: '/images/posts/post-hackseries00-3.jpg',
    date: '1 Month Ago',
    category: 'Flagship',
    instagramUrl: ACES_INSTAGRAM_URL
  },
  {
    id: 'post-12',
    title: 'Hands-on Code Sprint Mentorship Session 🛠️',
    caption: 'Breaking down microservice patterns, database schema optimization, and clean coding practices.',
    author: 'aces.dit',
    image: '/images/posts/post-hackseries01-3.jpg',
    date: '1 Month Ago',
    category: 'Technical',
    instagramUrl: ACES_INSTAGRAM_URL
  }
];



