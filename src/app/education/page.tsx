import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/site";
import Formation from "@/components/formation";

export const metadata: Metadata = {
  title: "Education & Certifications",
  description: "Specialized Technician Diploma in Digital Infrastructure (Cloud Computing) and Cisco Networking Academy certifications: CCNA, Cybersecurity Essentials and IoT.",
  alternates: { canonical: "/education" },
  openGraph: { title: "Education & Certifications | Fadoua Boumazian", description: "Specialized Technician Diploma in Digital Infrastructure (Cloud Computing) and Cisco Networking Academy certifications: CCNA, Cybersecurity Essentials and IoT.", url: "/education", images: [OG_IMAGE] },
};

export default function EducationPage() {
  return <Formation />;
}
