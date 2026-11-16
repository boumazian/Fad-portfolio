"use client";
import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, Download } from "lucide-react";

// "/#id" links work from every page (sub-pages navigate home, then scroll).
const LINKS = [
  { href: "/aboutme", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

const SECTIONS = ["experience", "skills", "projects", "contact"];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [section, setSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "";
      SECTIONS.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Home page: highlight the section in view. Other pages: highlight the page link.
  const isActive = (href: string) =>
    href.startsWith("/#") ? pathname === "/" && href === `/#${section}` : pathname === href;

  return (
    <nav className={`nb ${dark ? "dk" : "lk"} ${scrolled ? "on" : ""}`}>
      <div className="nb-in">
        <Link href="/" className="nb-logo" onClick={() => setIsOpen(false)}>
          <div className="nb-box">fb</div>
          <span className="nb-brand">Fad-BO</span>
        </Link>

        <ul className={`nb-ul ${isOpen ? "open" : ""}`}>
          {LINKS.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={isActive(l.href) ? "act" : ""}
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nb-act">
          <button className="nb-tog" onClick={toggle} title="Toggle Theme">
            {dark ? <Sun size={20} className="icon-sun" /> : <Moon size={20} className="icon-moon" />}
          </button>
          <a href="/bo-cv.pdf" download="Fadoua-Boumazian-CV.pdf" className="nb-cv">
            <Download size={16} aria-hidden="true" />
            <span className="nb-cv-long">Resume</span>
            <span className="nb-cv-short">CV</span>
          </a>
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

        .nb-in { display:flex; justify-content:space-between; align-items:center; gap: 1rem; max-width:1300px; margin:0 auto; height:80px; }

        /* Logo: Square box + Text */
        .nb-logo { text-decoration:none; color: inherit; display:flex; align-items:center; gap: 15px; flex-shrink: 0; }
        .nb-box {
          width: 42px; height: 38px; background: linear-gradient(135deg, #4f46e5, #0ea5e9);
          border-radius: 12px; display: flex; align-items: center; justify-content: center;
          font-weight: 900; color: white; font-size: 0.8rem; text-transform: lowercase;
        }
        .nb-brand { font-size: 1.6rem; font-weight: 900; letter-spacing: -0.02em; font-family: 'Inter', sans-serif; }

        /* Navigation links */
        .nb-ul { list-style:none; display:flex; gap: .25rem; margin: 0; padding: 0; }
        .nb-ul a {
          display: block; text-decoration:none; padding: 9px 16px; border-radius: 12px; transition:.3s;
          color: #94a3b8; font-size: 0.95rem; font-weight: 500; position: relative; white-space: nowrap;
        }
        .nb.dk .nb-ul a:hover { color: white; }
        .nb.lk .nb-ul a:hover { color: #0f172a; }

        /* Active Link glow */
        .nb-ul a.act {
          color: white;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.6), rgba(14, 165, 233, 0.6));
          box-shadow: 0 0 20px rgba(79, 70, 229, 0.4);
          font-weight: 600;
        }

        .nb-act { display:flex; align-items:center; gap: .75rem; flex-shrink: 0; }
        .nb-tog, .nb-menu-btn { border:none; cursor:pointer; background:none; color:inherit; padding:8px; transition: 0.3s; }
        .nb-tog:hover { color: #fbbf24; }

        /* Resume button — always visible */
        .nb-cv {
          display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 12px;
          background: linear-gradient(135deg, #7c3aed, #0d9488); color: white; text-decoration: none;
          font-size: 0.9rem; font-weight: 700; white-space: nowrap; transition: .3s;
          box-shadow: 0 8px 18px -10px rgba(124, 58, 237, 0.7);
        }
        .nb-cv:hover { transform: translateY(-2px); box-shadow: 0 12px 24px -10px rgba(124, 58, 237, 0.8); }
        .nb-cv-short { display: none; }

        .nb-menu-btn { display: none; }

        @media (max-width: 1150px) {
          .nb-ul { display: none; } /* Hide on tablet/mobile to use menu btn */
          .nb-menu-btn { display: block; }
          .nb-ul.open {
            display: flex; position: fixed; top: 80px; left: 0;
            width: 100%; flex-direction: column; gap: .5rem; background: #030307; padding: 2rem;
            text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);
          }
        }

        @media (max-width: 480px) {
          .nb { padding: 0 1rem; }
          .nb-act { gap: .25rem; }
          .nb-logo { gap: 10px; }
          .nb-brand { font-size: 1.35rem; }
          .nb-cv { padding: 8px 12px; }
          .nb-cv-long { display: none; }
          .nb-cv-short { display: inline; }
        }
      `}</style>
    </nav>
  );
}
