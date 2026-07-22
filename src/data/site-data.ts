export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  github?: string;
  techStack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "gonimia",
    title: "Gonimia- Online Shopping Platform",
    description:
      "A full-scale online shopping platform for Bangladesh — multi-category e-commerce with grocery, fashion, electronics, and more. Features competitive pricing, secured payments, cash on delivery, and fast doorstep delivery.",
    image: "/images/projects/gonimia.png",
    url: "https://gonimia.com",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Drizzle ORM", "PostgreSQL"],
    featured: true,
  },
  {
    id: "donorlog",
    title: "DonorLog- Fundraising Made Simple",
    description:
      "A comprehensive donor management platform for nonprofits to track donations, manage donor relationships, and generate insightful reports — built for real-world fundraising workflows.",
    image: "/images/projects/donorlog.png",
    url: "https://donorlog.com",
    techStack: ["Next.js", "TypeScript", "Drizzle ORM", "Tailwind CSS", "Shadcn/UI", "PostgreSQL"],
    featured: true,
  },
  {
    id: "ulsai",
    title: "ULSAI-Universal Languages and Skill Assessment Institute",
    description:
      "Corporate website for ULSAI — showcasing AI solutions, services, and company presence with a modern, responsive design tailored for the Bangladesh market.",
    image: "/images/projects/ulsai.png",
    url: "https://ulsai.com.bd",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "PostgreSQL", "Drizzle ORM"],
    featured: true,
  },
  {
    id: "troyee",
    title: "TROYEE Associates - A Hub of Planners, Architects & Engineers",
    description:
      "A full-featured e-commerce and brand platform for Troyee — delivering product showcases, seamless browsing, and a polished shopping experience for customers in Bangladesh.",
    image: "/images/projects/troyee.png",
    url: "https://troyee.com.bd",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
    featured: true,
  },
  {
    id: "elect-sumon",
    title: "ElectSumon - Fazle Reza Sumon for BIP President",
    description:
      "১৭ তম নির্বাহী পরিষদ নির্বাচনে সভাপতি পদে আপনাদের সমর্থন এবং সহযোগিতা প্রত্যাশী",
    image: "/images/projects/elect-sumon.png",
    url: "https://www.electsumon.com/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "instagram-clone",
    title: "Instagram Clone",
    description:
      "A clone of Instagram with core social features — posting, commenting, and user interactions — built as a full-stack MERN application.",
    image: "/images/insta.png",
    url: "https://github.com/tajbid-panthom/INSTAGRAM_CLONE",
    github: "https://github.com/tajbid-panthom/INSTAGRAM_CLONE",
    techStack: ["React", "Shadcn/UI", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    featured: true,
  },
  {
    id: "lms",
    title: "LMS Learning",
    description:
      "An online teaching platform for selling courses with YouTube-based learning integration — a complete course marketplace built with the MERN stack.",
    image: "/images/lms.png",
    url: "https://github.com/tajbid-panthom/LMS_Learning",
    github: "https://github.com/tajbid-panthom/LMS_Learning",
    techStack: ["React", "Shadcn/UI", "Tailwind CSS", "Node.js", "Express", "Redux", "MongoDB"],
  },
  {
    id: "kucc",
    title: "KUCC Management System",
    description:
      "A database management system for Khulna University Career Club to manage events, workshops, and seminars — simplifying club operations end to end.",
    image: "/images/kucc.png",
    url: "https://github.com/tajbid-panthom/KUCC-MANAGEMENT-SYSTEM",
    github: "https://github.com/tajbid-panthom/KUCC-MANAGEMENT-SYSTEM",
    techStack: ["Node.js", "MySQL", "Express", "EJS", "Bootstrap"],
  },
  {
    id: "routine",
    title: "Routine Generator",
    description:
      "An algorithmic scheduling project using job sequencing, sorting, and backtracking to generate academic routines based on user-defined courses and teachers.",
    image: "/images/routine.png",
    url: "https://github.com/tajbid-panthom/AUTOMATIC_ROUTINE_GENERATOR",
    github: "https://github.com/tajbid-panthom/AUTOMATIC_ROUTINE_GENERATOR",
    techStack: ["Node.js", "Express", "MySQL", "Python", "HTML", "CSS"],
  },
];

