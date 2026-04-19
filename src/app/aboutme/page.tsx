"use client";
import { useTheme } from "@/context/ThemeContext";
import { Mail, MapPin, Brain, ArrowUpRight, ShieldCheck, Globe, Cloud } from "lucide-react";

export default function AboutMe() {
  const { dark } = useTheme();

  return (
    <section className={`am-root ${dark ? "dk" : "lk"}`}>
      <style>{`
        .am-root {
          background: ${dark ? "#030308" : "#f1f5f9"};
          min-height: 100vh;
          padding: 120px 1.5rem 80px;
          position: relative;
        }

        .am-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          /* نقصنا الارتفاع باش الكارطات يجيو مجموعين */
          grid-auto-rows: minmax(140px, auto); 
          gap: 1rem;
        }

        .b-card {
          background: ${dark ? "rgba(15, 15, 25, 0.7)" : "#fff"};
          border: 1px solid ${dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"};
          border-radius: 28px; /* صغرنا الـ radius شوية باش يجي أنيق */
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.4s ease;
        }

        /* تصحيح العناوين باش ميبقاش الخط كبير بزاف */
        .b-title { 
          font-family: 'Syne', sans-serif; 
          font-size: 1.6rem; /* صغرنا هادي */
          font-weight: 800; 
          line-height: 1.2;
          margin: 0.5rem 0;
          letter-spacing: -1px;
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
          font-size: 0.85rem; 
          color: ${dark ? "#94a3b8" : "#475569"}; 
          line-height: 1.5; 
        }

        /* التحكم في أحجام الكارطات */
        .c-main { grid-column: span 2; grid-row: span 2; }
        .c-wide { grid-column: span 2; }
        .c-tall { grid-row: span 2; }

        .c-contact { background: linear-gradient(135deg, #6366f1, #a855f7); color: #fff; }

        .stat-num { font-family: 'Syne', sans-serif; font-size: 2.5rem; font-weight: 900; color: #6366f1; }

        @media (max-width: 900px) {
          .am-container { grid-template-columns: repeat(2, 1fr); }
          .c-main, .c-wide { grid-column: span 2; }
        }
      `}</style>

      <div className="am-container">
        
        {/* Main Bio */}
        <div className="b-card c-main">
          <div>
            <div className="b-subtitle">About Me</div>
            <h1 className="b-title" style={{fontSize: '2.2rem'}}>Architecting <br/> <span style={{color: '#6366f1'}}>Digital Future</span></h1>
          </div>
          <p className="b-text">
            I don't just build websites; I architect high-performance digital ecosystems. With a deep expertise in Cloud Infrastructure (AWS) and a passion for modern frontend elegance using Next.js, I bridge the gap between complex backend systems and intuitive user experiences. My mission is to engineer scalable, secure, and future-proof solutions that transform ambitious ideas into digital reality.
          </p>
        </div>

        {/* 10+ Projects - صغرنا الكارط */}
        <div className="b-card" style={{textAlign: 'center', justifyContent: 'center'}}>
          <div className="stat-num">10+</div>
          <div className="b-subtitle">Projects Delivered</div>
        </div>

        {/* Location */}
        <div className="b-card c-wide">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
              <div className="b-subtitle">Location</div>
              <h2 className="b-title" style={{fontSize: '1.4rem'}}>Meknès, Morocco</h2>
            </div>
            <MapPin color="#6366f1" size={24} />
          </div>
        </div>

        {/* Mindset */}
        <div className="b-card c-tall">
          <div>
            <div className="b-subtitle"><Brain size={14}/> Mindset</div>
            <h2 className="b-title">Future-Proof Solutions</h2>
          </div>
          <p className="b-text">
            I engineering systems that scale, breathe, and adapt. My goal is to transform ideas into robust digital realities.
          </p>
        </div>

        {/* Contact */}
        <div className="b-card c-contact">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Mail size={24} />
            <ArrowUpRight size={20} />
          </div>
          <h2 className="b-title" style={{color: '#fff', fontSize: '1.2rem'}}>Work with me</h2>
        </div>

        {/* Tech */}
        <div className="b-card">
          <div className="b-subtitle"><ShieldCheck size={14}/> Trust</div>
          <h2 className="b-title" style={{fontSize: '1.1rem'}}>Secure by Design</h2>
        </div>

      </div>
    </section>
  );
}