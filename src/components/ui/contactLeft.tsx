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
        <Phone className="w-4 h-4" /> 470-601-1911
      </div>
      <div className="flex items-center gap-2">
        <Mail className="w-4 h-4" /> Pagedone1234@gmail.com
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4" /> 789 Oak Lane, Lakeside, TX 54321
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