export type SkillCategory = {
  title: string;
  skills: { name: string; percentage: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "Next.js", percentage: 92 },
      { name: "React.js", percentage: 88 },
      { name: "TypeScript", percentage: 90 },
      { name: "Tailwind CSS", percentage: 92 },
      { name: "Shadcn/UI", percentage: 88 },
      { name: "HTML / CSS", percentage: 95 },
      { name: "JavaScript", percentage: 90 },
      { name: "Redux", percentage: 78 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", percentage: 88 },
      { name: "Express.js", percentage: 86 },
      { name: "REST API Development", percentage: 92 },
      { name: "Authentication & Authorization", percentage: 85 },
      { name: "Payment & Checkout Workflows", percentage: 82 },
    ],
  },
  {
    title: "Database & Storage",
    skills: [
      { name: "PostgreSQL", percentage: 88 },
      { name: "Drizzle ORM", percentage: 88 },
      { name: "MySQL", percentage: 88 },
      { name: "MongoDB", percentage: 82 },
      { name: "Mongoose", percentage: 80 },
    ],
  },
  {
    title: "Tools & Domains",
    skills: [
      { name: "Git & GitHub", percentage: 90 },
      { name: "E-commerce Development", percentage: 90 },
      { name: "SaaS & Dashboard Apps", percentage: 85 },
      { name: "UI/UX Design", percentage: 78 },
      { name: "Algorithm & Problem Solving", percentage: 82 },
    ],
  },
];

export const skillCards = [
  {
    title: "Production Platforms",
    items: [
      "Built and shipped live products — Gonimia (e-commerce), DonorLog (nonprofit SaaS), ULSAI, Troyee, and ElectSumon",
      "End-to-end delivery across UI, APIs, databases, payments, and real-world business workflows",
      "Next.js, TypeScript, Tailwind CSS, and Shadcn/UI as the core production stack",
    ],
  },
  {
    title: "Full-Stack Engineering",
    items: [
      "PostgreSQL and Drizzle ORM for type-safe, scalable data layers in production apps",
      "MERN stack (React, Node.js, Express, MongoDB) for social, LMS, and management systems",
      "RESTful APIs, authentication, session handling, and server-side business logic",
    ],
  },
  {
    title: "Domains & Problem Solving",
    items: [
      "E-commerce, nonprofit SaaS, corporate websites, e-learning, and club management systems",
      "Algorithmic scheduling and optimization with the Routine Generator project",
      "Clean, maintainable code with strong focus on performance, usability, and client needs",
    ],
  },
];

export type DesignProcessStep = {
  step: number;
  title: string;
  description: string;
  deliverables: string[];
};

export const aboutProfile = {
  headline: "Building digital products that solve real problems",
  bio: "I'm a full-stack web developer based in Bangladesh, focused on turning ideas into production-ready platforms. From multi-category e-commerce and nonprofit SaaS to corporate websites and custom web apps, I deliver end-to-end solutions — strategy, design, development, and launch.",
  highlights: [
    { label: "Production Apps", value: "6+" },
    { label: "Years Experience", value: "3+" },
    { label: "Tech Stack", value: "Next.js" },
    { label: "Clients Served", value: "10+" },
  ],
};

