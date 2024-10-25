"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m currently in my final year of studying Computer Science, while
        pursuing my passion for front-end web development. Throughout my
        academic journey, I&apos;ve worked on several projects, including eCommerce
        websites and UI clones, which have enhanced my skills in React, Next.js,
        and TypeScript. What excites me most about programming is the challenge
        of turning complex ideas into smooth, user-friendly web experiences.
      </p>
      <p>
        My core stack includes React, Next.js, TypeScript, and Tailwind CSS, and
        I&apos;m always eager to learn new technologies. I&apos;m currently looking to
        apply my skills through internships or junior front-end developer
        positions to continue growing and contributing to innovative projects.
      </p>
    </motion.section>
  );
}
