"use client";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function ContactReight() {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";
  
  // States لتدبير الحالة
  const [status, setStatus] = useState(""); 
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  // التعديل هنا: كنقولو ليه بلي e.currentTarget هو الـ Form
  const form = e.currentTarget; 
  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xdawpgga", { 
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset(); // دابا غاتخدم reset() بلا مشاكل
    } else {
      setStatus("ERROR");
    }
  } catch (error) {
    setStatus("ERROR");
  } finally {
    setLoading(false);
  }
};

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
        .cr-i:focus,.cr-ta:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--soft);}
        .cr-ta{resize:vertical;min-height:115px;}
        .cr-btn{padding:12px;border-radius:10px;border:none;cursor:pointer;background:linear-gradient(135deg,#7c3aed,#0d9488);color:#fff;font-size:.92rem;font-weight:700;font-family:inherit;transition:transform .2s;margin-top:.2rem;}
        .cr-btn:disabled{opacity:0.7;cursor:not-allowed;}
        .msg-status{font-size:0.85rem;padding:10px;border-radius:8px;margin-top:10px;text-align:center;}
        .msg-success{background:rgba(13,148,136,0.1);color:#0d9488;border:1px solid #0d9488;}
        .msg-error{background:rgba(239,68,68,0.1);color:#ef4444;border:1px solid #ef4444;}
      `}</style>
      
      <div className={`cr ${t}`}>
        <div className="cr-t">Send a Message</div>
        
        <form className="cr-form" onSubmit={handleSubmit}>
          <div className="cr-row">
            <div className="cr-f">
              <label className="cr-l">Your Name</label>
              <input className="cr-i" type="text" name="name" required placeholder="Fadoua B."/>
            </div>
            <div className="cr-f">
              <label className="cr-l">Your Email</label>
              <input className="cr-i" type="email" name="email" required placeholder="email@example.com"/>
            </div>
          </div>
          <div className="cr-f">
            <label className="cr-l">Subject</label>
            <input className="cr-i" type="text" name="subject" required placeholder="Project Inquiry"/>
          </div>
          <div className="cr-f">
            <label className="cr-l">Message</label>
            <textarea className="cr-ta" name="message" required placeholder="Tell me more..."/>
          </div>
          
          <button type="submit" className="cr-btn" disabled={loading}>
            {loading ? "Sending..." : "Let's Talk ✦"}
          </button>

          {status === "SUCCESS" && (
            <div className="msg-status msg-success">✅ Thanks! Message sent automatically.</div>
          )}
          {status === "ERROR" && (
            <div className="msg-status msg-error">❌ Oops! Something went wrong.</div>
          )}
        </form>
      </div>
    </>
  );
}