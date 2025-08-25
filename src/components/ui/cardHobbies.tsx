"use client";

import React, { useState } from "react";

interface CardProps {
  imageUrls: string[]; // بدلناها array بدل string واحد
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

export default function CardHobbies({
  imageUrls,
  title,
  description,
  buttonText = "Read More",
  onClick,
}: CardProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-xl border border-solid border-gray-200 rounded-2xl overflow-hidden transition-all duration-500">
      {/* Carousel */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover rounded-t-2xl transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Prev button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/40 hover:bg-white/70 rounded-full p-2"
        >
          ◀
        </button>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/40 hover:bg-white/70 rounded-full p-2"
        >
          ▶
        </button>

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {imageUrls.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-indigo-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-2">
        <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500">
          {title}
        </h4>
        <p className="text-sm font-normal text-gray-500 leading-5 mb-5">
          {description}
        </p>
      
      </div>
    </div>
  );
}
