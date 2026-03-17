// "use client";
// import { useTheme } from "@/context/ThemeContext";

// const CATS = [
//   { title:"Frontend Development", icon:"⚡", skills:["React","Next.js","TypeScript","Tailwind CSS","Bootstrap"] },
//   { title:"Backend Development",  icon:"🛠", skills:["Node.js","Express","Prisma","PostgreSQL","Rest API"] },
//   { title:"Cloud Engineering",    icon:"☁️", skills:["Azure","AWS","OpenStack","Terraform","CloudFormation"] },
//   { title:"Infrastructure & Sec", icon:"🔐", skills:["IAM","VPC Security","Firewall","DNS","Load Balancers"] },
//   { title:"Design & Creative",    icon:"✦", skills:["Figma","UI/UX","Design Systems","Prototyping"] },
//   { title:"Networking",           icon:"🌐", skills:["TCP/IP","Routing","Monitoring","Subnets"] },
// ];

// export default function Skills() {
//   const { dark } = useTheme();
//   const t = dark ? "dk" : "lk";

//   return (
//     <section className={`skills ${t}`}>
//   <style>{`
//     .skills {
//       padding: 100px 0 60px;
//       position: relative;
//       background: var(--bg);
//       overflow: hidden;
//     }

//     /* نفس glow ديال Hero */
//     .skills::before {
//       content: '';
//       position: absolute;
//       inset: 0;
//       background:
//         radial-gradient(ellipse 50% 40% at 70% 20%, rgba(124,58,237,0.08), transparent 70%),
//         radial-gradient(ellipse 40% 40% at 20% 80%, rgba(13,148,136,0.08), transparent 70%);
//       pointer-events: none;
//     }

//     .skills-container {
//       position: relative;
//       z-index: 2;
//       max-width: 1200px;
//       margin: 0 auto;
//       padding: 0 1.5rem;
//     }

//     .skills-title {
//       font-family: 'Syne', sans-serif;
//       font-size: clamp(2rem, 4vw, 3.5rem);
//       font-weight: 800;
//       color: var(--txt);
//       margin-bottom: 1rem;
//       letter-spacing: -0.04em;
//       text-align: center;
//     }

//     .skills-title span {
//       background: linear-gradient(135deg, #7c3aed, #0d9488);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//     }

//     .skills-sub {
//       text-align: center;
//       color: var(--txt2);
//       font-size: 1.1rem;
//       max-width: 600px;
//       margin: 0 auto 3rem;
//       line-height: 1.6;
//     }

//     /* GRID */
//     .sg {
//       display: grid;
//       grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//       gap: 1.5rem;
//     }

//     /* CARD */
//     .sc {
//       position: relative;
//       border-radius: 24px;
//       padding: 2rem;
//       background: rgba(255,255,255,0.7);
//       backdrop-filter: blur(14px);
//       border: 1px solid rgba(0,0,0,0.05);
//       transition: all 0.4s ease;
//       overflow: hidden;
//     }

//     .sc::before {
//       content: '';
//       position: absolute;
//       inset: 0;
//       background: linear-gradient(135deg, #7c3aed15, #0d948815);
//       opacity: 0;
//       transition: opacity 0.4s;
//     }

//     .sc:hover {
//       transform: translateY(-10px) scale(1.02);
//       border-color: #7c3aed40;
//       box-shadow:
//         0 20px 40px rgba(124,58,237,0.15),
//         0 10px 20px rgba(13,148,136,0.1);
//     }

//     .sc:hover::before {
//       opacity: 1;
//     }

//     /* HEADER */
//     .sc-h {
//       display: flex;
//       align-items: center;
//       gap: 14px;
//       margin-bottom: 1.5rem;
//     }

//     .sc-i {
//       width: 45px;
//       height: 45px;
//       border-radius: 12px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       background: linear-gradient(135deg, #7c3aed, #0d9488);
//       color: white;
//       font-size: 20px;
//       box-shadow: 0 5px 20px rgba(124,58,237,0.25);
//     }

//     .sc-t {
//       font-family: 'Syne', sans-serif;
//       font-size: 1.1rem;
//       font-weight: 800;
//       color: var(--txt);
//     }

//     /* SKILLS */
//     .sc-ps {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 8px;
//     }

//     .sc-p {
//       padding: 6px 14px;
//       border-radius: 100px;
//       font-size: 0.8rem;
//       font-weight: 500;
//       background: rgba(255,255,255,0.9);
//       color: var(--txt2);
//       border: 1px solid rgba(0,0,0,0.05);
//       transition: 0.3s;
//     }

//     .sc:hover .sc-p {
//       background: #fff;
//       color: var(--txt);
//       border-color: #7c3aed30;
//     }

//     @media (max-width: 768px) {
//       .sg {
//         grid-template-columns: 1fr;
//       }
//     }
//   `}</style>

//   <div className="skills-container">

//     <h2 className="skills-title">
//       Skills & <span>Capabilities</span>
//     </h2>

