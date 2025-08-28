import React from "react";

import CardHobbies from "@/components/ui/cardHobbies";


export default function HobbiesForm() {
  return (

    <>
      <div >
        <h1 className=" text-center text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">Hobbies & Interests</h1>
        <p className="text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Discover the passions that inspire me beyond work.
          Activities that fuel my creativity, discipline, and personal growth. </p>
        <div className="px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CardHobbies
            imageUrls={[
              "/securite1.jpeg",
              "/securite2.jpeg",
              "/securite3.jpeg",

            ]}
            title="First Aid Rescuer"
            description=" National Organization dor Relief, Rescue and Rapid Intervention."
          />
          <CardHobbies
            imageUrls={[
              "/dance2.jpeg",
              "/dance1.jpeg",
              "/dance3.jpeg",

            ]}
            title="Dancing"
            description="Foreign dance, whether it's Zumba, African dance, or dancing to Moroccan and national songs."
          />
          <CardHobbies
            imageUrls={[
              "/tkd1.jpg",
              "/tkd2.jpg",

            ]}
            title="Taekwondo "
            description="Taekwondo champion with Ayas Sporting Taekwondo Association."
          />

          <CardHobbies
            imageUrls={[
              "/acting1.jpeg",
              "/acting2.jpeg",
              "/acting3.jpeg",
              "/acting4.jpeg",
              "/acting5.jpeg",
            ]}
            title="Acting"
            description="Acting and portraying characters, whether in plays, expressive tableaux, silent scenes, or sketches."
          />

          <CardHobbies
            imageUrls={[
              "/swiming1.jpg",
              "/swiming2.jpg",

            ]}
            title="Swimming"
            description="Swimming, whether in the pool or in the sea."
          />


          <CardHobbies
            imageUrls={[
              "/a1.jpg",
              "/a2.JPG",


            ]}
            title="Ambassador"
            description="Ambassador at the Institute Spécialisé de Technologie Appliquée de Gestion Bab Tizimi Meknes."
          />

          <CardHobbies
            imageUrls={[
              "/shild3.jpeg",
              "/shild2.jpeg",
              "/shild1.jpeg",
              "/shild4.jpeg",


            ]}
            title="Coordinator"
            description="Coordinator at summer camps and also accompanying trips with the Archipelago Association for Cultures in the city of Azrou."
          />

        </div>

      </div>
    </>
  );
}
