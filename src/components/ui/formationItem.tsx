import type { ReactNode } from "react";
import { GraduationCap, CalendarDays, Download } from "lucide-react";

type FormationItemProps = {
  title: string;
  date: string;
  etablissement: string;
  description1: string;
  description2?: string;
  description3?: string;
  tag?: string;
  link?: string;
  icon?: ReactNode;
  isLast?: boolean;
};

export default function FormationItem({
  title, date, etablissement, description1, description2, description3, tag, link, icon, isLast,
}: FormationItemProps) {
  return (
    <>
      <style>{`
        .fi-wrap { display: flex; gap: 1.5rem; position: relative; }
        .fi-wrap:not(.last) { padding-bottom: 1.5rem; }

        /* Timeline */
        .fi-line { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
        .fi-dot {
          width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0; z-index: 1;
          background: var(--grad); color: #fff; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 16px var(--glow);
        }
        .fi-connector { flex: 1; width: 2px; margin-top: 6px; background: linear-gradient(to bottom, var(--border-accent), transparent); }

        /* Card */
        .fi-card {
          flex: 1; border-radius: 18px; padding: 1.4rem 1.6rem;
          background: var(--card); border: 1px solid var(--border);
          transition: transform .25s, box-shadow .25s, border-color .25s;
        }
        .fi-card:hover { transform: translateX(4px); box-shadow: var(--shadow); border-color: var(--accent); }

        .fi-top { display: flex; align-items: flex-start; justify-content: space-between; gap: .75rem; flex-wrap: wrap; margin-bottom: .45rem; }
        .fi-title { font-family: var(--font-syne), sans-serif; font-size: 1.02rem; font-weight: 700; color: var(--txt); line-height: 1.4; margin: 0; }
        .fi-tag {
          padding: 3px 11px; border-radius: 100px; font-size: .72rem; font-weight: 700; white-space: nowrap; flex-shrink: 0;
          background: var(--soft); color: var(--accent-txt); border: 1px solid var(--border-accent);
        }
        .fi-etab { font-size: .86rem; color: var(--accent-txt); font-weight: 600; margin-bottom: .3rem; }
        .fi-date { font-size: .8rem; color: var(--txt3); margin-bottom: .7rem; display: flex; align-items: center; gap: 6px; }
        .fi-desc { font-size: .9rem; color: var(--txt2); line-height: 1.7; margin: 0 0 .3rem; }
        .fi-link {
          display: inline-flex; align-items: center; gap: 6px; margin-top: .8rem; min-height: 40px; padding: 0 16px; border-radius: 10px;
          border: 1px solid var(--border); background: var(--soft); color: var(--txt); font-size: .82rem; font-weight: 600;
          text-decoration: none; transition: all .2s;
        }
        .fi-link:hover { border-color: var(--accent); color: var(--accent-txt); transform: translateY(-1px); }

        @media (max-width: 600px) {
          .fi-wrap { gap: .9rem; }
          .fi-dot { width: 34px; height: 34px; }
          .fi-card { padding: 1.2rem 1.25rem; }
        }
      `}</style>

      <li className={`fi-wrap ${isLast ? "last" : ""}`}>
        <div className="fi-line" aria-hidden="true">
          <div className="fi-dot">{icon ?? <GraduationCap size={18} />}</div>
          {!isLast && <div className="fi-connector" />}
        </div>

        <div className="fi-card">
          <div className="fi-top">
            <h2 className="fi-title">{title}</h2>
            {tag && <span className="fi-tag">{tag}</span>}
          </div>
          <div className="fi-etab">{etablissement}</div>
          <div className="fi-date"><CalendarDays size={13} aria-hidden="true" />{date}</div>
          <p className="fi-desc">{description1}</p>
          {description2 && <p className="fi-desc">{description2}</p>}
          {description3 && <p className="fi-desc">{description3}</p>}
          {link && link !== "#" && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="fi-link">
              <Download size={14} aria-hidden="true" /> Download Certificate
            </a>
          )}
        </div>
      </li>
    </>
  );
}
