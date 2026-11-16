"use client";
import { useTheme } from "@/context/ThemeContext";
import CardHobbies from "@/components/ui/cardHobbies";
import { Heart, Star, Zap } from "lucide-react";

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
  const { dark } = useTheme();

  return (
    <section className={`hb-root ${dark ? "dk" : "lk"}`}>
      <style>{`
        .hb-root {
          background: ${dark ? "#020205" : "#f8fafc"};
          min-height: 100vh;
          padding: 140px 1.5rem 100px;
          position: relative;
          overflow: hidden;
        }

        /* Artistic Background */
        .hb-root::before {
          content: "";
          position: absolute;
          width: 600px; height: 600px;
          bottom: -200px; right: -200px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
          filter: blur(80px);
        }

        .hb-in { max-width: 1200px; margin: 0 auto; position: relative; z-index: 10; }

        .hb-header { margin-bottom: 5rem; text-align: center; }

        .hb-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 20px; border-radius: 100px;
          background: ${dark ? "rgba(168, 85, 247, 0.1)" : "#f3f4f6"};
          border: 1px solid rgba(168, 85, 247, 0.2);
          color: #a855f7; font-size: 13px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1.5rem;
        }

        .hb-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 800; letter-spacing: -0.05em;
          color: ${dark ? "#fff" : "#0f172a"}; margin-bottom: 1rem;
          line-height: 1;
        }

        .hb-title span {
          background: linear-gradient(135deg, #a855f7, #6366f1);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        .hb-sub {
          font-size: 1.1rem; color: ${dark ? "#94a3b8" : "#475569"};
          line-height: 1.7; max-width: 600px; margin: 0 auto;
        }

        /* Improved Grid - Responsive and Clean */
        .hb-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        /* Hover effect on cards via grid container */
        .hb-grid > div {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .hb-grid > div:hover {
          transform: translateY(-10px);
        }
      `}</style>

      <div className="hb-in">
        <header className="hb-header">
          <div className="hb-badge">
            <Zap size={14} /> Beyond The Code
          </div>
          <h1 className="hb-title">Hobbies & <span>Interests</span></h1>
          <p className="hb-sub">
            The passions that drive my creativity and discipline when I'm not architecting cloud solutions.
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