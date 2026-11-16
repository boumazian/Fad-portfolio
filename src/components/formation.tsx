import FormationItem from "./ui/formationItem";
import { GraduationCap, BookOpen, ShieldCheck, Cpu, Network } from "lucide-react";

const formations = [
  // Diplomas first, then Cisco certifications (newest → oldest)
  {
    title: "Specialized Technician Diploma — Digital Infrastructure",
    date: "June 2024",
    etablissement: "ISTA Bab Tizimi (OFPPT), Meknès",
    description1: "Digital Infrastructure, Cloud Computing option.",
    tag: "Diploma",
    link: "#", // TODO: add the diploma PDF to /public and link it here (button is hidden while "#")
    icon: <GraduationCap size={18} />
  },
  {
    title: "Penetration Testing Certificate",
    date: "June 2024",
    etablissement: "ISTA Bab Tizimi (OFPPT), Meknès",
    description1: "Qualifying training program in cyber penetration testing.",
    tag: "Security",
    link: "#",
    icon: <ShieldCheck size={18} />
  },
  {
    title: "Baccalaureate — Life & Earth Sciences",
    date: "June 2022",
    etablissement: "Zitoune High School, Meknès",
    description1: "Life and Earth Sciences (SVT) track.",
    tag: "High School",
    link: "#",
    icon: <BookOpen size={18} />
  },
  {
    title: "Switching, Routing & Wireless Essentials",
    date: "May 2024",
    etablissement: "Cisco Networking Academy",
    description1: "CCNAv7 — Essential networking protocols and wireless configurations.",
    tag: "CCNA",
    link: "#",
    icon: <Network size={18} />
  },
  {
    title: "Introduction to IoT",
    date: "April 2024",
    etablissement: "Cisco Networking Academy",
    description1: "Exploring the Internet of Things ecosystem.",
    tag: "IoT",
    link: "#",
    icon: <Cpu size={18} />
  },
  {
    title: "Cybersecurity Essentials",
    date: "March 2024",
    etablissement: "Cisco Networking Academy",
    description1: "Fundamental principles of securing digital infrastructures.",
    tag: "Security",
    link: "#",
    icon: <ShieldCheck size={18} />
  },
  {
    title: "Introduction to Networks",
    date: "June 2023",
    etablissement: "Cisco Networking Academy",
    description1: "CCNAv7 — Fundamentals of network architectures and communications.",
    tag: "CCNA",
    link: "#",
    icon: <Network size={18} />
  },
];

export default function Formation() {
  return (
    <section className="fm-root" aria-labelledby="fm-title">
      <style>{`
        .fm-root { background: var(--bg); min-height: 100vh; padding: 140px 1.5rem 100px; position: relative; }
        .fm-root::after {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(circle at 50% 0%, var(--soft) 0%, transparent 50%);
        }
        .fm-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 10; }
        .fm-header { text-align: center; margin-bottom: 4.5rem; }
        .fm-badge {
          display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px; border-radius: 100px;
          background: var(--soft); border: 1px solid var(--border-accent); color: var(--accent-txt);
          font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1.5rem;
        }
        .fm-title {
          font-family: var(--font-syne), sans-serif; font-size: clamp(2.5rem, 7vw, 4rem); font-weight: 800;
          letter-spacing: -0.05em; color: var(--txt); margin: 0 0 1rem;
        }
        .fm-sub { font-size: 1.1rem; color: var(--txt2); line-height: 1.7; max-width: 600px; margin: 0 auto; }
        .fm-grid { display: flex; flex-direction: column; list-style: none; padding: 0; margin: 0; }
        @media (max-width: 600px) { .fm-root { padding: 120px 1rem 80px; } }
      `}</style>

      <div className="fm-inner">
        <header className="fm-header">
          <div className="fm-badge">Academic &amp; Tech Path</div>
          <h1 id="fm-title" className="fm-title">My <span className="grad">Journey</span></h1>
          <p className="fm-sub">
            A comprehensive track of my digital infrastructure studies,
            cloud computing expertise, and Cisco certifications.
          </p>
        </header>

        <ol className="fm-grid">
          {formations.map((item, i) => (
            <FormationItem key={item.title} {...item} isLast={i === formations.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}
