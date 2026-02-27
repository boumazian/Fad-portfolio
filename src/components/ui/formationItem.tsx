"use client";
import { useTheme } from "@/context/ThemeContext";

type FormationItemProps = {
  title: string;
  date: string;
  etablissement: string;
  description1: string;
  description2?: string;
  description3?: string;
  tag?: string;
  link?: string;
  isLast?: boolean;
};

const TAG_COLORS: Record<string, string> = {
  Diplome:     "linear-gradient(135deg,#7c3aed,#0d9488)",
  Certificat:  "linear-gradient(135deg,#0d9488,#0ea5e9)",
  Attestation: "linear-gradient(135deg,#a855f7,#7c3aed)",
};

export default function FormationItem({
  title, date, etablissement, description1, description2, description3, tag, link, isLast
}: FormationItemProps) {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";

  return (
    <>
      <style>{`
        .fi-wrap {
          display: flex; gap: 1.5rem;
          padding-bottom: ${isLast ? "0" : "2.5rem"};
          position: relative;
        }

        /* Timeline line */
        .fi-line {
          display: flex; flex-direction: column; align-items: center;
          flex-shrink: 0;
        }
        .fi-dot {
          width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0;
          background: linear-gradient(135deg,#7c3aed,#0d9488);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 16px rgba(124,58,237,0.4);
          z-index: 1;
        }
        .fi-dot svg { color: #fff; }
        .fi-connector {
          flex: 1; width: 2px; margin-top: 6px;
          background: linear-gradient(to bottom, rgba(124,58,237,0.4), rgba(13,148,136,0.1));
        }

        /* Card */
        .fi-card {
          flex: 1; border-radius: 14px; padding: 1.3rem 1.5rem;
          background: var(--card); border: 1px solid var(--border);
          transition: transform .25s, box-shadow .25s, border-color .25s;
          margin-bottom: .5rem;
        }
        .fi-card:hover { transform: translateX(4px); box-shadow: var(--shadow); border-color: var(--accent); }

        .fi-top { display: flex; align-items: flex-start; justify-content: space-between; gap: .75rem; flex-wrap: wrap; margin-bottom: .4rem; }
        .fi-title { font-family: var(--font-syne, 'Syne', sans-serif); font-size: 1rem; font-weight: 700; color: var(--txt); line-height: 1.4; }
        .fi-tag {
          padding: 3px 11px; border-radius: 100px; font-size: .72rem; font-weight: 700;
          color: #fff; white-space: nowrap; flex-shrink: 0;
          letter-spacing: .04em;
        }
        .fi-etab { font-size: .82rem; color: var(--accent); font-weight: 500; margin-bottom: .3rem; }
        .fi-date { font-size: .76rem; color: var(--txt3); margin-bottom: .7rem; display: flex; align-items: center; gap: 5px; }
        .fi-desc { font-size: .875rem; color: var(--txt2); line-height: 1.7; margin-bottom: .3rem; }
        .fi-link {
          display: inline-flex; align-items: center; gap: 6px; margin-top: .8rem;
          padding: 7px 16px; border-radius: 9px;
          border: 1px solid var(--border); background: var(--soft);
          color: var(--txt); font-size: .8rem; font-weight: 600;
          text-decoration: none; transition: all .2s;
        }
        .fi-link:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-1px); }

        @media(max-width:600px) {
          .fi-wrap { gap: 1rem; }
          .fi-dot { width: 32px; height: 32px; }
        }
      `}</style>

      <div className={`fi-wrap ${t}`}>
        {/* Left: dot + line */}
        <div className="fi-line">
          <div className="fi-dot">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {!isLast && <div className="fi-connector"/>}
        </div>

        {/* Right: card */}
        <div className="fi-card">
          <div className="fi-top">
            <div className="fi-title">{title}</div>
            {tag && (
              <span
                className="fi-tag"
                style={{ background: TAG_COLORS[tag] || TAG_COLORS.Attestation }}
              >
                {tag}
              </span>
            )}
          </div>
          <div className="fi-etab">{etablissement}</div>
          <div className="fi-date">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round"/>
              <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round"/>
              <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round"/>
              <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round"/>
            </svg>
            {date}
          </div>
          <div className="fi-desc">{description1}</div>
          {description2 && <div className="fi-desc">{description2}</div>}
          {description3 && <div className="fi-desc">{description3}</div>}
          {link && link !== "#" && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="fi-link">
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download Certificate
            </a>
          )}
        </div>
      </div>
    </>
  );
}