export const categories = [
  {
    id: "core-team",
    title: "Core Team",
    description: "The primary leadership of ACES.",
    roles: ["Faculty Coordinator", "President", "Vice President", "Secretary", "Treasurer"],
    hasViewMore: true,
  },
  {
    id: "technical-team",
    title: "Technical Team",
    description: "Leading tech initiatives and projects.",
    roles: ["Tech Head", "Jr. Tech Head", "Technical Team"],
    hasViewMore: true,
  },
  {
    id: "public-relation-officers",
    title: "Public Relation Officers",
    description: "Managing public relations and communications.",
    roles: ["Public Relation Officer"],
    hasViewMore: false,
  },
  {
    id: "external-affairs-officers",
    title: "External Affairs Officers",
    description: "Handling external affairs and outreach.",
    roles: ["External Affairs Officer"],
    hasViewMore: true,
  },
  {
    id: "aces-representative",
    title: "ACES Representative",
    description: "Representatives of ACES.",
    roles: ["Representative"],
    hasViewMore: true,
  },
  {
    id: "content-creators",
    title: "Content Creators",
    description: "Creating engaging content for ACES.",
    roles: ["Content Creator"],
    hasViewMore: true,
  },
  {
    id: "event-managers",
    title: "Event Managers",
    description: "Managing and organizing ACES events.",
    roles: ["Event Manager"],
    hasViewMore: true,
  },
  {
    id: "data-managers",
    title: "Data Managers",
    description: "Managing data and analytics.",
    roles: ["Data Manager"],
    hasViewMore: false,
  },
  {
    id: "designers-team",
    title: "Designers Team",
    description: "Designing visuals and graphics.",
    roles: ["Designer"],
    hasViewMore: true,
  },
];

