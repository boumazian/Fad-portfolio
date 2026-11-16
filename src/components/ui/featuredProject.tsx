import type { ReactNode } from "react";
import { Lock, ArrowRight, Star, Github, ExternalLink } from "lucide-react";

export interface FeaturedProjectProps {
  name: string;
  tagline: string;
  company?: string;
  role: string;
  period?: string;       // e.g. "May 2025 – Mar 2026"
  problem: string;
  solution: string;
  features: string[];
  stack: { group: string; items: string[] }[];
  contribution: string;
  badge?: string;
  icon?: ReactNode;
  github?: string;       // public repo → "GitHub" button. Never link a private repo (visitors get a 404)
  privateLabel?: string; // badge shown when there is no public repo
  privateNote?: string;  // short explanation shown when there is no public repo
  link?: string;         // public URL (live site, App Store listing) → primary button
  linkLabel?: string;
  contactLabel?: string; // contact CTA (primary without a link, secondary with one)
  reverse?: boolean;     // identity panel on the right (alternate featured cards)
}

export default function FeaturedProject({
  name, tagline, company, role, period, problem, solution, features, stack, contribution, badge, icon,
  github, privateLabel = "Private Repository", privateNote, link, linkLabel = "Visit live site",
  contactLabel = "Ask me about the architecture", reverse,
}: FeaturedProjectProps) {
  const id = `fp-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const isPrivate = !github;
  return (
    <>
      <style>{`
        .fp {
          display: grid; grid-template-columns: minmax(300px, 0.95fr) 1.6fr;
          border-radius: 32px; overflow: hidden; margin-bottom: 2.5rem;
          background: var(--card); border: 1px solid var(--border-accent);
          box-shadow: var(--shadow);
        }

        .fp.rev { grid-template-columns: 1.6fr minmax(300px, 0.95fr); }
        .fp.rev .fp-side { order: 2; }

        /* Left: identity panel (always dark gradient → white text stays readable) */
        .fp-side {
          position: relative; padding: 2.5rem; color: #fff;
          background: var(--grad-deep);
          display: flex; flex-direction: column; gap: 1.1rem;
          container-type: inline-size; /* title scales with the panel width (cqi) */
        }
        .fp-side::after {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(circle at 85% 10%, rgba(255,255,255,0.14), transparent 45%);
        }
        .fp-badges { display: flex; flex-wrap: wrap; gap: 8px; }
        .fp-badge {
          display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 100px;
          font-size: .75rem; font-weight: 700; background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.25);
        }
        .fp-icon {
          width: 64px; height: 64px; border-radius: 18px; display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.16); border: 1px solid rgba(255,255,255,0.25); margin-top: .5rem;
        }
        .fp-name { font-family: var(--font-head), sans-serif; font-size: 1.6rem; font-size: min(2.2rem, 8.4cqi); font-weight: 800; letter-spacing: -0.03em; margin: 0; line-height: 1.1; overflow-wrap: break-word; }
        .fp-tagline { font-size: 1rem; line-height: 1.65; color: rgba(255,255,255,0.88); margin: 0; }
        .fp-role { font-size: .9rem; font-weight: 700; color: #fff; }
        .fp-role span { font-weight: 500; color: rgba(255,255,255,0.8); }
        .fp-role .fp-period { display: block; margin-top: 4px; font-size: .85rem; }

        .fp-foot { margin-top: auto; display: flex; flex-direction: column; gap: .8rem; position: relative; z-index: 1; }
        .fp-private {
          display: flex; align-items: flex-start; gap: 10px; padding: 12px 14px; border-radius: 14px;
          background: rgba(0,0,0,0.22); border: 1px solid rgba(255,255,255,0.18); font-size: .82rem; line-height: 1.5; color: rgba(255,255,255,0.9);
        }
        .fp-private svg { flex-shrink: 0; margin-top: 2px; }
        .fp-cta {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 46px; padding: 0 18px;
          border-radius: 14px; background: #fff; color: var(--accent); font-weight: 700; font-size: .9rem; text-decoration: none;
          transition: transform .25s, box-shadow .25s;
        }
        .fp-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 24px -10px rgba(0,0,0,0.5); }
        .fp-ctas { display: flex; flex-wrap: wrap; gap: .6rem; }
        .fp-ctas .fp-cta { flex: 1 1 150px; white-space: nowrap; }
        .fp-cta.ghost { background: rgba(255,255,255,0.12); color: #fff; border: 1px solid rgba(255,255,255,0.3); }

        /* Right: details */
        .fp-main { padding: 2.5rem; display: flex; flex-direction: column; gap: 1.8rem; }
        .fp-h { font-size: .75rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; color: var(--accent-txt); margin: 0 0 .7rem; }

        .fp-ps { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .fp-box { padding: 1.2rem 1.3rem; border-radius: 18px; background: var(--pill); border: 1px solid var(--border); }
        .fp-box p { margin: 0; font-size: .92rem; line-height: 1.65; color: var(--txt2); }

        .fp-feat { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: .7rem 1.5rem; }
        .fp-feat li { position: relative; padding-left: 1.2rem; font-size: .9rem; line-height: 1.6; color: var(--txt2); }
        .fp-feat li::before { content: ""; position: absolute; left: 0; top: .6em; width: 6px; height: 6px; border-radius: 2px; background: var(--grad); }

        .fp-stack { display: grid; grid-template-columns: max-content 1fr; gap: .7rem 1.2rem; margin: 0; align-items: baseline; }
        .fp-stack dt { font-size: .82rem; font-weight: 700; color: var(--txt); }
        .fp-stack dd { margin: 0; display: flex; flex-wrap: wrap; gap: 6px; }
        .fp-pill { font-size: .75rem; font-weight: 600; padding: 4px 11px; border-radius: 100px; background: var(--soft); color: var(--pilltxt); border: 1px solid var(--border-accent); }

        .fp-contrib { margin: 0; font-size: .92rem; line-height: 1.7; color: var(--txt2); }

        @media (max-width: 980px) {
          .fp, .fp.rev { grid-template-columns: 1fr; }
          .fp.rev .fp-side { order: 0; }
          .fp-feat { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .fp { border-radius: 26px; }
          .fp-side, .fp-main { padding: 1.75rem; }
          .fp-ps { grid-template-columns: 1fr; }
          .fp-stack { grid-template-columns: 1fr; gap: .35rem; }
          .fp-stack dd { margin-bottom: .6rem; }
        }
      `}</style>

      <article className={`fp ${reverse ? "rev" : ""}`} aria-labelledby={id}>
        <div className="fp-side">
          <div className="fp-badges">
            {badge && <span className="fp-badge"><Star size={13} aria-hidden="true" /> {badge}</span>}
            {isPrivate && <span className="fp-badge"><Lock size={13} aria-hidden="true" /> {privateLabel}</span>}
          </div>
          {icon && <div className="fp-icon" aria-hidden="true">{icon}</div>}
          <h3 id={id} className="fp-name">{name}</h3>
          <p className="fp-tagline">{tagline}</p>
          <div className="fp-role">{role}{company && <span> · {company}</span>}{period && <span className="fp-period">{period}</span>}</div>

          <div className="fp-foot">
            {isPrivate && privateNote && (
              <div className="fp-private"><Lock size={15} aria-hidden="true" /><span>{privateNote}</span></div>
            )}
            {link || github ? (
              <div className="fp-ctas">
                {link && (
                  <a className="fp-cta" href={link} target="_blank" rel="noopener noreferrer" aria-label={`${name}: ${linkLabel} (opens in a new tab)`}>
                    <ExternalLink size={16} aria-hidden="true" /> {linkLabel}
                  </a>
                )}
                {github
                  ? <a className={`fp-cta ${link ? "ghost" : ""}`} href={github} target="_blank" rel="noopener noreferrer" aria-label={`${name}: source code on GitHub`}><Github size={16} aria-hidden="true" /> GitHub</a>
                  : <a className="fp-cta ghost" href="/#contact">{contactLabel} <ArrowRight size={16} aria-hidden="true" /></a>}
              </div>
            ) : (
              <a className="fp-cta" href="/#contact">{contactLabel} <ArrowRight size={16} aria-hidden="true" /></a>
            )}
          </div>
        </div>

        <div className="fp-main">
          <div className="fp-ps">
            <div className="fp-box">
              <h4 className="fp-h">Problem</h4>
              <p>{problem}</p>
            </div>
            <div className="fp-box">
              <h4 className="fp-h">Solution</h4>
              <p>{solution}</p>
            </div>
          </div>

          <div>
            <h4 className="fp-h">Key features</h4>
            <ul className="fp-feat">
              {features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>

          <div>
            <h4 className="fp-h">Tech stack</h4>
            <dl className="fp-stack">
              {stack.map(s => (
                <div key={s.group} style={{ display: "contents" }}>
                  <dt>{s.group}</dt>
                  <dd>{s.items.map(i => <span className="fp-pill" key={i}>{i}</span>)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h4 className="fp-h">My role</h4>
            <p className="fp-contrib">{contribution}</p>
          </div>
        </div>
      </article>
    </>
  );
}
