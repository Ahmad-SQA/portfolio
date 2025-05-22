"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Cypress</li>
        <li>Playwright</li>
        <li>Postman</li>
        <li>CI/CD</li>
        <li>JIRA</li>
        <li>TestRail</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BS Electrical and Electronics Engineering</li>
        <li>
          Sarhad University of Science & Information Technology, Peshawar,
          Pakistan
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>End-to-End JavaScript Testing with Cypress.io</li>
        <li>Agile Project Management with Jira</li>
        <li>Postman API</li>
        <li>Azure DevOps</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTabContent = TAB_DATA.find((t) => t.id === tab)?.content;

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="Portrait of Ahmad Alam, QA Engineer"
          width={700}
          height={700}
          className="rounded-2xl border-4 border-black shadow-2xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-primary-300 to-secondary-400 mb-4">About Me</h2>
          
          <p className="text-base lg:text-lg">
            I am a dedicated Software Quality Assurance Engineer with a focus on delivering reliable, bug-free software. Skilled in both manual and automated testing using tools like Cypress, Playwright and Postman, I ensure smooth user experiences and strong product quality. I enjoy collaborating with teams, improving QA processes, and making sure every release is rock-solid.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 min-h-[150px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTabContent}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;