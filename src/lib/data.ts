import adobeClone from "@/public/adobe-clone.png";
import ecomWebsite from "@/public/ecom-website.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce Website",
    description:
      "A front-end eCommerce site built with React, Zustand, and Tailwind CSS, featuring product listings and responsive design for an intuitive shopping experience.",
    tags: ["TypeScript", "React", "Tailwind", "Zustand"],
    imageUrl: ecomWebsite,
  },
  {
    title: "Adobe Homepage Clone",
    description:
      "A precise clone of Adobe's homepage using React and Tailwind CSS, focusing on design accuracy and responsiveness.",
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: adobeClone,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Framer Motion",
] as const;