export const members = [
  {
    id: "sharad-sir",
    name: "Sharad Sir",
    role: "Faculty Coordinator",
    category: "core-team",
    branch: "Computer Engineering",
    year: "DIT Pune",
    image: "https://i.pravatar.cc/300?img=68",
    bio: "Faculty Coordinator of ACES. Providing guidance, support, and mentorship to student teams in technical and organizational activities.",
    responsibilities: [
      "Mentorship",
      "Club Oversight",
      "Faculty Guidance"
    ],
    skills: [
      "Mentoring",
      "Academic Leadership"
    ],
    social: {
      email: "mailto:sharad.sir@college.edu"
    }
  },
  {
    id: "tejas-nalawade",
    name: "Tejas Nalawade",
    role: "President",
    category: "core-team",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://i.pravatar.cc/300?img=11",
    bio: "Leading ACES with vision and responsibility. Creating with passion, building with purpose. Dedicated to making an impact through innovation, collaboration, and continuous learning. My focus is on empowering every member to grow and contribute.",
    responsibilities: [
      "Team Leadership",
      "Event Management",
      "Strategic Planning",
      "Community Building"
    ],
    skills: [
      "Leadership",
      "Public Speaking",
      "C++",
      "Web Development"
    ],
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      email: "mailto:president@aces.edu"
    }
  },
  {
    id: "sanket-kulkarni",
    name: "Sanket Kulkarni",
    role: "President",
    category: "core-team",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://i.pravatar.cc/300?img=12",
    bio: "Guiding the team towards technical excellence.",
    responsibilities: [
      "Mentorship",
      "Technical Planning"
    ],
    skills: [
      "Python",
      "Machine Learning",
      "Leadership"
    ],
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "atharva-gawade",
    name: "Atharva Gawade",
    role: "Vice President",
    category: "core-team",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://i.pravatar.cc/300?img=13",
    bio: "Supporting leadership, driving execution. Atharva supports the leadership team and ensures smooth execution of all initiatives. He works closely with teams to turn ideas into impactful realities.",
    responsibilities: [
      "Operations",
      "Team Coordination",
      "Execution"
    ],
    skills: [
      "Management",
      "Java",
      "Communication"
    ],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "raj-singh",
    name: "Raj Singh",
    role: "Jr. Tech Head",
    category: "technical-team",
    branch: "Computer Engineering",
    year: "FE",
    image: "https://i.pravatar.cc/300?img=14",
    bio: "Building the digital infrastructure for ACES. Passionate about web technologies and creating seamless user experiences.",
    responsibilities: [
      "Web Development",
      "Technical Workshops",
      "Code Reviews"
    ],
    skills: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Node.js"
    ],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "arnav-tagade",
    name: "Arnav Tagade",
    role: "Technical Team",
    category: "technical-team",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://i.pravatar.cc/300?img=15",
    bio: "Passionate about competitive programming and building scalable systems.",
    responsibilities: [
      "Technical Problem Solving",
      "Algorithm Design"
    ],
    skills: [
      "C++",
      "Data Structures",
      "Python"
    ],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "atharva-harale",
    name: "Atharva Harale",
    role: "Technical Team",
    category: "technical-team",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://i.pravatar.cc/300?img=16",
    bio: "Enthusiastic developer focusing on modern web frameworks and UI/UX.",
    responsibilities: [
      "Frontend Development",
      "UI Implementations"
    ],
    skills: [
      "JavaScript",
      "React",
      "CSS"
    ],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "vyankatesh-patil",
    name: "Vyankatesh Patil",
    role: "Technical Team",
    category: "technical-team",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://i.pravatar.cc/300?img=17",
    bio: "Exploring backend architectures and database management.",
    responsibilities: [
      "Backend APIs",
      "Database Integration"
    ],
    skills: [
      "Node.js",
      "Express",
      "MongoDB"
    ],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "ext-affairs-1",
    name: "External Affairs 1",
    role: "External Affairs Officer",
    category: "external-affairs-officers",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://i.pravatar.cc/300?img=20",
    bio: "Handling external communications and sponsorships.",
    responsibilities: ["Outreach", "Sponsorship"],
    skills: ["Communication", "Negotiation"],
    social: {}
  },
  {
    id: "ext-affairs-2",
    name: "External Affairs 2",
    role: "External Affairs Officer",
    category: "external-affairs-officers",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://i.pravatar.cc/300?img=21",
    bio: "Connecting with other organizations and tech clubs.",
    responsibilities: ["Networking", "Partnerships"],
    skills: ["Public Speaking", "Management"],
    social: {}
  },
  {
    id: "ext-affairs-3",
    name: "External Affairs 3",
    role: "External Affairs Officer",
    category: "external-affairs-officers",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://i.pravatar.cc/300?img=22",
    bio: "Organizing collaborative events.",
    responsibilities: ["Event Collaboration"],
    skills: ["Planning", "Coordination"],
    social: {}
  },
  {
    id: "ext-affairs-4",
    name: "External Affairs 4",
    role: "External Affairs Officer",
    category: "external-affairs-officers",
    branch: "Computer Engineering",
    year: "FE",
    image: "https://i.pravatar.cc/300?img=23",
    bio: "Assisting in outreach programs.",
    responsibilities: ["Outreach Assistance"],
    skills: ["Communication"],
    social: {}
  },
  {
    id: "pro-1", name: "PRO Name 1", role: "Public Relation Officer", category: "public-relation-officers",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=30",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "pro-2", name: "PRO Name 2", role: "Public Relation Officer", category: "public-relation-officers",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=31",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "rep-1", name: "Rep Name 1", role: "Representative", category: "aces-representative",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=32",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "rep-2", name: "Rep Name 2", role: "Representative", category: "aces-representative",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=33",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "rep-3", name: "Rep Name 3", role: "Representative", category: "aces-representative",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=34",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "rep-4", name: "Rep Name 4", role: "Representative", category: "aces-representative",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=35",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "content-1", name: "Content Creator 1", role: "Content Creator", category: "content-creators",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=36",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "content-2", name: "Content Creator 2", role: "Content Creator", category: "content-creators",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=37",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "content-3", name: "Content Creator 3", role: "Content Creator", category: "content-creators",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=38",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "content-4", name: "Content Creator 4", role: "Content Creator", category: "content-creators",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=39",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "event-1", name: "Event Manager 1", role: "Event Manager", category: "event-managers",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=40",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "event-2", name: "Event Manager 2", role: "Event Manager", category: "event-managers",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=41",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "event-3", name: "Event Manager 3", role: "Event Manager", category: "event-managers",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=42",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "event-4", name: "Event Manager 4", role: "Event Manager", category: "event-managers",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=43",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "data-1", name: "Data Manager 1", role: "Data Manager", category: "data-managers",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=44",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "data-2", name: "Data Manager 2", role: "Data Manager", category: "data-managers",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=45",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "designer-1", name: "Designer 1", role: "Designer", category: "designers-team",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=46",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "designer-2", name: "Designer 2", role: "Designer", category: "designers-team",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=47",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "designer-3", name: "Designer 3", role: "Designer", category: "designers-team",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=48",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  },
  {
    id: "designer-4", name: "Designer 4", role: "Designer", category: "designers-team",
    branch: "Computer Engineering", year: "SE", image: "https://i.pravatar.cc/300?img=49",
    bio: "Bio goes here.", responsibilities: ["Resp 1"], skills: ["Skill 1"], social: {}
  }
];
export const getMembersByCategory = (categoryId) => {
  return members.filter(member => member.category === categoryId);
};

export const getMembersByRole = (role) => {
  return members.filter(member => member.role === role);
};

export const getMemberById = (id) => {
  return members.find(member => member.id === id);
};
