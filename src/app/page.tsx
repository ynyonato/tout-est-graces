"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  MessageCircle, 
  Leaf, 
  Printer, 
  GraduationCap, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Mail, 
  Send,
  Users,
  Award,
  Sparkles,
  ShieldCheck
} from "lucide-react";

export default function HomePage() {
  // Form submission state
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", message: "" });
    }, 1200);
  };

  // Scroll Reveal Animations Settings
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  // Activities Data
  const activities = [
    {
      title: "Alimentation Artisanale",
      desc: "Des saveurs authentiques et saines pour sublimer vos repas.",
      icon: <Leaf className="text-sunset" size={24} />,
      color: "bg-white/80 dark:bg-charcoal/80 backdrop-blur-sm hover:glow-sunset hover:shadow-lg",
      accentColor: "bg-sunset",
      textTheme: "text-sunset",
      items: ["Épices de Grâce moulues (Gingembre, Poivre, Piment)", "Amuse-gueules croustillants (Chin-chin, Chips de plantain)", "Préparations artisanales de qualité supérieure"],
      image: "/assets/spices_premium.png",
      link: "/services?tab=alimentation"
    },
    {
      title: "Services Bureautiques",
      desc: "Des prestations de secrétariat rapides et professionnelles.",
      icon: <Printer className="text-slate-505" size={24} />,
      color: "bg-white/80 dark:bg-charcoal/80 backdrop-blur-sm hover:glow-silver hover:shadow-lg",
      accentColor: "bg-slate-400",
      textTheme: "text-slate-500",
      items: ["Impressions et photocopies Haute Définition", "Numérisations (Scan) et archivage numérique", "Articles scolaires et fournitures de bureau"],
      image: "/assets/flyer_dynamisme_1.jpg",
      link: "/services?tab=bureautique"
    },
    {
      title: "Conseils & Formations",
      desc: "Boostez vos compétences informatiques avec nos modules.",
      icon: <GraduationCap className="text-forest" size={24} />,
      color: "bg-white/80 dark:bg-charcoal/80 backdrop-blur-sm hover:glow-forest hover:shadow-lg",
      accentColor: "bg-forest",
      textTheme: "text-forest",
      items: ["Initiation complète à l'outil informatique", "Bureautique pratique (Microsoft Word, Excel)", "Internet, recherche efficace et outils collaboratifs"],
      image: "/assets/training_class.png",
      link: "/services?tab=formations"
    }
  ];

  // Gallery items for the Pinterest-style showcase preview
  const galleryPreview = [
    { src: "/assets/spices_premium.png", title: "Épices de Grâce", cat: "Alimentation" },
    { src: "/assets/flyer_alimentation.jpg", title: "Marché local - Atakpamé", cat: "Alimentation" },
    { src: "/assets/training_class.png", title: "Atelier Bureautique", cat: "Formation" },
    { src: "/assets/flyer_dynamisme_2.jpg", title: "Service Bureautique", cat: "Bureautique" }
  ];

  return (
    <div className="relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center py-12 md:py-20 overflow-hidden hero-gradient-bg">
        {/* Background Decorative Gradients */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-sunset/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-forest/5 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-effect text-xs font-semibold tracking-wider text-forest dark:text-gold uppercase font-poppins w-fit">
              <Sparkles size={12} />
              <span>Entreprise Togolaise Agile & Polyvalente</span>
            </div>
            
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
              Le goût, le service et la <span className="text-forest dark:text-gold font-serif italic font-light">grâce</span> réunis.
            </h1>
            
            <p className="font-inter text-lg md:text-xl leading-relaxed text-slate-655 dark:text-slate-350 max-w-xl">
              Ets Tout Est Grâce vous accompagne avec des produits alimentaires de qualité, des services bureautiques de confiance et des formations pratiques pour révéler votre potentiel.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-poppins text-xs tracking-wider font-bold shadow-md hover:scale-105 transition-transform"
              >
                Nous Contacter
              </Link>
              <a
                href="https://wa.me/22892151326"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-poppins text-xs tracking-wider font-bold shadow-md hover:scale-105 transition-transform"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Hero Visual Collage (Playing cards fan-out effect) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] w-full"
          >
            {/* 1. Formations Card (Back Card, rotated counter-clockwise) */}
            <div className="absolute top-[4%] left-[-10%] w-[64%] h-[74%] rounded-2xl overflow-hidden shadow-xl transform -rotate-12 hover:-rotate-4 hover:scale-[1.02] transition-all duration-300 z-10">
              <Image
                src="/assets/hero_formations.png"
                alt="Formations Pratiques"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4 flex flex-col justify-end h-20">
                <span className="font-poppins text-xs font-bold text-emerald-400 uppercase tracking-wider">Formations</span>
              </div>
            </div>

            {/* 2. Bureautique Card (Middle Card, rotated clockwise) */}
            <div className="absolute top-0 right-0 w-[65%] h-[80%] rounded-2xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-2 hover:scale-[1.02] transition-all duration-300 z-20">
              <Image
                src="/assets/hero_bureautique.png"
                alt="Services Bureautiques"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4 flex flex-col justify-end h-20">
                <span className="font-poppins text-xs font-bold text-slate-300 uppercase tracking-wider">Bureautique</span>
              </div>
            </div>

            {/* 3. Alimentation Card (Front/Top Card, slightly rotated counter-clockwise) */}
            <div className="absolute bottom-0 left-[15%] w-[55%] h-[60%] rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 hover:scale-[1.03] transition-all duration-300 z-30">
              <Image
                src="/assets/hero_alimentation.png"
                alt="Alimentation Artisanale"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4 flex flex-col justify-end h-20">
                <span className="font-poppins text-xs font-bold text-gold uppercase tracking-wider">Alimentation</span>
              </div>
            </div>

            {/* Float Badge - Moved down and center directly over the Alimentation image */}
            <div className="absolute bottom-[32%] left-[24%] md:left-[28%] glass-effect rounded-2xl p-3 md:p-4 shadow-lg z-40 flex items-center gap-3 animate-float">
              <div className="p-2.5 rounded-full bg-forest text-white">
                <Leaf size={16} />
              </div>
              <div className="font-poppins">
                <p className="text-[10px] text-sunset font-bold uppercase tracking-wider">Alimentation</p>
                <p className="text-xs font-bold">100% Naturel</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Wave Divider: Hero → About */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 60" className="w-full h-[40px] md:h-[60px] fill-slate-50 dark:fill-charcoal" preserveAspectRatio="none">
          <path d="M0,0 C480,60 960,0 1440,60 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* 2. SECTION À PROPOS */}
      <section className="py-20 bg-slate-50 dark:bg-charcoal transition-theme">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text description */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="font-poppins text-xs font-bold tracking-widest text-forest dark:text-gold uppercase">
                Qui sommes-nous ?
              </span>
              <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                Le symbole du dynamisme et de l&apos;adaptabilité.
              </h2>
              <p className="font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-350">
                Créée en <strong>2023</strong> à Atakpamé au Togo, <strong>Ets Tout Est Grâce</strong> est née d&apos;une vision agile et polyvalente. Initialement axée sur les services bureautiques essentiels, l&apos;entreprise a su évoluer et se diversifier pour répondre aux besoins changeants de notre communauté.
              </p>
              <p className="font-inter text-sm leading-relaxed text-slate-655 dark:text-slate-350">
                Aujourd&apos;hui, notre promotrice impulse une dynamique forte qui s&apos;étend de la production d&apos;alimentation artisanale saine (épices locales, amuse-gueules) aux formations informatiques appliquées, avec toujours le même engagement : la proximité, le professionnalisme et la grâce.
              </p>
              
              {/* Highlight Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="font-sora text-3xl md:text-4xl font-extrabold text-forest dark:text-gold drop-shadow-sm">2023</h3>
                  <p className="font-poppins text-[10px] uppercase tracking-wider text-slate-400">Création</p>
                </div>
                <div>
                  <h3 className="font-sora text-3xl md:text-4xl font-extrabold text-forest dark:text-gold drop-shadow-sm">3</h3>
                  <p className="font-poppins text-[10px] uppercase tracking-wider text-slate-400">Pôles d&apos;activité</p>
                </div>
                <div>
                  <h3 className="font-sora text-3xl md:text-4xl font-extrabold text-forest dark:text-gold drop-shadow-sm">100%</h3>
                  <p className="font-poppins text-[10px] uppercase tracking-wider text-slate-400">Engagé local</p>
                </div>
              </div>
            </div>

            {/* Visual representation */}
            <div className="lg:col-span-5 relative h-[380px] w-full rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/assets/flyer_alimentation.jpg"
                alt="Sourire et proximité Ets Tout Est Grâce"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif italic text-lg leading-relaxed">&ldquo;La force d&apos;une entreprise se mesure à sa capacité à servir avec joie.&rdquo;</p>
                <p className="font-poppins text-xs font-bold tracking-wider mt-2 uppercase text-gold">Atakpamé, Togo</p>
              </div>
            </div>

          </div>

          {/* Nos Engagements de Qualité */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800 shadow-sm transition-theme">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-forest/10 text-forest dark:text-gold rounded-xl shrink-0">
                <Award size={20} />
              </div>
              <div>
                <h4 className="font-sora text-sm font-bold text-slate-800 dark:text-white">Alimentation Saine</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Épices et douceurs locales préparées artisanalement, 100% naturelles et sans additifs.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-forest/10 text-forest dark:text-gold rounded-xl shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-sora text-sm font-bold text-slate-800 dark:text-white">Impression Professionnelle</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Des impressions haute définition et un secrétariat réactif pour toutes vos urgences.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-forest/10 text-forest dark:text-gold rounded-xl shrink-0">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-sora text-sm font-bold text-slate-800 dark:text-white">Formations sur Mesure</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Modules pratiques d'informatique en petits groupes avec un formateur dédié.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Wave Divider: About → Activities */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 60" className="w-full h-[40px] md:h-[60px] fill-white dark:fill-deepblack" preserveAspectRatio="none">
          <path d="M0,60 C480,0 960,60 1440,0 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* 3. SECTION ACTIVITÉS */}
      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
            <span className="font-poppins text-xs font-bold tracking-widest text-forest dark:text-gold uppercase">
              Nos Domaines d&apos;activité
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Une offre plurielle pensée pour vous
            </h2>
            <p className="font-inter text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Découvrez nos trois pôles de services, de l&apos;alimentation artisanale aux solutions de bureau et formations.
            </p>
          </div>

          {/* Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {activities.map((act) => (
              <motion.div
                key={act.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`flex flex-col rounded-3xl p-8 transition-theme overflow-hidden border border-slate-100 dark:border-slate-800/50 ${act.color}`}
              >
                {/* Colored top accent bar */}
                <div className={`w-12 h-1 rounded-full mb-6 ${act.accentColor}`} />

                {/* Visual card header */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 p-3 bg-white dark:bg-charcoal rounded-xl shadow-md">
                    {act.icon}
                  </div>
                </div>

                <h3 className="font-sora text-xl font-bold mb-2 text-slate-800 dark:text-white">
                  {act.title}
                </h3>
                <p className="font-inter text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {act.desc}
                </p>

                {/* Items List */}
                <ul className="flex flex-col gap-3 font-inter text-sm mb-8 flex-grow">
                  {act.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-655 dark:text-slate-350">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={act.link}
                  className={`flex items-center justify-between mt-auto pt-4 font-poppins text-xs font-bold tracking-wider uppercase hover:underline ${act.textTheme}`}
                >
                  En savoir plus
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Wave Divider: Activities → Gallery */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 60" className="w-full h-[40px] md:h-[60px] fill-slate-50 dark:fill-charcoal" preserveAspectRatio="none">
          <path d="M0,0 C480,60 960,0 1440,60 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* 4. GALERIE VISUELLE (Pinterest style) */}
      <section className="py-20 bg-slate-50 dark:bg-charcoal transition-theme">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="flex flex-col gap-4">
              <span className="font-poppins text-xs font-bold tracking-widest text-forest dark:text-gold uppercase">
                Galerie Photos
              </span>
              <h2 className="font-sora text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                Immersion dans notre artisanat
              </h2>
            </div>
            <Link
              href="/gallery"
              className="flex items-center gap-2 font-poppins text-xs font-bold tracking-wider text-forest dark:text-gold uppercase hover:underline"
            >
              Voir toute la galerie
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Pinterest Preview Layout — masonry-style varied heights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPreview.map((item, index) => (
              <div 
                key={index} 
                className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${index % 3 === 0 ? 'h-80' : index % 3 === 1 ? 'h-64' : 'h-72'}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" >
                  <span className="px-2.5 py-1 rounded-full bg-forest dark:bg-gold text-white dark:text-slate-900 font-poppins text-[9px] font-bold uppercase tracking-widest w-fit mb-2">
                    {item.cat}
                  </span>
                  <h4 className="font-sora text-white text-base font-bold">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Wave Divider: Gallery → Pourquoi */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 60" className="w-full h-[40px] md:h-[60px] fill-slate-50/50 dark:fill-charcoal/20" preserveAspectRatio="none">
          <path d="M0,60 C480,0 960,60 1440,0 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* 5. SECTION POURQUOI NOUS CHOISIR (Premium split list layout) */}
      <section className="py-24 bg-slate-50/50 dark:bg-charcoal/20 transition-theme">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Sticky Header */}
            <div className="lg:col-span-5 lg:sticky lg:top-[120px] flex flex-col gap-5">
              <span className="font-poppins text-xs font-bold tracking-widest text-forest dark:text-gold uppercase">
                Pourquoi nous choisir
              </span>
              <h2 className="font-sora text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 dark:text-white">
                Pourquoi accorder votre confiance à Tout Est Grâce ?
              </h2>
              <p className="font-inter text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Nous fusionnons proximité locale, exigence de qualité et agilité professionnelle pour offrir des solutions concrètes aux familles et entreprises d&apos;Atakpamé.
              </p>
              <div className="w-16 h-1 bg-forest dark:bg-gold rounded-full mt-2" />
            </div>

            {/* Right Value List (Staggered modern numbers layout with connecting line) */}
            <div className="lg:col-span-7 flex flex-col gap-10 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[22px] md:left-[28px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-forest via-gold to-forest dark:from-gold dark:via-forest dark:to-gold opacity-20 hidden lg:block" />
              
              {/* Item 1 */}
              <div className="flex gap-6 md:gap-8 items-start group relative">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="font-serif text-4xl md:text-5xl font-light text-forest dark:text-gold leading-none select-none transition-theme group-hover:scale-110 duration-200">
                    01
                  </span>
                  <Users size={18} className="text-forest/60 dark:text-gold/60" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-sora text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2 group-hover:text-forest dark:group-hover:text-gold transition-theme">
                    Proximité & Écoute Active
                  </h3>
                  <p className="font-inter text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    Ancrés localement à Atakpamé, nous privilégions le contact direct, l&apos;écoute attentive et une relation humaine et chaleureuse. Votre satisfaction est notre plus belle réussite.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-6 md:gap-8 items-start group relative">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="font-serif text-4xl md:text-5xl font-light text-forest dark:text-gold leading-none select-none transition-theme group-hover:scale-110 duration-200">
                    02
                  </span>
                  <Award size={18} className="text-forest/60 dark:text-gold/60" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-sora text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2 group-hover:text-forest dark:group-hover:text-gold transition-theme">
                    Qualité Inégalée & Naturelle
                  </h3>
                  <p className="font-inter text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    Qu&apos;il s&apos;agisse de nos épices moulues 100% pures et sans additifs chimiques, de nos saisies bureautiques précises ou de nos formations, nous visons l&apos;excellence.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-6 md:gap-8 items-start group relative">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="font-serif text-4xl md:text-5xl font-light text-forest dark:text-gold leading-none select-none transition-theme group-hover:scale-110 duration-200">
                    03
                  </span>
                  <Sparkles size={18} className="text-forest/60 dark:text-gold/60" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-sora text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2 group-hover:text-forest dark:group-hover:text-gold transition-theme">
                    Adaptabilité Agile & Polyvalence
                  </h3>
                  <p className="font-inter text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    Notre promotrice impulse une dynamique agile qui s&apos;ajuste en continu aux opportunités et aux besoins de notre communauté. Nous évoluons pour mieux vous servir.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </section>

      {/* Wave Divider: Pourquoi → Contact */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 60" className="w-full h-[40px] md:h-[60px] fill-slate-50 dark:fill-charcoal" preserveAspectRatio="none">
          <path d="M0,0 C480,60 960,0 1440,60 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* 6. FORMULAIRE DE CONTACT & CARTE */}
      <section id="contact-section" className="py-20 bg-slate-50 dark:bg-charcoal transition-theme">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-md flex flex-col gap-6 transition-theme">
              <div>
                <h2 className="font-sora text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Écrivez-nous un message
                </h2>
                <p className="font-inter text-sm leading-relaxed text-slate-400 mt-1">
                  Une question sur nos formations, nos épices ou nos tarifs ? Remplissez ce formulaire.
                </p>
              </div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/10 text-emerald-700 dark:text-emerald-450 border border-emerald-100 dark:border-emerald-950/30 flex flex-col gap-2 text-center"
                >
                  <p className="font-sora text-base font-bold">Votre message a été envoyé !</p>
                  <p className="font-inter text-sm leading-relaxed">Merci de nous avoir contactés. Notre équipe vous répondra sous 24 heures.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold w-fit mx-auto transition-theme"
                  >
                    Nouveau message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 font-inter text-sm">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Jean Koffi"
                      className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-charcoal text-slate-900 dark:text-white focus-glow input-focus-accent transition-theme"
                    />
                  </div>

                  {/* Phone and Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="Ex: +228 92 15 13 26"
                        className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-charcoal text-slate-900 dark:text-white focus-glow input-focus-accent transition-theme"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Adresse Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="Ex: jean.koffi@gmail.com"
                        className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-charcoal text-slate-900 dark:text-white focus-glow input-focus-accent transition-theme"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleInputChange}
                      placeholder="Comment pouvons-nous vous aider ?"
                      className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-charcoal text-slate-900 dark:text-white focus-glow input-focus-accent transition-theme resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 w-full sm:w-fit px-8 py-3.5 mt-2 rounded-full bg-forest dark:bg-gold text-white dark:text-slate-900 font-poppins text-xs font-bold tracking-wider uppercase shadow-md hover:scale-105 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {loading ? "Envoi..." : "Envoyer le message"}
                    <Send size={12} />
                  </button>
                </form>
              )}
            </div>

            {/* Location details & Map Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Address card */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 flex flex-col gap-6 transition-theme shadow-md">
                <h3 className="font-sora text-xl font-bold text-slate-800 dark:text-white">
                  Coordonnées
                </h3>
                <ul className="flex flex-col gap-4 font-inter text-sm">
                  <li className="flex items-start gap-4">
                    <MapPin size={18} className="text-forest dark:text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-700 dark:text-slate-300">Notre Adresse</p>
                      <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">Atakpamé, Route de Nangbéto, Togo</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone size={18} className="text-forest dark:text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-700 dark:text-slate-300">Téléphone & WhatsApp</p>
                      <a href="tel:+22892151326" className="text-xs text-slate-500 dark:text-slate-400 hover:text-forest dark:hover:text-gold transition-theme">
                        +228 92 15 13 26
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail size={18} className="text-forest dark:text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-700 dark:text-slate-300">Adresse Email</p>
                      <a href="mailto:contact@toutestgrace.tg" className="text-xs text-slate-500 dark:text-slate-400 hover:text-forest dark:hover:text-gold transition-theme">
                        contact@toutestgrace.tg
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map embed / Placeholder card */}
              <div className="h-[220px] rounded-3xl border border-slate-100 dark:border-slate-850 overflow-hidden shadow-sm relative group bg-slate-200 dark:bg-charcoal">
                {/* Beautiful mock map layout for custom brand styled premium map feel */}
                <iframe
                  title="Carte Atakpamé Ets Tout Est Grâce"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.5303494794017!2d1.1278149!3d7.5312384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1026046e7f781df3%3A0xc39f884144ad7ea8!2sAtakpam%C3%A9%2C%20Togo!5e0!3m2!1sfr!2s!4v1700000000000!5m2!1sfr!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale contrast-125 dark:invert dark:opacity-80 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-forest/5 pointer-events-none group-hover:opacity-0 transition-opacity" />
              </div>
            </div>

          </div>
        </motion.div>
      </section>

    </div>
  );
}
