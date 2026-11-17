import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/site";
import CardHobbies from "@/components/ui/cardHobbies";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Hobbies & Interests",
  description: "Beyond the code: first-aid rescuer, taekwondo, acting, dance, swimming, student ambassador and summer-camp coordinator.",
  alternates: { canonical: "/hobbies" },
  openGraph: { title: "Hobbies & Interests | Fadoua Boumazian", description: "Beyond the code: first-aid rescuer, taekwondo, acting, dance, swimming, student ambassador and summer-camp coordinator.", url: "/hobbies", images: [OG_IMAGE] },
};

const HOBBIES = [
  {
    title: "First Aid Rescuer",
    description: "National Organization for Relief, Rescue and Rapid Intervention. Dedicated to life-saving skills.",
    emoji: "🚑",
    imageUrls: ["/securite1.jpeg", "/securite2.jpeg", "/securite3.jpeg"],
  },
  {
    title: "Dancing",
    description: "Expressing energy through Zumba, African dance, and national Moroccan rhythms.",
    emoji: "💃",
    imageUrls: ["/dance2.jpeg", "/dance1.jpeg", "/dance3.jpeg"],
  },
  {
    title: "Taekwondo",
    description: "Champion mindset with Ayas Sporting Taekwondo Association. Discipline and strength.",
    emoji: "🥋",
    imageUrls: ["/tkd1.jpg", "/tkd2.jpg"],
  },
  {
    title: "Acting",
    description: "Bringing characters to life through plays, silent scenes, and expressive tableaux.",
    emoji: "🎭",
    imageUrls: ["/acting1.jpeg", "/acting2.jpeg", "/acting3.jpeg", "/acting4.jpeg", "/acting5.jpeg"],
  },
  {
    title: "Swimming",
    description: "Finding peace and endurance in the water, whether pool or open sea.",
    emoji: "🏊",
    imageUrls: ["/swiming1.jpg", "/swiming2.jpg"],
  },
  {
    title: "Ambassador",
    description: "Representing ISTA Bab Tizimi Meknès with leadership and vision.",
    emoji: "🌟",
    imageUrls: ["/a1.jpg", "/a2.JPG"],
  },
  {
    title: "Coordinator",
    description: "Organizing summer camps and cultural trips with Archipelago Association.",
    emoji: "🏕️",
    imageUrls: ["/shild3.jpeg", "/shild2.jpeg", "/shild1.jpeg", "/shild4.jpeg"],
  },
];

export default function HobbiesForm() {
  return (
    <section className="hb-root" aria-labelledby="hb-title">
      <style>{`
        .hb-root { background: var(--bg); min-height: 100vh; padding: 140px 1.5rem 100px; position: relative; overflow: hidden; }
        .hb-root::before {
          content: ""; position: absolute; width: 600px; height: 600px; bottom: -200px; right: -200px;
          background: radial-gradient(circle, var(--glow) 0%, transparent 70%); filter: blur(80px); opacity: .6;
        }
        .hb-in { max-width: 1200px; margin: 0 auto; position: relative; z-index: 10; }
        .hb-header { margin-bottom: 4.5rem; text-align: center; }
        .hb-badge {
          display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; border-radius: 100px;
          background: var(--soft); border: 1px solid var(--border-accent); color: var(--accent-txt);
          font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1.5rem;
        }
        .hb-title {
          font-family: var(--font-head), sans-serif; font-size: clamp(2.5rem, 8vw, 4rem); font-weight: 800;
          letter-spacing: -0.03em; color: var(--txt); margin: 0 0 1rem; line-height: 1;
        }
        .hb-sub { font-size: 1.1rem; color: var(--txt2); line-height: 1.7; max-width: 600px; margin: 0 auto; }
        .hb-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2rem; }
        .hb-grid > div { transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .hb-grid > div:hover { transform: translateY(-10px); }
        @media (max-width: 600px) { .hb-root { padding: 120px 1rem 80px; } .hb-grid { grid-template-columns: 1fr; gap: 1.5rem; } }
      `}</style>

      <div className="hb-in">
        <header className="hb-header">
          <div className="hb-badge">
            <Zap size={14} aria-hidden="true" /> Beyond The Code
          </div>
          <h1 id="hb-title" className="hb-title">Hobbies &amp; <span className="grad">Interests</span></h1>
          <p className="hb-sub">
            The passions that drive my creativity and discipline when I&apos;m not architecting cloud solutions.
          </p>
        </header>

        <div className="hb-grid">
          {HOBBIES.map((h) => (
            <CardHobbies key={h.title} {...h} />
          ))}
        </div>
      </div>
    </section>
  );
}