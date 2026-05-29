"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Phone, MapPin, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: "Alimentation Artisanale", href: "/services?tab=alimentation" },
    { name: "Services Bureautiques", href: "/services?tab=bureautique" },
    { name: "Formations Professionnelles", href: "/services?tab=formations" },
  ];

  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/about" },
    { name: "Nos Services", href: "/services" },
    { name: "Notre Galerie", href: "/gallery" },
    { name: "Nous Contacter", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-charcoal text-slate-700 dark:text-slate-350 pt-16 pb-8 transition-theme">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="md:col-span-1.5 flex flex-col gap-4">
          <div className="flex items-start">
            <Logo size="md" variant="default" />
          </div>
          <p className="font-inter text-sm leading-relaxed text-slate-500 dark:text-slate-400 mt-2 max-w-sm">
            Ets Tout Est Grâce vous accompagne au quotidien avec des produits alimentaires d&apos;exception, des services bureautiques rapides et des formations professionnelles pratiques à Atakpamé.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://wa.me/22892151326"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-forest/10 hover:bg-forest/20 text-forest dark:text-gold dark:bg-gold/10 dark:hover:bg-gold/20 transition-theme"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 dark:bg-blue-900/10 dark:hover:bg-blue-900/20 transition-theme flex items-center justify-center"
              aria-label="Facebook"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Services Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sora text-sm font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200">
            Activités
          </h4>
          <ul className="flex flex-col gap-3 font-poppins text-xs font-medium">
            {servicesLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-forest dark:hover:text-gold transition-theme flex items-center gap-1 group"
                >
                  {link.name}
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sora text-sm font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200">
            Navigation
          </h4>
          <ul className="flex flex-col gap-3 font-poppins text-xs font-medium">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-forest dark:hover:text-gold transition-theme"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sora text-sm font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200">
            Nous Trouver
          </h4>
          <ul className="flex flex-col gap-4 font-inter text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-forest dark:text-gold shrink-0 mt-0.5" />
              <span>Atakpamé, Route de Nangbéto, Région des Plateaux, Togo</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-forest dark:text-gold shrink-0" />
              <a href="tel:+22892151326" className="hover:text-forest dark:hover:text-gold transition-theme">
                +228 92 15 13 26
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-forest dark:text-gold shrink-0" />
              <a href="mailto:contact@toutestgrace.tg" className="hover:text-forest dark:hover:text-gold transition-theme">
                contact@toutestgrace.tg
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-405 font-inter gap-4">
        <span>
          &copy; {currentYear} Ets Tout Est Grâce. Tous droits réservés.
        </span>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Mentions légales</a>
          <a href="#" className="hover:underline">Confidentialité</a>
          <span>Fait au Togo 🇹🇬</span>
        </div>
      </div>
    </footer>
  );
}
