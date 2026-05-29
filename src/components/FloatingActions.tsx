"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="p-3.5 rounded-full bg-slate-900/90 dark:bg-sand-light/90 text-white dark:text-slate-900 shadow-md hover:scale-110 active:scale-95 transition-transform duration-150 cursor-pointer"
            aria-label="Retour en haut"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Float with Pulsing Effect */}
      <motion.a
        href="https://wa.me/22892151326"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-150 cursor-pointer"
        aria-label="Contact WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 -z-10 group-hover:opacity-40" />
        
        <MessageCircle size={22} className="fill-white/10" />

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900/95 dark:bg-sand-light/95 text-white dark:text-slate-900 text-xs font-semibold font-poppins tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
          Besoin d&apos;aide ? Écrivez-nous !
        </span>
      </motion.a>

    </div>
  );
}
