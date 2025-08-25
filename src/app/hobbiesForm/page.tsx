import React from "react";

import CardHobbies from "@/components/ui/cardHobbies";


export default function HobbiesForm() {
    return (

        <>
          <div >
                <h1 className=" text-center text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">Featured Projects</h1>
                <p className="text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Explore a collection of projects that showcase my skills, creativity, and problem-solving abilities. </p>
                <div className="px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <CardHobbies
                        imageUrl="https://pagedone.io/asset/uploads/1695365240.png"
                        title="Fast Transaction"
                        description="Provides faster transaction, so money arrives in realtime"
                    />
                </div>

            </div>
        </>
    );
}
