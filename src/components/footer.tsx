"use client";
import Link from "next/link";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

// Updated to use Anchor tags for smooth scrolling in the same page
const COL1 = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

const COL2 = [
  { href: "/aboutme", label: "About Me" },
  { href: "/formation", label: "Formation" }, // Moved here if it's a separate page
  { href: "/hobbiesForm", label: "Hobbies" }
];

export default function Footer() {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";

  return (
    <>
      <style>{`
        .ft { background: var(--bg2); border-top: 1px solid var(--border); padding: 4rem 1.5rem 2rem; transition: background .4s, border-color .4s; }
        .ft-in { max-width: 1100px; margin: 0 auto; }
        .ft-top { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 2.5rem; margin-bottom: 3rem; }
        
        @media(max-width: 768px) { 
          .ft-top { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
          .ft-desc { margin: 0 auto; }
          .ft-name { justify-content: center; }
          .ft-socs { justify-content: center; }
          .ft-bot { flex-direction: column; text-align: center; }
        }

        .ft-name { font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 800; color: var(--txt); display: flex; align-items: center; gap: 10px; margin-bottom: 1rem; }
        .ft-mark { width: 32px; height: 32px; border-radius: 10px; background: linear-gradient(135deg,#7c3aed,#0d9488); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px; color: #fff; }
        .ft-desc { font-size: .9rem; color: var(--txt2); line-height: 1.8; max-width: 280px; opacity: 0.8; }
        .ft-ch { font-size: .75rem; text-transform: uppercase; letter-spacing: .15em; font-weight: 800; color: var(--txt3); margin-bottom: 1.2rem; }
        .ft-links { display: flex; flex-direction: column; gap: .75rem; }
        .ft-links a { font-size: .9rem; color: var(--txt2); text-decoration: none; transition: all .2s ease; }
        .ft-links a:hover { color: var(--accent); transform: translateX(5px); }
        
        @media(max-width: 768px) { .ft-links a:hover { transform: translateY(-2px); } }

        .ft-div { height: 1px; background: var(--border); margin-bottom: 2rem; opacity: 0.5; }
        .ft-bot { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
        .ft-copy { font-size: .85rem; color: var(--txt3); }
        .ft-socs { display: flex; gap: .75rem; }
        .ft-sc { width: 38px; height: 38px; border-radius: 11px; border: 1px solid var(--border); background: var(--soft); display: flex; align-items: center; justify-content: center; color: var(--txt2); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .ft-sc:hover { color: white; border-color: var(--accent); background: var(--accent); transform: translateY(-4px); box-shadow: 0 10px 15px -5px rgba(124, 58, 237, 0.4); }
        .grad { background: linear-gradient(135deg, #7c3aed, #0d9488); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      `}</style>

      <footer className={`ft ${t}`}>
        <div className="ft-in">
          <div className="ft-top">
            <div>
              <div className="ft-name">
                <span className="ft-mark">F</span>
                Fadoua<span className="grad">.</span>
              </div>
              <p className="ft-desc">
                Full-Stack Developer specializing in Cloud Infrastructure. Building scalable solutions with AWS and modern web tech.
              </p>
            </div>

            <div>
              <div className="ft-ch">Navigation</div>
              <div className="ft-links">
                {COL1.map((l) => (
                  <a key={l.href} href={l.href}>{l.label}</a>
                ))}
              </div>
            </div>

            <div>
              <div className="ft-ch">Connect</div>
              <div className="ft-links">
                {COL2.map((l) => (
                  <Link key={l.href} href={l.href}>{l.label}</Link>
                ))}
              </div>
            </div>
          </div>

          <div className="ft-div" />

          <div className="ft-bot">
            <span className="ft-copy">© 2026 Fadoua Boumazian. Made with ❤️ </span>
            <div className="ft-socs">
              <a href="https://www.facebook.com/profile.php?id=100089240119734" target="_blank" rel="noopener noreferrer" className="ft-sc"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/fadouaboumazian?igsh=MWZxajh1aGgxZGt5bg==" target="_blank" rel="noopener noreferrer" className="ft-sc"><Instagram size={18} /></a>
              <a href="https://www.linkedin.com/in/fadoua-boumazian-6656a8298/" target="_blank" rel="noopener noreferrer" className="ft-sc"><Linkedin size={18} /></a>
              <a href="https://github.com/boumazian" target="_blank" rel="noopener noreferrer" className="ft-sc"><Github size={18} /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}