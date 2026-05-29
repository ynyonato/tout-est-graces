"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Info, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "Tous" },
    { id: "alimentation", label: "Alimentation Artisanale" },
    { id: "bureautique", label: "Services Bureautiques" },
    { id: "formation", label: "Conseils & Formations" }
  ];

  const galleryItems = [
    {
      id: 1,
      src: "/assets/spices_premium.png",
      title: "Épices de Grâce Premium",
      desc: "Gingembre et mélanges moulus dans des flacons hermétiques élégants.",
      cat: "alimentation"
    },
    {
      id: 2,
      src: "/assets/flyer_alimentation.jpg",
      title: "Proximité et Alimentation Saine",
      desc: "Notre promotrice sélectionnant de beaux produits frais au marché.",
      cat: "alimentation"
    },
    {
      id: 3,
      src: "/assets/training_class.png",
      title: "Salle de formation Informatique",
      desc: "Espace moderne dédié à l'apprentissage de Word, Excel et du web.",
      cat: "formation"
    },
    {
      id: 4,
      src: "/assets/flyer_dynamisme_1.jpg",
      title: "Activités Secrétariat",
      desc: "Impression, copie, scan et fournitures scolaires au cœur d'Atakpamé.",
      cat: "bureautique"
    },
    {
      id: 5,
      src: "/assets/flyer_dynamisme_2.jpg",
      title: "Conseils Bureautiques",
      desc: "Prise en charge professionnelle de vos documents administratifs.",
      cat: "bureautique"
    },
    {
      id: 6,
      src: "/assets/logo_variations.jpg",
      title: "Variations Identité Visuelle",
      desc: "Le monogramme TEG décliné pour chacun de nos pôles d'activité.",
      cat: "bureautique"
    }
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.cat === filter);

  return (
    <div className="py-12 md:py-20 font-inter">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-12"
        >
          <span className="font-poppins text-xs font-bold tracking-widest text-forest dark:text-gold uppercase">
            Visuels & Artisanat
          </span>
          <h1 className="font-sora text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Galerie Ets Tout Est Grâce
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Découvrez nos ateliers, nos produits alimentaires artisanaux et nos installations bureautiques en images.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 bg-slate-50 dark:bg-slate-900/50 py-4 px-6 rounded-2xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full font-poppins text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                filter === cat.id
                  ? "bg-forest text-white dark:bg-gold dark:text-slate-900 shadow-md scale-105"
                  : "bg-white text-slate-655 hover:bg-slate-205 dark:bg-charcoal dark:text-slate-350 dark:hover:bg-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Pinterest / Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedImage(index)}
                className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-100 dark:bg-charcoal ${index % 3 === 0 ? "h-96" : index % 3 === 1 ? "h-72" : "h-80"}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="px-2 py-0.5 rounded bg-forest/80 text-white font-poppins text-[8px] font-bold uppercase tracking-widest w-fit mb-2">
                    {item.cat}
                  </span>
                  <h3 className="font-sora text-white text-base font-bold flex items-center justify-between">
                    {item.title}
                    <Maximize2 size={16} className="text-white/80" />
                  </h3>
                  <p className="text-slate-200 text-sm mt-1 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox Modal Overlay */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md"
            >
              {/* Close Button overlay */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Fermer la galerie"
              >
                <X size={20} />
              </button>

              {/* Lightbox content container */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="relative w-full max-w-4xl h-[70vh] flex flex-col items-center justify-center"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={filteredItems[selectedImage].src}
                    alt={filteredItems[selectedImage].title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Metadata overlay text */}
                <div className="mt-4 text-center text-white max-w-lg">
                  <h3 className="font-sora text-lg font-bold">
                    {filteredItems[selectedImage].title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1.5 flex items-center justify-center gap-1.5 leading-relaxed">
                    <Info size={12} className="shrink-0" />
                    {filteredItems[selectedImage].desc}
                  </p>
                </div>
              </motion.div>

              {/* Left / Right Nav controls */}
              {filteredItems.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6">
                  <button
                    onClick={() => setSelectedImage(prev => prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null)}
                    className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full cursor-pointer transition-colors"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <span className="text-white text-sm font-bold font-poppins">
                    {selectedImage + 1} / {filteredItems.length}
                  </span>
                  <button
                    onClick={() => setSelectedImage(prev => prev !== null ? (prev + 1) % filteredItems.length : null)}
                    className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full cursor-pointer transition-colors"
                    aria-label="Image suivante"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
