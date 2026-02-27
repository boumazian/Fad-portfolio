"use client";
import { useTheme } from "@/context/ThemeContext";

interface CardProps {
  imageUrl?: string;
  title: string;
  description?: string;
  tags?: string[];
  link?: string;
  buttonText?: string;
  onClick?: () => void;
}

export default function CardProject({ imageUrl, title, description, tags=[], link, buttonText, onClick }: CardProps) {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";
  return (
    <>
      <style>{`
        .cp { border-radius:15px;overflow:hidden;background:var(--card);border:1px solid var(--border);display:flex;flex-direction:column;transition:transform .28s,box-shadow .28s,border-color .28s; }
        .cp:hover { transform:translateY(-4px);box-shadow:var(--shadow);border-color:var(--accent); }
        .cp-img { width:100%;height:175px;object-fit:cover;display:block;transition:transform .4s; }
        .cp:hover .cp-img { transform:scale(1.04); }
        .cp-ph { width:100%;height:175px;background:var(--soft);display:flex;align-items:center;justify-content:center;font-size:2.2rem;color:var(--txt3); }
        .cp-body { padding:1.2rem;flex:1;display:flex;flex-direction:column;gap:.55rem; }
        .cp-title { font-family:'Syne',sans-serif;font-size:.97rem;font-weight:700;color:var(--txt); }
        .cp-desc { font-size:.84rem;color:var(--txt2);line-height:1.7;flex:1; }
        .cp-tags { display:flex;flex-wrap:wrap;gap:6px;margin-top:auto;padding-top:.4rem; }
        .cp-tag { font-size:.72rem;font-weight:500;padding:3px 10px;border-radius:100px;background:var(--pill);color:var(--pilltxt);border:1px solid var(--border); }
        .cp-btn { margin-top:.7rem;padding:9px;border-radius:9px;border:none;cursor:pointer;background:linear-gradient(135deg,#7c3aed,#0d9488);color:#fff;font-size:.84rem;font-weight:600;font-family:inherit;transition:opacity .2s; }
        .cp-btn:hover { opacity:.88; }
        .cp-link { display:inline-flex;align-items:center;gap:5px;margin-top:.6rem;font-size:.82rem;font-weight:600;color:var(--accent);text-decoration:none; }
        .cp-link:hover { text-decoration:underline; }
      `}</style>
      <div className={`cp ${t}`}>
        {imageUrl ? <img src={imageUrl} alt={title} className="cp-img"/> : <div className="cp-ph">🗂</div>}
        <div className="cp-body">
          <div className="cp-title">{title}</div>
          {description && <div className="cp-desc">{description}</div>}
          {tags.length > 0 && <div className="cp-tags">{tags.map(tg=><span className="cp-tag" key={tg}>{tg}</span>)}</div>}
          {buttonText && <button className="cp-btn" onClick={onClick}>{buttonText}</button>}
          {link && <a href={link} className="cp-link" target="_blank" rel="noopener noreferrer">View project →</a>}
        </div>
      </div>
    </>
  );
}