//     <p className="skills-sub">
//       Expertise technique en Cloud Computing et Développement Full-Stack,
//       propulsée par les technologies les plus innovantes.
//     </p>

//     <div className="sg">
//       {CATS.map(c => (
//         <div className="sc" key={c.title}>
//           <div className="sc-h">
//             <span className="sc-i">{c.icon}</span>
//             <span className="sc-t">{c.title}</span>
//           </div>

//           <div className="sc-ps">
//             {c.skills.map(s => (
//               <span className="sc-p" key={s}>{s}</span>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>

//   </div>
// </section>
//   );
// }


"use client";
import { useTheme } from "@/context/ThemeContext";

const CATS = [
  { title:"Frontend Development", icon:"⚡", skills:["React","Next.js","TypeScript","Tailwind CSS","Bootstrap"] },
  { title:"Backend Development",  icon:"🛠", skills:["Node.js","Express","Prisma","PostgreSQL","Rest API"] },
  { title:"Cloud Engineering",    icon:"☁️", skills:["Azure","AWS","OpenStack","Terraform","CloudFormation"] },
  { title:"Infrastructure & Sec", icon:"🔐", skills:["IAM","VPC Security","Firewall","DNS","Load Balancers"] },
  { title:"Design & Creative",    icon:"✦", skills:["Figma","UI/UX","Design Systems","Prototyping"] },
  { title:"Networking",           icon:"🌐", skills:["TCP/IP","Routing","Monitoring","Subnets"] },
];

export default function Skills() {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";

  return (
    <section className={`skills ${t}`}>
      <style>{`
        .skills {
          padding: 100px 0 60px;
          position: relative;
          background: var(--bg);
          overflow: hidden;
        }

        /* Glow background (light + dark) */
        .skills::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 50% 40% at 70% 20%, rgba(124,58,237,0.08), transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(13,148,136,0.08), transparent 70%);
          pointer-events: none;
        }

        .dk.skills::before {
          background:
            radial-gradient(ellipse 50% 40% at 70% 20%, rgba(124,58,237,0.15), transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(13,148,136,0.15), transparent 70%);
        }

        .skills-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .skills-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800;
          color: var(--txt);
          margin-bottom: 1rem;
          letter-spacing: -0.04em;
          text-align: center;
        }

        .skills-title span {
          background: linear-gradient(135deg, #7c3aed, #0d9488);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .skills-sub {
          text-align: center;
          color: var(--txt2);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        /* GRID */
        .sg {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        /* CARD LIGHT */
        .sc {
          position: relative;
          border-radius: 24px;
          padding: 2rem;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .sc::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #7c3aed15, #0d948815);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .sc:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: #7c3aed40;
          box-shadow:
            0 20px 40px rgba(124,58,237,0.15),
            0 10px 20px rgba(13,148,136,0.1);
        }

        .sc:hover::before {
          opacity: 1;
        }

        /* CARD DARK */
        .dk .sc {
          background: rgba(30, 30, 45, 0.7);
          border: 1px solid rgba(124, 58, 237, 0.15);
        }

        .dk .sc:hover {
          border-color: #7c3aed;
          box-shadow:
            0 20px 50px rgba(124, 58, 237, 0.25),
            0 10px 25px rgba(13, 148, 136, 0.15);
        }

        .dk .sc::before {
          background: linear-gradient(135deg, #7c3aed20, #0d948820);
        }

        /* HEADER */
        .sc-h {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 1.5rem;
        }

        .sc-i {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #7c3aed, #0d9488);
          color: white;
          font-size: 20px;
          box-shadow: 0 5px 20px rgba(124,58,237,0.25);
        }

        .dk .sc-i {
          box-shadow: 0 5px 25px rgba(124, 58, 237, 0.6);
        }

        .sc-t {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--txt);
        }

        /* SKILLS */
        .sc-ps {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .sc-p {
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 500;
          background: rgba(255,255,255,0.9);
          color: var(--txt2);
          border: 1px solid rgba(0,0,0,0.05);
          transition: 0.3s;
        }

        .sc:hover .sc-p {
          background: #fff;
          color: var(--txt);
          border-color: #7c3aed30;
        }

        /* DARK pills */
        .dk .sc-p {
          background: rgba(255,255,255,0.05);
          color: #cbd5e1;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .dk .sc:hover .sc-p {
          background: rgba(124,58,237,0.15);
          color: white;
          border-color: rgba(124,58,237,0.4);
        }

        @media (max-width: 768px) {
          .sg {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="skills-container">
        <h2 className="skills-title">
          Skills & <span>Capabilities</span>
        </h2>

        <p className="skills-sub">
          Expertise technique en Cloud Computing et Développement Full-Stack,
          propulsée par les technologies les plus innovantes.
        </p>

        <div className="sg">
          {CATS.map(c => (
            <div className="sc" key={c.title}>
              <div className="sc-h">
                <span className="sc-i">{c.icon}</span>
                <span className="sc-t">{c.title}</span>
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