"use client";
import { useTheme } from "@/context/ThemeContext";
import CardHobbies from "@/components/ui/cardHobbies";

const HOBBIES = [
  {
    title: "First Aid Rescuer",
    description: "National Organization for Relief, Rescue and Rapid Intervention.",
    emoji: "🚑",
    imageUrls: ["/securite1.jpeg", "/securite2.jpeg", "/securite3.jpeg"],
  },
  {
    title: "Dancing",
    description: "Foreign dance, whether it's Zumba, African dance, or dancing to Moroccan and national songs.",
    emoji: "💃",
    imageUrls: ["/dance2.jpeg", "/dance1.jpeg", "/dance3.jpeg"],
  },
  {
    title: "Taekwondo",
    description: "Taekwondo champion with Ayas Sporting Taekwondo Association.",
    emoji: "🥋",
    imageUrls: ["/tkd1.jpg", "/tkd2.jpg"],
  },
  {
    title: "Acting",
    description: "Acting and portraying characters, whether in plays, expressive tableaux, silent scenes, or sketches.",
    emoji: "🎭",
    imageUrls: ["/acting1.jpeg", "/acting2.jpeg", "/acting3.jpeg", "/acting4.jpeg", "/acting5.jpeg"],
  },
  {
    title: "Swimming",
    description: "Swimming, whether in the pool or in the sea.",
    emoji: "🏊",
    imageUrls: ["/swiming1.jpg", "/swiming2.jpg"],
  },
  {
    title: "Ambassador",
    description: "Ambassador at the Institut Spécialisé de Technologie Appliquée de Gestion Bab Tizimi Meknès.",
    emoji: "🌟",
    imageUrls: ["/a1.jpg", "/a2.JPG"],
  },
  {
    title: "Coordinator",
    description: "Coordinator at summer camps and trips with the Archipelago Association for Cultures in Azrou.",
    emoji: "🏕️",
    imageUrls: ["/shild3.jpeg", "/shild2.jpeg", "/shild1.jpeg", "/shild4.jpeg"],
  },
];

export default function HobbiesForm() {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";

  return (
    <>
      <style>{`
        .hb { background:var(--bg);min-height:100vh;padding:7rem 1.5rem 5rem;transition:background .4s; }
        .hb-in { max-width:1100px;margin:0 auto; }
        .hb-badge { display:inline-flex;align-items:center;gap:7px;padding:5px 14px 5px 7px;border-radius:100px;border:1px solid var(--border);background:var(--soft);font-size:12px;color:var(--txt2);margin-bottom:1rem; }
        .hb-bdot { width:7px;height:7px;border-radius:50%;background:var(--teal);box-shadow:0 0 7px var(--teal); }
        .hb-title { font-family:var(--font-syne,'Syne',sans-serif);font-size:clamp(2rem,4.5vw,2.8rem);font-weight:800;letter-spacing:-.03em;color:var(--txt);margin-bottom:.5rem; }
        .hb-sub { font-size:.96rem;color:var(--txt2);font-weight:300;line-height:1.7;max-width:500px;margin-bottom:3rem; }
        .hb-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:1.25rem; }
      `}</style>

      <section className={`hb ${t}`}>
        <div className="hb-in">
          <div className="hb-badge"><span className="hb-bdot"/>Beyond Work</div>
          <h1 className="hb-title">Hobbies & <span className="grad">Interests</span></h1>
          <p className="hb-sub">Discover the passions that inspire me beyond work — activities that fuel my creativity, discipline, and personal growth.</p>

          <div className="hb-grid">
            {HOBBIES.map((h) => (
              <CardHobbies key={h.title} {...h} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}