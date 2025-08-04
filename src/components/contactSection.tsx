import ContactLeft from "./ui/contactLeft";
import ContactReight from "./ui/contactReight";

export default function ContactSection() {
  return (
<div className="min-h-screen bg-white flex items-center justify-center py-6">
      <div className=" grid grid-cols-1 md:grid-cols-2 w-full sm:max-w-11/12 shadow-lg rounded-xl overflow-hidden">
        <ContactLeft />
        <div className=" p-8">
          <ContactReight />
        </div>
      </div>
    </div>
  );
}
