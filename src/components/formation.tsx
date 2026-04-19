// "use client";
// import { useTheme } from "@/context/ThemeContext";
// import FormationItem from "./ui/formationItem";

// const formations = [
//   {
//     title: "Diplôme de Technicien Spécialisé",
//     date: "Juin 2024",
//     etablissement: "Institut Spécialisé de Technologie Appliquée — ISTAG Bab Tizimi, Meknès",
//     description1: "Infrastructure Digitale, Option: Cloud Computing.",
//     tag: "Diplome",
//     link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
//   },
//   {
//     title: "Certificat de Formation Qualifiante",
//     date: "Juin 2024",
//     etablissement: "Institut Spécialisé de Technologie Appliquée — ISTAG Bab Tizimi, Meknès",
//     description1: "Testeur d'intrusions cybernétiques.",
//     tag: "Certificat",
//     link: "#",
//   },
//   {
//     title: "Baccalauréat",
//     date: "Juin 2022",
//     etablissement: "Lycée Zitoune, Meknès",
//     description1: "Filière Sciences de la Vie et de la Terre.",
//     tag: "Certificat",
//     link: "#",
//   },
//   {
//     title: "Notions de Base sur la Commutation, le Routage et le Sans Fil",
//     date: "09/05/2024",
//     etablissement: "ISTAG Bab Tizimi",
//     description1: "CCNAv7 — Notions de base sur la commutation, le routage et le sans fil.",
//     tag: "Attestation",
//     link: "#",
//   },
//   {
//     title: "Introduction aux Réseaux",
//     date: "06/06/2023",
//     etablissement: "ISTAG Bab Tizimi",
//     description1: "CCNAv7 — Introduction aux réseaux.",
//     tag: "Attestation",
//     link: "#",
//   },
//   {
//     title: "Cybersecurity Essentials",
//     date: "25/03/2023",
//     etablissement: "ISTAG Bab Tizimi",
//     description1: "CCNAv7 — Cybersecurity Essentials.",
//     tag: "Attestation",
//     link: "#",
//   },
//   {
//     title: "Introduction to IoT",
//     date: "13/04/2024",
//     etablissement: "ISTAG Bab Tizimi",
//     description1: "CCNAv7 — Introduction to IoT.",
//     tag: "Attestation",
//     link: "#",
//   },
// ];

// export default function Formation() {
//   const { dark } = useTheme();
//   const t = dark ? "dk" : "lk";

//   return (
//     <>
//       <style>{`
//         .fm-section {
//           background: var(--bg);
//           min-height: 100vh;
//           padding: 7rem 1.5rem 5rem;
//           transition: background .4s;
//         }
//         .fm-inner { max-width: 780px; margin: 0 auto; }
//         .fm-header { margin-bottom: 3rem; }
//         .fm-label {
//           display: inline-flex; align-items: center; gap: 7px;
//           padding: 5px 14px 5px 7px; border-radius: 100px;
//           border: 1px solid var(--border); background: var(--soft);
//           font-size: 12px; color: var(--txt2); margin-bottom: 1rem;
//         }
//         .fm-label-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 7px var(--accent); }
//         .fm-title {
//           font-family: var(--font-syne, 'Syne', sans-serif);
//           font-size: clamp(2rem, 4.5vw, 2.8rem);
//           font-weight: 800; letter-spacing: -.03em;
//           color: var(--txt); margin-bottom: .5rem;
//         }
//         .fm-sub { font-size: .96rem; color: var(--txt2); font-weight: 300; line-height: 1.7; max-width: 480px; }
//         .fm-count {
//           display: inline-flex; align-items: center; gap: 6px;
//           padding: 4px 12px; border-radius: 100px;
//           background: var(--tsoft); border: 1px solid rgba(13,148,136,.2);
//           font-size: .78rem; font-weight: 600; color: var(--teal);
//           margin-top: .75rem;
//         }
//       `}</style>

//       <section className={`fm-section ${t}`}>
//         <div className="fm-inner">
//           <div className="fm-header">
//             <div className="fm-label">
//               <span className="fm-label-dot"/>
//               Education & Certifications
//             </div>
//             <h1 className="fm-title">
//               My <span className="grad">Formation</span> Path
//             </h1>
//             <p className="fm-sub">
//               Academic background and professional certifications in cloud computing, networking, and cybersecurity.
//             </p>
//             <div className="fm-count">
//               ✦ {formations.length} diplômes & certifications
//             </div>
//           </div>

