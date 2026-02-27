"use client";
import { useTheme } from "@/context/ThemeContext";
import CardProject from "@/components/ui/cardProject";

const PROJECTS = [
  { title:"Fast Transaction",   description:"Faster transactions — money arrives in realtime",                         tags:["Node.js","API","FinTech"],           imageUrl:"https://pagedone.io/asset/uploads/1695365240.png" },
  { title:"Secure Payments",    description:"End-to-end encrypted payment system with real-time fraud detection",      tags:["Security","React","Stripe"],         imageUrl:"https://pagedone.io/asset/uploads/1695365240.png" },
  { title:"Cloud Dashboard",    description:"Infrastructure monitoring dashboard for Azure & AWS resources",           tags:["Azure","Next.js","Terraform"],       imageUrl:"https://pagedone.io/asset/uploads/1695365240.png" },
  { title:"Portfolio v2",       description:"This portfolio — built with Next.js, Tailwind CSS and dark/light mode",   tags:["Next.js","TypeScript","Tailwind"],   imageUrl:"https://pagedone.io/asset/uploads/1695365240.png" },
  { title:"VPC Automation",     description:"Automated VPC setup with subnet routing and security group rules",        tags:["AWS","CloudFormation","Network"],    imageUrl:"https://pagedone.io/asset/uploads/1695365240.png" },
  { title:"IAM Manager",        description:"Role-based access control system with AWS Cognito integration",           tags:["IAM","Cognito","Security"],          imageUrl:"https://pagedone.io/asset/uploads/1695365240.png" },
];

export default function Projects() {
  const { dark } = useTheme();
  return (
    <section className={dark?"dk":"lk"} style={{background:"var(--bg)",padding:"5rem 1.5rem 4rem",transition:"background .4s"}}>
      <h2 className="sec-title">Featured Projects</h2>
      <p className="sec-sub">A collection of projects that showcase my skills, creativity, and problem-solving abilities</p>
      <div style={{maxWidth:"1100px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"1.1rem"}}>
        {PROJECTS.map(p => <CardProject key={p.title} {...p}/>)}
      </div>
    </section>
  );
}