export const designProcess: DesignProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Research",
    description:
      "Every project starts with understanding your goals, audience, and constraints. I gather requirements, study competitors, and define a clear scope before writing a single line of code.",
    deliverables: ["Project brief", "User personas", "Feature roadmap"],
  },
  {
    step: 2,
    title: "Strategy & Wireframing",
    description:
      "I map out information architecture, user flows, and page structure. Low-fidelity wireframes ensure the layout and navigation make sense before moving into visual design.",
    deliverables: ["Site map", "User flow diagrams", "Wireframes"],
  },
  {
    step: 3,
    title: "UI Design & Prototyping",
    description:
      "With structure in place, I craft a polished visual system — typography, color, spacing, and components. Interactive prototypes let you preview the experience early.",
    deliverables: ["Design system", "High-fidelity mockups", "Clickable prototype"],
  },
  {
    step: 4,
    title: "Development & Integration",
    description:
      "Design becomes a fully functional product. I build responsive frontends, robust APIs, and database layers — integrating payments, auth, and third-party services as needed.",
    deliverables: ["Frontend & backend code", "API integration", "Database setup"],
  },
  {
    step: 5,
    title: "Testing & Launch",
    description:
      "Before go-live, I run thorough QA across devices and browsers, optimize performance, and handle deployment. You get a stable, production-ready product.",
    deliverables: ["Cross-browser testing", "Performance audit", "Deployment"],
  },
  {
    step: 6,
    title: "Support & Iteration",
    description:
      "Launch is just the beginning. I provide post-launch support, monitor feedback, and iterate on features to keep your product growing with your business.",
    deliverables: ["Bug fixes", "Feature updates", "Ongoing maintenance"],
  },
];

export type Service = {
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    title: "Web Application Development",
    description:
      "Custom full-stack web apps built with Next.js, TypeScript, and modern tooling — from dashboards and SaaS platforms to internal tools.",
    features: [
      "Next.js & React with TypeScript",
      "RESTful APIs and server actions",
      "PostgreSQL, MongoDB, or MySQL",
    ],
  },
  {
    title: "E-commerce Solutions",
    description:
      "Scalable online stores with product catalogs, cart flows, payment integration, and order management — proven on platforms like Gonimia and Troyee.",
    features: [
      "Multi-category product management",
      "Payment gateway integration",
      "Admin panel & inventory tools",
    ],
  },
  {
    title: "Corporate & Brand Websites",
    description:
      "Professional, responsive websites that establish credibility and convert visitors — tailored for businesses, institutes, and organizations.",
    features: [
      "Modern UI with Tailwind & Shadcn/UI",
      "SEO-friendly architecture",
      "Fast, mobile-first performance",
    ],
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "User-centered design from wireframes to polished interfaces. I create intuitive layouts and interactive prototypes that guide development.",
    features: [
      "Wireframing & user flow mapping",
      "Visual design & component systems",
      "Figma prototypes & design handoff",
    ],
  },
  {
    title: "API & Backend Development",
    description:
      "Reliable server-side systems with authentication, role-based access, and data modeling — built to scale with your product.",
    features: [
      "Node.js & Express backends",
      "Drizzle ORM & type-safe queries",
      "JWT auth & session management",
    ],
  },
  {
    title: "Maintenance & Optimization",
    description:
      "Keep your product running smoothly with performance tuning, security updates, feature enhancements, and ongoing technical support.",
    features: [
      "Performance & SEO optimization",
      "Bug fixes & security patches",
      "Feature additions & refactoring",
    ],
  },
];

export const whatIDo = [
  {
    title: "E-commerce &\nSaaS Platforms",
    items: [
      "Multi-category online stores with payments, cart, and order management",
      "Donor management, dashboards, and nonprofit workflow systems",
      "Admin panels, role-based access, and real-time data reporting",
    ],
  },
  {
    title: "Corporate &\nBrand Websites",
    items: [
      "Professional business websites that build trust and drive conversions",
      "Modern, mobile-first designs tailored for the Bangladesh market",
      "SEO-ready architecture with fast load times and clean structure",
    ],
  },
  {
    title: "Custom Web\nApplications",
    items: [
      "Full-stack apps with Next.js, TypeScript, and PostgreSQL",
      "Social platforms, LMS systems, and internal management tools",
      "API integrations, authentication, and third-party service connections",
    ],
  },
];

