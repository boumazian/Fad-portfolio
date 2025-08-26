import React from "react";

import CardHobbies from "@/components/ui/cardHobbies";


export default function HobbiesForm() {
  return (

    <>
      <div >
        <h1 className=" text-center text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">Hobbies & Interests</h1>
        <p className="text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Discover the passions that inspire me beyond work.
          Activities that fuel my creativity, discipline, and personal growth.. </p>
        <div className="px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CardHobbies
            imageUrls={[
              "/securite1.jpeg",
              "/securite2.jpeg",
              "/securite3.jpeg",

            ]}
            title="Fast Transaction"
            description="Provides faster transaction, so money arrives in realtime"
          />
          <CardHobbies
            imageUrls={[
              "/dance2.jpeg",
              "/dance1.jpeg",
              "/dance3.jpeg",

            ]}
            title="Fast Transaction"
            description="Provides faster transaction, so money arrives in realtime"
          />
          <CardHobbies
            imageUrls={[
              "/tkd1.jpg",
              "/tkd2.jpg",

            ]}
            title="Fast Transaction"
            description="Provides faster transaction, so money arrives in realtime"
          />

          <CardHobbies
            imageUrls={[
              "/acting1.jpeg",
              "/acting2.jpeg",
              "/acting3.jpeg",
              "/acting4.jpeg",
              "/acting5.jpeg",
            ]}
            title="Fast Transaction"
            description="Provides faster transaction, so money arrives in realtime"
          />

          <CardHobbies
            imageUrls={[
              "/swiming1.jpg",
              "/swiming2.jpg",

            ]}
            title="Fast Transaction"
            description="Provides faster transaction, so money arrives in realtime"
          />


          <CardHobbies
            imageUrls={[
              "/a1.jpg",
              "/a2.JPG",


            ]}
            title="Fast Transaction"
            description="Provides faster transaction, so money arrives in realtime"
          />

        </div>

      </div>
    </>
  );
}
