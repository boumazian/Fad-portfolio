import type { ReactNode } from "react";
import { Github, ExternalLink, FolderGit2, Lock, ArrowRight } from "lucide-react";

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
  privateLabel?: string;  // no public repo → lock badge + contact CTA instead of a 404 link
  contactLabel?: string;
}

export default function CardProject({ title, description, highlights = [], tags = [], github, link, imageUrl, icon, status, privateLabel, contactLabel = "Ask for a demo" }: CardProps) {
  const isPrivate = !github && !!privateLabel;
  return (
    <>
      <style>{`
        .cp {
          border-radius: 28px; overflow: hidden; height: 100%;
          background: var(--card); border: 1px solid var(--border-accent);
          display: flex; flex-direction: column;
          transition: transform .4s cubic-bezier(0.175, 0.885, 0.32, 1.2), box-shadow .4s, border-color .4s;
        }
        .cp:hover { transform: translateY(-8px); box-shadow: var(--shadow-accent); border-color: var(--accent); }

        /* Cover: screenshot or branded gradient */
        .cp-cover { position: relative; height: 180px; overflow: hidden; }
        .cp-img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; transition: transform .6s ease; }
        .cp:hover .cp-img { transform: scale(1.05); }
        .cp-art {
          width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
          background:
            radial-gradient(circle at 20% 20%, var(--glow), transparent 55%),
            radial-gradient(circle at 85% 80%, var(--tsoft), transparent 55%),
            var(--bg2);
        }
        .cp-art-icon {
          width: 76px; height: 76px; border-radius: 22px; display: flex; align-items: center; justify-content: center;
          color: #fff; background: var(--grad); box-shadow: var(--shadow-accent); transition: transform .4s ease;
        }
        .cp:hover .cp-art-icon { transform: rotate(-6deg) scale(1.06); }
        .cp-status {
          position: absolute; top: 14px; left: 14px; padding: 5px 12px; border-radius: 100px; font-size: .72rem; font-weight: 700;
          color: var(--warn-txt); background: color-mix(in srgb, var(--warn-txt) 14%, var(--card-solid));
          border: 1px solid color-mix(in srgb, var(--warn-txt) 40%, transparent);
        }

        .cp-private {
          position: absolute; top: 14px; right: 14px; display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 12px; border-radius: 100px; font-size: .72rem; font-weight: 700;
          color: var(--txt); background: var(--overlay); border: 1px solid var(--border-accent);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        }
        .cp-body { padding: 1.6rem 1.7rem 1.8rem; flex: 1; display: flex; flex-direction: column; gap: .85rem; }
        .cp-title { font-family: var(--font-head), sans-serif; font-size: 1.3rem; font-weight: 800; margin: 0; color: var(--txt); letter-spacing: -0.02em; }
        .cp-desc { font-size: .92rem; color: var(--txt2); line-height: 1.6; margin: 0; }

        .cp-hl { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .45rem; }
        .cp-hl li { position: relative; padding-left: 1.1rem; font-size: .85rem; line-height: 1.55; color: var(--txt2); }
        .cp-hl li::before { content: ""; position: absolute; left: 0; top: .55em; width: 6px; height: 6px; border-radius: 2px; background: var(--grad); }

        .cp-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: auto 0 0; padding: .4rem 0 0; list-style: none; }
        .cp-tag { font-size: .72rem; font-weight: 700; padding: 5px 12px; border-radius: 100px; background: var(--soft); color: var(--accent-txt); border: 1px solid var(--border-accent); }

        .cp-actions { display: flex; gap: .75rem; margin-top: .4rem; }
        .cp-btn {
          flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          min-height: 46px; padding: 0 10px; border-radius: 14px; font-size: .88rem; font-weight: 700; white-space: nowrap;
          text-decoration: none; transition: transform .25s, box-shadow .25s, border-color .25s;
        }
        .cp-btn:hover { transform: translateY(-2px); }
        .cp-gh { color: var(--txt); background: var(--pill); border: 1px solid var(--border); }
        .cp-gh:hover { border-color: var(--accent); }
        .cp-live { color: #fff; background: var(--grad); box-shadow: var(--shadow-accent); }
      `}</style>

      <article className="cp">
        <div className="cp-cover">
          {imageUrl
            ? <img src={imageUrl} alt={`${title} screenshot`} className="cp-img" loading="lazy" />
            : <div className="cp-art" aria-hidden="true"><div className="cp-art-icon">{icon ?? <FolderGit2 size={34} />}</div></div>}
          {status && <span className="cp-status">{status}</span>}
          {isPrivate && <span className="cp-private"><Lock size={12} aria-hidden="true" /> {privateLabel}</span>}
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
            <ul className="cp-tags" aria-label="Technologies">
              {tags.map(tg => <li className="cp-tag" key={tg}>{tg}</li>)}
            </ul>
          )}

          {isPrivate && !link && (
            <div className="cp-actions">
              <a href="/#contact" className="cp-btn cp-gh">{contactLabel} <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          )}

          {(github || link) && (
            <div className="cp-actions">
              {github && (
                <a href={github} className="cp-btn cp-gh" target="_blank" rel="noopener noreferrer" aria-label={`${title}: source code on GitHub`}>
                  <Github size={16} aria-hidden="true" /> GitHub
                </a>
              )}
              {link && (
                <a href={link} className="cp-btn cp-live" target="_blank" rel="noopener noreferrer" aria-label={`${title}: live demo`}>
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
