import {
  FaJs,
  FaReact,
  FaNode,
  FaJava,
  FaPython,
  FaDatabase,
  FaAws,
  FaBootstrap,
  FaGithub,
  FaStripe
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiNestjs,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiNetlify,
  SiTailwindcss,
  SiJirasoftware,
  SiGoogleanalytics
} from "react-icons/si";

export const projects = [
  {
    id: "cacart-ecommerce",
    title: "Cacart E-commerce Web Application (Team Project)",
    stack: "Next.js / TypeScript / Nest.js / TailwindCSS / Supabase / Stripe / Vercel",
    image: "./assets/cacart.png",
    github: "https://github.com/Snow-Penguins",
    live: "https://ca-cart-frontend.vercel.app"
  }, {
    id: "kimbap-ordering",
    title: "Online Kimbap Ordering Platform",
    stack: "React.js / Node.js / Express.js / Bootstrap / Firebase / Stripe / Netlify",
    image: "./assets/food.png",
    github: "https://github.com/Eunji-Elly-Lee/Gimbap",
    live: "https://elly-kimbap.netlify.app"
  },
  {
    id: "restaurant-reviews",
    title: "Restaurant Reviews Web Application",
    stack: "React.js / Node.js / Express.js / Bootstrap / MongoDB",
    image: "./assets/restaurants.png",
    github: "https://github.com/Eunji-Elly-Lee/Restaurant-Reviews",
  },
  {
    id: "search-dataset",
    title: "City of Calgary Open Data Search",
    stack: "JavaScript / AJAX / JSON Parsing / Bootstrap/ Netlify",
    image: "./assets/searching.png",
    github: "https://github.com/Eunji-Elly-Lee/Search-Dataset",
    live: "https://elly-search-dataset.netlify.app"
  },
  {
    id: "medical-appointment",
    title: "Medical Clinic Appointment System (Team Project)",
    stack: "Java Servlet / JSP / JavaMail / MySQL",
    image: "./assets/medical.png",
    github: "https://github.com/Eunji-Elly-Lee/Medical-Appointment",
  },
  {
    id: "pang-game",
    title: "Pang Game with Python",
    stack: "Python / Pygame",
    image: "./assets/pang.png",
    github: "https://github.com/Eunji-Elly-Lee/Pang-In-Python",
  },
  {
    id: "hangman-game",
    title: "Hangman Game with GUI",
    stack: "Java / JavaFX",
    image: "./assets/hangman.png",
    github: "https://github.com/Eunji-Elly-Lee/Hangman-In-Java",
  }
];

export const skills = [
  { icon: FaJs, title: "JavaScript" },
  { icon: FaReact, title: "React.js" },
  { icon: SiNextdotjs, title: "Next.js" },
  { icon: FaNode, title: "Node.js" },
  { icon: SiExpress, title: "Express.js" },
  { icon: SiNestjs, title: "Nest.js" },
  { icon: SiTypescript, title: "Typescript" },
  { icon: FaJava, title: "Java" },
  { icon: FaPython, title: "Python" },
  { icon: FaDatabase, title: "SQL" },
  { icon: SiMysql, title: "MySQL" },
  { icon: SiMongodb, title: "MongoDB" },
  { icon: SiPostgresql, title: "PostgreSQL" },
  { icon: SiSupabase, title: "Supabase" },
  { icon: SiFirebase, title: "Firebase" },
  { icon: FaAws, title: "AWS" },
  { icon: SiNetlify, title: "Netlify" },
  { icon: FaBootstrap, title: "Bootstrap" },
  { icon: SiTailwindcss, title: "Tailwind" },
  { icon: FaGithub, title: "GitHub" },
  { icon: SiJirasoftware, title: "Jira" },
  { icon: FaStripe, title: "Stripe" },
  { icon: SiGoogleanalytics, title: "Google Analytics" },
];
