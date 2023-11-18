import {
  car,
  contact,
  css,
  estate,
  express,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  postgres,
  prisma,
  react,
  redux,
  sass,
  snapgram,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";
import { fileqa, leytonLogo } from "../assets/images";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: prisma,
    name: "prisma",
    type: "Frontend",
  },
  {
    imageUrl: postgres,
    name: "Postgres",
    type: "Frontend",
  },
];
// CSS3, Docker, HTML5, JavaScript, Nestjs, Next.js, Node.js, Postgres, Prisma, React,
// Redux, Tailwind, TypeScript
export const experiences = [
  {
    title: "Co-founder and Full-stack Engineer",
    company_name: "FileQA",
    icon: fileqa,
    iconBg: "#fbc3bc",
    date: "May 2023 - Jul 2023",
    points: [
      "Helped over 100 users get instant insights from their documents",
      "I handled the entire web development aspect, and managed the platform deployment.",
      "Achieved an impressive 20% faster loading speed by implementing Server-side rendering.",
    ],
  },
  {
    title: "Intermediate Full-stack Developer",
    company_name: "Leyton",
    icon: leytonLogo,
    iconBg: "#accbe1",
    date: "Aug 2023",
    points: [
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Contributed to the development of an innovative digital platform that empowers businesses in the USA to file for Employee Retention.",
      "Achieved a 120% improvement in modal loading time by running multiple operations concurrently.",
    ],
  },
  {
    title: "Associate Full-stack Developer",
    company_name: "Leyton",
    icon: leytonLogo,
    iconBg: "#accbe1",
    date: "Aug 2022 - Jul 2023",
    points: [
      "Improved software reliability and reduced development costs by implementing comprehensive tests.",
      "Achieved a 70% faster loading speed for a page by loading only necessary data.",
      "Introduced micro frontends, enabling a seamless transition to new technologies while maintaining ongoing feature development.",
      "Identified and resolved critical vulnerabilities, enhancing platform security.",
      "Integrated Payments into the application and implemented robust security measures to safeguard it against breaches.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Leyton",
    icon: leytonLogo,
    iconBg: "#fbc3bc",
    date: "May 2022 - Jul 2022",
    points: [
      "Collaborated on a production consulting platform, delivering new features and bug fixes.",
      "In 3 months, we improved a feature's performance by 400% through technology migration, also enhancing its user experience to be similar to that of Google Drive.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/hmellahi",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/hamza-mellahi/",
  },
];

export const projects = [
  {
    iconUrl: fileqa,
    theme: "btn-back-red",
    name: "FileQA",
    description:
      "We have developed an interactive platform where users can ask questions about their documents or books and immediately receive precise and reliable answers.",
    link: "https://fileqa.com/",
    screenshotsFolderRoot: "file-qa",
    screenshots: [
      "conversation.jpg",
      "my-space.jpg",
      "pricing.png",
      "contact-us.jpg",
    ],
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Twitter Clone",
    description:
    "Created a full-stack replica of the popular discussion platform 'Twitter,' enabling users to post and engage in conversations.\n\n Demo account: \n - email : test@acc.com \n - password: test",
    link: "https://preads.hmellahi.me/",
    repoLink: "https://github.com/hmellahi/Twitter-Clone",
    screenshotsFolderRoot: "twitter",
    screenshots: [
      "feed.png",
      "feed-with-tab-open.png",
      "profile.png",
      "community-members.jpg",
      "community.jpg",
      "sign-up.png",
    ],
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "🔥 🔥 Matcha 🔥 🔥 ",
    description:
      "Inspired by Tinder, this modern web application lets users find potential matches based on shared interests and location",
    repoLink: "https://github.com/hmellahi/Tinder-Clone",
    link: "https://matcha.hmellahi.me/",
    screenshotsFolderRoot: "tinder",
    screenshots: ["feed.jpg"],
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Pink Pong",
    description:
      "Online Ping Pong Game with Multiplayer Gameplay and Real-Time Chat",
    repoLink: "https://github.com/hmellahi/transcendence",
    screenshotsFolderRoot: "pink-pong",
    screenshots: ["game.png"],
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "CUBE 3D",
    description:
      "I created a dynamic view inside a maze using C, inspired by the Wolfenstein 3D game",
    repoLink: "https://github.com/hmellahi/CUBE",
    screenshotsFolderRoot: "cube",
    screenshots: ["game.jpg", "splash-screen.jpg"],
  },
];
