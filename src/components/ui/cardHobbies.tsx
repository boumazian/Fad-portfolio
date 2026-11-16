"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardProps {
  imageUrls: string[];
  title: string;
  description: string;
  emoji?: string;
}

export default function CardHobbies({ imageUrls, title, description, emoji = "✦" }: CardProps) {
  const [cur, setCur] = useState(0);

  const prev = () => setCur(i => i === 0 ? imageUrls.length - 1 : i - 1);
  const next = () => setCur(i => i === imageUrls.length - 1 ? 0 : i + 1);

  return (
    <>
      <style>{`
        .ch { border-radius: 20px; overflow: hidden; background: var(--card); border: 1px solid var(--border); display: flex; flex-direction: column; height: 100%; transition: box-shadow .28s, border-color .28s; }
        .ch:hover { box-shadow: var(--shadow); border-color: var(--accent); }

        /* Carousel */
        .ch-car { position: relative; height: 220px; overflow: hidden; background: var(--soft); }
        .ch-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: opacity .5s ease; }
        .ch-img.on { opacity: 1; } .ch-img.off { opacity: 0; }

        .ch-nav {
          position: absolute; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; border-radius: 50%;
          border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
          background: var(--overlay); color: var(--overlay-txt); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
          transition: transform .2s;
        }
        .ch-nav:hover { transform: translateY(-50%) scale(1.1); }
        .ch-prev { left: 10px; } .ch-next { right: 10px; }

        .ch-dots { position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); display: flex; gap: 2px; }
        .ch-dot { width: 22px; height: 22px; padding: 0; border: none; background: none; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .ch-dot::before { content: ""; width: 7px; height: 7px; border-radius: 4px; background: rgba(255,255,255,.6); transition: all .25s; box-shadow: 0 0 4px rgba(0,0,0,.4); }
        .ch-dot.on::before { width: 18px; background: #fff; }

        .ch-ph { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; color: var(--txt3); }

        .ch-body { padding: 1.2rem 1.3rem 1.4rem; flex: 1; }
        .ch-title { font-family: var(--font-head), sans-serif; font-size: 1rem; font-weight: 700; color: var(--txt); margin: 0 0 .4rem; }
        .ch-desc { font-size: .88rem; color: var(--txt2); line-height: 1.7; margin: 0; }

        .ch-count { position: absolute; top: 10px; right: 10px; padding: 3px 10px; border-radius: 100px; font-size: .72rem; font-weight: 600; background: var(--overlay); color: var(--overlay-txt); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
      `}</style>

      <div className="ch">
        <div className="ch-car" role="group" aria-roledescription="carousel" aria-label={`${title} photos`}>
          {imageUrls.length > 0 ? (
            <>
              {imageUrls.map((url, i) => (
                <Image key={url} src={url} alt={`${title}, photo ${i + 1} of ${imageUrls.length}`} fill sizes="(max-width: 600px) 100vw, 400px" className={`ch-img ${i === cur ? "on" : "off"}`} aria-hidden={i !== cur} />
              ))}
              <span className="ch-count" aria-hidden="true">{cur + 1}/{imageUrls.length}</span>
              {imageUrls.length > 1 && (
                <>
                  <button className="ch-nav ch-prev" onClick={prev} aria-label="Previous photo"><ChevronLeft size={20} aria-hidden="true" /></button>
                  <button className="ch-nav ch-next" onClick={next} aria-label="Next photo"><ChevronRight size={20} aria-hidden="true" /></button>
                  <div className="ch-dots">
                    {imageUrls.map((url, i) => (
                      <button key={url} className={`ch-dot ${i === cur ? "on" : ""}`} onClick={() => setCur(i)} aria-label={`Show photo ${i + 1}`} aria-current={i === cur} />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="ch-ph" aria-hidden="true">{emoji}</div>
          )}
        </div>

        <div className="ch-body">
          <h2 className="ch-title">{title}</h2>
          <p className="ch-desc">{description}</p>
        </div>
      </div>
    </>
  );
}
