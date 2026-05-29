"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Eye, Heart, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as const;

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  } as const;

  const values = [
    {
      title: "L'Excellence",
      desc: "Chaque grain d'épice moulu, chaque impression papier et chaque heure de formation dispensée répond aux plus hauts standards.",
      icon: <Compass className="text-forest" size={24} />,
      accent: "border-forest"
    },
    {
      title: "L'Adaptabilité",
      desc: "Nous écoutons le marché et les besoins de nos clients pour faire pivoter et enrichir sans cesse nos offres de manière agile.",
      icon: <Eye className="text-sunset" size={24} />,
      accent: "border-sunset"
    },
    {
      title: "L'Engagement Local",
      desc: "Ancrés à Atakpamé, nous valorisons la production locale, le savoir-faire togolais et le développement des compétences régionales.",
      icon: <Heart className="text-rose-500" size={24} />,
      accent: "border-rose-500"
    }
  ];

  const timelineSteps = [
    {
      year: "2023",
      title: "Le Lancement",
      desc: "Création d'Ets Tout Est Grâce à Atakpamé. Spécialisation initiale dans les prestations bureautiques (impressions, copies, scan) pour les étudiants, professionnels et administrations locales."
    },
    {
      year: "2024",
      title: "La Diversification Alimentaire",
      desc: "Lancement de la gamme alimentaire artisanale : épices moulues (gingembre, poivre) et amuse-gueules (chin-chin). Transition réussie avec des packagings soignés."
    },
    {
      year: "2025",
      title: "Le Pôle Formations",
      desc: "Déploiement des ateliers de formation informatique certifiants pour accompagner la jeunesse et les professionnels dans la maîtrise de Word, Excel et du web."
    },
    {
      year: "2026",
      title: "L'Ambiance Connectée",
      desc: "Lancement du site web vitrine premium pour connecter nos services locaux avec la diaspora et élargir nos ventes au plan national."
    }
  ];

  return (
    <div className="py-12 md:py-20 font-inter">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16"
        >
          <span className="font-poppins text-xs font-bold tracking-widest text-forest dark:text-gold uppercase">
            Notre Histoire
          </span>
          <h1 className="font-sora text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Cultiver le dynamisme au cœur du Togo
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Découvrez le parcours d&apos;une entreprise polyvalente, de son ancrage local à Atakpamé jusqu&apos;à son rayonnement actuel.
          </p>
        </motion.div>

        {/* Narrative & Visual block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24"
        >
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <h2 className="font-sora text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white">
              Une vision propulsée par la passion et la grâce.
            </h2>
            <p className="text-slate-655 dark:text-slate-350 text-sm leading-relaxed">
              Fondée sous l&apos;impulsion d&apos;une promotrice engagée, <strong>Ets Tout Est Grâce</strong> est le reflet d&apos;une volonté farouche de participer activement à l&apos;économie locale. Qu&apos;il s&apos;agisse de secourir un étudiant ayant besoin d&apos;impressions de dernière minute ou de sublimer les tables togolaises avec des épices savoureuses, nous mettons la même énergie.
            </p>
            <p className="text-slate-655 dark:text-slate-350 text-sm leading-relaxed">
              Notre transition progressive vers l&apos;alimentation artisanale découle d&apos;un constat simple : le besoin d&apos;épices saines, bien emballées et prêtes à l&apos;emploi. En associant notre rigueur bureautique avec les richesses de notre terre, nous créons des produits d&apos;exception.
            </p>
            <div className="flex flex-col gap-3 font-semibold text-sm text-slate-800 dark:text-slate-200 mt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-forest dark:text-gold" />
                <span>Ingrédients 100% naturels et locaux</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-forest dark:text-gold" />
                <span>Secrétariat et impressions haute fidélité</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-forest dark:text-gold" />
                <span>Formations informatiques axées sur l&apos;insertion</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800"
          >
            <Image
              src="/assets/flyer_dynamisme_2.jpg"
              alt="Tout Est Grâce équipe"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mb-24 py-10"
        >
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3 mb-16">
            <span className="font-poppins text-xs font-bold tracking-widest text-forest dark:text-gold uppercase">
              Nos Piliers
            </span>
            <h2 className="font-sora text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
              Les valeurs qui nous guident
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <motion.div 
                key={v.title}
                variants={fadeInUp}
                className={`flex flex-col gap-4 bg-white dark:bg-charcoal p-8 rounded-3xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 border-l-[3px] ${v.accent}`}
              >
                <div className="p-3 bg-forest/5 dark:bg-gold/5 text-forest dark:text-gold rounded-2xl w-fit">
                  {v.icon}
                </div>
                <h3 className="font-sora text-lg font-bold text-slate-800 dark:text-white">
                  {v.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto flex flex-col gap-12"
        >
          <div className="text-center flex flex-col gap-3">
            <span className="font-poppins text-xs font-bold tracking-widest text-forest dark:text-gold uppercase">
              Notre Trajectoire
            </span>
            <h2 className="font-sora text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
              L&apos;évolution de nos services
            </h2>
          </div>

          <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32 pl-8 flex flex-col gap-12 py-4">
            {timelineSteps.map((step, idx) => (
              <div key={step.year} className="relative">
                {/* Year tag for larger screens */}
                <div className="hidden md:block absolute -left-[160px] top-1 text-right w-24">
                  <span className="font-sora text-2xl font-black text-forest dark:text-gold">
                    {step.year}
                  </span>
                </div>

                {/* Dot marker */}
                <span className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-forest dark:bg-gold border-4 border-white dark:border-deepblack animate-pulse" />

                <div className="flex flex-col gap-2">
                  <h3 className="font-sora text-base font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <span className="md:hidden text-xs px-2 py-0.5 rounded bg-forest/10 dark:bg-gold/10 text-forest dark:text-gold font-black">
                      {step.year}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA Contact Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="mt-24 p-8 md:p-12 rounded-3xl bg-forest text-white dark:bg-gold dark:text-slate-900 text-center flex flex-col gap-6 items-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="font-sora text-2xl md:text-3xl font-extrabold max-w-lg leading-tight">
            Prêt à travailler avec nous ?
          </h2>
          <p className="font-inter text-sm md:text-base text-slate-100 dark:text-slate-800 max-w-md leading-relaxed">
            Que ce soit pour commander nos produits savoureux, imprimer vos documents ou planifier une formation sur-mesure, nous sommes à votre écoute.
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-poppins text-xs font-bold tracking-wider uppercase transition-transform hover:scale-105"
          >
            Prendre contact
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
