import Hero from "@/components/hero";
import Skills from "@/components/ui/skilscard";
import Projects from "@/components/project";
import ContactSection from "./ContactSection/page";

export default function Home() {
  return (
    <>
       <Hero />
       <Skills/>
       <Projects/>
       <ContactSection />
    </>
  );
}