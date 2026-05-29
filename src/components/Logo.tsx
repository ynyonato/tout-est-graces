"use client";

import React from "react";

type LogoProps = {
  variant?: "default" | "alimentation" | "conseil" | "bureautique";
  size?: "sm" | "md" | "lg";
};

export default function Logo({ variant = "default", size = "md" }: LogoProps) {
  // Define dimensions based on size
  const sizes = {
    sm: {
      container: "h-10",
      teg: "text-2xl",
      sub: "text-[7px]",
      offsetE: "left-[14px] top-[1px] text-[15px]",
      offsetG: "left-[24px]",
      width: "w-[44px]",
    },
    md: {
      container: "h-16",
      teg: "text-4xl",
      sub: "text-[10px]",
      offsetE: "left-[22px] top-[2px] text-[24px]",
      offsetG: "left-[38px]",
      width: "w-[72px]",
    },
    lg: {
      container: "h-24",
      teg: "text-6xl",
      sub: "text-[14px]",
      offsetE: "left-[36px] top-[3px] text-[38px]",
      offsetG: "left-[60px]",
      width: "w-[110px]",
    },
  };

  const selected = sizes[size];

  // Define color for the lowercase 'e' based on activity
  const eColors = {
    default: "text-forest dark:text-forest", // default brand green
    alimentation: "text-sunset dark:text-sunset", // orange
    conseil: "text-forest dark:text-forest", // green
    bureautique: "text-silver dark:text-silver-dark", // silver grey
  };

  const eColorClass = eColors[variant];

  return (
    <div className={`flex flex-col items-center justify-center select-none font-serif ${selected.container}`}>
      <div className={`relative ${selected.width} h-[75%] flex items-center`}>
        {/* T */}
        <span className="absolute left-0 text-slate-900 dark:text-slate-100 font-extrabold font-serif leading-none transition-theme">
          T
        </span>
        {/* e (intertwined arrow monogram style) */}
        <span
          className={`absolute ${selected.offsetE} font-sans italic font-light font-serif leading-none select-none transition-theme ${eColorClass}`}
          style={{ fontFamily: "'Sora', sans-serif", transform: "scale(1.15)" }}
        >
          e
        </span>
        {/* G */}
        <span className="absolute right-0 text-slate-905 dark:text-slate-100 font-extrabold font-serif leading-none transition-theme">
          G
        </span>
      </div>
      <div className="h-[25%] flex items-center justify-center">
        <span
          className={`font-sans tracking-[0.25em] font-semibold text-slate-900 dark:text-slate-200 transition-theme ${selected.sub}`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          ETS TOUT EST GRÂCE
        </span>
      </div>
    </div>
  );
}
