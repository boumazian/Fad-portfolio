import { Code2, Database, Cloud, Network, PenTool, CheckCircle2 } from "lucide-react";

// 6 groups → clean 3×2 / 2×3 grid. Cloud first: it's the differentiator.
const CATS = [
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={22} />,
    skills: ["AWS", "CloudFormation", "Terraform", "Amplify", "DynamoDB", "Azure", "Firebase", "OpenStack", "Netlify"],
  },
  {
    title: "Frontend",
    icon: <Code2 size={22} />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: <Database size={22} />,
    skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Infrastructure & Networking",
    icon: <Network size={22} />,
    skills: ["IAM", "VPC Security", "Firewalls", "DNS", "Load Balancers", "TCP/IP", "Routing & Subnets", "Zabbix Monitoring"],
  },
  {
    title: "Design & Architecture",
    icon: <PenTool size={22} />,
    skills: ["Figma", "UI/UX", "Design Systems", "C4 Model"],
  },
  {
    title: "QA & Testing",
    icon: <CheckCircle2 size={22} />,
    skills: ["Manual Testing", "Test Cases", "Bug Reporting", "Regression Testing", "UI/UX Testing"],
  },
];

export default function Skills() {
  return (
    <div className="skills">
      <style>{`
        .skills { padding: 120px 0; background: var(--bg); position: relative; }
        .skills-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; position: relative; z-index: 2; }

        .sg { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 2rem; }

        .sc {
          background: var(--card);
          backdrop-filter: blur(10px);
          padding: 2.5rem;
          border-radius: 32px;
          border: 1px solid var(--border-accent);
          transition: transform .4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color .4s, box-shadow .4s;
        }
        .sc:hover { transform: translateY(-8px); border-color: var(--accent); box-shadow: var(--shadow-accent); }

        .sc-h { display: flex; align-items: center; gap: 15px; margin-bottom: 1.75rem; }
        .sc-i {
          width: 48px; height: 48px; flex-shrink: 0; border-radius: 15px;
          display: flex; align-items: center; justify-content: center;
          background: var(--soft); color: var(--accent-txt); border: 1px solid var(--border-accent);
          transition: background .3s, color .3s, transform .3s;
        }
        .sc:hover .sc-i { background: var(--grad); color: #fff; transform: scale(1.08); }
        .sc-t { font-family: var(--font-syne), sans-serif; font-size: 1.2rem; font-weight: 800; color: var(--txt); margin: 0; }

        .sc-ps { display: flex; flex-wrap: wrap; gap: 10px; list-style: none; padding: 0; margin: 0; }
        .sc-p {
          padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 600;
          background: var(--pill); color: var(--pilltxt); border: 1px solid transparent; transition: .3s;
        }
        .sc:hover .sc-p { background: var(--soft); color: var(--txt); border-color: var(--border-accent); }

        @media (max-width: 768px) {
          .skills { padding: 90px 0; }
          .skills-container { padding: 0 1rem; }
          .sg { grid-template-columns: 1fr; gap: 1.25rem; }
          .sc { border-radius: 26px; padding: 2rem; }
        }
      `}</style>

      <div className="skills-container">
        <h2 id="skills-title" className="sec-title">Skills &amp; <span className="grad">Expertise</span></h2>
        <p className="sec-sub">The tools I use to design, build, deploy and test.</p>

        <div className="sg">
          {CATS.map((c) => (
            <div className="sc" key={c.title}>
              <div className="sc-h">
                <div className="sc-i" aria-hidden="true">{c.icon}</div>
                <h3 className="sc-t">{c.title}</h3>
              </div>
              <ul className="sc-ps">
                {c.skills.map(s => <li className="sc-p" key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
