import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";
import GridBackground from "@/components/art/GridBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen noise">
      <GridBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <footer className="relative z-10 border-t border-border py-8 text-center">
        <p className="text-muted-foreground text-sm font-mono">
          © 2026 Praveen S. Built with passion.
        </p>
      </footer>
    </div>
  );
};

export default Index;
