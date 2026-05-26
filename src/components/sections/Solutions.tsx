import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Crown, Star, Zap } from "lucide-react";
import { Button } from "../ui/Button";

const Solutions: React.FC = () => {
  return (
    <section
      aria-labelledby="solutions-heading"
      className="py-24 bg-dark-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="inline-block border border-gold-500/40 text-gold-400 text-xs font-bold px-4 py-2 uppercase tracking-widest rounded-sm mb-6">
            Club Privé
          </span>
          <h2
            id="solutions-heading"
            className="font-serif text-3xl md:text-5xl text-white leading-tight mb-4"
          >
            Choisissez votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-light">
              statut
            </span>
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            Des offres sur-mesure pour profiter de notre flotte toute l'année.
            Le privilège de la location haut de gamme, sans les contraintes.
          </p>
        </div>

        {/* Grille tarifaire - Effet "Cartes empilées" */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* ── CARTE GOLD ── */}
          <article
            aria-label="Offre Gold à 49€ par mois"
            className="bg-[#111111] border border-gold-500/20 rounded-2xl p-8 flex flex-col hover:border-gold-500/50 transition-colors z-10"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-serif text-white mb-2 flex items-center gap-2">
                  Offre Gold
                </h3>
                <p className="text-gray-400 text-sm font-light">
                  Idéale pour profiter régulièrement de nos véhicules premium.
                </p>
              </div>
              <div
                className="bg-gold-500/10 p-3 rounded-full shrink-0"
                aria-hidden="true"
              >
                <Star className="text-gold-400" size={24} />
              </div>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold text-white">49€</span>
              <span className="text-gray-500"> / mois</span>
            </div>

            <div
              className="h-px w-full bg-white/10 mb-8"
              aria-hidden="true"
            ></div>

            <ul
              className="space-y-4 mb-8 flex-grow"
              aria-label="Avantages de l'offre Gold"
            >
              {[
                "Caution réduite d’au moins 50 %",
                "Réduction sur chaque location",
                "Accès aux véhicules haut de gamme (hors modèles sportifs)",
                "Accès prioritaire selon disponibilité",
                "Participation aux événements abonnés (selon places)",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <CheckCircle
                    className="text-gold-400 shrink-0 mt-0.5"
                    size={16}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              aria-label="S'abonner à l'offre Gold via la page de contact"
              className="mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-lg"
            >
              <Button
                variant="secondary"
                className="w-full border-gold-500/50 text-gold-400 hover:bg-gold-400 hover:text-dark-900 hover:border-gold-400 transition-colors"
              >
                S’abonner - Offre Gold
              </Button>
            </Link>
          </article>

          {/* ── CARTE PLATINIUM (Surélevée via -translate-y) ── */}
          <article
            aria-label="Offre Platinium à 89€ par mois - Le choix ultime"
            className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-gold-400 rounded-2xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_10px_40px_-15px_rgba(218,175,55,0.3)] z-20"
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-400 text-dark-900 text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full"
              aria-label="Badge : Le choix ultime"
            >
              Le choix ultime
            </div>

            <div className="flex justify-between items-start mb-6 mt-2">
              <div>
                <h3 className="text-2xl font-serif text-gold-400 mb-2 flex items-center gap-2">
                  Offre Platinium
                </h3>
                <p className="text-gray-400 text-sm font-light">
                  L’expérience la plus complète pour nos clients passionnés.
                </p>
              </div>
              <div
                className="bg-gold-400/20 p-3 rounded-full shrink-0"
                aria-hidden="true"
              >
                <Crown className="text-gold-400" size={24} />
              </div>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold text-white">89€</span>
              <span className="text-gray-500"> / mois</span>
            </div>

            <div
              className="h-px w-full bg-white/10 mb-8"
              aria-hidden="true"
            ></div>

            <ul
              className="space-y-4 mb-8 flex-grow"
              aria-label="Avantages de l'offre Platinium"
            >
              {[
                "Caution réduite au minimum selon les véhicules",
                "Meilleures réductions sur chaque location",
                "Accès à TOUTE la flotte (y compris sportifs et très haut de gamme)",
                "Priorité absolue sur les disponibilités",
                "Invitations garanties aux événements privés",
                "Tests drives offerts",
                "Statut VIP Automatic Cars",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white text-sm font-medium"
                >
                  <Zap
                    className="text-gold-400 shrink-0 mt-0.5 fill-gold-400"
                    size={16}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              aria-label="S'abonner à l'offre Platinium via la page de contact"
              className="mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-lg"
            >
              <Button variant="primary" className="w-full shadow-gold-glow">
                S’abonner - Offre Platinium
              </Button>
            </Link>
          </article>
        </div>

        {/* Note légale */}
        <p className="text-center text-white text-xs mt-12 font-light">
          * Tarifs TTC. Soumis à validation du dossier et aux conditions
          d'éligibilité du Club Privé.
        </p>
      </div>
    </section>
  );
};

export default Solutions;
