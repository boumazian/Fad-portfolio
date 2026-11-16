import CardProject, { type CardProps } from "@/components/ui/cardProject";
import FeaturedProject, { type FeaturedProjectProps } from "@/components/ui/featuredProject";
import { LayoutDashboard, MessageSquare, Globe, Cloud, ShoppingBag } from "lucide-react";

// Professional, proprietary project → featured full-width card without a GitHub link.
const FEATURED: FeaturedProjectProps = {
  name: "KeepSize",
  badge: "Featured · Shopify App",
  tagline: "A Shopify app that stops size returns before the box ships, by turning “I’ll order both sizes” into “I’ll keep one.”",
  role: "Lead Engineer",
  company: "ReaLift",
  icon: <ShoppingBag size={30} />,
  privateNote: "Proprietary code built at ReaLift, so the repository is private. Happy to walk through the architecture in an interview.",
  problem: "Apparel and footwear shoppers often order two sizes of the same item and plan to send one back. Merchants lose money on that return before the order even ships.",
  solution: "KeepSize spots two sizes of one product in the cart and offers a gift card to keep just one, so the return never happens.",
  features: [
    "Live bracket detection in the cart (/cart/add, change, update) with a short keep-one offer",
    "Automatic gift-card reward on payment, order tagging and a thank-you page extension",
    "Pay-per-save usage-based billing and a full embedded Shopify admin built with Polaris",
    "AI sizing-tool detection via Shopify App Proxy and an Anthropic Claude classifier",
  ],
  stack: [
    { group: "Frontend", items: ["React 18", "Vite", "Shopify Polaris 13", "Preact 10", "Checkout UI Extensions"] },
    { group: "Backend", items: ["AWS Amplify Gen 2", "AWS CDK", "AWS Lambda", "DynamoDB", "EventBridge", "SQS", "Cognito"] },
    { group: "Shopify & AI", items: ["Admin GraphQL API", "App Proxy", "Claude API (structured outputs)"] },
    { group: "Monorepo", items: ["Turborepo", "pnpm", "TypeScript", "ESLint", "Prettier"] },
    { group: "Testing", items: ["Vitest", "Playwright", "Shopify CLI"] },
  ],
  contribution: "Lead engineer building the product end-to-end: architecture, the event-driven serverless backend, frontends, billing, GDPR compliance, the Claude AI integration and Shopify App Store submission.",
};

// Public projects. Each card shows a "GitHub" button (github) and/or a
// "Live Demo" button (link). Add a screenshot in /public/projects/ and set
// imageUrl to replace the generated cover.
const PROJECTS: CardProps[] = [
  {
    title: "Tandim — Life Dashboard",
    description: "An all-in-one dashboard that brings tasks, daily prayer tracking, self-care routines, EN/DE language learning and a media log into a single hub.",
    highlights: [
      "Task board plus a prayer tracker with weekly, monthly and yearly heatmap views",
      "Pluggable storage layer: works offline with localStorage, Supabase/PostgreSQL schema ready for production",
      "Responsive app shell with sidebar navigation and a custom amethyst dark theme",
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/boumazian/tandim",
    icon: <LayoutDashboard size={34} />,
  },
  {
    title: "Chatty Realtime",
    description: "A full-stack chat app built around secure authentication. The auth layer is done; real-time messaging with Socket.io is next.",
    highlights: [
      "JWT sessions in httpOnly, SameSite=strict cookies; passwords hashed with bcrypt",
      "Login/register forms validated with React Hook Form + Zod, with protected routes",
      "Express + MongoDB REST API; client state with Zustand and React Query",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/boumazian/chatty-realtime",
    status: "In progress",
    icon: <MessageSquare size={34} />,
  },
  {
    title: "Developer Portfolio",
    description: "This website: a responsive, multi-page portfolio with dark/light themes and a working contact form.",
    highlights: [
      "Next.js App Router with statically pre-rendered pages, deployed on Netlify",
      "Contact form connected to Formspree with loading, success and error states",
      "Design tokens for both themes, WCAG AA text contrast and responsive layout",
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "Netlify"],
    github: "https://github.com/boumazian/Fad-portfolio",
    link: "https://fad-bo.netlify.app/",
    icon: <Globe size={34} />,
  },
  {
    // Hidden until a public repo URL is added below (cards need a GitHub or Live Demo link).
    title: "AWS Cloud Infrastructure",
    description: "Cloud infrastructure setup and automation using Terraform/CloudFormation with architecture design.",
    tags: ["AWS", "Terraform", "CloudFormation"],
    github: "",
    icon: <Cloud size={34} />,
  },
].filter(p => p.github || p.link);

export default function Projects() {
  return (
    <div className="projects">
      <style>{`
        .projects { padding: 120px 0; background: var(--bg); position: relative; overflow: hidden; }
        .projects::before {
          content: ''; position: absolute; width: 500px; height: 500px; bottom: -100px; left: -100px;
          background: radial-gradient(circle, var(--glow) 0%, transparent 70%); opacity: .5; pointer-events: none;
        }
        .p-container { max-width: 1240px; margin: 0 auto; padding: 0 2rem; position: relative; z-index: 2; }
        .p-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 2rem; }

        @media (max-width: 768px) {
          .projects { padding: 90px 0; }
          .p-container { padding: 0 1rem; }
          .p-grid { grid-template-columns: 1fr; gap: 1.5rem; }
        }
      `}</style>

      <div className="p-container">
        <h2 id="projects-title" className="sec-title">Featured <span className="grad">Projects</span></h2>
        <p className="sec-sub">Production work and personal projects: open the code on GitHub or try the live demo.</p>

        <FeaturedProject {...FEATURED} />

        <div className="p-grid">
          {PROJECTS.map(p => (
            <CardProject key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
