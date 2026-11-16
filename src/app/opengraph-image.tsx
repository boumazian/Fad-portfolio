import { ImageResponse } from "next/og";

// Social preview (LinkedIn, WhatsApp, X, Slack…), generated at build time.
export const alt = "Fadoua Boumazian — Full-Stack Cloud Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STACK = ["Next.js", "TypeScript", "AWS", "CloudFormation", "Shopify"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          padding: "64px 72px", color: "#eeeaff",
          backgroundColor: "#07070e",
          backgroundImage: "radial-gradient(circle at 85% 15%, rgba(124,58,237,0.45), transparent 45%), radial-gradient(circle at 10% 95%, rgba(13,148,136,0.35), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64, height: 64, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center",
              background: "linear-gradient(135deg, #7c3aed, #0d9488)", color: "#fff", fontSize: 32, fontWeight: 800,
            }}
          >
            fb
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "rgba(238,234,255,0.72)" }}>fad-bo.netlify.app</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 40, color: "rgba(238,234,255,0.8)", marginBottom: 10 }}>Fadoua Boumazian</div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, letterSpacing: -3, lineHeight: 1.05 }}>
            Full-Stack&nbsp;<span style={{ color: "#a78bfa" }}>Cloud Developer</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "rgba(238,234,255,0.72)", marginTop: 22 }}>
            I build web apps with Next.js and automate their AWS infrastructure.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {STACK.map((s) => (
              <div
                key={s}
                style={{
                  display: "flex", padding: "9px 18px", borderRadius: 100, fontSize: 22,
                  background: "rgba(124,58,237,0.18)", border: "1px solid rgba(167,139,250,0.4)", color: "#ddd6fe",
                }}
              >
                {s}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 24, color: "#4ade80", flexShrink: 0, whiteSpace: "nowrap" }}>
            <div style={{ width: 12, height: 12, borderRadius: 6, background: "#4ade80" }} />
            Open to opportunities
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
