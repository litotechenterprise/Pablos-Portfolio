import { ContactSection } from "./ContactSection";
import { IntroSection } from "./IntroSection";
import { ProjectSection } from "./ProjectSection";

export const ContentContainer = () => {
  return (
    <div className="w-screen bg-scroll">
      <IntroSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};
