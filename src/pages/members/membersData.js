export const categories = [
  {
    id: "faculty-coordinator",
    title: "Faculty Coordinator",
    description: "Faculty advisor and mentor guiding ACES activities.",
    roles: ["Faculty Coordinator"],
  },
  {
    id: "core-team",
    title: "Core Team",
    description: "The primary leadership of ACES.",
    roles: ["President", "Vice President", "Secretary", "Treasurer"],
  },
  {
    id: "technical-team",
    title: "Technical Team",
    description: "Leading tech initiatives and projects.",
    roles: ["Tech Head", "Jr. Tech Head", "Technical Team"],
  },
  {
    id: "creative-team",
    title: "Creative Team",
    description: "Designing the visual identity of ACES.",
    roles: ["Creative Head", "Design Team", "Content Team"],
  },
  {
    id: "events-operations",
    title: "Events & Operations",
    description: "Managing and executing all ACES events.",
    roles: ["Event Head", "Management Team", "PR & Outreach"],
  },
];

export const members = [
  {
    id: "sharad-sir",
    name: "Sharad Sir",
    role: "Faculty Coordinator",
    category: "faculty-coordinator",
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
