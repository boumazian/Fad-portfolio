"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image"; // استعملنا Image ديال Next حيت أحسن
import { useTheme } from "@/context/ThemeContext";

const ROLES = ["Cloud Computing Engineer", "Full-Stack Developer", "Infrastructure Specialist", "UI/UX Enthusiast"];

export default function Hero({
  welcomeMessage = "Available for opportunities",
  welcomeLink = { href: "/aboutme", label: "About me →" },
  title = "Fadoua Boumazian",
  subtitle = "Technicienne spécialisée en infrastructure digitale & cloud computing, passionnée par le développement web moderne.",
  primaryButton = { href: "/Cv.pdf", label: "Download Resume" },
  secondaryButton = { href: "/ContactSection", label: "Get in touch" },
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
    if (!del && disp.length < role.length) tmr.current = setTimeout(() => setDisp(role.slice(0, disp.length + 1)), 72);
    else if (!del && disp.length === role.length) tmr.current = setTimeout(() => setDel(true), 2200);
    else if (del && disp.length > 0) tmr.current = setTimeout(() => setDisp(role.slice(0, disp.length - 1)), 38);
    else { setDel(false); setRi(i => (i + 1) % ROLES.length); }
    return () => { if (tmr.current) clearTimeout(tmr.current); };
  }, [disp, del, ri]);

  return (
    <>
      <style>{`
        .hero { min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;padding:7rem 2rem 5rem;background:var(--bg);transition:background .4s; }
        .hero::before { content:'';position:absolute;inset:0;pointer-events:none;
          background:radial-gradient(ellipse 55% 50% at 68% 22%,var(--glow),transparent 65%),
                     radial-gradient(ellipse 38% 38% at 12% 78%,var(--tsoft),transparent 65%); }
        .h-grid { position:absolute;inset:0;pointer-events:none;
          background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);
          background-size:54px 54px;
          mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%); }
        .orb { position:absolute;border-radius:50%;filter:blur(88px);pointer-events:none;animation:ofl 9s ease-in-out infinite; }
        .o1 { width:360px;height:360px;top:-70px;right:80px;background:radial-gradient(circle,rgba(124,58,237,.2),transparent 70%); }
        .o2 { width:240px;height:240px;bottom:60px;right:250px;background:radial-gradient(circle,rgba(13,148,136,.18),transparent 70%);animation-delay:-4s; }
        @keyframes ofl{0%,100%{transform:translateY(0)}50%{transform:translateY(-22px)}}
        .h-in { position:relative;z-index:10;max-width:1180px;margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center; }
        @media(max-width:900px){.h-in{grid-template-columns:1fr;text-align:center}.h-pc{order:-1;display:flex;justify-content:center}.h-bd,.h-cta,.h-st{justify-content:center!important}}
        .fu{opacity:0;transform:translateY(26px);transition:opacity .65s ease,transform .65s ease}
        .fu.in{opacity:1;transform:none}
        .d1{transition-delay:.08s}.d2{transition-delay:.2s}.d3{transition-delay:.33s}.d4{transition-delay:.46s}.d5{transition-delay:.6s}
        .h-badge{display:inline-flex;align-items:center;gap:8px;padding:5px 14px 5px 7px;border-radius:100px;border:1px solid var(--border);background:var(--soft);font-size:12.5px;color:var(--txt2);margin-bottom:1.2rem;}
        .h-dot{width:7px;height:7px;border-radius:50%;background:#4ade80;box-shadow:0 0 7px #4ade80;animation:dp 2s ease-in-out infinite;}
        @keyframes dp{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(.7)}}
        .h-badge a{color:var(--accent);text-decoration:none;font-weight:500;margin-left:2px;}
        .h-badge a:hover{text-decoration:underline;}
        .h-role{font-family:'Syne',sans-serif;font-size:clamp(.95rem,2vw,1.25rem);font-weight:600;color:var(--accent);height:1.85rem;display:flex;align-items:center;margin-bottom:.9rem;}
        .crsr{width:2px;height:1.1em;background:var(--accent);animation:bl 1s step-end infinite;display:inline-block;margin-left:2px;}
        @keyframes bl{0%,100%{opacity:1}50%{opacity:0}}
        .h-title{font-family:'Syne',sans-serif;font-size:clamp(2.5rem,5.2vw,4rem);font-weight:800;line-height:1.06;letter-spacing:-.03em;color:var(--txt);margin:0 0 1.1rem;}
        .h-sub{font-size:1rem;line-height:1.78;color:var(--txt2);max-width:470px;margin-bottom:2.5rem;font-weight:300;}
        .h-cta{display:flex;gap:.9rem;flex-wrap:wrap;margin-bottom:3rem;}
        .bp{display:inline-flex;align-items:center;gap:7px;padding:12px 24px;border-radius:11px;background:linear-gradient(135deg,#7c3aed,#0d9488);color:#fff;font-size:.9rem;font-weight:600;text-decoration:none;box-shadow:0 0 26px rgba(124,58,237,.32);transition:transform .22s,box-shadow .22s;}
        .bp:hover{transform:translateY(-2px);box-shadow:0 0 42px rgba(124,58,237,.52);}
        .bs{display:inline-flex;align-items:center;gap:7px;padding:12px 24px;border-radius:11px;border:1px solid var(--border);background:var(--soft);color:var(--txt);font-size:.9rem;font-weight:500;text-decoration:none;transition:all .22s;}
        .bs:hover{background:var(--card);transform:translateY(-2px);border-color:var(--accent);}
        .h-st{display:flex;gap:2rem;align-items:center;}
        .sn{font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:800;color:var(--txt);letter-spacing:-.02em;}
        .sl{font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:var(--txt3);}
        .sdiv{width:1px;height:30px;background:var(--border);}
        
        /* Photo & Border Rotation (From Code 1) */
        .h-pw{position:relative;width:310px;height:380px;}
        .h-ring{position:absolute;inset:-10px;border-radius:25px;padding:2px;background:conic-gradient(from 0deg,#7c3aed,#0d9488,#a855f7,#7c3aed);animation:rspin 7s linear infinite;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;z-index:1;pointer-events:none;}
        @keyframes rspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
        .h-frame{position:relative;width:100%;height:100%;border-radius:21px;overflow:hidden;z-index:2;border:1px solid var(--border);background:var(--card);}
        
        /* The Floating Chips (From Code 2 Style) */
        .h-chip{position:absolute;z-index:10;backdrop-filter:blur(18px);border-radius:12px;padding:12px;display:flex;align-items:center;gap:12px;border:1px solid var(--border);background:var(--card);box-shadow:var(--shadow);animation:cfl 5s ease-in-out infinite;}
        .hc1{bottom:-20px;left:-30px;} 
        .hc2{top:-20px;right:-30px;animation-delay:-2.5s;}
        @keyframes cfl{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        .ci-icon{width:40px;height:40px;border-radius:8px;background:linear-gradient(135deg,#7c3aed,#0d9488);display:flex;align-items:center;justify-content:center;color:white;font-size:1.2rem;flex-shrink:0;}
        .ct-title{font-size:12px;font-weight:bold;color:var(--txt);margin:0;}
        .cs-desc{font-size:10px;color:var(--txt3);margin:0;}
      `}</style>

      <section className={`hero ${t}`}>
        <div className="h-grid" />
        <div className="orb o1" /><div className="orb o2" />

        <div className="h-in">
          {/* LEFT CONTENT */}
          <div>
            <div className={`h-bd fu ${vis ? "in" : ""}`} style={{ display: "flex" }}>
              <span className="h-badge">
                <span className="h-dot" />
                {welcomeMessage}
                {welcomeLink && <a href={welcomeLink.href}>{welcomeLink.label}</a>}
              </span>
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
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {primaryButton.label}
              </a>
              <a href={secondaryButton.href} className="bs">
                {secondaryButton.label}
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>

            <div className={`h-st fu d5 ${vis ? "in" : ""}`}>
              <div><div className="sn">3+</div><div className="sl">Years</div></div>
              <div className="sdiv" />
              <div><div className="sn">10+</div><div className="sl">Projects</div></div>
              <div className="sdiv" />
              <div><div className="sn">6+</div><div className="sl">Technologies</div></div>
            </div>
          </div>

          {/* RIGHT PHOTO SECTION */}
          <div className="h-pc" style={{ display: "flex", justifyContent: "flex-end" }}>
            <div className="h-pw">
              {/* Rotating Ring from Code 1 */}
              <div className="h-ring" />
              
              <div className="h-frame">
                <Image 
                  src={photoSrc} 
                  alt={title}
                  fill
                  className="object-cover object-top hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Floating Badge 1 (Cloud Engineer) */}
              <div className="h-chip hc1">
                <div className="ci-icon">☁️</div>
                <div>
                  <p className="ct-title">Cloud Engineer</p>
                  <p className="cs-desc">Azure · AWS · OpenStack</p>
                </div>
              </div>

              {/* Floating Badge 2 (Open to work) */}
              <div className="h-chip hc2">
                <div className="ci-icon">✦</div>
                <div>
                  <p className="ct-title">Open to work</p>
                  <p className="cs-desc" style={{ color: "#4ade80", fontWeight: 'bold' }}>● Available now</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}