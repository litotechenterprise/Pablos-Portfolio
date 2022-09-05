import { useRef } from "react";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { IntroSection } from "./IntroSection";
import { ProjectSection } from "./ProjectSection";

export const ContentContainer = () => {
  const ref = useRef(null);

  return (
    <main className="w-screen bg-scroll" id="sectionContainer">
      <IntroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
};
