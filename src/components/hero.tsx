"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero({
  welcomeMessage = "Available for opportunities",
  welcomeLink = { href: "#contact", label: "Contact me →" },
  name = "Fadoua Boumazian",
  headline = "Full-Stack",
  headlineAccent = "Cloud Developer",
  subtitle = "I build web apps with Next.js & Prisma and automate their AWS infrastructure with CloudFormation.",
  primaryButton = { href: "/bo-cv.pdf", label: "Download Resume", download: "Fadoua-Boumazian-CV.pdf" },
  secondaryButton = { href: "#contact", label: "Get in touch" },
  photoSrc = "/111.png",
}) {
  const [vis, setVis] = useState(false);

  useEffect(() => { setVis(true); }, []);

  return (
    <>
      <style>{`
        .hero { min-height:100vh; display:flex; align-items:center; position:relative; overflow:hidden; padding:8rem 1.5rem 4rem; background:var(--bg); transition:background .4s; }

        /* Background decorations */
        .h-grid { position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px); background-size:54px 54px; mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%); }
        .orb { position:absolute; border-radius:50%; filter:blur(88px); pointer-events:none; animation:ofl 9s ease-in-out infinite; z-index: 1; }
        .o1 { width:360px; height:360px; top:-70px; right:80px; background:radial-gradient(circle,var(--glow),transparent 70%); }
        .o2 { width:240px; height:240px; bottom:60px; right:250px; background:radial-gradient(circle,var(--tsoft),transparent 70%); animation-delay:-4s; }
        @keyframes ofl{0%,100%{transform:translateY(0)}50%{transform:translateY(-22px)}}

        /* Grid layout */
        .h-in { position:relative; z-index:10; max-width:1180px; margin:0 auto; width:100%; display:grid; grid-template-columns: 1.2fr 0.8fr; gap:2rem; align-items:center; }

        /* Mobile/tablet: text (name, role, CTAs) first, smaller photo below */
        @media(max-width:968px){
          .hero { padding: 7rem 1rem 3rem; min-height: auto; }
          .h-in { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
          .h-pc { display: flex; justify-content: center; }
          .h-bd, .h-cta { justify-content: center !important; }
          .h-sub { margin-left: auto; margin-right: auto; }
          .h-pw { width: 240px !important; height: 290px !important; }
          .hc1 { left: -15px !important; bottom: -10px !important; transform: scale(0.9); }
        }
        @media(max-width:600px){
          .h-pw { width: 180px !important; height: 220px !important; }
          .h-pw .h-chip { display: none; } /* would cover the small photo */
        }

        /* Entrance animation */
        .fu { opacity:0; transform:translateY(20px); transition: 0.7s ease-out; }
        .fu.in { opacity:1; transform:none; }
        .d1 { transition-delay: 0.1s; } .d2 { transition-delay: 0.2s; } .d3 { transition-delay: 0.3s; }

        /* Content */
        .h-badge { display:inline-flex; align-items:center; gap:8px; padding:6px 14px 6px 10px; border-radius:100px; border:1px solid var(--border); background:var(--soft); font-size:13px; color:var(--txt2); margin-bottom:1.5rem; }
        .h-dot { width:8px; height:8px; border-radius:50%; background:var(--success); box-shadow:0 0 8px var(--success); animation:dp 2s infinite; }
        @keyframes dp { 0%,100%{opacity:1; transform:scale(1)} 50%{opacity:.5; transform:scale(0.8)} }
        .h-badge a { color:var(--accent-txt); text-decoration:none; font-weight:700; margin-left:4px; }
        .h-badge a:hover { text-decoration:underline; }

        .h-title { margin:0 0 1.5rem; }
        .h-hi { display:block; font-size: clamp(1.05rem, 2vw, 1.3rem); font-weight:700; color:var(--txt2); letter-spacing: 0.01em; margin-bottom:.75rem; }
        .h-hi strong { color:var(--txt); font-weight:800; }
        .h-head { display:block; font-family: var(--font-head), sans-serif; font-size: clamp(2.5rem, 6vw, 4.4rem); font-weight:800; line-height:1.06; letter-spacing:-0.035em; color:var(--txt); }
        .h-sub { font-size: 1.05rem; line-height:1.7; color:var(--txt2); max-width:540px; margin:0 0 2.5rem; }

        /* Buttons */
        .h-cta { display:flex; gap:1rem; flex-wrap:wrap; }
        .bp, .bs { display:inline-flex; align-items:center; gap:8px; min-height:48px; padding:0 28px; border-radius:12px; font-size:14px; text-decoration:none; transition: transform .3s, box-shadow .3s, background .3s, border-color .3s; }
        .bp { background:var(--grad); color:#fff; font-weight:700; box-shadow: var(--shadow-accent); }
        .bp:hover { transform: translateY(-3px); }
        .bs { border:1px solid var(--border); background:var(--soft); color:var(--txt); font-weight:600; }
        .bs:hover { background:var(--card-solid); transform: translateY(-3px); border-color:var(--accent); }

        /* Photo: the gradient border rotates its colors, the frame stays still */
        @property --h-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
        .h-pw { position:relative; width:320px; height:400px; transition: 0.5s ease; }
        .h-ring { position:absolute; inset:-10px; border-radius:30px; padding:3px; background:conic-gradient(from var(--h-angle),var(--accent),var(--accent-2),var(--accent-txt),var(--accent)); animation:hspin 6s linear infinite; -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0); -webkit-mask-composite:xor; mask-composite:exclude; z-index:1; }
        @keyframes hspin { to { --h-angle: 360deg; } }
        .h-frame { position:relative; width:100%; height:100%; border-radius:24px; overflow:hidden; z-index:2; border:1px solid var(--border); background:var(--card-solid); box-shadow: 0 20px 40px rgba(0,0,0,0.2); }

        /* Floating chip */
        .h-chip { position:absolute; z-index:10; backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:14px; padding:12px 14px; display:flex; align-items:center; gap:12px; border:1px solid var(--border); background:var(--overlay); box-shadow: var(--shadow); animation:cfl 6s ease-in-out infinite; }
        .hc1 { bottom:-20px; left:-30px; }
        @keyframes cfl { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-12px) } }
        .ci-icon { width:36px; height:36px; border-radius:10px; background:var(--grad); display:flex; align-items:center; justify-content:center; color:#fff; font-size:1.1rem; }
        .ct-title { font-size:13px; font-weight:800; color:var(--txt); margin:0; }
        .cs-desc { font-size:12px; color:var(--txt3); margin:0; }
      `}</style>

      <div className="hero">
        <div className="h-grid" />
        <div className="orb o1" /><div className="orb o2" />

        <div className="h-in">
          <div className="h-content">
            <div className={`h-bd fu ${vis ? "in" : ""}`}>
              <div className="h-badge">
                <span className="h-dot" aria-hidden="true" />
                {welcomeMessage}
                {welcomeLink && <a href={welcomeLink.href}>{welcomeLink.label}</a>}
              </div>
            </div>

            <h1 className={`h-title fu d1 ${vis ? "in" : ""}`}>
              <span className="h-hi">Hi, I&apos;m <strong>{name}</strong></span>{" "}
              <span className="h-head">{headline} <span className="grad">{headlineAccent}</span></span>
            </h1>

            <p className={`h-sub fu d2 ${vis ? "in" : ""}`}>{subtitle}</p>

            <div className={`h-cta fu d3 ${vis ? "in" : ""}`}>
              <a href={primaryButton.href} download={primaryButton.download} className="bp">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {primaryButton.label}
              </a>
              <a href={secondaryButton.href} className="bs">
                {secondaryButton.label}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

          <div className="h-pc">
            <div className="h-pw">
              <div className="h-ring" aria-hidden="true" />
              <div className="h-frame">
                <Image
                  src={photoSrc}
                  alt={`Illustrated portrait of ${name}`}
                  fill
                  sizes="(max-width: 600px) 180px, (max-width: 968px) 240px, 320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              <div className="h-chip hc1">
                <div className="ci-icon" aria-hidden="true">☁️</div>
                <div>
                  <p className="ct-title">Cloud Computing</p>
                  <p className="cs-desc">AWS · Azure · OpenStack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
