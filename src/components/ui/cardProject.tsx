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
        .cp { 
          border-radius: 35px; /* Pill-style radius */
          overflow: hidden; 
          background: ${dark ? "rgba(15, 15, 25, 0.7)" : "#ffffff"}; 
          border: 1px solid ${dark ? "rgba(99, 102, 241, 0.2)" : "rgba(0,0,0,0.05)"}; 
          display: flex; 
          flex-direction: column; 
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.2); 
          backdrop-filter: blur(10px);
          height: 100%;
        }

        .cp:hover { 
          transform: translateY(-12px); 
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2); 
          border-color: #6366f1; 
        }

        .cp-img-container {
          width: 100%;
          height: 200px;
          overflow: hidden;
          position: relative;
        }

        .cp-img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          display: block; 
          transition: transform 0.6s ease; 
        }

        .cp:hover .cp-img { transform: scale(1.1); }

        .cp-ph { 
          width: 100%; 
          height: 200px; 
          background: ${dark ? "rgba(99, 102, 241, 0.1)" : "#f1f5f9"}; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 2.5rem; 
        }

        .cp-body { 
          padding: 1.8rem; 
          flex: 1; 
          display: flex; 
          flex-direction: column; 
          gap: 0.8rem; 
        }

        .cp-title { 
          font-family: 'Syne', sans-serif; 
          font-size: 1.3rem; 
          font-weight: 800; 
          color: ${dark ? "#fff" : "#0f172a"}; 
          letter-spacing: -0.02em;
        }

        .cp-desc { 
          font-size: 0.9rem; 
          color: ${dark ? "#94a3b8" : "#64748b"}; 
          line-height: 1.6; 
          flex: 1; 
        }

        .cp-tags { 
          display: flex; 
          flex-wrap: wrap; 
          gap: 8px; 
          margin-top: 0.5rem; 
        }

        .cp-tag { 
          font-size: 0.75rem; 
          font-weight: 700; 
          padding: 5px 14px; 
          border-radius: 100px; 
          background: ${dark ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.05)"}; 
          color: #818cf8; 
          border: 1px solid rgba(99, 102, 241, 0.2); 
          text-transform: uppercase;
        }

        .cp-btn { 
          margin-top: 1rem; 
          padding: 12px; 
          border-radius: 15px; 
          border: none; 
          cursor: pointer; 
          background: linear-gradient(135deg, #6366f1, #a855f7); 
          color: #fff; 
          font-size: 0.9rem; 
          font-weight: 700; 
          transition: all 0.3s ease; 
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .cp-btn:hover { 
          opacity: 0.9; 
          transform: scale(1.02);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        .cp-link { 
          display: inline-flex; 
          align-items: center; 
          gap: 6px; 
          margin-top: 0.8rem; 
          font-size: 0.9rem; 
          font-weight: 700; 
          color: #818cf8; 
          text-decoration: none; 
          transition: 0.3s;
        }

        .cp-link:hover { color: #a855f7; gap: 10px; }
      `}</style>

      <div className={`cp ${t}`}>
        <div className="cp-img-container">
          {imageUrl ? <img src={imageUrl} alt={title} className="cp-img"/> : <div className="cp-ph">🚀</div>}
        </div>
        
        <div className="cp-body">
          <div className="cp-title">{title}</div>
          {description && <div className="cp-desc">{description}</div>}
          
          {tags.length > 0 && (
            <div className="cp-tags">
              {tags.map(tg => <span className="cp-tag" key={tg}>{tg}</span>)}
            </div>
          )}
          
          {buttonText && <button className="cp-btn" onClick={onClick}>{buttonText}</button>}
          {link && <a href={link} className="cp-link" target="_blank" rel="noopener noreferrer">Live Demo →</a>}
        </div>
      </div>
    </>
  );
}