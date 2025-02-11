import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  circle,
  event,
  ride,
  threejs,
  wandelust,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Anurag proved me wrong.",
    name: "Sara Lee",
    designation: "Manager",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a developer who truly cares about their clients' success like Anurag does.",
    name: "Chris Brown",
    designation: "Tech Lead",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Anurag optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "Project Manager",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DEV CIRCLE",
    description:
      "A real-time group chat and collaborative coding platform allows users to join chat rooms, send real-time messages, and collaboratively edit and run code on the web.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: circle,
    source_code_link: "https://github.com/anurag150304/DevCirlce.git",
  },
  {
    name: "Ride-Connect",
    description:
      "A full-stack ride-sharing web application that connects drivers and passengers. It provides a seamless interface for users to book rides, and for drivers to manage their rides.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "websockets",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ride,
    source_code_link: "https://github.com/anurag150304/RIDE-CONNECT.git",
  },
  {
    name: "EventSphere",
    description:
      "An event management platform where users can create, manage, and view events including User AuthenticationEvent, Real-Time Updates for Attendees",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: event,
    source_code_link: "https://github.com/anurag150304/WanderLust.git",
  },
  {
    name: "WandeLust",
    description: "Airbnb clone built using Node.js, Express.js, MongoDB, and other modern technologies. This project implements CRUD operations for listings, user authentication, file uploads, and form validations",
    tags: [
      {
        name: "ejs",
        color: "red-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: wandelust,
    source_code_link: "https://github.com/anurag150304/EventSphere.git"
  }
];

export { services, technologies, testimonials, projects };