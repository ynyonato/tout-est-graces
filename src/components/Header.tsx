"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../app/context/ThemeContext";
import Logo from "./Logo";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Galerie", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Map sub-logo based on route
  const getLogoVariant = () => {
    if (pathname.startsWith("/services")) return "alimentation";
    if (pathname.startsWith("/about")) return "conseil";
    return "default";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-theme ${
        scrolled ? "glass-nav shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      {/* Gradient bottom border glow when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-forest/30 dark:via-gold/30 to-transparent" />
      )}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo size="sm" variant={getLogoVariant()} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-poppins text-sm tracking-wide font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 text-slate-800 dark:text-slate-200 hover:text-forest dark:hover:text-gold transition-theme hover:scale-105 duration-200 ${
                  isActive ? "text-forest dark:text-gold font-bold" : ""
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-forest dark:bg-gold rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Theme Switcher (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-theme cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Quick Contact Button */}
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest dark:bg-gold text-white dark:text-slate-900 font-poppins text-xs tracking-wider font-semibold shadow-sm hover:bg-forest-dark dark:hover:bg-white transition-theme hover:scale-105 duration-200"
          >
            Nous Contacter
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Actions Container (Drawer Menu & Theme toggle) */}
        <div className="flex md:hidden items-center gap-3">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 transition-theme cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 transition-theme cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 w-full glass-effect shadow-lg py-6 px-8 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4 font-poppins text-base font-semibold">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`py-2 border-b border-slate-100 dark:border-slate-850 transition-theme ${
                      isActive
                        ? "text-forest dark:text-gold pl-2 border-l-2 border-l-forest dark:border-l-gold"
                        : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="https://wa.me/22892151326"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-forest dark:bg-gold text-white dark:text-slate-900 font-poppins font-bold text-sm tracking-wide shadow-sm"
            >
              Parler sur WhatsApp
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
