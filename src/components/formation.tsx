import FormationItem from "./ui/formationItem";

const formations = [
  {
    title: "Diplome de Technicien Spécialisé",
    date: "JUIN 2024",
    etablissement : "Institut Spécialisé de Technologie Appliquee De Gestion Bab Tizimi Meknes",
    description1: "Infrastructure Digitale Option:Cloud Computing.",
    // description2: "AWS Certification covering cloud basics, pricing, services, and security.",
    // description3: "AWS Certification covering cloud basics, pricing, services, and security.",
    tag: "Diplome",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },

  {
    title: "Certificat De Formation Qualifiante",
    date: "JUIN 2024",
    etablissement : "Institut Spécialisé de Technologie Appliquee De Gestion Bab Tizimi Meknes",
    description1: "Testeur d'intrusions cybernitiques.",
    // description2: "AWS Certification covering cloud basics, pricing, services, and security.",
    // description3: "AWS Certification covering cloud basics, pricing, services, and security.",   
     tag: "Certificat",
    link: "#",
  },
    {
    title: "Baccalauréat",
    date: "Juin 2022",
    etablissement : "Lycee Zitoune Meknes",
    description1: "Filiere Sciences de la vie et de la Terre.",
    // description2: "AWS Certification covering cloud basics, pricing, services, and security.",
    // description3: "AWS Certification covering cloud basics, pricing, services, and security.",   
     tag: "Certificat",
    link: "#",
  },
    {
    title: "Notions De Base sur la commutation, le routage et le sans fil",
    date: "09/05/2024",
    etablissement : "ISTAG BAB TIZIMI ",
    description1: "CCNAv7:Notions De Base sur la commutation, le routage et le sans fil, administré par l'instructeur soussigné.",
    // description2: "AWS Certification covering cloud basics, pricing, services, and security.",
    // description3: "AWS Certification covering cloud basics, pricing, services, and security.",   
     tag: "Attestation",
    link: "#",
  },
  {
    title: "Introduction aux réseaux",
    date: "06/06/2023",
    etablissement : "ISTAG BAB TIZIMI ",
    description1: "CCNAv7:Introduction aux réseaux, administré par l'instructeur soussigné.",
    // description2: "AWS Certification covering cloud basics, pricing, services, and security.",
    // description3: "AWS Certification covering cloud basics, pricing, services, and security.",   
     tag: "Attestation",
    link: "#",
  },
  {
    title: "Cybersecurity Essentials",
    date: "25/03/2023",
    etablissement : "ISTAG BAB TIZIMI ",
    description1: "CCNAv7:Cybersecurity Essentials, administré par l'instructeur soussigné.",
    // description2: "AWS Certification covering cloud basics, pricing, services, and security.",
    // description3: "AWS Certification covering cloud basics, pricing, services, and security.",   
     tag: "Attestation",
    link: "#",
  },
   {
    title: "Introduction to IoT",
    date: "13/04/2024",
    etablissement : "ISTAG BAB TIZIMI ",
    description1: "CCNAv7:Introduction to IoT, administré par l'instructeur soussigné.",
    // description2: "AWS Certification covering cloud basics, pricing, services, and security.",
    // description3: "AWS Certification covering cloud basics, pricing, services, and security.",   
     tag: "Attestation",
    link: "#",
  },
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
