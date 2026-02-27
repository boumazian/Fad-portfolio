"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

const LINKS = [
  { href: "/",               label: "Home" },
  { href: "/formationform",      label: "Formation" },
  { href: "/skills",         label: "Skills" },
  { href: "/projects",       label: "Projects" },
  { href: "/aboutme",        label: "About" },
  { href: "/ContactSection", label: "Contact" },
  { href: "/hobbiesForm",    label: "Hobbies" },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = dark ? "dk" : "lk";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <style>{`
        .nb {
          position:fixed;top:0;left:0;right:0;z-index:999;
          padding:0 1.5rem;
          transition:background .35s,backdrop-filter .35s,border-color .35s,box-shadow .35s;
          border-bottom:1px solid transparent;
        }
        .nb.on.dk  { background:rgba(7,7,14,.82); backdrop-filter:blur(20px); border-color:var(--border); box-shadow:var(--shadow); }
        .nb.on.lk  { background:rgba(247,246,255,.88); backdrop-filter:blur(20px); border-color:var(--border); box-shadow:var(--shadow); }

        .nb-in { max-width:1180px;margin:0 auto;height:64px;display:flex;align-items:center;justify-content:space-between; }

        /* Logo */
        .nb-logo { font-family:'Syne',sans-serif;font-size:1.15rem;font-weight:800;text-decoration:none;color:var(--txt);display:flex;align-items:center;gap:9px;letter-spacing:-.02em;transition:opacity .2s; }
        .nb-logo:hover { opacity:.8; }
        .nb-dot { width:30px;height:30px;border-radius:9px;background:linear-gradient(135deg,#7c3aed,#0d9488);display:flex;align-items:center;justify-content:center;color:#fff;font-size:15px;font-weight:800;box-shadow:0 0 18px rgba(124,58,237,.4);flex-shrink:0; }

        /* Links */
        .nb-ul { list-style:none;display:flex;align-items:center;gap:1px; }
        .nb-ul a { display:block;padding:6px 12px;border-radius:8px;font-size:.86rem;font-weight:500;text-decoration:none;color:var(--txt2);transition:color .2s,background .2s;position:relative; }
        .nb-ul a:hover { color:var(--txt);background:var(--soft); }
        .nb-ul a.act { color:var(--txt); }
        .nb-ul a.act::after { content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:16px;height:2px;border-radius:2px;background:linear-gradient(90deg,#7c3aed,#0d9488); }

        /* Actions */
        .nb-act { display:flex;align-items:center;gap:8px; }
        .nb-tog { width:38px;height:38px;border-radius:10px;border:1px solid var(--border);background:var(--soft);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;transition:transform .2s,background .2s; }
        .nb-tog:hover { transform:scale(1.1);filter:brightness(1.25); }
        .nb-tog span { animation:tog-in .38s cubic-bezier(.34,1.56,.64,1); }
        @keyframes tog-in { 0%{transform:rotate(-160deg) scale(.4)} 100%{transform:rotate(0) scale(1)} }

        .nb-hire { padding:8px 18px;border-radius:10px;background:linear-gradient(135deg,#7c3aed,#0d9488);color:#fff;font-size:.84rem;font-weight:600;text-decoration:none;white-space:nowrap;box-shadow:0 0 18px rgba(124,58,237,.3);transition:transform .2s,box-shadow .2s; }
        .nb-hire:hover { transform:translateY(-1px);box-shadow:0 0 30px rgba(124,58,237,.5); }

        /* Hamburger */
        .nb-ham { display:none;width:38px;height:38px;border-radius:10px;border:1px solid var(--border);background:var(--soft);cursor:pointer;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:9px; }
        .nb-bar { width:17px;height:2px;border-radius:2px;background:var(--txt);transition:transform .3s,opacity .3s; }
        .nb-ham.op .nb-bar:nth-child(1) { transform:translateY(7px) rotate(45deg); }
        .nb-ham.op .nb-bar:nth-child(2) { opacity:0; }
        .nb-ham.op .nb-bar:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }

        /* Mobile */
        .nb-mob { display:none;flex-direction:column;gap:2px;padding:8px 0 14px;max-height:0;overflow:hidden;transition:max-height .38s ease,opacity .3s;opacity:0; }
        .nb-mob.op { max-height:460px;opacity:1; }
        .nb-mob a { display:block;padding:10px 12px;border-radius:9px;font-size:.9rem;font-weight:500;text-decoration:none;color:var(--txt2);transition:background .2s,color .2s; }
        .nb-mob a:hover,.nb-mob a.act { color:var(--txt);background:var(--soft); }
        .nb-mob-h { margin-top:6px;padding:12px;border-radius:10px;background:linear-gradient(135deg,#7c3aed,#0d9488);color:#fff!important;text-align:center;font-weight:600; }

        @media(max-width:900px) { .nb-ul,.nb-hire{display:none} .nb-ham{display:flex} .nb-mob{display:flex} }
      `}</style>

      <nav className={`nb ${t} ${scrolled ? "on" : ""}`}>
        <div className="nb-in">
          <Link href="/" className="nb-logo">
            <span className="nb-dot">F</span>
            Fadoua<span className="grad">.</span>
          </Link>

          <ul className="nb-ul">
            {LINKS.map(l => (
              <li key={l.href}>
                <Link href={l.href} className={pathname === l.href ? "act" : ""}>{l.label}</Link>
              </li>
            ))}
          </ul>

          <div className="nb-act">
            <button className="nb-tog" onClick={toggle} aria-label="toggle theme">
              <span key={String(dark)}>{dark ? "🌙" : "☀️"}</span>
            </button>
            <Link href="/ContactSection" className="nb-hire">Hire me ✦</Link>
            <button className={`nb-ham ${open ? "op" : ""}`} onClick={() => setOpen(!open)}>
              <span className="nb-bar"/><span className="nb-bar"/><span className="nb-bar"/>
            </button>
          </div>
        </div>

        <div className={`nb-mob ${t} ${open ? "op" : ""}`}>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "act" : ""}>{l.label}</Link>
          ))}
          <Link href="/ContactSection" className="nb-mob-h">Hire me ✦</Link>
        </div>
      </nav>
    </>
  );
}