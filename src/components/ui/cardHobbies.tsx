"use client";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface CardProps {
  imageUrls: string[];
  title: string;
  description: string;
  emoji?: string;
}

export default function CardHobbies({ imageUrls, title, description, emoji = "✦" }: CardProps) {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";
  const [cur, setCur] = useState(0);

  const prev = () => setCur(i => i === 0 ? imageUrls.length - 1 : i - 1);
  const next = () => setCur(i => i === imageUrls.length - 1 ? 0 : i + 1);

  return (
    <>
      <style>{`
        .ch { border-radius:16px;overflow:hidden;background:var(--card);border:1px solid var(--border);display:flex;flex-direction:column;transition:transform .28s,box-shadow .28s,border-color .28s; }
        .ch:hover { transform:translateY(-4px);box-shadow:var(--shadow);border-color:var(--accent); }

        /* Carousel */
        .ch-car { position:relative;height:210px;overflow:hidden;background:var(--soft); }
        .ch-img { position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .5s ease; }
        .ch-img.on { opacity:1; } .ch-img.off { opacity:0; }

        /* Nav buttons */
        .ch-nav { position:absolute;top:50%;transform:translateY(-50%);width:32px;height:32px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:12px;backdrop-filter:blur(8px);transition:background .2s,transform .2s; }
        .ch-nav:hover { transform:translateY(-50%) scale(1.1); }
        .ch-prev { left:10px; } .ch-next { right:10px; }
        .dk .ch-nav { background:rgba(10,10,20,.55);color:#fff; }
        .lk .ch-nav { background:rgba(255,255,255,.7);color:#0e0a1d; }

        /* Dots */
        .ch-dots { position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:5px; }
        .ch-dot { width:6px;height:6px;border-radius:50%;border:none;cursor:pointer;transition:all .25s; }
        .ch-dot.on { width:18px;border-radius:3px;background:var(--accent); }
        .ch-dot.off { background:rgba(255,255,255,.5); }

        /* No image fallback */
        .ch-ph { width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2.5rem;color:var(--txt3); }

        /* Body */
        .ch-body { padding:1.1rem 1.2rem 1.3rem;flex:1; }
        .ch-title { font-family:var(--font-syne,'Syne',sans-serif);font-size:.97rem;font-weight:700;color:var(--txt);margin-bottom:.4rem; }
        .ch-desc { font-size:.83rem;color:var(--txt2);line-height:1.7; }

        /* Counter badge */
        .ch-count { position:absolute;top:10px;right:10px;padding:3px 9px;border-radius:100px;font-size:.7rem;font-weight:600;backdrop-filter:blur(8px); }
        .dk .ch-count { background:rgba(10,10,20,.6);color:rgba(255,255,255,.8); }
        .lk .ch-count { background:rgba(255,255,255,.75);color:#0e0a1d; }
      `}</style>

      <div className={`ch ${t}`}>
        {/* Carousel */}
        <div className="ch-car">
          {imageUrls.length > 0 ? (
            <>
              {imageUrls.map((url, i) => (
                <img key={i} src={url} alt={`${title} ${i + 1}`} className={`ch-img ${i === cur ? "on" : "off"}`} />
              ))}
              {/* Counter */}
              <span className="ch-count">{cur + 1}/{imageUrls.length}</span>
              {/* Nav */}
              {imageUrls.length > 1 && (
                <>
                  <button className="ch-nav ch-prev" onClick={prev}>◀</button>
                  <button className="ch-nav ch-next" onClick={next}>▶</button>
                  <div className="ch-dots">
                    {imageUrls.map((_, i) => (
                      <button key={i} className={`ch-dot ${i === cur ? "on" : "off"}`} onClick={() => setCur(i)}/>
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="ch-ph">{emoji}</div>
          )}
        </div>

        {/* Body */}
        <div className="ch-body">
          <div className="ch-title">{title}</div>
          <div className="ch-desc">{description}</div>
        </div>
      </div>
    </>
  );
}