import Contact from "@/components/contactSection";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Skills></Skills>
    <Project></Project>
    <Contact></Contact>
    <Footer ></Footer>
    </>
  );
}
