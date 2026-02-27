"use client";
import { useTheme } from "@/context/ThemeContext";
import FormationItem from "./ui/formationItem";

const formations = [
  {
    title: "Diplôme de Technicien Spécialisé",
    date: "Juin 2024",
    etablissement: "Institut Spécialisé de Technologie Appliquée — ISTAG Bab Tizimi, Meknès",
    description1: "Infrastructure Digitale, Option: Cloud Computing.",
    tag: "Diplome",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    title: "Certificat de Formation Qualifiante",
    date: "Juin 2024",
    etablissement: "Institut Spécialisé de Technologie Appliquée — ISTAG Bab Tizimi, Meknès",
    description1: "Testeur d'intrusions cybernétiques.",
    tag: "Certificat",
    link: "#",
  },
  {
    title: "Baccalauréat",
    date: "Juin 2022",
    etablissement: "Lycée Zitoune, Meknès",
    description1: "Filière Sciences de la Vie et de la Terre.",
    tag: "Certificat",
    link: "#",
  },
  {
    title: "Notions de Base sur la Commutation, le Routage et le Sans Fil",
    date: "09/05/2024",
    etablissement: "ISTAG Bab Tizimi",
    description1: "CCNAv7 — Notions de base sur la commutation, le routage et le sans fil.",
    tag: "Attestation",
    link: "#",
  },
  {
    title: "Introduction aux Réseaux",
    date: "06/06/2023",
    etablissement: "ISTAG Bab Tizimi",
    description1: "CCNAv7 — Introduction aux réseaux.",
    tag: "Attestation",
    link: "#",
  },
  {
    title: "Cybersecurity Essentials",
    date: "25/03/2023",
    etablissement: "ISTAG Bab Tizimi",
    description1: "CCNAv7 — Cybersecurity Essentials.",
    tag: "Attestation",
    link: "#",
  },
  {
    title: "Introduction to IoT",
    date: "13/04/2024",
    etablissement: "ISTAG Bab Tizimi",
    description1: "CCNAv7 — Introduction to IoT.",
    tag: "Attestation",
    link: "#",
  },
];

export default function Formation() {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";

  return (
    <>
      <style>{`
        .fm-section {
          background: var(--bg);
          min-height: 100vh;
          padding: 7rem 1.5rem 5rem;
          transition: background .4s;
        }
        .fm-inner { max-width: 780px; margin: 0 auto; }
        .fm-header { margin-bottom: 3rem; }
        .fm-label {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px 5px 7px; border-radius: 100px;
          border: 1px solid var(--border); background: var(--soft);
          font-size: 12px; color: var(--txt2); margin-bottom: 1rem;
        }
        .fm-label-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 7px var(--accent); }
        .fm-title {
          font-family: var(--font-syne, 'Syne', sans-serif);
          font-size: clamp(2rem, 4.5vw, 2.8rem);
          font-weight: 800; letter-spacing: -.03em;
          color: var(--txt); margin-bottom: .5rem;
        }
        .fm-sub { font-size: .96rem; color: var(--txt2); font-weight: 300; line-height: 1.7; max-width: 480px; }
        .fm-count {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 12px; border-radius: 100px;
          background: var(--tsoft); border: 1px solid rgba(13,148,136,.2);
          font-size: .78rem; font-weight: 600; color: var(--teal);
          margin-top: .75rem;
        }
      `}</style>

      <section className={`fm-section ${t}`}>
        <div className="fm-inner">
          <div className="fm-header">
            <div className="fm-label">
              <span className="fm-label-dot"/>
              Education & Certifications
            </div>
            <h1 className="fm-title">
              My <span className="grad">Formation</span> Path
            </h1>
            <p className="fm-sub">
              Academic background and professional certifications in cloud computing, networking, and cybersecurity.
            </p>
            <div className="fm-count">
              ✦ {formations.length} diplômes & certifications
            </div>
          </div>

          {/* Timeline */}
          <div>
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
    </>
  );
}