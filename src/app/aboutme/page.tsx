import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/site";
import { Mail, MapPin, Brain, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "About Fadoua Boumazian: Full-Stack Cloud Developer based in Meknès, Morocco, with 2+ years of professional experience and open to remote work.",
  alternates: { canonical: "/aboutme" },
  openGraph: { title: "About | Fadoua Boumazian", description: "About Fadoua Boumazian: Full-Stack Cloud Developer based in Meknès, Morocco, with 2+ years of professional experience and open to remote work.", url: "/aboutme", images: [OG_IMAGE] },
};

export default function AboutMe() {
  return (
    <section className="am-root" aria-labelledby="am-title">
      <style>{`
        .am-root { background: var(--bg); min-height: 100vh; padding: 120px 1.5rem 80px; display: flex; align-items: center; justify-content: center; }

        .am-container {
          max-width: 1100px; width: 100%;
          display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: minmax(160px, auto);
          grid-auto-flow: dense; gap: 1.25rem;
        }

        .b-card {
          background: var(--card); border: 1px solid var(--border); border-radius: 28px; padding: 1.75rem;
          display: flex; flex-direction: column; justify-content: space-between; position: relative;
          backdrop-filter: blur(12px); transition: transform .3s cubic-bezier(0.4, 0, 0.2, 1), border-color .3s, box-shadow .3s; overflow: hidden;
        }
        .b-card:hover { transform: translateY(-5px); border-color: var(--border-accent); box-shadow: var(--shadow); }

        .b-title { font-family: var(--font-head), sans-serif; font-size: clamp(1.2rem, 4vw, 1.6rem); font-weight: 800; line-height: 1.2; letter-spacing: -0.5px; color: var(--txt); margin: 10px 0 0; }
        .b-subtitle { font-size: .75rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--accent-txt); font-weight: 700; display: flex; align-items: center; gap: 6px; margin: 0; }
        .b-text { font-size: .95rem; color: var(--txt2); line-height: 1.6; margin: 12px 0 0; }

        .c-hero { grid-column: span 2; grid-row: span 2; padding: 2.5rem; }
        .c-tall { grid-row: span 2; }
        .c-wide { grid-column: span 2; }

        .c-contact { background: var(--grad-deep); color: #fff; border: none; text-decoration: none; }
        .c-contact .b-title, .c-contact .b-subtitle { color: #fff; }
        .c-contact:hover { box-shadow: var(--shadow-accent); }

        .stat-num { font-family: var(--font-head), sans-serif; font-size: 3.5rem; font-weight: 800; letter-spacing: -0.03em; margin: 10px 0; }

        .tags { display: flex; gap: 8px; flex-wrap: wrap; margin: 20px 0 0; padding: 0; list-style: none; }
        .tag { padding: 5px 12px; border-radius: 100px; background: var(--soft); color: var(--accent-txt); font-size: 12px; font-weight: 600; }
        .icon-box { width: 48px; height: 48px; border-radius: 14px; background: var(--soft); color: var(--accent-txt); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

        @media (max-width: 1024px) {
          .am-container { grid-template-columns: repeat(2, 1fr); }
          .c-hero, .c-wide { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          .am-root { padding: 110px 1rem 60px; }
          .am-container { grid-template-columns: 1fr; grid-auto-rows: auto; }
          .c-hero, .c-tall, .c-wide { grid-column: span 1; grid-row: auto; }
          .b-card { padding: 1.5rem; min-height: 180px; }
          .stat-num { font-size: 2.8rem; }
        }
      `}</style>

      <div className="am-container">
        {/* INTRO */}
        <div className="b-card c-hero">
          <div>
            <p className="b-subtitle"><Zap size={14} aria-hidden="true" /> About Me</p>
            <h1 id="am-title" className="b-title" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              Architecting <br /> <span className="grad">Digital Future</span>
            </h1>
            <p className="b-text">
              I don&apos;t just build websites; I architect high-performance digital ecosystems.
              Bridging the gap between Cloud infrastructure and modern UX to transform
              ambitious ideas into reality.
            </p>
          </div>
          <ul className="tags">
            <li className="tag">Full-Stack Developer</li>
            <li className="tag">Cloud Computing</li>
            <li className="tag">QA Manual Tester</li>
          </ul>
        </div>

        {/* EXPERIENCE — Terrab Consulting Innovation, Aug 2024 → present */}
        <div className="b-card">
          <div>
            <p className="b-subtitle">Experience</p>
            <div className="stat-num grad">2+</div>
          </div>
          <p className="b-subtitle" style={{ fontSize: ".7rem" }}>Years of Professional Experience</p>
        </div>

        {/* MINDSET */}
        <div className="b-card c-tall">
          <div>
            <p className="b-subtitle"><Brain size={18} aria-hidden="true" /> Mindset</p>
            <h2 className="b-title">Future-Proof Solutions</h2>
            <p className="b-text">
              Building systems that scale and adapt. My focus is on
              clean architecture that stands the test of time.
            </p>
          </div>
          <div className="icon-box" aria-hidden="true"><ArrowUpRight size={22} /></div>
        </div>

        {/* LOCATION */}
        <div className="b-card c-wide">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
            <div>
              <p className="b-subtitle">Based In</p>
              <h2 className="b-title" style={{ fontSize: "1.8rem" }}>Meknès, Morocco</h2>
              <p className="b-text">Available for remote work worldwide.</p>
            </div>
            <div className="icon-box" aria-hidden="true"><MapPin size={26} /></div>
          </div>
        </div>

        {/* CONTACT */}
        <a href="/#contact" className="b-card c-contact">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ background: "rgba(255,255,255,0.2)", padding: "10px", borderRadius: "12px", display: "flex" }} aria-hidden="true">
              <Mail size={24} />
            </div>
            <ArrowUpRight size={20} aria-hidden="true" />
          </div>
          <div>
            <p className="b-subtitle">Get in touch</p>
            <h2 className="b-title">Work with me</h2>
          </div>
        </a>

        {/* TRUST */}
        <div className="b-card c-wide">
          <div>
            <p className="b-subtitle"><ShieldCheck size={18} aria-hidden="true" /> Trust</p>
            <h2 className="b-title">Secure &amp; Reliable</h2>
          </div>
          <p className="b-text" style={{ fontSize: ".9rem" }}>Ensuring top-tier data protection and performance.</p>
        </div>
      </div>
    </section>
  );
}
