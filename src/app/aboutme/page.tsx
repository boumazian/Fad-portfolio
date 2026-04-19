"use client";
import { useTheme } from "@/context/ThemeContext";
import { Mail, MapPin, Brain, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

export default function AboutMe() {
  const { dark } = useTheme();

  return (
    <section className={`am-root ${dark ? "dk" : "lk"}`}>
      <style>{`
        .am-root {
          background: ${dark ? "#020205" : "#f8fafc"};
          min-height: 100vh;
          padding: 80px 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }

        .am-container {
          max-width: 1100px;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(160px, auto);
          gap: 1.25rem;
        }

        .b-card {
          background: ${dark ? "rgba(15, 15, 25, 0.6)" : "#ffffff"};
          border: 1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)"};
          border-radius: 28px;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          backdrop-filter: blur(12px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .b-card:hover {
          transform: translateY(-5px);
          border-color: ${dark ? "rgba(99, 102, 241, 0.4)" : "rgba(99, 102, 241, 0.2)"};
          box-shadow: 0 20px 40px ${dark ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.05)"};
        }

        .b-title { 
          font-family: 'Syne', sans-serif; 
          font-size: clamp(1.2rem, 4vw, 1.6rem); 
          font-weight: 800; 
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: ${dark ? "#fff" : "#0f172a"};
          margin-top: 10px;
        }

        .b-subtitle { 
          font-size: 0.7rem; 
          text-transform: uppercase; 
          letter-spacing: 1.5px; 
          color: #818cf8; 
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .b-text { 
          font-size: 0.95rem; 
          color: ${dark ? "#94a3b8" : "#64748b"}; 
          line-height: 1.5; 
          margin-top: 12px;
        }

        /* Spacing Logic */
        .c-hero { grid-column: span 2; grid-row: span 2; padding: 2.5rem; }
        .c-tall { grid-row: span 2; }
        .c-wide { grid-column: span 2; }
        
        .c-contact { 
          background: linear-gradient(135deg, #6366f1, #8b5cf6); 
          color: #fff;
          border: none;
          cursor: pointer;
        }
        .c-contact .b-title, .c-contact .b-subtitle { color: #fff; }

        .stat-num { 
          font-family: 'Syne', sans-serif; 
          font-size: 3.5rem; 
          font-weight: 900; 
          color: #6366f1; 
          margin: 10px 0;
        }

        .tag {
          padding: 4px 12px;
          border-radius: 100px;
          background: ${dark ? "rgba(99,102,241,0.15)" : "rgba(99,102,241,0.08)"};
          color: #818cf8;
          font-size: 11px;
          font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .am-container { grid-template-columns: repeat(2, 1fr); }
          .c-hero, .c-wide { grid-column: span 2; }
        }

        @media (max-width: 640px) {
          .am-root { padding: 40px 1rem; }
          .am-container { 
            grid-template-columns: 1fr; 
            grid-auto-rows: auto;
          }
          .c-hero, .c-tall, .c-wide { grid-column: span 1; grid-row: auto; }
          .b-card { padding: 1.5rem; min-height: 200px; }
          .stat-num { font-size: 2.8rem; }
        }
      `}</style>

      <div className="am-container">
        
        {/* HERO */}
        <div className="b-card c-hero">
          <div>
            <div className="b-subtitle"><Zap size={14}/> About Me</div>
            <h1 className="b-title" style={{fontSize: 'clamp(2rem, 5vw, 3rem)'}}>
              Architecting <br/> <span style={{color: '#6366f1'}}>Digital Future</span>
            </h1>
            <p className="b-text">
              I don't just build websites; I architect high-performance digital ecosystems. 
              Bridging the gap between Cloud infrastructure and modern UX to transform 
              ambitious ideas into reality.
            </p>
          </div>
          <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px'}}>
             <span className="tag">Full-Stack Developer</span>
             <span className="tag">Cloud Computing</span>
             <span className="tag">QA Manual Tester</span>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="b-card">
          <div>
            <div className="b-subtitle">Impact</div>
            <div className="stat-num">10+</div>
          </div>
          <p className="b-subtitle" style={{fontSize: '0.65rem', opacity: 0.8}}>Successful Projects</p>
        </div>

        {/* MINDSET */}
        <div className="b-card c-tall">
          <div>
            <div className="b-subtitle"><Brain size={18}/> Mindset</div>
            <h2 className="b-title">Future-Proof Solutions</h2>
            <p className="b-text">
             Building systems that scale and adapt. My focus is on 
  clean architecture that stands the test of time.
            </p>
          </div>
          <div style={{width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <ArrowUpRight size={22} color="#6366f1"/>
          </div>
        </div>

        {/* LOCATION */}
        <div className="b-card c-wide">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <div>
              <div className="b-subtitle">Based In</div>
              <h2 className="b-title" style={{fontSize: '1.8rem'}}>Meknès, Morocco</h2>
              <p className="b-text">Available for remote work worldwide.</p>
            </div>
            <div style={{background: '#6366f115', p: '12px', borderRadius: '15px', padding: '10px'}}>
              <MapPin color="#6366f1" size={28} />
            </div>
          </div>
        </div>

        {/* CONTACT */}
    {/* غ نزيدو "/" قبل "#contact" باش يرجع للصفحة الرئيسية عاد يقلب على السكسيون */}
<a href="/#contact" className="b-card c-contact" style={{ textDecoration: 'none' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '12px' }}>
      <Mail size={24} />
    </div>
    <ArrowUpRight size={20} />
  </div>
  <div>
    <div className="b-subtitle">Get in touch</div>
    <h2 className="b-title">Work with me</h2>
  </div>
</a>

        {/* TRUST */}
        <div className="b-card">
          <div>
            <div className="b-subtitle"><ShieldCheck size={18}/> Trust</div>
            <h2 className="b-title">Secure & Reliable</h2>
          </div>
          <p className="b-text" style={{fontSize: '0.85rem'}}>Ensuring top-tier data protection and performance.</p>
        </div>

      </div>
    </section>
  );
}