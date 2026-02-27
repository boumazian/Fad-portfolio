"use client";
import { useTheme } from "@/context/ThemeContext";

export default function ContactReight() {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";
  return (
    <>
      <style>{`
        .cr{padding:2.5rem;}
        .cr-t{font-family:'Syne',sans-serif;font-size:1.25rem;font-weight:800;color:var(--txt);margin-bottom:1.4rem;}
        .cr-form{display:flex;flex-direction:column;gap:1rem;}
        .cr-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem;}
        @media(max-width:580px){.cr-row{grid-template-columns:1fr;}}
        .cr-f{display:flex;flex-direction:column;gap:5px;}
        .cr-l{font-size:.78rem;font-weight:600;color:var(--txt2);letter-spacing:.04em;}
        .cr-i,.cr-ta{padding:10px 13px;border-radius:9px;border:1px solid var(--inpborder);background:var(--inp);color:var(--txt);font-size:.88rem;font-family:inherit;outline:none;transition:border-color .2s,box-shadow .2s;width:100%;}
        .cr-i::placeholder,.cr-ta::placeholder{color:var(--txt3);}
        .cr-i:focus,.cr-ta:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--soft);}
        .cr-ta{resize:vertical;min-height:115px;}
        .cr-btn{padding:12px;border-radius:10px;border:none;cursor:pointer;background:linear-gradient(135deg,#7c3aed,#0d9488);color:#fff;font-size:.92rem;font-weight:700;font-family:inherit;box-shadow:0 0 22px rgba(124,58,237,.28);transition:transform .2s,box-shadow .2s;margin-top:.2rem;}
        .cr-btn:hover{transform:translateY(-2px);box-shadow:0 0 34px rgba(124,58,237,.48);}
      `}</style>
      <div className={`cr ${t}`}>
        <div className="cr-t">Send a Message</div>
        <form className="cr-form">
          <div className="cr-row">
            <div className="cr-f"><label className="cr-l">Your Name</label><input className="cr-i" type="text" placeholder="Karmin Locia"/></div>
            <div className="cr-f"><label className="cr-l">Your Email</label><input className="cr-i" type="email" placeholder="karmin@gmail.com"/></div>
          </div>
          <div className="cr-f"><label className="cr-l">Subject</label><input className="cr-i" type="text" placeholder="Project Inquiry"/></div>
          <div className="cr-f"><label className="cr-l">Message</label><textarea className="cr-ta" placeholder="Tell me about your project..."/></div>
          <button type="submit" className="cr-btn">Let&apos;s Talk ✦</button>
        </form>
      </div>
    </>
  );
}