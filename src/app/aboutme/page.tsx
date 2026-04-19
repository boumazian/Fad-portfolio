"use client";
import { useTheme } from "@/context/ThemeContext";
import { Mail, MapPin, Brain, ArrowUpRight, ShieldCheck, Globe, Zap } from "lucide-react";

export default function AboutMe() {
  const { dark } = useTheme();

  return (
    <section className={`am-root ${dark ? "dk" : "lk"}`}>
      <style>{`
        .am-root {
          background: ${dark ? "#020205" : "#f8fafc"};
          min-height: 100vh;
          padding: 120px 1.5rem 80px;
        }

        .am-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          /* 3 أعمدة كيعطيو توازن أحسن من 4 ف هاد الحالة */
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 180px;
          gap: 1.25rem;
        }

        .b-card {
          background: ${dark ? "rgba(15, 15, 25, 0.4)" : "#fff"};
          border: 1px solid ${dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"};
          border-radius: 32px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          backdrop-filter: blur(10px);
        }

        /* Typography Balance */
        .b-title { 
          font-family: 'Syne', sans-serif; 
          font-size: 1.5rem; 
          font-weight: 800; 
          line-height: 1.1;
          margin-top: 0.5rem;
          letter-spacing: -1px;
          color: ${dark ? "#fff" : "#0f172a"};
        }

        .b-subtitle { 
          font-size: 0.75rem; 
          text-transform: uppercase; 
          letter-spacing: 2px; 
          color: #818cf8; 
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .b-text { 
          font-size: 0.9rem; 
          color: ${dark ? "#94a3b8" : "#64748b"}; 
          line-height: 1.6; 
          margin-top: 1rem;
        }

        /* Grid Spanning for Balance */
        .c-hero { grid-column: span 2; grid-row: span 2; } /* الكارت الكبيرة */
        .c-tall { grid-row: span 2; } /* الكارت الطويلة ف الجنب */
        .c-wide { grid-column: span 2; } /* كارت العرض */
        
        .c-contact { 
          background: linear-gradient(135deg, #6366f1, #a855f7); 
          color: #fff;
          border: none;
        }

        .stat-num { font-family: 'Syne', sans-serif; font-size: 3.5rem; font-weight: 900; color: #6366f1; line-height: 1; }

        /* Responsive Layout */
        @media (max-width: 1024px) {
          .am-container { grid-template-columns: repeat(2, 1fr); }
          .c-hero, .c-wide { grid-column: span 2; }
        }

        @media (max-width: 640px) {
          .am-container { 
            grid-template-columns: 1fr; 
            grid-auto-rows: auto;
          }
          .c-hero, .c-tall, .c-wide { grid-column: span 1; grid-row: span 1; }
          .b-card { padding: 1.5rem; }
        }
      `}</style>

      <div className="am-container">
        
        {/* HERO - عطيناها مساحة أكبر باش توازن الشوفة */}
        <div className="b-card c-hero">
          <div>
            <div className="b-subtitle"><Zap size={14}/> About Me</div>
            <h1 className="b-title" style={{fontSize: '2.8rem'}}>Architecting <br/> <span>Digital Future</span></h1>
            <p className="b-text">
              I don't just build websites; I architect high-performance digital ecosystems. 
              Bridging the gap between Cloud (AWS) and modern UX (Next.js) to transform 
              ambitious ideas into reality.
            </p>
          </div>
          <div style={{display: 'flex', gap: '10px'}}>
             <div style={{padding: '5px 15px', borderRadius: '100px', background: 'rgba(99,102,241,0.1)', color: '#818cf8', fontSize: '12px', fontWeight: 'bold'}}>Full Stack</div>
             <div style={{padding: '5px 15px', borderRadius: '100px', background: 'rgba(99,102,241,0.1)', color: '#818cf8', fontSize: '12px', fontWeight: 'bold'}}>Cloud Computing</div>
          </div>
        </div>

        {/* PROJECTS - رجعناها مربعة ومركزة */}
        <div className="b-card">
          <div className="b-subtitle">Impact</div>
          <div className="stat-num">10+</div>
          <p className="b-subtitle" style={{fontSize: '0.65rem'}}>Projects Delivered</p>
        </div>

        {/* MINDSET - رجعناها طويلة ف الجنب باش تسد الفراغ */}
        <div className="b-card c-tall">
          <div>
            <div className="b-subtitle"><Brain size={18}/> Mindset</div>
            <h2 className="b-title">Future-Proof Solutions</h2>
          </div>
          <p className="b-text">
            Engineering systems that scale, breathe, and adapt. My focus is on 
            reliability and clean architecture that stands the test of time.
          </p>
          <div style={{width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <ArrowUpRight size={20} color="#6366f1"/>
          </div>
        </div>

        {/* LOCATION - عريضة لتحت */}
        <div className="b-card c-wide">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
              <div className="b-subtitle">Based In</div>
              <h2 className="b-title" style={{fontSize: '2rem'}}>Meknès, Morocco</h2>
            </div>
            <MapPin color="#6366f1" size={32} />
          </div>
        </div>

        {/* CONTACT - اللون الموف كيكسر الروتين البصري */}
        <div className="b-card c-contact">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Mail size={28} />
            <ArrowUpRight size={20} />
          </div>
          <h2 className="b-title" style={{color: '#fff', fontSize: '1.8rem'}}>Work with me</h2>
        </div>

        {/* TRUST */}
        <div className="b-card">
          <div className="b-subtitle"><ShieldCheck size={18}/> Trust</div>
          <h2 className="b-title">Secure by Design</h2>
          <p className="b-text" style={{fontSize: '0.8rem', marginTop: '5px'}}>Ensuring top-tier data protection.</p>
        </div>

      </div>
    </section>
  );
}