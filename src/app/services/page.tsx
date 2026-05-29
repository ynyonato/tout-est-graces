"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Leaf, 
  Printer, 
  GraduationCap, 
  MessageCircle, 
  ChevronRight, 
  CheckCircle,
  FileText,
  MousePointerClick
} from "lucide-react";

// Wrap the search parameter usage in a Suspense boundary as required by Next.js
function ServicesContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("alimentation");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["alimentation", "bureautique", "formations"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const tabs = [
    { id: "alimentation", label: "Alimentation Artisanale", icon: <Leaf size={16} /> },
    { id: "bureautique", label: "Services Bureautiques", icon: <Printer size={16} /> },
    { id: "formations", label: "Conseils & Formations", icon: <GraduationCap size={16} /> },
  ];

  // Specific content details
  const alimentationCatalog = {
    title: "Alimentation Saine & Épices de Grâce",
    intro: "Nous sélectionnons et transformons localement les meilleurs produits naturels d'Atakpamé. Sans conservateurs chimiques, nos produits sont préparés de manière artisanale dans le respect de l'hygiène et des traditions culinaires.",
    image: "/assets/spices_premium.png",
    products: [
      {
        name: "Épice Gingembre de Grâce",
        desc: "Gingembre local pur séché et finement moulu. Apporte une saveur piquante, parfumée et dynamisante à tous vos plats de viandes, poissons et boissons.",
        price: "Disponible en formats 150g & 300g"
      },
      {
        name: "Épice Poivre Aromatique",
        desc: "Poivre noir moulu de première qualité, sélectionné pour son parfum boisé intense et sa chaleur persistante.",
        price: "Disponible en formats 100g & 250g"
      },
      {
        name: "Mélange Piment de Grâce",
        desc: "Mélange équilibré de piments locaux moulus avec des herbes aromatiques locales. Parfait pour relever vos sauces et grillades.",
        price: "Disponible en formats 150g & 300g"
      },
      {
        name: "Amuse-Gueules croustillants (Chin-Chin)",
        desc: "Petits biscuits croustillants sucrés préparés avec soin selon une recette traditionnelle. Idéal pour vos collations et événements.",
        price: "Sachets individuels et seaux familiaux"
      },
      {
        name: "Pépites de Plantain séchées",
        desc: "Chips de banane plantain légèrement salées ou sucrées, dorées à point. Une alternative saine pour vos apéritifs.",
        price: "Sachets hermétiques scellés"
      }
    ],
    ctaText: "Commander nos produits alimentaires",
    whatsappMsg: "Bonjour Ets Tout Est Grâce, je souhaite commander des épices et amuse-gueules."
  };

  const bureautiqueCatalog = {
    title: "Secrétariat, Impression & Fournitures Scolaires",
    intro: "Pour vos dossiers administratifs, rapports de stage ou fournitures, notre pôle bureautique assure des services de haute fidélité, rapides et à des tarifs étudiés.",
    image: "/assets/flyer_dynamisme_1.jpg",
    products: [
      {
        name: "Impressions & Photocopies",
        desc: "Haute vitesse et netteté irréprochable en noir & blanc et couleur. Formats A4 et A3 sur papier premium.",
        price: "Tarifs dégressifs pour grands volumes"
      },
      {
        name: "Numérisation (Scan) & Archivage",
        desc: "Numérisation rapide de vos documents administratifs et envoi direct par email, clé USB ou cloud.",
        price: "Scan simple et conversion PDF multipages"
      },
      {
        name: "Saisie de documents & Rapports",
        desc: "Saisie propre de manuscrits, rapports de fin d'études ou mémoires avec mise en page moderne.",
        price: "Respect strict des délais impartis"
      },
      {
        name: "Articles Scolaires & Papeterie",
        desc: "Cahiers, stylos, classeurs, protège-cahiers et fournitures bureautiques de qualité pour la rentrée.",
        price: "Vente en détail et en gros"
      }
    ],
    ctaText: "Demander un service bureautique",
    whatsappMsg: "Bonjour Ets Tout Est Grâce, je souhaiterais obtenir des informations sur vos services bureautiques."
  };

  const formationsCatalog = {
    title: "Formations Informatiques Pratiques & Conseils",
    intro: "Ne restez plus à l'écart du numérique. Nos formations individuelles ou collectives en petits groupes vous permettent d'acquérir les bases de l'informatique professionnelle.",
    image: "/assets/training_class.png",
    products: [
      {
        name: "Initiation à l'Informatique",
        desc: "Prise en main de l'ordinateur, gestion des dossiers, raccourcis clavier, compréhension du système d'exploitation Windows.",
        price: "Module de 15 heures - Débutant"
      },
      {
        name: "Microsoft Word (Traitement de texte)",
        desc: "Savoir rédiger des courriers officiels, créer un CV professionnel, mettre en page des rapports complexes de manière autonome.",
        price: "Module de 20 heures - Pratique"
      },
      {
        name: "Microsoft Excel (Tableur)",
        desc: "Maîtriser les tableaux de calculs, utiliser les formules de base (Somme, Moyenne, SI), trier des données et concevoir des graphiques.",
        price: "Module de 25 heures - Indispensable"
      },
      {
        name: "Internet & Outils Collaboratifs",
        desc: "Recherches Google efficaces, création et gestion d'une boîte email professionnelle, initiation à Google Drive et à la sécurité en ligne.",
        price: "Module de 10 heures - Connecté"
      }
    ],
    ctaText: "S'inscrire à une formation",
    whatsappMsg: "Bonjour Ets Tout Est Grâce, j'aimerais m'inscrire / en savoir plus sur vos modules de formation informatique."
  };

  const activeCatalog = activeTab === "alimentation" 
    ? alimentationCatalog 
    : activeTab === "bureautique" 
      ? bureautiqueCatalog 
      : formationsCatalog;

  return (
    <div className="py-12 md:py-20 font-inter">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-12"
        >
          <span className="font-poppins text-xs font-bold tracking-widest text-forest dark:text-gold uppercase">
            Nos Prestations
          </span>
          <h1 className="font-sora text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Des services façonnés pour votre quotidien
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Cliquez sur les onglets ci-dessous pour explorer nos différents catalogues d&apos;activité.
          </p>
        </motion.div>

        {/* Tab Controls Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16 border-b border-slate-200 dark:border-slate-850 pb-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-full font-poppins text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-charcoal dark:text-slate-350 dark:hover:bg-slate-800"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Catalog Info Column */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-[120px]">
              {/* Highlight image */}
              <div className="relative h-64 md:h-80 w-full rounded-3xl overflow-hidden shadow-lg group">
                <Image
                  src={activeCatalog.image}
                  alt={activeCatalog.title}
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <h2 className="font-sora text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white mt-2">
                {activeCatalog.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {activeCatalog.intro}
              </p>

              {/* Directly request/order button */}
              <a
                href={`https://wa.me/22892151326?text=${encodeURIComponent(activeCatalog.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-poppins text-xs font-bold tracking-wider uppercase shadow-md transition-transform hover:scale-[1.02] mt-2 cursor-pointer"
              >
                <MessageCircle size={18} className="fill-white/10" />
                {activeCatalog.ctaText}
              </a>
            </div>

            {/* Catalog Items Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h3 className="font-sora text-lg font-bold text-slate-850 dark:text-slate-200 border-b border-slate-100 dark:border-slate-850 pb-3 flex items-center gap-2">
                <FileText size={18} className="text-forest dark:text-gold" />
                Détail de notre offre
              </h3>

              <div className="flex flex-col gap-4">
                {activeCatalog.products.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 hover:border-slate-200 dark:hover:border-slate-800 transition-all duration-200 flex flex-col gap-2 shadow-sm hover:-translate-y-1 hover:shadow-md border-l-[3px] border-l-transparent hover:border-l-forest dark:hover:border-l-gold"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-sora text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <ChevronRight size={14} className="text-forest dark:text-gold" />
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    <span className="text-[10px] font-bold font-poppins text-forest dark:text-gold uppercase tracking-wider mt-1 bg-slate-50 dark:bg-charcoal px-3 py-1 rounded-full w-fit">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Proximity contact footer inside list */}
              <div className="p-6 rounded-2xl bg-forest/5 border border-forest/10 dark:bg-gold/5 dark:border-gold/10 flex items-center gap-4 mt-4">
                <div className="p-3 bg-forest dark:bg-gold rounded-full text-white dark:text-slate-900 shrink-0">
                  <MousePointerClick size={16} />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-slate-800 dark:text-white">Besoin d&apos;une tarification sur-mesure ?</p>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">Contactez notre promotrice directement pour vos commandes groupées ou demandes spéciales.</p>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center font-poppins text-sm text-slate-500 dark:text-slate-400">
        Chargement des services...
      </div>
    }>
      <ServicesContent />
    </Suspense>
  );
}
