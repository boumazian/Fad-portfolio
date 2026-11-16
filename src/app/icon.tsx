import { ImageResponse } from "next/og";

// Favicon: the "fb" brand mark (same as the navbar logo), generated at build time.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center",
          background: "linear-gradient(135deg, #7c3aed, #0d9488)", borderRadius: 16,
          color: "#fff", fontSize: 34, fontWeight: 800, letterSpacing: -1,
        }}
      >
        fb
      </div>
    ),
    { ...size }
  );
}
