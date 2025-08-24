
import ContactLeft from "@/components/ui/contactLeft";
import ContactReight from "@/components/ui/contactReight";

export default function ContactSection() {
  return (
 <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
  {/* Title & Subtitle */}
  <div className="max-w-3xl mx-auto text-center mb-8">
    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-2">
      Contact Me
    </h1>
    <p className="text-base sm:text-lg text-gray-500">
      Have a project in mind or want to discuss opportunities? Let's connect!
    </p>
  </div>

  {/* Form Container */}
  <div className="flex items-center justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 w-full sm:max-w-6xl shadow-lg rounded-xl overflow-hidden">
      <ContactLeft />
      <div className="p-8">
        <ContactReight/>
      </div>
    </div>
  </div>
</div>


  );
}
