"use client";
import { useTheme } from "@/context/ThemeContext";
import ContactLeft from "@/components/ui/contactLeft";
import ContactReight from "@/components/ui/contactReight";

export default function ContactSection() {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";
  return (
    <>
      <style>{`
        .cs{padding:5rem 1.5rem 4rem;background:var(--bg);transition:background .4s;}
        .cs-w{max-width:940px;margin:0 auto;border-radius:18px;overflow:hidden;border:1px solid var(--border);display:grid;grid-template-columns:1fr 1.15fr;background:var(--card);box-shadow:var(--shadow);}
        @media(max-width:680px){.cs-w{grid-template-columns:1fr;}}
      `}</style>
      <section className={`cs ${t}`}>
        <h2 className="sec-title">Contact Me</h2>
        <p className="sec-sub">Have a project in mind or want to discuss opportunities? Let's connect!</p>
        <div className="cs-w">
          <ContactLeft/>
          <ContactReight/>
        </div>
      </section>
    </>
  );
}