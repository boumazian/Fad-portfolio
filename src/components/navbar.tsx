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
    <nav className={`nb ${scrolled ? "on" : ""}`} aria-label="Main">
      <div className="nb-in">
        <Link href="/" className="nb-logo" onClick={() => setIsOpen(false)} aria-label="Fadoua Boumazian — home">
          <span className="nb-box" aria-hidden="true">fb</span>
          <span className="nb-brand">Fad-BO</span>
        </Link>

        <ul id="nav-menu" className={`nb-ul ${isOpen ? "open" : ""}`}>
          {LINKS.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={isActive(l.href) ? "act" : ""}
                aria-current={isActive(l.href) ? (l.href.startsWith("/#") ? "location" : "page") : undefined}
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nb-act">
          <button
            className="nb-icon nb-tog"
            onClick={toggle}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            title={dark ? "Light theme" : "Dark theme"}
          >
            {dark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
          </button>
          <a href="/bo-cv.pdf" download="Fadoua-Boumazian-CV.pdf" className="nb-cv" aria-label="Download resume (PDF)">
            <Download size={16} aria-hidden="true" />
            <span className="nb-cv-long">Resume</span>
            <span className="nb-cv-short">CV</span>
          </a>
          <button
            className="nb-icon nb-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <style>{`
        .nb { position:fixed; top:0; width:100%; padding:0 2rem; transition:background .4s, border-color .4s; z-index:999; background: var(--nav-bg); color: var(--txt); border-bottom: 1px solid transparent; }
        .nb.on { backdrop-filter:blur(15px); -webkit-backdrop-filter:blur(15px); border-bottom-color: var(--border); }

        .nb-in { display:flex; justify-content:space-between; align-items:center; gap: 1rem; max-width:1300px; margin:0 auto; height:80px; }

        /* Logo: gradient mark + wordmark (same as footer) */
        .nb-logo { text-decoration:none; color: inherit; display:flex; align-items:center; gap: 12px; flex-shrink: 0; }
        .nb-box {
          width: 40px; height: 40px; background: var(--grad);
          border-radius: 12px; display: flex; align-items: center; justify-content: center;
          font-family: var(--font-syne), sans-serif; font-weight: 800; color: #fff; font-size: .95rem;
        }
        .nb-brand { font-family: var(--font-syne), sans-serif; font-size: 1.4rem; font-weight: 800; letter-spacing: -0.02em; }

        /* Navigation links */
        .nb-ul { list-style:none; display:flex; gap: .25rem; margin: 0; padding: 0; }
        .nb-ul a {
          display: block; text-decoration:none; padding: 9px 16px; border-radius: 12px; transition: color .3s, background .3s;
          color: var(--txt2); font-size: 0.95rem; font-weight: 500; white-space: nowrap;
        }
        .nb-ul a:hover { color: var(--txt); background: var(--soft); }
        .nb-ul a.act { color: #fff; background: var(--grad); box-shadow: 0 0 20px var(--glow); font-weight: 600; }

        .nb-act { display:flex; align-items:center; gap: .5rem; flex-shrink: 0; }
        .nb-icon {
          width: 44px; height: 44px; display: inline-flex; align-items: center; justify-content: center;
          border: none; border-radius: 12px; cursor: pointer; background: none; color: inherit; transition: background .3s, color .3s;
        }
        .nb-icon:hover { background: var(--soft); }
        .nb-tog:hover { color: var(--warn-txt); }

        /* Resume button — always visible */
        .nb-cv {
          display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 18px; border-radius: 12px;
          background: var(--grad); color: #fff; text-decoration: none;
          font-size: 0.9rem; font-weight: 700; white-space: nowrap; transition: transform .3s, box-shadow .3s;
          box-shadow: var(--shadow-accent);
        }
        .nb-cv:hover { transform: translateY(-2px); }
        .nb-cv-short { display: none; }

        .nb-menu-btn { display: none; }

        @media (max-width: 1150px) {
          .nb-ul { display: none; }
          .nb-menu-btn { display: inline-flex; }
          .nb-ul.open {
            display: flex; position: fixed; top: 80px; left: 0;
            width: 100%; flex-direction: column; gap: .5rem; padding: 1.5rem 2rem 2rem;
            background: var(--bg); border-bottom: 1px solid var(--border); box-shadow: var(--shadow);
            text-align: center;
          }
          .nb-ul.open a { padding: 12px 16px; font-size: 1.05rem; }
        }

        @media (max-width: 480px) {
          .nb { padding: 0 1rem; }
          .nb-act { gap: .15rem; }
          .nb-logo { gap: 10px; }
          .nb-brand { font-size: 1.2rem; }
          .nb-cv { padding: 0 12px; margin: 0 .25rem; }
          .nb-cv-long { display: none; }
          .nb-cv-short { display: inline; }
        }
      `}</style>
    </nav>
  );
}
