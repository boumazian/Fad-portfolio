
"use client";
import { useTheme } from "@/context/ThemeContext";
import { 
  Code2, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Palette, 
  Network,
  CheckCircle2 // أيقونة مناسبة للـ QA
} from "lucide-react";

const CATS = [
  { 
    title: "Frontend Development", 
    icon: <Code2 size={22} />, 
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"] 
  },
  { 
    title: "Backend Development",  
    icon: <Database size={22} />, 
    skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "Rest API"] 
  },
  { 
    title: "Cloud Engineering",    
    icon: <Cloud size={22} />, 
    skills: ["Azure", "AWS", "Firebase", "OpenStack", "Terraform", "CloudFormation"] 
  },
  { 
    title: "Infrastructure & Sec", 
    icon: <ShieldCheck size={22} />, 
    skills: ["IAM", "VPC Security", "Firewall", "DNS", "Load Balancers"] 
  },
  { 
    title: "Design & Creative",    
    icon: <Palette size={22} />, 
    skills: ["Figma", "UI/UX", "Design Systems", "Canva", "Miro"] 
  },
  { 
    title: "Networking",           
    icon: <Network size={22} />, 
    skills: ["TCP/IP", "Routing", "Monitoring", "Subnets"] 
  },
  { 
    title: "QA Manual Tester",     
    icon: <CheckCircle2 size={22} />, 
    skills: ["Bug Reporting", "Test Cases", "UI/UX Testing", "Regression Testing"] 
  },
];

export default function Skills() {
  const { dark } = useTheme();

  return (
    <section id="skills" className={`skills ${dark ? "dk" : "lk"}`}>
      <style>{`
        .skills {
          padding: 120px 0;
          background: ${dark ? "#030307" : "#f8fafc"};
          position: relative;
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          z-index: 2;
          position: relative;
        }

        .skills-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 5rem;
          color: ${dark ? "white" : "#0f172a"};
        }

        .skills-title span {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* GRID */
        .sg {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
        }

        /* THE CARD: Pill-style like your first image */
        .sc {
          background: ${dark ? "rgba(10, 10, 20, 0.6)" : "white"};
          backdrop-filter: blur(10px);
          padding: 2.5rem;
          border-radius: 40px; /* High radius like the logo/pills */
          border: 1px solid rgba(99, 102, 241, 0.2); /* Light Violet Border */
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .sc:hover {
          transform: translateY(-10px);
          border-color: #6366f1;
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.2);
        }

        .sc-h {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 2rem;
        }

        /* Icon styling to match the violet theme */
        .sc-i {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #818cf8;
          border: 1px solid rgba(99, 102, 241, 0.1);
        }

        .sc:hover .sc-i {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: white;
          transform: scale(1.1);
        }

        .sc-t {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: ${dark ? "white" : "#1e293b"};
        }

        /* Skills Pills */
        .sc-ps { display: flex; flex-wrap: wrap; gap: 10px; }

        .sc-p {
          padding: 8px 18px;
          border-radius: 20px; /* Pill shape */
          font-size: 0.85rem;
          font-weight: 600;
          background: ${dark ? "rgba(255,255,255,0.05)" : "#f1f5f9"};
          color: ${dark ? "#94a3b8" : "#64748b"};
          transition: 0.3s;
          border: 1px solid transparent;
        }

        .sc:hover .sc-p {
          background: rgba(99, 102, 241, 0.1);
          color: ${dark ? "white" : "#4f46e5"};
          border-color: rgba(99, 102, 241, 0.2);
        }

        @media (max-width: 768px) {
          .sg { grid-template-columns: 1fr; }
          .sc { border-radius: 30px; padding: 2rem; }
        }
      `}</style>

      <div className="skills-container">
        <h2 className="skills-title">
          Skills & <span>Expertise</span>
        </h2>

        <div className="sg">
          {CATS.map((c, idx) => (
            <div className="sc" key={idx}>
              <div className="sc-h">
                <div className="sc-i">{c.icon}</div>
                <div className="sc-t">{c.title}</div>
              </div>

              <div className="sc-ps">
                {c.skills.map(s => (
                  <span className="sc-p" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}