import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Crown,
  Star,
  ShieldCheck,
  Zap,
  ArrowRight,
  Car,
} from "lucide-react";
import { Button } from "../components/ui/Button";

const Subscription: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans selection:bg-gold-400 selection:text-black">
      {/* HEADER SECTION (Sombre) */}
      <header className="bg-dark-900 pt-32 xl:pt-40 pb-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <span className="text-gold-500 text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
            Club Privé
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            L’abonnement{" "}
            <span className="italic text-gold-400 font-light">
              Automatic Cars
            </span>
          </h1>
          <p className="text-gray-300 font-light leading-relaxed text-lg max-w-2xl mx-auto">
            Le privilège de la location haut de gamme, sans les contraintes.
            Rejoignez notre cercle exclusif.
          </p>
        </div>
      </header>

      {/* POURQUOI CET ABONNEMENT (Crème) */}
      <section className="bg-cream py-20 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-dark-900 mb-6">
                Pourquoi cet abonnement ?
              </h2>
              <div className="w-16 h-1 bg-gold-400 mb-8"></div>
              <p className="text-gray-700 text-lg font-light leading-relaxed mb-6">
                Après plusieurs années d’expérience dans la location de
                véhicules haut de gamme, nous avons identifié un point commun
                chez la majorité de nos clients :{" "}
                <strong className="text-dark-900 font-medium">
                  les cautions très élevées représentent le frein numéro 1 à la
                  location.
                </strong>
              </p>
              <p className="text-gray-700 text-lg font-light leading-relaxed">
                Certaines cautions peuvent atteindre plusieurs milliers d’euros,
                ce qui limite fortement l’accès à notre flotte haut de gamme,
                même pour des clients sérieux et solvables. Notre abonnement
                supprime cette barrière.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-serif text-dark-900 mb-6 flex items-center gap-3">
                <Star className="text-gold-500" /> Avantages inclus
              </h3>
              <ul className="space-y-4">
                {[
                  "Support VIP dédié",
                  "Caution réduite d’au moins 50 %",
                  "Événements exclusifs dédiés aux abonnés",
                  "Tests drives offerts",
                  "Accès prioritaire aux disponibilités",
                  "Surprises premium toute l’année",
                  "Réductions automatiques sur tous les véhicules",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle
                      className="text-gold-500 shrink-0 mt-0.5"
                      size={18}
                    />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LES OFFRES (Sombre pour faire ressortir l'Or et l'Argent) */}
      <section className="bg-dark-900 py-24 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
              Choisissez votre statut
            </h2>
            <p className="text-gray-400 font-light">
              Des offres sur-mesure pour profiter de notre flotte toute l'année.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CARTE GOLD */}
            <div className="bg-[#111111] border border-gold-500/20 rounded-2xl p-8 flex flex-col hover:border-gold-500/50 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2 flex items-center gap-2">
                    Offre Gold
                  </h3>
                  <p className="text-gray-400 text-sm font-light">
                    Idéale pour profiter régulièrement de nos véhicules premium.
                  </p>
                </div>
                <div className="bg-gold-500/10 p-3 rounded-full">
                  <Star className="text-gold-400" size={24} />
                </div>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">49€</span>
                <span className="text-gray-500"> / mois</span>
              </div>
              <div className="h-px w-full bg-white/10 mb-8"></div>
              <ul className="space-y-4 mb-8 flex-grow">
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
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CARTE PLATINIUM */}
            <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-gold-400 rounded-2xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_10px_40px_-15px_rgba(218,175,55,0.3)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-400 text-dark-900 text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
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
                <div className="bg-gold-400/20 p-3 rounded-full">
                  <Crown className="text-gold-400" size={24} />
                </div>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">89€</span>
                <span className="text-gray-500"> / mois</span>
              </div>
              <div className="h-px w-full bg-white/10 mb-8"></div>
              <ul className="space-y-4 mb-8 flex-grow">
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
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE ET CONDITIONS (Crème) */}
      <section className="bg-cream py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Comment ça marche */}
            <div>
              <h2 className="text-3xl font-serif text-dark-900 mb-8">
                Comment ça marche ?
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Souscription en ligne",
                    desc: "Inscription rapide en deux minutes.",
                  },
                  {
                    title: "Activation immédiate",
                    desc: "Votre statut membre est actif dès validation.",
                  },
                  {
                    title: "Avantages automatiques",
                    desc: "Réduction et caution réduite appliquées.",
                  },
                  {
                    title: "Réservation en quelques clics",
                    desc: "Profitez de votre véhicule l'esprit léger.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-dark-900 text-gold-400 flex items-center justify-center font-serif text-xl shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-dark-900 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 font-light text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditions et Pourquoi nous */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif text-dark-900 mb-6">
                  Conditions d’éligibilité
                </h2>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 font-light">
                      <ShieldCheck className="text-gold-500" size={18} /> Être
                      résident en Gironde
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-light">
                      <ShieldCheck className="text-gold-500" size={18} /> Avoir
                      plus de 21 ans
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-light">
                      <ShieldCheck className="text-gold-500" size={18} />{" "}
                      Disposer d’au moins deux ans de permis
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-light">
                      <ShieldCheck className="text-gold-500" size={18} /> Avoir
                      déjà effectué une location chez nous
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-serif text-dark-900 mb-4">
                  Pourquoi Automatic Cars ?
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 text-sm">
                    <Car size={16} className="text-dark-900" /> Flotte premium
                    sélectionnée en Allemagne
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 text-sm">
                    <Car size={16} className="text-dark-900" /> Partenaire
                    officiel Mercedes
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 text-sm">
                    <Car size={16} className="text-dark-900" /> Qualité de
                    service irréprochable
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 text-sm">
                    <Car size={16} className="text-dark-900" /> Expérience haut
                    de gamme reconnue
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-dark-900 py-20 text-center border-t border-white/10">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Prêt à rejoindre le club ?
          </h2>
          <p className="text-gray-400 font-light mb-10">
            Pour plus d'informations ou pour valider votre éligibilité, notre
            équipe se tient à votre entière disposition.
          </p>
          <Link to="/contact">
            <Button
              variant="primary"
              className="text-base px-10 py-4 shadow-gold-glow flex items-center gap-3 mx-auto"
            >
              JE M'INSCRIS MAINTENANT <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Subscription;
