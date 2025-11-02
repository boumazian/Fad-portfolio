export default function SkillsCard() {
  // Définir toutes les catégories et leurs compétences dans un seul objet
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-500 to-indigo-500",
      icon: (
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      ),
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend Development",
      color: "bg-green-500",
      icon: (
        <path d="M4 6h16M4 12h16M4 18h16" />
      ),
      skills: ["Node.js", "Express", "Vercel", "Prisma", "API"],
    },
    {
      title: "Design",
      color: "bg-pink-500",
      icon: (
        <path d="M4 4h16v16H4z" />
      ),
      skills: ["Figma", "UI/UX", "Design Systems", "Canva", "Prototyping", "Responsive Design"],
    },
    {
      title: "Cloud",
      color: "bg-yellow-500",
      icon: (
        <path d="M3 15a4 4 0 104 4h11a4 4 0 100-8 5 5 0 00-9-3 6 6 0 00-6 6z" />
      ),
      skills: ["Microsoft Azure", "Openstack", "Amazon Web Service", "CloudFormation", "Terraform"],
    },
    {
      title: "Security",
      color: "bg-red-500",
      icon: (
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      ),
      skills: ["IAM", "Cognito", "Access Control", "VPC Security", "Encryption", "Firewall Rules"],
    },
    {
      title: "Network",
      color: "bg-blue-600",
      icon: (
        <path d="M2 12h20M12 2v20M4 4l16 16" />
      ),
      skills: ["TCP/IP", "DNS", "Load Balancers", "VPC", "Subnets", "Routing", "Network Monitoring"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-20 lg:px-44 pb-24">
      {skillCategories.map((category) => (
        <div
          key={category.title}
          className="rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`p-2 rounded-lg text-white ${
                category.color.includes("from-")
                  ? `bg-gradient-to-tr ${category.color}`
                  : category.color
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {category.icon}
              </svg>
            </div>
            <h3 className="text-xl font-semibold">{category.title}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
