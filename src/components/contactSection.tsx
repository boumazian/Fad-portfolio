import ContactLeft from "@/components/ui/contactLeft";
import ContactReight from "@/components/ui/contactReight";

export default function ContactSection() {
  return (
    <div className="cs">
      <style>{`
        .cs { padding: 120px 1.5rem; background: var(--bg); position: relative; overflow: hidden; }
        .cs::before {
          content: ''; position: absolute; width: 500px; height: 500px; top: 50%; right: -200px;
          background: radial-gradient(circle, var(--glow) 0%, transparent 70%); opacity: .4; pointer-events: none;
        }
        .cs-container { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; }
        .cs-w {
          border-radius: 32px; overflow: hidden; display: grid; grid-template-columns: 1fr 1.3fr;
          border: 1px solid var(--border-accent); background: var(--card); box-shadow: var(--shadow);
        }
        @media (max-width: 850px) { .cs-w { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .cs { padding: 90px 1rem; } .cs-w { border-radius: 26px; } }
      `}</style>

      <div className="cs-container">
        <h2 id="contact-title" className="sec-title">Let&apos;s <span className="grad">Connect</span></h2>
        <p className="sec-sub">Have a project in mind or want to discuss opportunities? I&apos;m just a message away!</p>

        <div className="cs-w">
          <ContactLeft />
          <ContactReight />
        </div>
      </div>
    </div>
  );
}
