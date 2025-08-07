import FormationItem from "./ui/formationItem";

const formations = [
  {
    title: "AWS Cloud Practitioner",
    date: "July 2025",
    description: "AWS Certification covering cloud basics, pricing, services, and security.",
    tag: "Certification",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    title: "Next.js Mastery Course",
    date: "May 2025",
    description: "Complete project-based course on building advanced web apps with Next.js.",
    tag: "Formation",
    link: "#",
  },
  {
    title: "CloudFormation Deep Dive",
    date: "April 2025",
    description: "Hands-on formation to build and manage infrastructure as code with AWS CloudFormation.",
    tag: "Workshop",
    link: "#",
  },
  // Zid li bghiti men formations...
];

export default function Formation() {
  return (
    <div className="px-4 sm:px-8 max-w-4xl mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">🎓 My Formations & Certifications</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {formations.map((item, index) => (
          <FormationItem key={index} {...item} />
        ))}
      </ol>
    </div>
  );
}
