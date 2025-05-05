export const personalInfo = {
  name: "MINH THUAN NGUYEN",
  title: "Front-end Web Developer",
  location: "Ho Chi Minh",
  email: "thuannm.ws@gmail.com",
  phone: "0945362373",
  github: "https://github.com/thuan-NM",
  linkedin: "https://www.linkedin.com/in/thuannguyen-ws",
  bio: "I aspire to contribute to a dynamic work environment and pursue professional growth opportunities in the field of web development",
  avatar: "/images/profile.jpg",
};

export const skills = {
  programmingLanguages: ["JavaScript (ReactJS, NodeJS)", "Golang", "TypeScript"],
  frameworks: ["ReactJS", "ExpressJS", "Tailwind"],
  databases: ["MySQL", "MongoDB"],
  tools: ["Postman", "Git/GitHub", "VS Code", "Docker"],
  workflowTools: ["Jira", "Trello", "Notion"],
  languages: ["English: Intermediate"],
};

export const education = [
  {
    school: "CAN THO UNIVERSITY",
    period: "2021 - 2025",
    major: "Computer Science",
    gpa: "3.41/4",
  },
  {
    school: "MINDX SCHOOL",
    period: "2023-2024",
    course: "Web Development Course",
  },
];

export const experience = [
  {
    position: "INTERNSHIP at FPT Software",
    period: "1/2025 - 4/2025",
    responsibilities: [
      "Contributed to modernization of a legacy finance module using ReactJS and Golang, improving load times.",
      "Developed an expense management feature in COBOL to support a mainframe-based finance system.",
      "Gained exposure to enterprise-grade systems and Agile development practices.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Katz Dev Blog Website",
    period: "02/2024 - 11/2024",
    description: "Built a personal blog platform with real-time voice chat using ReactJS, NodeJS, Express, and MongoDB. Integrated Socket.IO and WebRTC for seamless communication.",
    technologies: ["ReactJS", "Mongoose", "ExpressJS", "NodeJS", "Ant Design", "RESTful APIs", "Web Socket", "Tailwind", "WebRTC"],
    github: {
      frontend: "Blog FE",
      frontend_link: "https://github.com/thuan-NM/Blog-FE",
      backend: "Blog BE",
      backend_link: "https://github.com/thuan-NM/Blog-BE",
      voice_room_fe: "Voice Room FE",
      voice_room_fe_link: "https://github.com/thuan-NM/Voice-Room-FE",
      voice_room_be: "Voice Room BE",
      voice_room_be_link: "https://github.com/thuan-NM/Voice-Room-BE",
    },
    image: "/images/blog.jpg",
  },
  {
    id: 2,
    title: "Category Management Website",
    period: "10/2024 - 11/2024",
    teamSize: 4,
    role: "Team Leader",
    description: "Built a web application to manage and organize categories efficiently. Developed the frontend using React for a dynamic interface and the backend with Node.js and Express for robust data handling.",
    responsibility: "Responsible for assigning work to members, designing the entire database and back-end for the system, supporting members in designing a consistent interface for the website.",
    technologies: ["ReactJS", "MySQL", "ExpressJS", "NodeJS", "AntDesign", "Tailwind"],
    github: {
      frontend: "Category_Management_FE",
      frontend_link: "https://github.com/thuan-NM/Category_Management_FE",
      backend: "Category_Management_BE",
      backend_link: "https://github.com/thuan-NM/Category_Management_BE",
    },
    image: "/images/category.jpg",
  },
  {
    id: 3,
    title: "Smart Forum Platform",
    period: "Ongoing, Expected: 07/2025",
    description: "Developing a modern forum web application using ReactJS and TailwindCSS for an interactive and user-friendly interface. The system allows users to create and engage with posts in a structured discussion format. A planned integration with an NLP-based moderation API will automatically detect and block content that violates community guidelines.",
    technologies: ["ReactJS", "TailwindCSS", "Golang", "NLP Model (Planned)", "MySQL", "TypeScript"],
    github: {
      frontend: "Forum-FE",
      frontend_link: "https://github.com/thuan-NM/Forum-FE",
      backend: "Forum-BE",
      backend_link: "https://github.com/thuan-NM/Forum-BE",
    },
    image: "/images/forum.jpg",
  },
];

export const activities = [
  {
    title: "Training for Youth Union Officers of Information Technology and Communication School",
    year: "2022",
    role: "Team Leader",
    description: "Led a team of student officers in organizing and participating in a training program focused on leadership, teamwork, and communication skills for the Youth Union at Can Tho University",
  },
];

export const certificates = [
  {
    title: "English Certificate - Toeic 750",
    date: "14/3/2025",
  },
];

export const navLinks = [
  { name: "HOME", path: "/" },
  { name: "PROJECTS", path: "/projects" },
  { name: "SKILLS", path: "/skills" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];