export const howIDo = [
  {
    title: "Listen &\nPlan",
    items: [
      "Start with a discovery call to understand your goals and audience",
      "Define scope, timeline, and milestones before development begins",
      "Share wireframes and prototypes for early feedback and alignment",
    ],
  },
  {
    title: "Build &\nIterate",
    items: [
      "Develop in focused sprints with regular progress updates",
      "Write clean, type-safe code with reusable component architecture",
      "Test across devices and browsers at every stage of the build",
    ],
  },
  {
    title: "Launch &\nSupport",
    items: [
      "Handle deployment, performance optimization, and go-live checklist",
      "Provide documentation and handoff for your team",
      "Offer post-launch support, bug fixes, and feature enhancements",
    ],
  },
];

/** @deprecated Use whatIDo or howIDo instead */
export const responsibilities = whatIDo;

export const testimonials = [
  {
    quote:
      "Tajbid has shown strong expertise in full-stack development using the MERN stack. He consistently delivered clean, functional code with thoughtful design. A reliable and technically sound developer.",
    name: "Md Aminul Islam",
    title: "Assistant Professor",
    affiliation: "Khulna University",
  },
  {
    quote:
      "I've seen Tajbid excel in both frontend and backend development. His ability to connect user experience with strong logic is impressive. Truly a well-rounded developer.",
    name: "Atanu Shome",
    title: "Assistant Professor",
    affiliation: "Khulna University",
  },
  {
    quote:
      "Tajbid displayed excellent command over modern frameworks like React and Node.js. He approaches challenges with creativity and confidence. A standout student in my class.",
    name: "Sajib Chatterjee",
    title: "Lecturer",
    affiliation: "Khulna University",
  },
  {
    quote:
      "Tajbid built Gonimia into a robust, scalable e-commerce platform that handles our multi-category catalog, payments, and delivery workflows with ease. His attention to performance and user experience has been instrumental to our growth.",
    name: "Md Raian Khan",
    title: "CEO",
    affiliation: "Gonimia",
  },
  {
    quote:
      "Working with Tajbid on the Troyee platform was a seamless experience. He delivered a polished, responsive site that showcases our brand and products beautifully — exactly what we needed for our customers in Bangladesh.",
    name: "Planner Fazle Reza Sumon",
    title: "Chief Executive",
    affiliation: "Troyee Associates",
  },
  {
    quote:
      "Tajbid developed our corporate website with a modern, professional design that reflects ULSAI's mission. He understood our requirements quickly and delivered a site we are proud to share with clients and partners.",
    name: "Dr. Serajum Reza Munira",
    title: "Director",
    affiliation: "ULSAI",
  },
  {
    quote:
      "Tajbid brought DonorLog to life with a thoughtful, full-stack solution for donor management and reporting. His technical depth and commitment to our nonprofit workflows made him an invaluable partner from day one.",
    name: "Rayhan Shikder",
    title: "Founder",
    affiliation: "DonorLog",
  },
];

export const siteConfig = {
  name: "Md Tajbid Hossain Bappi",
  brand: "TajDEV.",
  title: "Full Stack Web Developer",
  email: "tajbidhossain903@gmail.com",
  phone: "+8801738166031",
  whatsapp: "https://wa.me/8801738166031",
  location: "Khulna University, Khulna",
  description:
    "Full-stack web developer specializing in Next.js, TypeScript, and PostgreSQL. I build production-grade e-commerce platforms, SaaS products, and corporate websites — from design and development to deployment.",
  footerDescription:
    "Full-stack developer passionate about building scalable web applications. Skilled in Next.js, TypeScript, Drizzle ORM, and modern frontend technologies with a strong focus on clean UI/UX. Always eager to collaborate and turn ideas into functional digital experiences.",
};
