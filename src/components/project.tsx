import CardProject, { type CardProps } from "@/components/ui/cardProject";
import FeaturedProject, { type FeaturedProjectProps } from "@/components/ui/featuredProject";
import { LayoutDashboard, Globe, ShoppingBag, Store, UtensilsCrossed, Gift, Heart } from "lucide-react";

// Production case studies → featured full-width cards (alternating layout).
// Only set `github` for PUBLIC repos; private ones get a lock badge instead of a 404 link.
const FEATURED: FeaturedProjectProps[] = [{
  name: "KeepSize",
  badge: "Featured · Shopify App",
  tagline: "A Shopify app that stops size returns before the box ships, by turning “I’ll order both sizes” into “I’ll keep one.”",
  role: "Lead Engineer",
  company: "ReaLift",
  icon: <ShoppingBag size={30} />,
  privateLabel: "Private Repository (Client Work)",
  privateNote: "Client work for ReaLift, so the code stays private. Happy to walk through the architecture in an interview.",
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
}, {
  name: "Gourmandise Saine",
  badge: "Featured · E-commerce",
  tagline: "A full-stack online store and back-office for an artisanal Moroccan brand of healthy snacks, from the storefront to the stock room.",
  role: "Solo Full-Stack Developer",
  icon: <Store size={30} />,
  link: "https://gourmandise-saine.netlify.app",
  linkLabel: "Visit live store",
  privateNote: "The code is private. Happy to demo the admin dashboard in an interview.",
  contactLabel: "Ask for a demo",
  problem: "A small healthy-snack business was taking orders by hand, with no view of stock, ingredient costs, or profit.",
  solution: "A custom store plus an admin dashboard where orders, inventory, bundles and finances update live in one place, backed by a secure PostgreSQL database.",
  features: [
    "Storefront with product options, weight-based price tiers, bundles (“packs”), a browser cart and promo codes",
    "Server-side order pricing in a PostgreSQL function (create_order) for secure transaction handling",
    "Live 7-tab admin dashboard for products, packs and orders, with Supabase Realtime updates and WhatsApp customer messaging",
    "Automated stock and finance tracking: raw ingredients, finished goods, revenue, costs and profit margins",
  ],
  stack: [
    { group: "Frontend", items: ["Next.js 16 (App Router)", "React 19", "TypeScript 5", "Tailwind CSS v4", "Lucide React"] },
    { group: "Backend / DB", items: ["Supabase", "PostgreSQL", "Auth", "Realtime", "Row-Level Security", "PL/pgSQL functions", "@supabase/ssr"] },
    { group: "Media & Migration", items: ["Cloudinary Upload Widget", "Firebase Firestore → Supabase (firebase-admin script)"] },
    { group: "Tooling", items: ["ESLint 9", "Git", "GitHub"] },
  ],
  contribution: "Solo full-stack developer: brand design, the responsive storefront, a normalized PostgreSQL database with RLS security policies, the Firebase-to-Supabase data migration and the 7-tab admin dashboard.",
}, {
  name: "Koul Ou Skout",
  badge: "Featured · Serverless on AWS",
  tagline: "A serverless restaurant marketplace where local restaurants can put their menus online and take orders within minutes.",
  role: "Solo Full-Stack Developer",
  period: "May 2025 – Mar 2026",
  icon: <UtensilsCrossed size={30} />,
  privateNote: "The code is private. Happy to walk through the AWS architecture and data model in an interview.",
  problem: "Small restaurants rarely have their own online ordering and usually rely on costly third-party platforms.",
  solution: "A two-sided marketplace where restaurant owners sign up, publish menus and manage incoming orders, while customers browse menus, fill a cart and check out.",
  features: [
    "Self-service restaurant onboarding with Firebase Auth and Amazon S3 logo uploads",
    "Owner dashboard to accept or refuse orders, manage menus with paid add-ons and edit profile settings",
    "Customer ordering flow: dynamic restaurant menu pages, search and category filters, a persistent cart and checkout",
    "Location-aware landing page with an interactive Leaflet/OpenStreetMap delivery-zone finder",
  ],
  stack: [
    { group: "Frontend", items: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion"] },
    { group: "Maps", items: ["Leaflet", "React-Leaflet", "OpenStreetMap Nominatim API"] },
    { group: "Backend & Cloud", items: ["Next.js Route Handlers (REST API)", "AWS SDK v3", "Amazon DynamoDB", "Amazon S3", "AWS CloudFormation (IaC)"] },
    { group: "Auth & Deploy", items: ["Firebase Authentication", "Netlify", "AWS Amplify"] },
  ],
  contribution: "Solo full-stack developer: designed the DynamoDB data model with secondary indexes, wrote the AWS CloudFormation templates, built the REST APIs and S3 image uploads, integrated Firebase Auth and developed the role-based storefront and dashboard.",
}, {
  name: "Gift a Smile",
  badge: "Featured · Social Impact",
  tagline: "A donation platform in Arabic, English and French that tracks, live, how many children a community Eid-clothing campaign has fully clothed.",
  role: "Solo Full-Stack Developer",
  period: "Feb – Mar 2026 · built in 2 weeks",
  icon: <Gift size={30} />,
  privateNote: "The code is private. Happy to walk through the Firestore logic and security rules in an interview.",
  contactLabel: "Ask me for a demo",
  problem: "Grassroots charity drives run on WhatsApp threads and spreadsheets, so donors can't see progress and organizers lose track of pledges.",
  solution: "A public site where donors pledge in one tap, with a live progress bar toward the campaign goal and a secured admin dashboard to manage every pledge.",
  features: [
    "Live impact tracking from Firestore: children fully clothed, calculated from item and cash donations",
    "Trilingual (Arabic, English, French) with full right-to-left layout switching for Arabic",
    "Secured admin dashboard: Firebase Auth with an admin allowlist, pledge search and filters, stock adjustments",
    "International giving guide for donors abroad (Taptap Send) and direct WhatsApp integration",
  ],
  stack: [
    { group: "Framework & Styling", items: ["Next.js 16 (App Router)", "React 19", "TypeScript 5", "Tailwind CSS 4", "Lucide React"] },
    { group: "Backend & Security", items: ["Firebase 12", "Cloud Firestore", "Firebase Auth", "Security Rules (admin allowlist)"] },
    { group: "Hosting & Tooling", items: ["Netlify", "Firebase CLI", "ESLint 9"] },
  ],
  contribution: "Solo full-stack developer, built in 2 weeks: 13 modular React components, the Firestore counting logic, the auth-gated admin dashboard with its security rules, and the trilingual i18n/RTL setup.",
}];

// Smaller projects. Each card shows a "GitHub" button (github) and/or a
// "Live Demo" button (link); private ones set `privateLabel` (lock badge +
// contact CTA). Cards with none of these are hidden. Add a screenshot in
// /public/projects/ and set imageUrl to replace the generated cover.
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
    title: "Birthday Love",
    description: "Birthday texts and e-cards feel generic. This interactive love letter opens a CSS-drawn sealed envelope and types out a heartfelt message in real time, with music and confetti.",
    highlights: [
      "Two-stage experience: the envelope opens into a letter with a custom typewriter hook, canvas-confetti bursts and HTML5 Audio",
      "Accessible by design: respects reduced motion, Esc to reseal, screen-reader labels",
      "All copy and assets in a typed content.ts module, so it can be re-personalized in minutes",
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "canvas-confetti"],
    privateLabel: "Private",
    icon: <Heart size={34} />,
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
].filter(p => p.github || p.link || p.privateLabel);

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
        .p-more { display: flex; align-items: center; gap: 1rem; margin: 4rem 0 2rem; font-family: var(--font-head), sans-serif; font-size: 1.35rem; font-weight: 800; color: var(--txt); }
        .p-more::after { content: ""; flex: 1; height: 1px; background: var(--border-accent); }
        /* auto-fit: any number of cards stretches to fill the row (no empty columns) */
        .p-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2rem; }
        /* 2-column range (tablet): a lone last card spans the row instead of leaving a gap */
        @media (min-width: 769px) and (max-width: 1147px) {
          .p-grid > article:last-of-type:nth-of-type(odd) { grid-column: 1 / -1; }
        }

        @media (max-width: 768px) {
          .projects { padding: 90px 0; }
          .p-container { padding: 0 1rem; }
          .p-grid { grid-template-columns: 1fr; gap: 1.5rem; }
        }
      `}</style>

      <div className="p-container">
        <h2 id="projects-title" className="sec-title">Featured <span className="grad">Projects</span></h2>
        <p className="sec-sub">Production case studies first, then personal projects with their code on GitHub.</p>

        {FEATURED.map((f, i) => (
          <FeaturedProject key={f.name} {...f} reverse={i % 2 === 1} />
        ))}

        <h3 className="p-more">More projects</h3>
        <div className="p-grid">
          {PROJECTS.map(p => (
            <CardProject key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
