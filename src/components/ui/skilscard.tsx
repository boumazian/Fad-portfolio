"use client";
import { useTheme } from "@/context/ThemeContext";

const CATS = [
  { title:"Frontend Development", icon:"⚡", skills:["React","Next.js","TypeScript","Tailwind CSS","Bootstrap"] },
  { title:"Backend Development",  icon:"🛠", skills:["Node.js","Express","Vercel","Prisma","API"] },
  { title:"Design",               icon:"✦", skills:["Figma","UI/UX","Design Systems","Canva","Prototyping","Responsive Design"] },
  { title:"Cloud",                icon:"☁️", skills:["Microsoft Azure","OpenStack","Amazon Web Service","CloudFormation","Terraform"] },
  { title:"Security",             icon:"🔐", skills:["IAM","Cognito","Access Control","VPC Security","Encryption","Firewall Rules"] },
  { title:"Network",              icon:"🌐", skills:["TCP/IP","DNS","Load Balancers","VPC","Subnets","Routing","Network Monitoring"] },
];

export default function SkillsCard() {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";
  return (
    <>
      <style>{`
        .sg { display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:1.1rem;padding:0 1.5rem 4rem;max-width:1100px;margin:0 auto; }
        .sc { border-radius:15px;padding:1.4rem;background:var(--card);border:1px solid var(--border);transition:transform .25s,box-shadow .25s,border-color .25s; }
        .sc:hover { transform:translateY(-3px);box-shadow:var(--shadow);border-color:var(--accent); }
        .sc-h { display:flex;align-items:center;gap:9px;margin-bottom:.95rem; }
        .sc-i { width:34px;height:34px;border-radius:9px;font-size:17px;display:flex;align-items:center;justify-content:center;background:var(--soft);border:1px solid var(--border); }
        .sc-t { font-family:'Syne',sans-serif;font-size:.95rem;font-weight:700;color:var(--txt); }
        .sc-ps { display:flex;flex-wrap:wrap;gap:7px; }
        .sc-p { padding:4px 11px;border-radius:100px;font-size:.78rem;font-weight:500;background:var(--pill);color:var(--pilltxt);border:1px solid var(--border);transition:background .2s,border-color .2s; }
        .sc:hover .sc-p { border-color:var(--accent);background:var(--soft); }
      `}</style>
      <div className={`sg ${t}`}>
        {CATS.map(c => (
          <div className="sc" key={c.title}>
            <div className="sc-h">
              <span className="sc-i">{c.icon}</span>
              <span className="sc-t">{c.title}</span>
            </div>
            <div className="sc-ps">
              {c.skills.map(s => <span className="sc-p" key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}