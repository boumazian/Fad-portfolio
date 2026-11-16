import Link from "next/link";
import { SOCIALS } from "@/lib/site";

// "/#id" anchors work from every page (sub-pages navigate home, then scroll)
const COL1 = [
  { href: "/#home", label: "Home" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

const COL2 = [
  { href: "/aboutme", label: "About Me" },
  { href: "/education", label: "Education" },
  { href: "/hobbies", label: "Hobbies" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .ft { background: var(--bg2); border-top: 1px solid var(--border); padding: 4rem 1.5rem 2rem; transition: background .4s, border-color .4s; }
        .ft-in { max-width: 1100px; margin: 0 auto; }
        .ft-top { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 2.5rem; margin-bottom: 3rem; }

        .ft-name { font-family: var(--font-syne), sans-serif; font-size: 1.25rem; font-weight: 800; color: var(--txt); display: flex; align-items: center; gap: 10px; margin-bottom: 1rem; }
        .ft-mark { width: 34px; height: 34px; border-radius: 10px; background: var(--grad); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; color: #fff; }
        .ft-desc { font-size: .92rem; color: var(--txt2); line-height: 1.8; max-width: 300px; margin: 0; }
        .ft-ch { font-size: .78rem; text-transform: uppercase; letter-spacing: .15em; font-weight: 800; color: var(--txt3); margin: 0 0 1rem; }
        .ft-links { display: flex; flex-direction: column; gap: .25rem; list-style: none; padding: 0; margin: 0; }
        .ft-links a { display: inline-block; padding: 6px 0; font-size: .92rem; color: var(--txt2); text-decoration: none; transition: color .2s, transform .2s; }
        .ft-links a:hover { color: var(--accent-txt); transform: translateX(5px); }

        .ft-div { height: 1px; background: var(--border); margin-bottom: 2rem; }
        .ft-bot { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
        .ft-copy { font-size: .85rem; color: var(--txt3); }
        .ft-socs { display: flex; gap: .6rem; }
        .ft-sc { width: 44px; height: 44px; border-radius: 12px; border: 1px solid var(--border); background: var(--soft); display: flex; align-items: center; justify-content: center; color: var(--txt2); transition: all .3s cubic-bezier(0.4, 0, 0.2, 1); }
        .ft-sc:hover { color: #fff; border-color: var(--accent); background: var(--accent); transform: translateY(-4px); box-shadow: var(--shadow-accent); }

        @media (max-width: 768px) {
          .ft-top { grid-template-columns: 1fr; text-align: center; gap: 2.5rem; }
          .ft-desc { margin: 0 auto; }
          .ft-name, .ft-socs { justify-content: center; }
          .ft-links { align-items: center; }
          .ft-links a:hover { transform: translateY(-2px); }
          .ft-bot { flex-direction: column; text-align: center; }
        }
      `}</style>

      <footer className="ft">
        <div className="ft-in">
          <div className="ft-top">
            <div>
              <div className="ft-name">
                <span className="ft-mark" aria-hidden="true">fb</span>
                Fad-BO
              </div>
              <p className="ft-desc">
                Full-Stack Cloud Developer building web apps with Next.js and automating AWS infrastructure.
              </p>
            </div>

            <nav aria-label="Sections">
              <h2 className="ft-ch">Navigation</h2>
              <ul className="ft-links">
                {COL1.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
              </ul>
            </nav>

            <nav aria-label="More pages">
              <h2 className="ft-ch">More</h2>
              <ul className="ft-links">
                {COL2.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
              </ul>
            </nav>
          </div>

          <div className="ft-div" />

          <div className="ft-bot">
            <span className="ft-copy" suppressHydrationWarning>© {new Date().getFullYear()} Fadoua Boumazian. Made with ❤️</span>
            <div className="ft-socs">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="ft-sc" aria-label={`${label} (opens in a new tab)`}>
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
