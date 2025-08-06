// components/Card.tsx
import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

export default function CardProject({
  imageUrl,
  title,
  description,
  buttonText = "Read More",
  onClick,
}: CardProps) {
  return (
    
    <div className="relative max-w-xl border border-solid border-gray-200 rounded-2xl overflow-hidden transition-all duration-500">
      <div className="w-full">
        <img
          src={imageUrl}
          alt="Card image"
          className="w-full h-43 object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-4">
        <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500">
          {title}
        </h4>
        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
          {description}
        </p>
        <button
          onClick={onClick}
          className="bg-indigo-600 shadow-sm rounded-sm py-2 px-5 text-xs text-white font-semibold"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
