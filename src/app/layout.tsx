import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["400","600","700","800"] });
const dmSans = DM_Sans({ variable: "--font-dm", subsets: ["latin"], weight: ["300","400","500","600"] });

export const metadata: Metadata = {
  title: "Fadoua Boumazian — Portfolio",
  description: "Technicienne spécialisée en infrastructure digitale & cloud computing",
};

const THEME_CSS = `
  *,*::before,*::after{box-sizing:border-box;}

  .dk{
    --bg:#07070e;--bg2:#0d0d1a;--card:#10101e;
    --border:rgba(255,255,255,0.07);
    --txt:#eeeaff;--txt2:rgba(238,234,255,0.52);--txt3:rgba(238,234,255,0.3);
    --accent:#7c3aed;--teal:#0d9488;
    --glow:rgba(124,58,237,0.32);--soft:rgba(124,58,237,0.1);--tsoft:rgba(13,148,136,0.1);
    --pill:rgba(255,255,255,0.06);--pilltxt:rgba(238,234,255,0.72);
    --inp:rgba(255,255,255,0.05);--inpborder:rgba(255,255,255,0.1);
    --shadow:0 8px 40px rgba(0,0,0,0.45);
  }
  .lk{
    --bg:#f7f6ff;--bg2:#eeebff;--card:#ffffff;
    --border:rgba(124,58,237,0.11);
    --txt:#0e0a1d;--txt2:rgba(14,10,29,0.58);--txt3:rgba(14,10,29,0.35);
    --accent:#7c3aed;--teal:#0d9488;
    --glow:rgba(124,58,237,0.16);--soft:rgba(124,58,237,0.08);--tsoft:rgba(13,148,136,0.08);
    --pill:rgba(124,58,237,0.07);--pilltxt:rgba(14,10,29,0.68);
    --inp:#fff;--inpborder:rgba(124,58,237,0.18);
    --shadow:0 8px 32px rgba(124,58,237,0.1);
  }

  body{
    font-family:var(--font-dm),Arial,sans-serif;
    background:var(--bg,#07070e);
    color:var(--txt,#eeeaff);
    transition:background .4s,color .4s;
    margin:0;
  }

  .grad{
    background:linear-gradient(135deg,#7c3aed,#0d9488);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
  }
  .sec-title{
    font-family:var(--font-syne),sans-serif;
    font-size:clamp(1.85rem,4vw,2.5rem);
    font-weight:800;
    letter-spacing:-.03em;
    color:var(--txt);
    text-align:center;
    margin-bottom:.5rem;
  }
  .sec-sub{
    text-align:center;
    color:var(--txt2);
    font-size:.96rem;
    font-weight:300;
    margin-bottom:3rem;
    max-width:520px;
    margin-left:auto;
    margin-right:auto;
    line-height:1.7;
  }
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: THEME_CSS }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${dmSans.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}