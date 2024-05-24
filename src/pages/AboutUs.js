import React from "react";
// page Components
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import CertSection from "../components/CertSection";
import SampleProjects from "../components/SampleProjects";

const AboutUs = () => {
  return (
    <>
      <AboutSection />
      <SkillsSection />
      <SampleProjects />
      <CertSection />
    </>
  );
};

export default AboutUs;
