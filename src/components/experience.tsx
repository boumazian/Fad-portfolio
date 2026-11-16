"use client";
import { useTheme } from "@/context/ThemeContext";
import { Briefcase, MapPin } from "lucide-react";

// Source: public/bo-cv.pdf — keep this in sync with the CV.
const EXPERIENCE = [
  {
    role: "Full-Stack Cloud Developer",
    company: "Terrab Consulting Innovation",
    location: "Meknès, Morocco · On-site",
    period: "Aug 2024 — Present",
    current: true,
    points: [
      "Develop modern web applications with Next.js, Tailwind CSS and Prisma.",
      "Automate resource deployment with Infrastructure as Code using AWS CloudFormation.",
      "Manage cloud databases and storage with AWS DynamoDB, Firebase and Amplify.",
      "Design system architectures with the C4 Model and UI/UX wireframes in Figma.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Prisma", "AWS CloudFormation", "DynamoDB", "Amplify", "Firebase", "Figma"],
  },
  {
    role: "IT Infrastructure Intern",
    company: "ONEE · Water Branch",
    location: "Meknès, Morocco",
    period: "Apr 2024",
    current: false,
    points: [
      "Configured Zabbix to monitor server performance and network health.",
      "Handled real-time system alerts and logs to keep the infrastructure highly available.",
      "Gained hands-on experience in network administration and securing digital environments.",
    ],
    stack: ["Zabbix", "Monitoring", "Networking", "Security"],
  },
];

export default function Experience() {
  const { dark } = useTheme();

  return (
    <div className={`xp ${dark ? "dk" : "lk"}`}>
      <style>{`
        .xp {
          padding: 120px 1.5rem;
          background: ${dark ? "#030307" : "#f8fafc"};
          position: relative;
        }
        .xp-in { max-width: 960px; margin: 0 auto; }

        .xp-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800;
          text-align: center;
          color: ${dark ? "white" : "#0f172a"};
          margin-bottom: 1rem;
        }
        .xp-title span {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .xp-sub {
          text-align: center; color: var(--txt2);
          max-width: 520px; margin: 0 auto 4rem; line-height: 1.7;
        }

        .xp-list { display: flex; flex-direction: column; gap: 1.5rem; }

        .xp-card {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 2rem;
          padding: 2.25rem;
          border-radius: 28px;
          background: ${dark ? "rgba(10, 10, 20, 0.6)" : "white"};
          border: 1px solid rgba(99, 102, 241, 0.2);
          transition: border-color .3s, box-shadow .3s;
        }
        .xp-card:hover { border-color: #6366f1; box-shadow: 0 15px 35px rgba(99, 102, 241, 0.15); }

        .xp-meta { display: flex; flex-direction: column; gap: .6rem; font-size: .85rem; color: var(--txt2); }
        .xp-period { font-weight: 700; color: ${dark ? "#c7d2fe" : "#4f46e5"}; font-size: .9rem; }
        .xp-loc { display: flex; align-items: center; gap: 6px; }
        .xp-now {
          display: inline-flex; align-items: center; gap: 6px; width: fit-content;
          padding: 4px 10px; border-radius: 100px; font-size: .75rem; font-weight: 700;
          color: #16a34a; background: rgba(74, 222, 128, 0.12); border: 1px solid rgba(74, 222, 128, 0.3);
        }
        .xp-now::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #4ade80; }

        .xp-role {
          font-family: 'Syne', sans-serif; font-size: 1.35rem; font-weight: 800;
          color: ${dark ? "#fff" : "#0f172a"}; letter-spacing: -0.02em; margin: 0;
        }
        .xp-co { display: flex; align-items: center; gap: 8px; margin: .35rem 0 1.1rem; font-weight: 600; color: #818cf8; font-size: .95rem; }

        .xp-pts { list-style: none; padding: 0; margin: 0 0 1.4rem; display: flex; flex-direction: column; gap: .55rem; }
        .xp-pts li { position: relative; padding-left: 1.2rem; color: var(--txt2); font-size: .93rem; line-height: 1.6; }
        .xp-pts li::before {
          content: ""; position: absolute; left: 0; top: .6em;
          width: 6px; height: 6px; border-radius: 2px; background: linear-gradient(135deg, #6366f1, #a855f7);
        }

        .xp-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .xp-tag {
          padding: 5px 12px; border-radius: 100px; font-size: .75rem; font-weight: 600;
          background: ${dark ? "rgba(255,255,255,0.05)" : "#f1f5f9"};
          color: ${dark ? "#cbd5e1" : "#475569"};
        }

        @media (max-width: 768px) {
          .xp { padding: 90px 1rem; }
          .xp-card { grid-template-columns: 1fr; gap: 1rem; padding: 1.75rem; border-radius: 24px; }
          .xp-meta { flex-direction: row; flex-wrap: wrap; align-items: center; gap: .5rem 1rem; }
        }
      `}</style>

      <div className="xp-in">
        <h2 className="xp-title">Work <span>Experience</span></h2>
        <p className="xp-sub">Building web apps and running cloud infrastructure in real production environments.</p>

        <div className="xp-list">
          {EXPERIENCE.map((x) => (
            <article className="xp-card" key={x.role + x.company}>
              <div className="xp-meta">
                <span className="xp-period">{x.period}</span>
                <span className="xp-loc"><MapPin size={14} aria-hidden="true" />{x.location}</span>
                {x.current && <span className="xp-now">Current</span>}
              </div>

              <div>
                <h3 className="xp-role">{x.role}</h3>
                <div className="xp-co"><Briefcase size={16} aria-hidden="true" />{x.company}</div>
                <ul className="xp-pts">
                  {x.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <div className="xp-tags">
                  {x.stack.map((s) => <span className="xp-tag" key={s}>{s}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
