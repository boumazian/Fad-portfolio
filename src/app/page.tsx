import Hero from "@/components/hero";
import Skills from "@/components/ui/skilscard";
import Projects from "@/components/project";
import ContactSection from "@/components/contactSection";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      
      <section id="skills">
        <Skills/>
      </section>
      
      <section id="projects">
        <Projects/>
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}