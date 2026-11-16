"use client";
import type { ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";

export interface CardProps {
  title: string;
  description: string;
  highlights?: string[];
  tags?: string[];
  github?: string;   // repo URL → "GitHub" button
  link?: string;     // live URL → "Live Demo" button
  imageUrl?: string; // screenshot in /public (falls back to a branded cover)
  icon?: ReactNode;
  status?: string;   // e.g. "In progress"
}

export default function CardProject({ title, description, highlights = [], tags = [], github, link, imageUrl, icon, status }: CardProps) {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";

  return (
    <>
      <style>{`
        .cp {
          border-radius: 28px;
          overflow: hidden;
          background: ${dark ? "rgba(15, 15, 25, 0.7)" : "#ffffff"};
          border: 1px solid ${dark ? "rgba(99, 102, 241, 0.2)" : "rgba(0,0,0,0.06)"};
          display: flex;
          flex-direction: column;
          transition: transform .4s cubic-bezier(0.175, 0.885, 0.32, 1.2), box-shadow .4s, border-color .4s;
          height: 100%;
        }
        .cp:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
          border-color: #6366f1;
        }

        /* Cover: screenshot or branded gradient */
        .cp-cover { position: relative; height: 180px; overflow: hidden; }
        .cp-img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; transition: transform .6s ease; }
        .cp:hover .cp-img { transform: scale(1.05); }
        .cp-art {
          width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
          background:
            radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.35), transparent 55%),
            radial-gradient(circle at 85% 80%, rgba(13, 148, 136, 0.35), transparent 55%),
            ${dark ? "#0d0d1a" : "#eef2ff"};
        }
        .cp-art-icon {
          width: 76px; height: 76px; border-radius: 22px; display: flex; align-items: center; justify-content: center;
          color: white; background: linear-gradient(135deg, #6366f1, #a855f7);
          box-shadow: 0 15px 35px -10px rgba(99, 102, 241, 0.7);
          transition: transform .4s ease;
        }
        .cp:hover .cp-art-icon { transform: rotate(-6deg) scale(1.06); }
        .cp-status {
          position: absolute; top: 14px; left: 14px;
          padding: 5px 12px; border-radius: 100px; font-size: .72rem; font-weight: 700;
          background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.35);
          backdrop-filter: blur(6px);
        }

        .cp-body { padding: 1.6rem 1.7rem 1.8rem; flex: 1; display: flex; flex-direction: column; gap: .85rem; }
        .cp-title {
          font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; margin: 0;
          color: ${dark ? "#fff" : "#0f172a"}; letter-spacing: -0.02em;
        }
        .cp-desc { font-size: .92rem; color: ${dark ? "#94a3b8" : "#64748b"}; line-height: 1.6; margin: 0; }

        .cp-hl { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .45rem; }
        .cp-hl li { position: relative; padding-left: 1.1rem; font-size: .85rem; line-height: 1.55; color: ${dark ? "#cbd5e1" : "#475569"}; }
        .cp-hl li::before {
          content: ""; position: absolute; left: 0; top: .55em;
          width: 6px; height: 6px; border-radius: 2px; background: linear-gradient(135deg, #6366f1, #a855f7);
        }

        .cp-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; padding-top: .4rem; }
        .cp-tag {
          font-size: .72rem; font-weight: 700; padding: 5px 12px; border-radius: 100px;
          background: ${dark ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.07)"};
          color: ${dark ? "#a5b4fc" : "#4f46e5"}; border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .cp-actions { display: flex; gap: .75rem; margin-top: .4rem; }
        .cp-btn {
          flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 11px 10px; border-radius: 14px; font-size: .88rem; font-weight: 700; white-space: nowrap;
          text-decoration: none; transition: transform .25s, box-shadow .25s, border-color .25s, background .25s;
        }
        .cp-btn:hover { transform: translateY(-2px); }
        .cp-gh {
          color: ${dark ? "#e2e8f0" : "#0f172a"};
          background: ${dark ? "rgba(255,255,255,0.05)" : "#f8fafc"};
          border: 1px solid ${dark ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.12)"};
        }
        .cp-gh:hover { border-color: #6366f1; }
        .cp-live {
          color: #fff; background: linear-gradient(135deg, #6366f1, #a855f7);
          box-shadow: 0 8px 20px -8px rgba(99, 102, 241, 0.6);
        }
        .cp-live:hover { box-shadow: 0 12px 26px -8px rgba(99, 102, 241, 0.75); }
      `}</style>

      <article className={`cp ${t}`}>
        <div className="cp-cover">
          {imageUrl
            ? <img src={imageUrl} alt={`${title} screenshot`} className="cp-img" loading="lazy" />
            : <div className="cp-art"><div className="cp-art-icon">{icon ?? <FolderGit2 size={34} />}</div></div>}
          {status && <span className="cp-status">{status}</span>}
        </div>

        <div className="cp-body">
          <h3 className="cp-title">{title}</h3>
          <p className="cp-desc">{description}</p>

          {highlights.length > 0 && (
            <ul className="cp-hl">
              {highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
          )}

          {tags.length > 0 && (
            <div className="cp-tags">
              {tags.map(tg => <span className="cp-tag" key={tg}>{tg}</span>)}
            </div>
          )}

          {(github || link) && (
            <div className="cp-actions">
              {github && (
                <a href={github} className="cp-btn cp-gh" target="_blank" rel="noopener noreferrer" aria-label={`${title} source code on GitHub`}>
                  <Github size={16} aria-hidden="true" /> GitHub
                </a>
              )}
              {link && (
                <a href={link} className="cp-btn cp-live" target="_blank" rel="noopener noreferrer" aria-label={`${title} live demo`}>
                  <ExternalLink size={16} aria-hidden="true" /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </>
  );
}