//           {/* Timeline */}
//           <div>
//             {formations.map((item, i) => (
//               <FormationItem
//                 key={i}
//                 {...item}
//                 isLast={i === formations.length - 1}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";
import { useTheme } from "@/context/ThemeContext";
import FormationItem from "./ui/formationItem";
import { GraduationCap, Award, BookOpen, ShieldCheck, Cpu, Network } from "lucide-react";

const formations = [
  {
    title: "Diplôme de Technicien Spécialisé",
    date: "Juin 2024",
    etablissement: "ISTA Bab Tizimi, Meknès",
    description1: "Infrastructure Digitale, Option: Cloud Computing.",
    tag: "Diplôme",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    icon: <GraduationCap size={22} />
  },
  {
    title: "Certificat de Formation Qualifiante",
    date: "Juin 2024",
    etablissement: "ISTA Bab Tizimi, Meknès",
    description1: "Testeur d'intrusions cybernétiques.",
    tag: "Security",
    link: "#",
    icon: <ShieldCheck size={22} />
  },
  {
    title: "Baccalauréat",
    date: "Juin 2022",
    etablissement: "Lycée Zitoune, Meknès",
    description1: "Filière Sciences de la Vie et de la Terre.",
    tag: "Bac",
    link: "#",
    icon: <BookOpen size={22} />
  },
  {
    title: "Commutation, Routage et Sans Fil",
    date: "Mai 2024",
    etablissement: "Cisco Networking Academy",
    description1: "CCNAv7 — Essential networking protocols and wireless configurations.",
    tag: "CCNA",
    link: "#",
    icon: <Network size={22} />
  },
  {
    title: "Introduction aux Réseaux",
    date: "Juin 2023",
    etablissement: "Cisco Networking Academy",
    description1: "CCNAv7 — Fundamentals of network architectures and communications.",
    tag: "CCNA",
    link: "#",
    icon: <Network size={22} />
  },
  {
    title: "Cybersecurity Essentials",
    date: "Mars 2023",
    etablissement: "Cisco Networking Academy",
    description1: "CCNAv7 — Fundamental principles of securing digital infrastructures.",
    tag: "Security",
    link: "#",
    icon: <ShieldCheck size={22} />
  },
  {
    title: "Introduction to IoT",
    date: "Avril 2024",
    etablissement: "Cisco Networking Academy",
    description1: "CCNAv7 — Exploring the Internet of Things ecosystem.",
    tag: "IoT",
    link: "#",
    icon: <Cpu size={22} />
  },
];

export default function Formation() {
  const { dark } = useTheme();

  return (
    <section className={`fm-root ${dark ? "dk" : "lk"}`}>
      <style>{`
        .fm-root {
          background: ${dark ? "#020205" : "#f1f5f9"};
          min-height: 100vh;
          padding: 140px 1.5rem 100px;
          position: relative;
        }

        .fm-root::after {
          content: "";
          position: absolute;
          top: 0; left: 50%; transform: translateX(-50%);
          width: 100%; height: 100%;
          background: radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .fm-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 10; }

        .fm-header { text-align: center; margin-bottom: 5rem; }
        
        .fm-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; border-radius: 100px;
          background: ${dark ? "rgba(99, 102, 241, 0.1)" : "rgba(99, 102, 241, 0.05)"};
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: #818cf8; font-size: 13px; font-weight: 700; 
          text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1.5rem;
        }

        .fm-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 800; letter-spacing: -0.05em;
          color: ${dark ? "#fff" : "#0f172a"}; margin-bottom: 1rem;
        }

        .fm-title span {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        .fm-sub { 
          font-size: 1.1rem; color: ${dark ? "#94a3b8" : "#475569"}; 
          line-height: 1.7; max-width: 600px; margin: 0 auto;
        }

        /* The Timeline container - making it organized */
        .fm-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
      `}</style>

      <div className="fm-inner">
        <div className="fm-header">
          <div className="fm-badge">Academic & Tech Path</div>
          <h1 className="fm-title">My <span>Journey</span></h1>
          <p className="fm-sub">
            A comprehensive track of my digital infrastructure studies, 
            cloud computing expertise, and Cisco certifications.
          </p>
        </div>

        <div className="fm-grid">
          {formations.map((item, i) => (
            <FormationItem
              key={i}
              {...item}
              isLast={i === formations.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}