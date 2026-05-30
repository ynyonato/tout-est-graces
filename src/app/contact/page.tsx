"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Mail, 
  MessageCircle, 
  Send,
  HelpCircle,
  Plus,
  Minus,
  Clock,
  User,
  MessageSquare,
  Award,
  ShieldCheck,
  Users
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", message: "" });
    }, 1200);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: "Où se situent exactement vos locaux ?",
      a: "Nous sommes installés à Atakpamé, sur la Route de Nangbéto (Région des Plateaux, Togo). C'est un axe central facile d'accès."
    },
    {
      q: "Quels sont vos horaires d'ouverture ?",
      a: "Nos bureaux bureautiques et notre accueil sont ouverts du Lundi au Vendredi de 8h00 à 18h30, et le Samedi de 8h30 à 16h00. Nous sommes fermés le Dimanche."
    },
    {
      q: "Livrez-vous vos épices et amuse-gueules dans tout le Togo ?",
      a: "Oui, tout à fait ! Nous livrons dans tout le pays (Lomé, Kara, Kpalimé, Sokodé, etc.) par le biais de services de colis locaux et de compagnies de transport sécurisées. Contactez-nous sur WhatsApp pour organiser l'expédition."
    },
    {
      q: "Comment s'inscrire à une formation informatique (Excel, Word) ?",
      a: "L'inscription est simple. Vous pouvez nous écrire via le formulaire ou directement sur WhatsApp. Nous conviendrons d'un créneau adapté à vos disponibilités (cours individuels ou collectifs) et validerons votre inscription."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as const;

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  } as const;

  return (
    <div className="py-12 md:py-20 font-inter">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
          <span className="font-poppins text-xs font-bold tracking-widest text-forest dark:text-gold uppercase">
            Restons Connectés
          </span>
          <h1 className="font-sora text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Nous Contacter
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Une commande, une inscription à nos formations ou un document urgent à saisir ? Écrivez-nous ou rendez-nous visite.
          </p>
        </div>

        {/* Contact Info Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          
          {/* Phone */}
          <motion.div 
            variants={fadeInUp} 
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 flex flex-col gap-4 shadow-sm hover:shadow-md cursor-pointer transition-theme"
          >
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-650 dark:text-emerald-400 rounded-2xl w-fit">
              <Phone size={20} />
            </div>
            <h3 className="font-sora text-lg font-bold text-slate-800 dark:text-white">
              Téléphone & WhatsApp
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Disponible pour appel direct ou messages instantanés pour commandes et support.
            </p>
            <a href="tel:+22892151326" className="font-poppins text-sm font-bold text-forest dark:text-gold hover:underline mt-2">
              +228 92 15 13 26
            </a>
          </motion.div>

          {/* Address */}
          <motion.div 
            variants={fadeInUp} 
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 flex flex-col gap-4 shadow-sm hover:shadow-md cursor-pointer transition-theme"
          >
            <div className="p-3 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 rounded-2xl w-fit">
              <MapPin size={20} />
            </div>
            <h3 className="font-sora text-lg font-bold text-slate-800 dark:text-white">
              Notre Adresse
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Atakpamé, Route de Nangbéto, Région des Plateaux, Togo.
            </p>
            <span className="font-poppins text-sm font-bold text-forest dark:text-gold mt-2">
              Région des Plateaux, Togo
            </span>
          </motion.div>

          {/* Email */}
          <motion.div 
            variants={fadeInUp} 
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 flex flex-col gap-4 shadow-sm hover:shadow-md cursor-pointer transition-theme"
          >
            <div className="p-3 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 rounded-2xl w-fit">
              <Mail size={20} />
            </div>
            <h3 className="font-sora text-lg font-bold text-slate-800 dark:text-white">
              Email Professionnel
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Pour des demandes de devis bureautiques ou partenariats commerciaux.
            </p>
            <a href="mailto:contact@toutestgrace.tg" className="font-poppins text-sm font-bold text-forest dark:text-gold hover:underline mt-2">
              contact@toutestgrace.tg
            </a>
          </motion.div>

        </motion.div>

        {/* TRUST & AUTHORITY SECTION: Garanties de Qualité */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 p-8 rounded-3xl bg-slate-50 dark:bg-charcoal border border-slate-200/50 dark:border-slate-850 transition-theme"
        >
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-forest/10 text-forest dark:text-gold rounded-xl shrink-0">
              <Award size={20} />
            </div>
            <div>
              <h4 className="font-sora text-sm font-bold text-slate-800 dark:text-white">Qualité Locale & Naturelle</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Nos épices et douceurs sont produites de manière artisanale à Atakpamé, 100% sans conservateur artificiel.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-forest/10 text-forest dark:text-gold rounded-xl shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="font-sora text-sm font-bold text-slate-800 dark:text-white">Engagement de Proximité</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Nous assurons un service d'impression rapide et réactif, adapté aux exigences des professionnels.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-forest/10 text-forest dark:text-gold rounded-xl shrink-0">
              <Users size={20} />
            </div>
            <div>
              <h4 className="font-sora text-sm font-bold text-slate-800 dark:text-white">Suivi Pédagogique Actif</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Nos formations bureautiques sont limitées en nombre d'apprenants pour un suivi individuel optimal.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Form and Map wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-850 transition-theme shadow-sm">
            <h2 className="font-sora text-2xl font-extrabold text-slate-905 dark:text-white mb-6">
              Envoyer un Message
            </h2>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/15 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30 text-center flex flex-col gap-3"
              >
                <p className="font-sora text-base font-bold">Message transmis avec succès !</p>
                <p className="text-xs">Nous avons bien reçu vos coordonnées et nous vous recontacterons sous peu.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold w-fit mx-auto transition-theme"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 text-sm font-inter">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-550 dark:text-slate-400">Nom complet</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Koffi Mensah"
                      className="pl-10 pr-4 py-3 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-charcoal text-slate-900 dark:text-white focus-glow input-focus-accent transition-theme"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Téléphone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="Ex: +228 92 15 13 26"
                        className="pl-10 pr-4 py-3 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-charcoal text-slate-900 dark:text-white focus-glow input-focus-accent transition-theme"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Adresse Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="Ex: koffi.mensah@gmail.com"
                        className="pl-10 pr-4 py-3 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-charcoal text-slate-900 dark:text-white focus-glow input-focus-accent transition-theme"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 text-slate-400" size={16} />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre besoin..."
                      className="pl-10 pr-4 py-3 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-charcoal text-slate-900 dark:text-white focus-glow input-focus-accent transition-theme resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full sm:w-fit px-8 py-3.5 mt-2 rounded-full bg-forest dark:bg-gold text-white dark:text-slate-900 font-poppins text-xs font-bold tracking-wider uppercase shadow-md hover:scale-105 disabled:opacity-50 transition-all cursor-pointer"
                >
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                  <Send size={12} />
                </button>
              </form>
            )}
          </div>

          {/* Map & Office Hours */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-850 flex flex-col gap-4 shadow-sm transition-theme">
              <h3 className="font-sora text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <Clock size={18} className="text-forest dark:text-gold" />
                Heures d&apos;ouverture
              </h3>
              <div className="flex flex-col gap-2 font-inter text-xs text-slate-500 dark:text-slate-400">
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-850 pb-2">
                  <span>Lundi - Vendredi</span>
                  <span className="font-bold text-slate-700 dark:text-slate-350">8h00 - 18h30</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-850 pb-2">
                  <span>Samedi</span>
                  <span className="font-bold text-slate-700 dark:text-slate-350">8h30 - 16h00</span>
                </div>
                <div className="flex justify-between text-rose-500 font-semibold">
                  <span>Dimanche & Fériés</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-[260px] rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-850 shadow-sm relative group bg-slate-205 dark:bg-charcoal">
              <iframe
                title="Carte détaillée Atakpamé Ets Tout Est Grâce"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.5303494794017!2d1.1278149!3d7.5312384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1026046e7f781df3%3A0xc39f884144ad7ea8!2sAtakpam%C3%A9%2C%20Togo!5e0!3m2!1sfr!2s!4v1700000000000!5m2!1sfr!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 dark:invert dark:opacity-80 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="text-center flex flex-col gap-3">
            <span className="font-poppins text-xs font-bold tracking-widest text-forest dark:text-gold uppercase">
              Questions Fréquentes
            </span>
            <h2 className="font-sora text-2xl md:text-3xl font-extrabold text-slate-905 dark:text-white">
              Des réponses à vos questions
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="flex flex-col gap-4 mt-4"
          >
            {faqItems.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="rounded-2xl border border-slate-100 dark:border-slate-850 bg-white dark:bg-slate-900 transition-theme overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full px-6 py-5 font-poppins text-sm font-semibold text-left text-slate-800 dark:text-slate-200 focus:outline-none cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle size={16} className="text-forest dark:text-gold shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? <Minus size={16} className="text-slate-400" /> : <Plus size={16} className="text-slate-400" />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 border-t border-slate-50 dark:border-slate-850/50 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
