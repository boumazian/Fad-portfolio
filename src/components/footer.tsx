"use client";
import Link from "next/link";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const COL1 = [{href:"/",label:"Home"},{href:"/formation",label:"Formation"},{href:"/skills",label:"Skills"},{href:"/projects",label:"Projects"}];
const COL2 = [{href:"/aboutme",label:"About Me"},{href:"/ContactSection",label:"Contact"},{href:"/hobbiesForm",label:"Hobbies"}];

export default function Footer() {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";
  return (
    <>
      <style>{`
        .ft{background:var(--bg2);border-top:1px solid var(--border);padding:3rem 1.5rem 2rem;transition:background .4s,border-color .4s;}
        .ft-in{max-width:1100px;margin:0 auto;}
        .ft-top{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:2.5rem;margin-bottom:2.5rem;}
        @media(max-width:680px){.ft-top{grid-template-columns:1fr;}}
        .ft-name{font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:800;color:var(--txt);display:flex;align-items:center;gap:8px;margin-bottom:.65rem;}
        .ft-mark{width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#7c3aed,#0d9488);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;color:#fff;}
        .ft-desc{font-size:.84rem;color:var(--txt2);line-height:1.7;max-width:210px;}
        .ft-ch{font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;font-weight:700;color:var(--txt3);margin-bottom:.9rem;}
        .ft-links{display:flex;flex-direction:column;gap:.55rem;}
        .ft-links a{font-size:.86rem;color:var(--txt2);text-decoration:none;transition:color .2s;}
        .ft-links a:hover{color:var(--accent);}
        .ft-div{height:1px;background:var(--border);margin-bottom:1.4rem;}
        .ft-bot{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;}
        .ft-copy{font-size:.78rem;color:var(--txt3);}
        .ft-socs{display:flex;gap:.55rem;}
        .ft-sc{width:33px;height:33px;border-radius:9px;border:1px solid var(--border);background:var(--soft);display:flex;align-items:center;justify-content:center;color:var(--txt2);transition:color .2s,border-color .2s,transform .2s;}
        .ft-sc:hover{color:var(--accent);border-color:var(--accent);transform:translateY(-2px);}
      `}</style>
      <footer className={`ft ${t}`}>
        <div className="ft-in">
          <div className="ft-top">
            <div>
              <div className="ft-name"><span className="ft-mark">F</span>Fadoua<span className="grad">.</span></div>
              <p className="ft-desc">Technicienne spécialisée en infrastructure digitale & cloud computing.</p>
            </div>
            <div>
              <div className="ft-ch">Navigation</div>
              <div className="ft-links">{COL1.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}</div>
            </div>
            <div>
              <div className="ft-ch">More</div>
              <div className="ft-links">{COL2.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}</div>
            </div>
          </div>
          <div className="ft-div"/>
          <div className="ft-bot">
            <span className="ft-copy">© 2025 Fadoua Boumazian. All Rights Reserved.</span>
            <div className="ft-socs">
              <a href="https://www.facebook.com/profile.php?id=100089240119734" target="_blank" rel="noopener noreferrer" className="ft-sc"><Facebook size={14}/></a>
              <a href="https://www.instagram.com/fadouaboumazian?igsh=MWZxajh1aGgxZGt5bg==" target="_blank" rel="noopener noreferrer" className="ft-sc"><Instagram size={14}/></a>
              <a href="https://www.linkedin.com/in/fadoua-boumazian-6656a8298/" target="_blank" rel="noopener noreferrer" className="ft-sc"><Linkedin size={14}/></a>
              <a href="https://github.com/boumazian" target="_blank" rel="noopener noreferrer" className="ft-sc"><Github size={14}/></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}