"use client";
import { useTheme } from "@/context/ThemeContext";
import CardProject from "@/components/ui/cardProject";

const PROJECTS = [
  { title:"Fast Transaction", description:"Faster transactions — money arrives in realtime", tags:["Node.js","API","FinTech"], imageUrl:"https://pagedone.io/asset/uploads/1695365240.png" },
  { title:"Secure Payments", description:"End-to-end encrypted payment system with real-time fraud detection", tags:["Security","React","Stripe"], imageUrl:"https://pagedone.io/asset/uploads/1695365240.png" },
  { title:"Cloud Dashboard", description:"Infrastructure monitoring dashboard for Azure & AWS resources", tags:["Azure","Next.js","Terraform"], imageUrl:"https://pagedone.io/asset/uploads/1695365240.png" },
  { title:"Portfolio v2", description:"Modern portfolio with dark/light mode and animations", tags:["Next.js","TypeScript","Tailwind"], imageUrl:"https://pagedone.io/asset/uploads/1695365240.png" },
  { title:"VPC Automation", description:"Automated VPC setup with subnet routing and security groups", tags:["AWS","CloudFormation","Network"], imageUrl:"https://pagedone.io/asset/uploads/1695365240.png" },
  { title:"IAM Manager", description:"Role-based access control with AWS Cognito", tags:["IAM","Cognito","Security"], imageUrl:"https://pagedone.io/asset/uploads/1695365240.png" },
];

export default function Projects() {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";

  return (
    <section className={`projects ${t}`}>
      <style>{`
        .projects {
          padding: 100px 0 60px;
          background: var(--bg);
          position: relative;
          overflow: hidden;
        }

        /* نفس glow ديال Hero */
        .projects::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 50% 40% at 70% 20%, rgba(124,58,237,0.08), transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(13,148,136,0.08), transparent 70%);
        }

        .dk.projects::before {
          background:
            radial-gradient(ellipse 50% 40% at 70% 20%, rgba(124,58,237,0.15), transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(13,148,136,0.15), transparent 70%);
        }

        .p-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        .p-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          text-align: center;
          color: var(--txt);
          margin-bottom: 1rem;
        }

        .p-title span {
          background: linear-gradient(135deg, #7c3aed, #0d9488);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .p-sub {
          text-align: center;
          color: var(--txt2);
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        /* GRID */
        .p-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.3rem;
        }

        /* تحسين performance */
        .p-grid * {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        @media (max-width: 768px) {
          .p-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="p-container">
        <h2 className="p-title">
          Featured <span>Projects</span>
        </h2>

        <p className="p-sub">
          Explore a collection of projects that showcase my skills, creativity, and problem-solving abilities.
        </p>

        <div className="p-grid">
          {PROJECTS.map(p => (
            <CardProject key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}