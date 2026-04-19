"use client";
import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";

// 1. Définition dial l-links b l-IDs li ghadi n-zidu f l-sections
const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Logic bach t-tbe3 l-active section
      let current = "#home";
      const sections = ["home", "skills", "projects", "contact"];
      
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = "#" + id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nb ${dark ? "dk" : "lk"} ${scrolled ? "on" : ""}`}>
      <div className="nb-in">
        <a href="#home" className="nb-logo" onClick={() => setActive("#home")}>
          <span className="nb-dot">F</span> Fadoua<span className="grad">.</span>
        </a>

        <ul className="nb-ul">
          {LINKS.map(l => (
            <li key={l.href}>
              <a 
                href={l.href} 
                className={active === l.href ? "act" : ""}
                onClick={() => setActive(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nb-act">
          <button className="nb-tog" onClick={toggle}>{dark ? "🌙" : "☀️"}</button>
        </div>
      </div>
      <style>{`
        .nb { position:fixed;top:0;width:100%;padding:0 1.5rem;transition:.3s; z-index:999;}
        .nb.dk { background:rgba(7,7,14,.85); color:white; }
        .nb.lk { background:rgba(247,246,255,.9); color:black; }
        .nb.on { box-shadow:0 4px 20px rgba(0,0,0,.1); backdrop-filter:blur(20px); }
        .nb-in { display:flex;justify-content:space-between;align-items:center;max-width:1180px;margin:0 auto;height:64px;}
        .nb-ul { list-style:none;display:flex;gap:1rem; }
        .nb-ul a { text-decoration:none;padding:5px 10px;border-radius:6px; transition:.2s; color: inherit;}
        .nb-ul a.act { font-weight:700; background:linear-gradient(135deg,#7c3aed,#0d9488); color:white; }
        .nb-tog { border:none;cursor:pointer;background:none;font-size:1rem;}
        .nb-logo { font-weight:800;text-decoration:none; color: inherit;}
        .nb-dot { display:inline-block;width:30px;height:30px;border-radius:8px;background:linear-gradient(135deg,#7c3aed,#0d9488);color:white;text-align:center;line-height:30px;margin-right:5px; }
      `}</style>
    </nav>
  );
}