"use client";
import { useTheme } from "@/context/ThemeContext";

const LANGS = [
  {
    flag: "🇫🇷",
    lang: "Français",
    dir: "ltr" as const,
    text: [
      "Je suis une informaticienne passionnée spécialisée dans l'infrastructure digitale, avec une orientation particulière vers le Cloud Computing. Titulaire d'un diplôme de Technicien Spécialisé en Infrastructure Digitale, je me suis également formée dans les domaines de la cybersécurité, des réseaux (CCNAv7) et de l'Internet des Objets (IoT).",
      "Mon parcours est enrichi par des certifications techniques et une forte implication dans des projets pratiques. J'ai acquis des compétences solides en environnement cloud (AWS), en sécurité informatique, en développement web avec Next.js et Tailwind CSS, ainsi qu'en gestion de projets numériques.",
      "Curieuse, rigoureuse et motivée, je suis toujours à la recherche de nouveaux défis pour évoluer dans le domaine des technologies de l'information.",
    ],
  },
  {
    flag: "🇬🇧",
    lang: "English",
    dir: "ltr" as const,
    text: [
      "I am Fadoua Boumazian, an IT professional specialized in digital infrastructure with a strong focus on Cloud Computing. I hold a diploma as a Specialized Technician in Digital Infrastructure and have received additional training in cybersecurity, networking (CCNAv7), and the Internet of Things (IoT).",
      "My journey is enriched with technical certifications and hands-on involvement in practical projects. I've developed strong skills in cloud environments (AWS), information security, web development using Next.js and Tailwind CSS, and digital project management.",
      "Curious, detail-oriented, and highly motivated, I'm always looking for new challenges to grow within the dynamic world of information technology.",
    ],
  },
  {
    flag: "🇲🇦",
    lang: "العربية",
    dir: "rtl" as const,
    text: [
      "أنا فدوة بومزيان، مهندسة معلوماتية متخصصة في البنية التحتية الرقمية، مع اهتمام خاص بالحوسبة السحابية. حاصلة على دبلوم تقني متخصص في هذا المجال، كما تلقيت تكوينات إضافية في الأمن السيبراني، الشبكات (CCNAv7)، وإنترنت الأشياء (IoT).",
      "مساري المهني مدعوم بعدة شهادات تقنية ومشاركات عملية في مشاريع ميدانية. أتمتع بكفاءات قوية في بيئة الحوسبة السحابية (AWS)، وأمن المعلومات، وتطوير الويب باستخدام Next.js وTailwind CSS، بالإضافة إلى إدارة المشاريع الرقمية.",
      "أتميز بالفضول المهني، والانضباط، والدافع الذاتي، وأسعى دائمًا لمواجهة تحديات جديدة داخل مجال تكنولوجيا المعلومات.",
    ],
  },
];

const STATS = [
  { n: "3+",  l: "Years of Study" },
  { n: "7+",  l: "Certifications" },
  { n: "6+",  l: "Technologies" },
  { n: "10+", l: "Projects" },
];

export default function AboutMe() {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";

  return (
    <>
      <style>{`
        .am { background:var(--bg);min-height:100vh;padding:7rem 1.5rem 5rem;transition:background .4s; }
        .am-in { max-width:860px;margin:0 auto; }

        /* Header */
        .am-badge { display:inline-flex;align-items:center;gap:7px;padding:5px 14px 5px 7px;border-radius:100px;border:1px solid var(--border);background:var(--soft);font-size:12px;color:var(--txt2);margin-bottom:1rem; }
        .am-bdot { width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 7px var(--accent); }
        .am-title { font-family:var(--font-syne,'Syne',sans-serif);font-size:clamp(2rem,4.5vw,2.8rem);font-weight:800;letter-spacing:-.03em;color:var(--txt);margin-bottom:.5rem; }
        .am-sub { font-size:.96rem;color:var(--txt2);font-weight:300;line-height:1.7;max-width:500px;margin-bottom:2.5rem; }

        /* Stats row */
        .am-stats { display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:3.5rem; }
        .am-stat { flex:1;min-width:120px;border-radius:14px;padding:1.1rem 1.2rem;background:var(--card);border:1px solid var(--border);text-align:center;transition:transform .22s,border-color .22s; }
        .am-stat:hover { transform:translateY(-3px);border-color:var(--accent); }
        .am-stat-n { font-family:var(--font-syne,'Syne',sans-serif);font-size:1.6rem;font-weight:800;background:linear-gradient(135deg,#7c3aed,#0d9488);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
        .am-stat-l { font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:var(--txt3);margin-top:2px; }

        /* Language cards */
        .am-cards { display:flex;flex-direction:column;gap:1.5rem; }
        .am-card { border-radius:16px;padding:1.8rem;background:var(--card);border:1px solid var(--border);transition:border-color .25s,box-shadow .25s; }
        .am-card:hover { border-color:var(--accent);box-shadow:var(--shadow); }

        .am-lang-head { display:flex;align-items:center;gap:10px;margin-bottom:1.25rem; }
        .am-flag { font-size:1.4rem; }
        .am-lang-name { font-family:var(--font-syne,'Syne',sans-serif);font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--txt3); }
        .am-lang-bar { flex:1;height:1px;background:var(--border); }

        /* First letter drop cap */
        .am-para { font-size:.97rem;color:var(--txt2);line-height:1.85;font-weight:300;margin-bottom:.9rem; }
        .am-para:last-child { margin-bottom:0; }
        .am-para.drop::first-letter { font-family:var(--font-syne,'Syne',sans-serif);font-size:3.2rem;font-weight:800;float:left;line-height:.85;margin-right:.12em;margin-top:.05em;background:linear-gradient(135deg,#7c3aed,#0d9488);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
        .am-para[dir="rtl"].drop::first-letter { float:right;margin-right:0;margin-left:.12em; }

        /* Divider between cards */
        .am-cards > .am-card + .am-card { }

        @media(max-width:600px) {
          .am-stats { gap:.75rem; }
          .am-stat { min-width:calc(50% - .375rem); }
          .am-card { padding:1.3rem; }
        }
      `}</style>

      <section className={`am ${t}`}>
        <div className="am-in">

          {/* Header */}
          <div className="am-badge"><span className="am-bdot"/>About Me</div>
          <h1 className="am-title">
            Who <span className="grad">I Am</span>
          </h1>
          <p className="am-sub">
            Technicienne spécialisée en infrastructure digitale & cloud computing, based in Meknès, Morocco.
          </p>

          {/* Stats */}
          <div className="am-stats">
            {STATS.map(s => (
              <div className="am-stat" key={s.l}>
                <div className="am-stat-n">{s.n}</div>
                <div className="am-stat-l">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Language cards */}
          <div className="am-cards">
            {LANGS.map((lang, i) => (
              <div className="am-card" key={lang.lang}>
                <div className="am-lang-head">
                  <span className="am-flag">{lang.flag}</span>
                  <span className="am-lang-name">{lang.lang}</span>
                  <div className="am-lang-bar"/>
                </div>
                {lang.text.map((p, j) => (
                  <p
                    key={j}
                    dir={lang.dir}
                    className={`am-para${j === 0 ? " drop" : ""}`}
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}