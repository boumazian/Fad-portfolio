import { Phone, Mail, MapPin } from "lucide-react";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  X,
} from "lucide-react";
export default function ContactLeft (){
    return (
        <>
          <div className="bg-indigo-600 text-white p-10 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="mt-4 text-sm">
          Feel free to contact us? Submit your queries here and we will get back to you as soon as possible.
        </p>
      </div>
      <div className="mt-8">
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
        <div className="mt-6">
          <div className="flex space-x-4">
      <Facebook className="hover:text-gray-300" />
      <Instagram className="hover:text-gray-300" />
      <X className="hover:text-gray-300" />
      <Linkedin className="hover:text-gray-300" />
      <Youtube className="hover:text-gray-300" />
    </div>
        </div>
      </div>
    </div>
        </>
    )
}