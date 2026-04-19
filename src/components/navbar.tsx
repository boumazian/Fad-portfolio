"use client";
import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
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
        {/* LOGO SECTION - Exact match to your image */}
        <a href="#home" className="nb-logo" onClick={() => {setActive("#home"); setIsOpen(false);}}>
          <div className="nb-box">fb</div>
          <span className="nb-brand">Fad-BO</span>
        </a>

        {/* LINKS SECTION - Centered and with Glow */}
        <ul className={`nb-ul ${isOpen ? "open" : ""}`}>
          {LINKS.map(l => (
            <li key={l.href}>
              <a 
                href={l.href} 
                className={active === l.href ? "act" : ""}
                onClick={() => { setActive(l.href); setIsOpen(false); }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ACTIONS SECTION */}
        <div className="nb-act">
          <button className="nb-tog" onClick={toggle} title="Toggle Theme">
            {dark ? <Sun size={20} className="icon-sun" /> : <Moon size={20} className="icon-moon" />}
          </button>
          <button className="nb-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style>{`
        .nb { position:fixed; top:0; width:100%; padding:0 2rem; transition:.4s; z-index:999; }
        .nb.dk { background: rgba(3, 3, 7, 0.7); color:white; }
        .nb.lk { background: rgba(255, 255, 255, 0.8); color:black; }
        .nb.on { backdrop-filter:blur(15px); border-bottom: 1px solid rgba(255,255,255,0.08); }
        
        .nb-in { display:flex; justify-content:space-between; align-items:center; max-width:1300px; margin:0 auto; height:80px; }
        
        /* Logo: Square box + Text */
        .nb-logo { text-decoration:none; color: inherit; display:flex; align-items:center; gap: 15px; }
        .nb-box { 
          width: 42px; height: 38px; background: linear-gradient(135deg, #4f46e5, #0ea5e9); 
          border-radius: 12px; display: flex; align-items: center; justify-content: center; 
          font-weight: 900; color: white; font-size: 0.8rem; text-transform: lowercase;
        }
        .nb-brand { font-size: 1.6rem; font-weight: 900; letter-spacing: -0.02em; font-family: 'Inter', sans-serif; }

        /* Navigation: Links centered with specific spacing */
        .nb-ul { list-style:none; display:flex; gap: 1.5rem; position: absolute; left: 50%; transform: translateX(-50%); }
        .nb-ul a { 
          text-decoration:none; padding: 10px 22px; border-radius: 12px; transition:.3s; 
          color: #94a3b8; font-size: 0.95rem; font-weight: 500; position: relative;
        }
        .nb.dk .nb-ul a:hover { color: white; }
        
        /* Active Link: The glow effect from your image */
        .nb-ul a.act { 
          color: white; 
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.6), rgba(14, 165, 233, 0.6));
          box-shadow: 0 0 20px rgba(79, 70, 229, 0.4);
          font-weight: 600;
        }
        
        .nb-act { display:flex; align-items:center; gap: 1rem; }
        .nb-tog, .nb-menu-btn { border:none; cursor:pointer; background:none; color:inherit; padding:8px; transition: 0.3s; }
        .nb-tog:hover { color: #fbbf24; }
        
        .nb-menu-btn { display: none; }

        @media (max-width: 950px) {
          .nb-ul { display: none; } /* Hide on tablet/mobile to use menu btn */
          .nb-menu-btn { display: block; }
          .nb-ul.open {
            display: flex; position: fixed; top: 80px; left: 0; transform: none;
            width: 100%; flex-direction: column; background: #030307; padding: 2rem;
            text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);
          }
        }
      `}</style>
    </nav>
  );
}