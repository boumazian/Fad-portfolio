import React from "react";

interface CardProps {
  imageUrl?: string; // optional for text-only cards
  title: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
  variant?: "default" | "outlined" | "shadow"; // visual style
  className?: string; // for external customization
  hoverEffect?: boolean; // toggle hover animation
}

export default function CardProject({
  imageUrl,
  title,
  description,
  buttonText,
  onClick,
  variant = "default",
  className = "",
  hoverEffect = true,
}: CardProps) {
  // classes dynamiques selon le variant
  const baseClasses =
    "relative max-w-xl rounded-2xl overflow-hidden transition-all duration-500";
  const variantClasses =
    variant === "outlined"
      ? "border border-gray-300 bg-white"
      : variant === "shadow"
      ? "shadow-md bg-white"
      : "border border-transparent bg-white";
  const hoverClasses = hoverEffect ? "hover:shadow-xl hover:-translate-y-1" : "";

  return (
    <div className={`${baseClasses} ${variantClasses} ${hoverClasses} ${className}`}>
      {imageUrl && (
        <div className="w-full">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      <div className="p-5">
        <h4 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
          {title}
        </h4>

        {description && (
          <p className="text-sm text-gray-600 leading-6 mb-4">{description}</p>
        )}

        {buttonText && (
          <button
            onClick={onClick}
            className="bg-indigo-600 hover:bg-indigo-700 rounded-md py-2 px-5 text-sm text-white font-semibold transition-all duration-300"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}
