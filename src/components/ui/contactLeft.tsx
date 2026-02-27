"use client";
import { Phone, Mail, MapPin, Github, Facebook, Instagram, Linkedin } from "lucide-react";

export default function ContactLeft() {
  return (
    <>
      <style>{`
        .cl{padding:2.5rem;display:flex;flex-direction:column;justify-content:space-between;background:linear-gradient(145deg,#7c3aed,#0d9488);min-height:400px;}
        .cl-t{font-family:'Syne',sans-serif;font-size:1.65rem;font-weight:800;color:#fff;margin-bottom:.5rem;}
        .cl-s{font-size:.86rem;color:rgba(255,255,255,.75);line-height:1.7;margin-bottom:2rem;}
        .cl-info{display:flex;flex-direction:column;gap:.85rem;}
        .cl-row{display:flex;align-items:center;gap:10px;font-size:.86rem;color:rgba(255,255,255,.9);}
        .cl-ic{width:30px;height:30px;background:rgba(255,255,255,.18);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .cl-soc{display:flex;gap:.65rem;margin-top:1.5rem;}
        .cl-a{width:34px;height:34px;border-radius:9px;background:rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;color:#fff;transition:background .2s,transform .2s;}
        .cl-a:hover{background:rgba(255,255,255,.32);transform:translateY(-2px);}
      `}</style>
      <div className="cl">
        <div>
          <div className="cl-t">Get In Touch</div>
          <div className="cl-s">Feel free to reach out — I'll get back to you as soon as possible.</div>
          <div className="cl-info">
            <div className="cl-row"><span className="cl-ic"><Phone size={13}/></span>+212 719 133 915</div>
            <div className="cl-row"><span className="cl-ic"><Mail size={13}/></span>studentfadoua@gmail.com</div>
            <div className="cl-row"><span className="cl-ic"><MapPin size={13}/></span>Meknes, Morocco</div>
          </div>
        </div>
        <div className="cl-soc">
          <a href="https://www.facebook.com/profile.php?id=100089240119734" target="_blank" rel="noopener noreferrer" className="cl-a"><Facebook size={15}/></a>
          <a href="https://www.instagram.com/fadouaboumazian?igsh=MWZxajh1aGgxZGt5bg==" target="_blank" rel="noopener noreferrer" className="cl-a"><Instagram size={15}/></a>
          <a href="https://www.linkedin.com/in/fadoua-boumazian-6656a8298/" target="_blank" rel="noopener noreferrer" className="cl-a"><Linkedin size={15}/></a>
          <a href="https://github.com/boumazian" target="_blank" rel="noopener noreferrer" className="cl-a"><Github size={15}/></a>
        </div>
      </div>
    </>
  );
}