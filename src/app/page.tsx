import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Skills from "@/components/ui/skilscard";
import Projects from "@/components/project";
import ContactSection from "@/components/contactSection";

// The anchor ids live here only; section components render plain wrappers.
export default function Home() {
  return (
    <>
      <section id="home" aria-label="Introduction">
        <Hero />
      </section>

      <section id="experience" aria-labelledby="experience-title">
        <Experience />
      </section>

      <section id="skills" aria-labelledby="skills-title">
        <Skills />
      </section>

      <section id="projects" aria-labelledby="projects-title">
        <Projects />
      </section>

      <section id="contact" aria-labelledby="contact-title">
        <ContactSection />
      </section>
    </>
  );
}
