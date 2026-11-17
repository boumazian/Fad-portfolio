import { Phone, Mail, MapPin } from "lucide-react";
import { EMAIL, SOCIALS } from "@/lib/site";

export default function ContactLeft() {
  return (
    <>
      <style>{`
        .cl { padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between; background: var(--grad-deep); min-height: 400px; color: #fff; }
        .cl-t { font-family: var(--font-head), sans-serif; font-size: 1.65rem; font-weight: 800; margin: 0 0 .5rem; }
        .cl-s { font-size: .92rem; color: rgba(255,255,255,.85); line-height: 1.7; margin: 0 0 2rem; }
        .cl-info { display: flex; flex-direction: column; gap: .6rem; list-style: none; padding: 0; margin: 0; }
        .cl-row { display: flex; align-items: center; gap: 12px; min-height: 44px; font-size: .92rem; color: #fff; text-decoration: none; overflow-wrap: anywhere; }
        a.cl-row:hover { text-decoration: underline; }
        .cl-ic { width: 34px; height: 34px; background: rgba(255,255,255,.18); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .cl-soc { display: flex; gap: .6rem; margin-top: 1.5rem; }
        .cl-a { width: 44px; height: 44px; border-radius: 12px; background: rgba(255,255,255,.16); display: flex; align-items: center; justify-content: center; color: #fff; transition: background .2s, transform .2s; }
        .cl-a:hover { background: rgba(255,255,255,.3); transform: translateY(-2px); }
        @media (max-width: 600px) { .cl { padding: 2rem 1.5rem; min-height: auto; } }
      `}</style>
      <div className="cl">
        <div>
          <h3 className="cl-t">Get In Touch</h3>
          <p className="cl-s">Feel free to reach out. I&apos;ll get back to you as soon as possible.</p>
          <ul className="cl-info">
            <li><a href="tel:+212719133915" className="cl-row"><span className="cl-ic" aria-hidden="true"><Phone size={15} /></span>+212 719 133 915</a></li>
            <li><a href={`mailto:${EMAIL}`} className="cl-row"><span className="cl-ic" aria-hidden="true"><Mail size={15} /></span>{EMAIL}</a></li>
            <li className="cl-row"><span className="cl-ic" aria-hidden="true"><MapPin size={15} /></span>Meknès, Morocco</li>
          </ul>
        </div>
        <div className="cl-soc">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="cl-a" aria-label={`${label} (opens in a new tab)`}>
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
