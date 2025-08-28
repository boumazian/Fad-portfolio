import { Phone, Mail, MapPin, Github } from "lucide-react";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  X,
} from "lucide-react";

export default function ContactLeft() {
  return (
    <>
      <div className="bg-indigo-600 text-white p-10 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-sm">
            Feel free to contact us? Submit your queries here and we will get
            back to you as soon as possible.
          </p>
        </div>

        <div className="mt-8">
          {/* contact info */}
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> 212-719-133-915
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> studentfadoua@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Meknes, Morocco
            </div>
          </div>

          {/* social links */}
          <div className="mt-6">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100089240119734"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="hover:text-gray-300 w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/fadouaboumazian?igsh=MWZxajh1aGgxZGt5bg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="hover:text-gray-300 w-6 h-6" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/fadoua-boumazian-6656a8298/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="hover:text-gray-300 w-6 h-6" />
              </a>
              
              <a
                href="https://github.com/boumazian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="hover:text-gray-300 w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
