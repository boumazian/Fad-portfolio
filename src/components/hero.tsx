"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const ROLES = [
  "Full-Stack Developer",
  "Cloud Infrastructure Specialist",
  "QA Manual Tester",
  "UI/UX Enthusiast"
];

export default function Hero({
  welcomeMessage = "Available for opportunities",
  welcomeLink = { href: "#contact", label: "Contact me →" },
  title = "Fadoua Boumazian",
  subtitle = "I am a Full-Stack Developer with a specialized background in Cloud Computing & Digital Infrastructure. My expertise lies in building modern web applications while leveraging AWS to ensure scalable and robust deployments. Currently, I am honing my eye for detail as a Manual QA Tester.",
  primaryButton = { href: "/bo-cv.pdf", label: "Download Resume" },
  secondaryButton = { href: "#contact", label: "Get in touch" },
  photoSrc = "/111.png",
}) {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";
  const [ri, setRi] = useState(0);
  const [disp, setDisp] = useState("");
  const [del, setDel] = useState(false);
  const [vis, setVis] = useState(false);
  const tmr = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  useEffect(() => { setVis(true); }, []);

  useEffect(() => {
    const role = ROLES[ri];
    if (!del && disp.length < role.length) {
      tmr.current = setTimeout(() => setDisp(role.slice(0, disp.length + 1)), 72);
    } else if (!del && disp.length === role.length) {
      tmr.current = setTimeout(() => setDel(true), 2200);
    } else if (del && disp.length > 0) {
      tmr.current = setTimeout(() => setDisp(role.slice(0, disp.length - 1)), 38);
    } else {
      setDel(false);
      setRi((i) => (i + 1) % ROLES.length);
    }
    return () => { if (tmr.current) clearTimeout(tmr.current); };
  }, [disp, del, ri]);

  return (
    <>
      <style>{`
        .hero { min-height:100vh; display:flex; align-items:center; position:relative; overflow:hidden; padding:8rem 1.5rem 4rem; background:var(--bg); transition:background .4s; }
        
        /* Background Decorations */
        .h-grid { position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px); background-size:54px 54px; mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%); }
        .orb { position:absolute; border-radius:50%; filter:blur(88px); pointer-events:none; animation:ofl 9s ease-in-out infinite; z-index: 1;}
        .o1 { width:360px; height:360px; top:-70px; right:80px; background:radial-gradient(circle,rgba(124,58,237,.2),transparent 70%); }
        .o2 { width:240px; height:240px; bottom:60px; right:250px; background:radial-gradient(circle,rgba(13,148,136,.18),transparent 70%); animation-delay:-4s; }
        @keyframes ofl{0%,100%{transform:translateY(0)}50%{transform:translateY(-22px)}}

        /* Grid Layout */
        .h-in { position:relative; z-index:10; max-width:1180px; margin:0 auto; width:100%; display:grid; grid-template-columns: 1.2fr 0.8fr; gap:2rem; align-items:center; }

        /* RESPONSIVE LOGIC */
        @media(max-width:968px){
          .hero { padding: 7rem 1rem 3rem; }
          .h-in { grid-template-columns: 1fr; text-align: center; gap: 3.5rem; }
          .h-pc { order: -1; display: flex; justify-content: center; margin-bottom: 1rem; }
          .h-bd, .h-cta, .h-role { justify-content: center !important; }
          .h-sub { margin-left: auto; margin-right: auto; }
          .h-pw { width: 260px !important; height: 320px !important; }
          .hc1 { left: -15px !important; bottom: -10px !important; transform: scale(0.85); }
          .hc2 { right: -15px !important; top: -10px !important; transform: scale(0.85); }
        }

        /* Animations */
        .fu { opacity:0; transform:translateY(20px); transition: 0.7s ease-out; }
        .fu.in { opacity:1; transform:none; }
        .d1 { transition-delay: 0.1s; } .d2 { transition-delay: 0.2s; } .d3 { transition-delay: 0.3s; } .d4 { transition-delay: 0.4s; }

        /* Content Styles */
        .h-badge { display:inline-flex; align-items:center; gap:8px; padding:6px 14px 6px 8px; border-radius:100px; border:1px solid var(--border); background:var(--soft); font-size:13px; color:var(--txt2); margin-bottom:1.5rem; }
        .h-dot { width:8px; height:8px; border-radius:50%; background:#4ade80; box-shadow:0 0 8px #4ade80; animation:dp 2s infinite; }
        @keyframes dp { 0%,100%{opacity:1; transform:scale(1)} 50%{opacity:.5; transform:scale(0.8)} }
        .h-badge a { color:var(--accent); text-decoration:none; font-weight:600; margin-left:4px; }

        .h-role { font-size: clamp(1rem, 2vw, 1.25rem); font-weight:700; color:var(--accent); min-height:1.5em; display:flex; align-items:center; margin-bottom:1rem; letter-spacing: 0.02em; }
        .crsr { width:2px; height:1.2em; background:var(--accent); animation:bl 1s step-end infinite; margin-left:4px; }
        @keyframes bl { 50% { opacity: 0; } }

        .h-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight:900; line-height:1.05; letter-spacing:-0.04em; color:var(--txt); margin-bottom:1.5rem; }
        .grad { background: linear-gradient(135deg, #7c3aed, #0d9488); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .h-sub { font-size: 1.05rem; line-height:1.7; color:var(--txt2); max-width:540px; margin-bottom:2.5rem; opacity: 0.8; }

        /* Buttons */
        .h-cta { display:flex; gap:1rem; flex-wrap:wrap; }
        .bp { display:inline-flex; align-items:center; gap:8px; padding:14px 28px; border-radius:12px; background:linear-gradient(135deg,#7c3aed,#0d9488); color:white; font-size:14px; font-weight:700; text-decoration:none; transition: 0.3s; box-shadow: 0 10px 20px -10px rgba(124,58,237,0.5); }
        .bp:hover { transform: translateY(-3px); box-shadow: 0 15px 30px -10px rgba(124,58,237,0.6); }
        .bs { display:inline-flex; align-items:center; gap:8px; padding:14px 28px; border-radius:12px; border:1px solid var(--border); background:var(--soft); color:var(--txt); font-size:14px; font-weight:600; text-decoration:none; transition: 0.3s; }
        .bs:hover { background:var(--card); transform: translateY(-3px); border-color:var(--accent); }

        /* Photo Styles */
        .h-pw { position:relative; width:320px; height:400px; transition: 0.5s ease; }
        .h-ring { position:absolute; inset:-12px; border-radius:28px; padding:3px; background:conic-gradient(from 0deg,#7c3aed,#0d9488,#a855f7,#7c3aed); animation:rspin 8s linear infinite; -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0); -webkit-mask-composite:xor; mask-composite:exclude; z-index:1; }
        @keyframes rspin { from { transform:rotate(0) } to { transform:rotate(360deg) } }
        .h-frame { position:relative; width:100%; height:100%; border-radius:24px; overflow:hidden; z-index:2; border:1px solid var(--border); background:var(--card); box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
        
        /* Chips */
        .h-chip { position:absolute; z-index:10; backdrop-filter:blur(12px); border-radius:14px; padding:12px; display:flex; align-items:center; gap:12px; border:1px solid var(--border); background:rgba(var(--card-rgb), 0.8); box-shadow: 0 10px 25px rgba(0,0,0,0.1); animation:cfl 6s ease-in-out infinite; }
        .hc1 { bottom:-20px; left:-30px; } 
        .hc2 { top:-20px; right:-30px; animation-delay:-3s; }
        @keyframes cfl { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-12px) } }
        .ci-icon { width:36px; height:36px; border-radius:10px; background:linear-gradient(135deg,#7c3aed,#0d9488); display:flex; align-items:center; justify-content:center; color:white; font-size:1.1rem; }
        .ct-title { font-size:12px; font-weight:800; color:var(--txt); margin:0; }
        .cs-desc { font-size:10px; color:var(--txt3); margin:0; }
      `}</style>

      <section className={`hero ${t}`}>
        <div className="h-grid" />
        <div className="orb o1" /><div className="orb o2" />

        <div className="h-in">
          {/* CONTENT SECTION */}
          <div className="h-content">
            <div className={`h-bd fu ${vis ? "in" : ""}`}>
              <div className="h-badge">
                <span className="h-dot" />
                {welcomeMessage}
                {welcomeLink && <a href={welcomeLink.href}>{welcomeLink.label}</a>}
              </div>
            </div>

            <div className={`h-role fu d1 ${vis ? "in" : ""}`}>
              {disp}<span className="crsr" />
            </div>

            <h1 className={`h-title fu d2 ${vis ? "in" : ""}`}>
              Hello, I&apos;m <span className="grad">{title}</span>
            </h1>

            <p className={`h-sub fu d3 ${vis ? "in" : ""}`}>{subtitle}</p>

            <div className={`h-cta fu d4 ${vis ? "in" : ""}`}>
              <a href={primaryButton.href} className="bp">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {primaryButton.label}
              </a>
              <a href={secondaryButton.href} className="bs">
                {secondaryButton.label}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

          {/* PHOTO SECTION */}
          <div className="h-pc">
            <div className="h-pw">
              <div className="h-ring" />
              <div className="h-frame">
                <Image 
                  src={photoSrc} 
                  alt={title}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="h-chip hc1">
                <div className="ci-icon">☁️</div>
                <div>
                  <p className="ct-title">Cloud Computing</p>
                  <p className="cs-desc">AWS · Azure · Openstack</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="h-chip hc2">
                <div className="ci-icon">✦</div>
                <div>
                  <p className="ct-title">Open to work</p>
                  <p className="cs-desc" style={{ color: "#4ade80", fontWeight: '700' }}>● Available Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}