import Hero from "@/components/hero";
import Skills from "./skills/page";
import Projects from "./projects/page";
import ContactSection from "./ContactSection/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <ContactSection />
    </>
  );
}