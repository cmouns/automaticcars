import React, { useEffect, useState, useRef } from "react";
import {
  CheckCircle,
  CalendarClock,
  Wallet,
  Gauge,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "../components/ui/Button";

const lldFleet = [
  {
    name: "Cupra Leon",
    image:
      "https://automaticcars.fr/wp-content/uploads/2025/07/Cupra-1-scaled-e1752522811309.webp",
  },
  {
    name: "Renault Clio",
    image:
      "https://automaticcars.fr/wp-content/uploads/2025/07/Clio-bleu-scaled-e1752709235590.webp",
  },
  {
    name: "Mercedes-Benz CLE",
    image:
      "https://automaticcars.fr/wp-content/uploads/2025/07/CLE-CAB-NOIR-1-scaled-e1752523435609.webp",
  },
  {
    name: "Mercedes Classe A",
    image:
      "https://automaticcars.fr/wp-content/uploads/2025/07/ClasseA-1-scaled-e1752522200219.webp",
  },
  {
    name: "Cupra Formentor",
    image:
      "https://automaticcars.fr/wp-content/uploads/2025/07/Formentor2025-1-scaled-e1752522079514.webp",
  },
  {
    name: "Volkswagen Golf 8",
    image:
      "https://automaticcars.fr/wp-content/uploads/2025/07/Golf-scaled-e1752709845939.webp",
  },
  {
    name: "Fiat 500 Hybride",
    image:
      "https://automaticcars.fr/wp-content/uploads/2025/07/Fiat500-1-scaled-e1752522555116.webp",
  },
  {
    name: "Mini Cooper",
    image:
      "https://automaticcars.fr/wp-content/uploads/2025/07/MiniCooper-1-scaled-e1752523067137.webp",
  },
];

const LLD: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const scrollToDevis = () => {
    const devisSection = document.getElementById("devis");
    if (devisSection) {
      devisSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans selection:bg-gold-400 selection:text-black">
      {/* HEADER SECTION */}
      <header className="bg-dark-900 pt-32 xl:pt-40 pb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <span className="text-gold-500 text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
            Service Premium
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Location Longue{" "}
            <span className="italic text-gold-400 font-light">Durée</span>
          </h1>
          <p className="text-gray-300 font-light leading-relaxed text-xl max-w-2xl mx-auto">
            La route change, vos besoins aussi. Adaptez-vous avec nos solutions
            de location longue durée sur-mesure.
          </p>
        </div>
      </header>

      {/* INTRODUCTION & AVANTAGES */}
      <section className="bg-cream py-24 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-dark-900 mb-8">
            Besoin d'une longue durée ?
          </h2>
          <p className="text-gray-700 text-lg font-light leading-relaxed mb-16 max-w-3xl mx-auto">
            <strong className="text-dark-900 font-medium">
              Louez votre véhicule chez nous à prix compétitif !
            </strong>
            <br />
            Nous proposons différents modèles avec ou sans engagement, toujours
            avec des conditions souples. Que vous soyez particulier ou
            professionnel, nous ferons le maximum pour vous trouver des
            solutions rapides !
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CalendarClock
                className="text-gold-500 mx-auto mb-4"
                size={40}
                strokeWidth={1.5}
              />
              <h3 className="text-dark-900 font-bold uppercase tracking-wider text-sm mb-3">
                Flexibilité Totale
              </h3>
              <p className="text-gray-600 font-light text-sm">
                Des contrats adaptés à vos réels besoins, de 3 à 24 mois, avec
                des conditions de renouvellement souples.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Wallet
                className="text-gold-500 mx-auto mb-4"
                size={40}
                strokeWidth={1.5}
              />
              <h3 className="text-dark-900 font-bold uppercase tracking-wider text-sm mb-3">
                Budget Maîtrisé
              </h3>
              <p className="text-gray-600 font-light text-sm">
                Un loyer mensuel fixe incluant l'assurance et l'entretien.
                Aucune mauvaise surprise pour votre trésorerie.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle
                className="text-gold-500 mx-auto mb-4"
                size={40}
                strokeWidth={1.5}
              />
              <h3 className="text-dark-900 font-bold uppercase tracking-wider text-sm mb-3">
                Service Inclus
              </h3>
              <p className="text-gray-600 font-light text-sm">
                Assistance 24/7, véhicule de remplacement et suivi personnalisé
                tout au long de votre contrat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VÉHICULES ÉLIGIBLES (Le vrai carrousel corrigé) */}
      <section className="bg-[#fafafa] py-24 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-dark-900 mb-4">
              Notre sélection LLD
            </h2>
            <p className="text-gray-500 font-light text-lg">
              Découvrez les modèles phares disponibles pour vos projets longue
              durée.
            </p>
          </div>

          <div className="relative group px-4 md:px-12">
            {/* Bouton Gauche */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 text-dark-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gold-400 hover:text-white hover:border-gold-400 transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Container du Carrousel */}
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-10 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {lldFleet.map((car, index) => (
                <div
                  key={index}
                  className="w-[280px] md:w-[320px] min-w-[280px] md:min-w-[320px] snap-center flex-shrink-0 bg-white rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100 p-5 flex flex-col transition-transform hover:-translate-y-1"
                >
                  {/* Titre en haut à gauche */}
                  <h3 className="text-dark-900 font-bold text-lg mb-4 text-left">
                    {car.name}
                  </h3>

                  {/* Image bien cadrée */}
                  <div className="w-full mb-6 rounded-md overflow-hidden bg-gray-50 flex items-center justify-center aspect-[4/3]">
                    <img
                      src={car.image}
                      alt={`LLD ${car.name}`}
                      className="w-full h-full object-cover mix-blend-multiply"
                      loading="lazy"
                    />
                  </div>

                  {/* Bouton d'action */}
                  <button
                    onClick={scrollToDevis}
                    className="w-full mt-auto bg-gradient-to-r from-gold-500 to-gold-400 text-white font-bold text-xs py-3.5 rounded-md uppercase tracking-widest shadow-md hover:shadow-lg hover:opacity-90 transition-all"
                  >
                    Demander un devis
                  </button>
                </div>
              ))}
            </div>

            {/* Bouton Droit */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 text-dark-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gold-400 hover:text-white hover:border-gold-400 transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* FORMULAIRE DE DEVIS */}
      <section className="bg-dark-900 py-24 relative" id="devis">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Demander une étude personnalisée
            </h2>
            <p className="text-gray-400 font-light">
              Remplissez ce formulaire, notre équipe vous recontactera sous 24h
              avec une proposition sur-mesure.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-[#111111] border border-gold-500/30 p-10 rounded-2xl text-center">
              <CheckCircle className="text-gold-400 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-serif text-white mb-2">
                Demande envoyée !
              </h3>
              <p className="text-gray-400 font-light">
                Nous avons bien reçu votre demande de LLD. Notre équipe vous
                contactera très prochainement.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#111111] border border-white/5 p-8 md:p-10 rounded-2xl shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-gold-500 uppercase tracking-widest mb-2"
                  >
                    Prénom / Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-dark-800 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/50 transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-gold-500 uppercase tracking-widest mb-2"
                  >
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-dark-800 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/50 transition-all"
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="duration"
                    className="block text-xs font-bold text-gold-500 uppercase tracking-widest mb-2"
                  >
                    Engagement souhaité *
                  </label>
                  <div className="relative">
                    <select
                      id="duration"
                      required
                      defaultValue=""
                      className="w-full bg-dark-800 border border-zinc-700 text-white px-4 py-3 rounded-lg appearance-none focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/50 transition-all cursor-pointer"
                    >
                      <option value="" disabled>
                        Sélectionner une durée
                      </option>
                      <option value="3">3 mois</option>
                      <option value="6">6 mois</option>
                      <option value="12">12 mois</option>
                      <option value="24">24 mois</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      ▼
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs font-bold text-gold-500 uppercase tracking-widest mb-2"
                  >
                    Budget mensuel max (€)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="budget"
                      className="w-full bg-dark-800 border border-zinc-700 text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/50 transition-all"
                      placeholder="Ex: 800"
                    />
                    <Wallet
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="km"
                  className="block text-xs font-bold text-gold-500 uppercase tracking-widest mb-2"
                >
                  Kilométrage maximum / mois
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="km"
                    className="w-full bg-dark-800 border border-zinc-700 text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/50 transition-all"
                    placeholder="Ex: 2000"
                  />
                  <Gauge
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-gold-500 uppercase tracking-widest mb-2"
                >
                  Votre besoin (Modèle souhaité, etc.)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-dark-800 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/50 transition-all resize-none"
                  placeholder="Bonjour, je recherche un SUV type Mercedes GLC pour mon entreprise..."
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={isSubmitting}
                icon={!isSubmitting && <Send size={18} />}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
              <p className="text-center text-xs text-gray-500 mt-4">
                Vos données sont sécurisées et ne seront jamais partagées.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default LLD;
