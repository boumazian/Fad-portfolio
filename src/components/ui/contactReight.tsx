"use client";
import { useState } from "react";
import { EMAIL } from "@/lib/site";

type Status = "" | "SUCCESS" | "ERROR";

export default function ContactReight() {
  const [status, setStatus] = useState<Status>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdawpgga", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .cr { padding: 2.5rem; }
        .cr-t { font-family: var(--font-syne), sans-serif; font-size: 1.25rem; font-weight: 800; color: var(--txt); margin: 0 0 1.4rem; }
        .cr-form { display: flex; flex-direction: column; gap: 1rem; }
        .cr-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media (max-width: 580px) { .cr-row { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .cr { padding: 2rem 1.5rem; } }
        .cr-f { display: flex; flex-direction: column; gap: 6px; }
        .cr-l { font-size: .82rem; font-weight: 600; color: var(--txt2); letter-spacing: .02em; }
        .cr-i, .cr-ta {
          min-height: 46px; padding: 11px 14px; border-radius: 12px; border: 1px solid var(--inpborder);
          background: var(--inp); color: var(--txt); font-size: .92rem; font-family: inherit; width: 100%;
          transition: border-color .2s, box-shadow .2s;
        }
        .cr-i::placeholder, .cr-ta::placeholder { color: var(--txt3); }
        .cr-i:focus, .cr-ta:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--soft); }
        .cr-ta { resize: vertical; min-height: 120px; }
        .cr-btn {
          min-height: 50px; padding: 0 16px; border-radius: 14px; border: none; cursor: pointer;
          background: var(--grad); color: #fff; font-size: .95rem; font-weight: 700; font-family: inherit;
          box-shadow: var(--shadow-accent); transition: transform .3s; margin-top: .2rem;
        }
        .cr-btn:hover:not(:disabled) { transform: translateY(-3px); }
        .cr-btn:disabled { opacity: .7; cursor: not-allowed; }
        .msg-status { font-size: .88rem; padding: 12px; border-radius: 10px; text-align: center; border: 1px solid; }
        .msg-success { color: var(--success-txt); background: var(--tsoft); border-color: var(--success); }
        .msg-error { color: var(--danger-txt); background: color-mix(in srgb, var(--danger-txt) 10%, transparent); border-color: var(--danger-txt); }
        .msg-error a { color: inherit; font-weight: 700; }
      `}</style>

      <div className="cr">
        <h3 className="cr-t">Send a Message</h3>

        <form className="cr-form" onSubmit={handleSubmit}>
          <div className="cr-row">
            <div className="cr-f">
              <label className="cr-l" htmlFor="cf-name">Your Name</label>
              <input id="cf-name" className="cr-i" type="text" name="name" autoComplete="name" required placeholder="Jane Doe" />
            </div>
            <div className="cr-f">
              <label className="cr-l" htmlFor="cf-email">Your Email</label>
              <input id="cf-email" className="cr-i" type="email" name="email" autoComplete="email" required placeholder="jane@company.com" />
            </div>
          </div>
          <div className="cr-f">
            <label className="cr-l" htmlFor="cf-subject">Subject</label>
            <input id="cf-subject" className="cr-i" type="text" name="subject" required placeholder="Job opportunity, project inquiry…" />
          </div>
          <div className="cr-f">
            <label className="cr-l" htmlFor="cf-message">Message</label>
            <textarea id="cf-message" className="cr-ta" name="message" required placeholder="Tell me a bit about it…" />
          </div>

          <button type="submit" className="cr-btn" disabled={loading}>
            {loading ? "Sending…" : "Send Message"}
          </button>

          <div aria-live="polite">
            {status === "SUCCESS" && (
              <p className="msg-status msg-success">Thanks! Your message has been sent. I&apos;ll reply soon.</p>
            )}
            {status === "ERROR" && (
              <p className="msg-status msg-error">
                Something went wrong. Please email me directly at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
