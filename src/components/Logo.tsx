"use client";

import React from "react";

type LogoProps = {
  variant?: "default" | "alimentation" | "conseil" | "bureautique";
  size?: "sm" | "md" | "lg";
};

export default function Logo({ size = "md" }: LogoProps) {
  // Define heights based on size to fit perfectly in Header and Footer layouts
  const heights = {
    sm: "h-8 md:h-10",
    md: "h-12 md:h-16",
    lg: "h-20 md:h-24",
  };

  return (
    <div className={`flex items-center justify-center ${heights[size]} transition-all duration-300`}>
      <img
        src="/assets/logo.png"
        alt="Ets Tout Est Grâce"
        className="h-full w-auto object-contain rounded-md shadow-sm hover:scale-105 duration-300"
      />
    </div>
  );
}

