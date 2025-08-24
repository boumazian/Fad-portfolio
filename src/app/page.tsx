import Hero from "@/components/hero";
import ContactSection from "./ContactSection/page";
import Skills from "./skills/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <>
    
    <Hero></Hero>
    <Skills></Skills>
    <Projects></Projects>

    <ContactSection></ContactSection>
    </>
  );
}
