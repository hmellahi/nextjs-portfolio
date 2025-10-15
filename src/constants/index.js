import {
  contact,
  github,
  javascript,
  linkedin,
  nestjs,
  nextjs,
  nodejs,
  postgres,
  prisma,
  react,
  redux,
  tailwindcss,
  typescript,
} from "@@/assets/icons";
import { fileqa, leytonLogo } from "@@/assets/images";

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
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
    type: "Backend",
  },
  {
    imageUrl: postgres,
    name: "Postgres",
    type: "Backend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: nestjs,
    name: "Nestjs",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Leyton",
    points: [
      "Developed and maintained the frontend of the company's website",
      "Worked on the company's mobile app",
    ],
    icon: leytonLogo,
  }
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
    theme: "btn-back-red",
    name: "Behavewise (STOPPED)",
    description:
      "I am building a Platform to help you Boost your interview confidence! \n\n \
      It's an interview preparation tool that provides AI feedback on your mock interviews.",
    link: "https://behavewise.vercel.app/",
    repoLink: "https://github.com/hmellahi/behavewise",
    screenshotsFolderRoot: "behavewise",
    screenshots: ["landing-page.png", "interview.jpg", "feedback.png"],
  },
  {
    theme: "btn-back-red",
    name: "FileQA",
    description:
      "We have developed an interactive platform where users can ask questions about their documents or books and immediately receive precise and reliable answers.",
    articleLink:
      "https://blog.hmellahi.me/my-journey-of-building-our-first-saas-product",
    // link: "https://fileqa.com/",
    screenshotsFolderRoot: "file-qa",
    screenshots: [
      "conversation-with-book.png",
      "my-space.png",
      "pricing.png",
      "contact-us.png",
    ],
  },
  {
    theme: "btn-back-green",
    name: "TwitMate",
    description:
      "Created a full-stack replica of the popular discussion platform 'Twitter,' enabling users to post and engage in conversations.\n\n Demo account: \n - email : test@acc.com \n - password: test",
    repoLink: "https://github.com/hmellahi/Twitter-Clone",
    screenshotsFolderRoot: "twitter",
    screenshots: [
      "profile.png",
      "community.png",
      "community-members.png",
      "sign-up.png",
    ],
  },
  // {
  //   theme: "btn-back-blue",
  //   name: "Matcha 🔥 🔥 ",
  //   description:
  //     "Inspired by Tinder, this website lets users find potential matches based on shared interests and location",
  //   repoLink: "https://github.com/hmellahi/Tinder-Clone",
  //   screenshotsFolderRoot: "tinder",
  //   screenshots: ["login.png", "feed.jpg", "settings.png"],
  // },
  {
    theme: "btn-back-pink",
    name: "Pink Pong",
    description:
      "Online Ping Pong Game with Multiplayer Gameplay and Real-Time Chat",
    repoLink: "https://github.com/hmellahi/transcendence",
    screenshotsFolderRoot: "pink-pong",
    screenshots: [
      "game.png",
      "choose-map.png",
      "queue.png",
      "leaderboard.png",
      "settings.png",
    ],
  },
  {
    theme: "btn-back-black",
    name: "CUBE 3D",
    description:
      "I created a dynamic view inside a maze using C, inspired by the Wolfenstein 3D game",
    repoLink: "https://github.com/hmellahi/CUBE",
    screenshotsFolderRoot: "cube",
    screenshots: [
      "game.png",
      "sprites.png",
      "guard.png",
      "splash-screen.jpg",
      "gameover.png",
    ],
  },
];
