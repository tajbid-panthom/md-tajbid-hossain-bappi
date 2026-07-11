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
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
    featured: true,
  },
  {
    id: "donorlog",
    title: "DonorLog- Fundraising Made Simple",
    description:
      "A comprehensive donor management platform for nonprofits to track donations, manage donor relationships, and generate insightful reports — built for real-world fundraising workflows.",
    image: "/images/projects/donorlog.png",
    url: "https://donorlog.com",
    techStack: ["Next.js", "TypeScript", "Drizzle ORM", "Tailwind CSS", "Shadcn/UI"],
    featured: true,
  },
  {
    id: "ulsai",
    title: "ULSAI-Universal Languages and Skill Assessment Institute",
    description:
      "Corporate website for ULSAI — showcasing AI solutions, services, and company presence with a modern, responsive design tailored for the Bangladesh market.",
    image: "/images/projects/ulsai.png",
    url: "https://ulsai.com.bd",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
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
      { name: "HTML", percentage: 95 },
      { name: "CSS", percentage: 90 },
      { name: "JavaScript", percentage: 90 },
      { name: "TypeScript", percentage: 85 },
      { name: "React.js", percentage: 85 },
      { name: "Next.js", percentage: 80 },
      { name: "Tailwind CSS / Bootstrap", percentage: 85 },
      { name: "Redux / State Management", percentage: 80 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", percentage: 85 },
      { name: "Express.js", percentage: 85 },
      { name: "FastAPI", percentage: 80 },
      { name: "REST API Development", percentage: 90 },
      { name: "Authentication (JWT, OAuth)", percentage: 80 },
    ],
  },
  {
    title: "Database & Storage",
    skills: [
      { name: "MySQL", percentage: 90 },
      { name: "MongoDB", percentage: 80 },
      { name: "PostgreSQL", percentage: 75 },
      { name: "Drizzle ORM", percentage: 80 },
      { name: "Mongoose", percentage: 80 },
    ],
  },
  {
    title: "Tools & Other",
    skills: [
      { name: "Git & GitHub", percentage: 85 },
      { name: "API Testing", percentage: 90 },
      { name: "Machine Learning", percentage: 60 },
      { name: "UI/UX Design (Basic Tools)", percentage: 70 },
    ],
  },
];

export const skillCards = [
  {
    title: "Frontend",
    items: [
      "Next.js, React.js, TypeScript, HTML5, CSS3, Tailwind CSS",
      "Building responsive, dynamic user interfaces with modern component architecture",
      "Shadcn/UI and state management for polished, scalable frontends",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js, Express.js, FastAPI, MongoDB, MySQL, PostgreSQL, Drizzle ORM",
      "Server-side logic, authentication, and database integration",
      "RESTful APIs with MVC architecture and middleware patterns",
    ],
  },
  {
    title: "AI & Design",
    items: [
      "Machine learning fundamentals and applied AI workflows",
      "Figma, Adobe XD — wireframing and prototyping",
      "Clean, user-friendly designs with intuitive user journeys",
    ],
  },
];

export const responsibilities = [
  {
    title: "Frontend\nResponsibilities",
    items: [
      "Design and build user interfaces with React, Next.js, and TypeScript",
      "Ensure responsive and interactive designs across all devices",
      "Work with APIs to fetch and display data dynamically",
    ],
  },
  {
    title: "Backend\nResponsibilities",
    items: [
      "Develop server-side logic using Node.js and FastAPI",
      "Design and manage databases with Drizzle ORM, MongoDB, and MySQL",
      "Create and secure RESTful APIs, handle authentication, and manage user sessions",
    ],
  },
  {
    title: "UI/UX Design\nResponsibilities",
    items: [
      "Understand user needs, behaviors, and pain points through research and usability testing",
      "Create wireframes, mock-ups, and interactive prototypes to visualize user journeys",
      "Develop visually appealing, user-friendly designs that enhance usability",
    ],
  },
];

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
    "Specialized in building full-stack web applications with Next.js, React, Node.js, and FastAPI. Skilled in both frontend and backend development with strong TypeScript and database expertise. Experienced in creating dynamic, responsive interfaces and robust server-side functionality with a focus on clean UI/UX.",
  footerDescription:
    "I'm a Full Stack Developer passionate about building scalable and efficient web applications. Skilled in Next.js, FastAPI, Drizzle ORM, and modern frontend technologies with a strong focus on clean UI/UX. Always eager to learn, collaborate, and turn ideas into functional digital experiences.",
};
