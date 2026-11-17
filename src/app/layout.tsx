import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";

// Headings: clean, bold, highly legible. Body text stays DM Sans.
const jakarta = Plus_Jakarta_Sans({ variable: "--font-head", subsets: ["latin"], weight: ["600","700","800"] });
const dmSans = DM_Sans({ variable: "--font-dm", subsets: ["latin"], weight: ["300","400","500","600"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  keywords: ["Fadoua Boumazian", "Full-Stack Developer", "Cloud Developer", "AWS", "Next.js", "React", "TypeScript", "Shopify", "Morocco", "Meknès"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07070e" },
    { media: "(prefers-color-scheme: light)", color: "#f7f6ff" },
  ],
};

// Runs before first paint: saved choice → OS preference → dark. Prevents a theme flash.
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`;

/*
 * Design tokens — the single source of truth for colors.
 * Components use var(--…) only; no hard-coded palette colors.
 * Text tokens are chosen for WCAG AA contrast (≥4.5:1) on --bg and --card.
 */
const THEME_CSS = `
  *,*::before,*::after{box-sizing:border-box;}

  :root,[data-theme="dark"]{
    color-scheme:dark;
    --bg:#07070e;--bg2:#0d0d1a;
    --card:rgba(16,16,30,0.72);--card-solid:#10101e;
    --border:rgba(255,255,255,0.08);--border-accent:rgba(124,58,237,0.3);
    --txt:#eeeaff;--txt2:rgba(238,234,255,0.72);--txt3:rgba(238,234,255,0.58);
    --accent:#7c3aed;--accent-2:#0d9488;--accent-txt:#a78bfa;
    --grad:linear-gradient(135deg,#7c3aed,#0d9488);
    --grad-deep:linear-gradient(150deg,#4c1d95 0%,#5b21b6 45%,#115e59 100%); /* white text on top passes AA */
    --grad-text:linear-gradient(120deg,#a78bfa 0%,#5eead4 100%); /* ≥7:1 on --bg */
    --glow:rgba(124,58,237,0.32);--soft:rgba(124,58,237,0.12);--tsoft:rgba(13,148,136,0.12);
    --pill:rgba(255,255,255,0.06);--pilltxt:rgba(238,234,255,0.82);
    --inp:rgba(255,255,255,0.05);--inpborder:rgba(255,255,255,0.14);
    --nav-bg:rgba(7,7,14,0.75);--overlay:rgba(10,10,20,0.6);--overlay-txt:#fff;
    --shadow:0 8px 40px rgba(0,0,0,0.45);--shadow-accent:0 18px 40px -12px rgba(124,58,237,0.45);
    --success:#4ade80;--success-txt:#4ade80;--warn-txt:#fbbf24;--danger-txt:#f87171;
  }
  [data-theme="light"]{
    color-scheme:light;
    --bg:#f7f6ff;--bg2:#eeebff;
    --card:#ffffff;--card-solid:#ffffff;
    --border:rgba(124,58,237,0.12);--border-accent:rgba(124,58,237,0.25);
    --txt:#0e0a1d;--txt2:rgba(14,10,29,0.72);--txt3:rgba(14,10,29,0.62);
    --accent:#7c3aed;--accent-2:#0d9488;--accent-txt:#6d28d9;
    --grad:linear-gradient(135deg,#7c3aed,#0d9488);
    --grad-deep:linear-gradient(150deg,#4c1d95 0%,#5b21b6 45%,#115e59 100%); /* white text on top passes AA */
    --grad-text:linear-gradient(120deg,#6d28d9 0%,#0f766e 100%); /* ≥5:1 on --bg */
    --glow:rgba(124,58,237,0.16);--soft:rgba(124,58,237,0.08);--tsoft:rgba(13,148,136,0.08);
    --pill:rgba(124,58,237,0.07);--pilltxt:rgba(14,10,29,0.78);
    --inp:#fff;--inpborder:rgba(124,58,237,0.22);
    --nav-bg:rgba(255,255,255,0.85);--overlay:rgba(255,255,255,0.78);--overlay-txt:#0e0a1d;
    --shadow:0 8px 32px rgba(124,58,237,0.1);--shadow-accent:0 18px 40px -12px rgba(124,58,237,0.3);
    --success:#22c55e;--success-txt:#15803d;--warn-txt:#b45309;--danger-txt:#dc2626;
  }

  body{
    font-family:var(--font-dm),Arial,sans-serif;
    background:var(--bg);
    color:var(--txt);
    transition:background .4s,color .4s;
    margin:0;
  }

  /* All headings share one crisp, bold sans-serif */
  h1,h2,h3,h4{font-family:var(--font-head),system-ui,sans-serif;text-rendering:optimizeLegibility;}

  .grad{
    background:var(--grad-text);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
  }

  /* Shared section heading (Skills, Experience, Projects, Contact) */
  .sec-title{
    font-family:var(--font-head),sans-serif;
    font-size:clamp(2.2rem,5vw,3.4rem);
    font-weight:800;
    line-height:1.1;
    letter-spacing:-.025em;
    color:var(--txt);
    text-align:center;
    margin:0 0 1rem;
  }
  .sec-sub{
    text-align:center;
    color:var(--txt2);
    font-size:1.02rem;
    max-width:560px;
    margin:0 auto 4rem;
    line-height:1.7;
  }

  /* Keyboard focus that is visible on every background */
  a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible{
    outline:2px solid var(--accent-txt);outline-offset:3px;border-radius:8px;
  }

  .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}

  @media (prefers-reduced-motion: reduce){
    *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important;}
  }
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      {/*
        No custom <head> children: Netlify's edge injects an HTML comment into <head>,
        which made React's hydration of our own <head> tags fail (React error #418).
        The theme script/tokens sit at the very top of <body> instead: they still run
        before any content is painted, so there is no theme flash.
      */}
      <body className={`${jakarta.variable} ${dmSans.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <style dangerouslySetInnerHTML={{ __html: THEME_CSS }} />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
