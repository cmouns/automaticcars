import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { Button } from "./Button";

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Vérifie au chargement si l'utilisateur a déjà fait un choix
  useEffect(() => {
    const consent = localStorage.getItem("ac_cookie_consent");
    if (!consent) {
      // Petit délai pour laisser le site charger avant d'afficher la bannière (meilleure UX)
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ac_cookie_consent", "accepted");
    setIsVisible(false);
    // C'est ici que tu pourrais déclencher Google Analytics ou le tracking de l'iFrame Fleetee plus tard
  };

  const handleDecline = () => {
    localStorage.setItem("ac_cookie_consent", "declined");
    setIsVisible(false);
    // Si refusé, l'iFrame Fleetee fonctionnera toujours, mais sans déposer de cookies de pistage tiers
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 animate-in slide-in-from-bottom-10 fade-in duration-500 pointer-events-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
    >
      <div className="container mx-auto max-w-5xl pointer-events-auto">
        <div className="bg-dark-900 border border-gold-500/20 shadow-2xl shadow-black/50 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Effet visuel Premium */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 blur-[50px] rounded-full pointer-events-none"></div>

          {/* Bouton Fermer (Croix) - Équivaut à un refus selon la CNIL */}
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-full p-1"
            aria-label="Fermer et refuser les cookies"
          >
            <X size={20} />
          </button>

          {/* Texte et Explications */}
          <div className="flex items-start gap-4 lg:w-2/3">
            <div className="bg-gold-500/10 p-3 rounded-full shrink-0 hidden sm:flex">
              <Cookie className="text-gold-400" size={24} aria-hidden="true" />
            </div>
            <div>
              <h2
                id="cookie-banner-title"
                className="text-xl font-serif text-white mb-2"
              >
                Respect de votre vie privée
              </h2>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Automatic Cars utilise des cookies pour assurer le bon
                fonctionnement du site et de notre module de réservation
                partenaire (Fleetee). Vous pouvez accepter ou refuser ces
                cookies tiers.
                <Link
                  to="/conditions"
                  className="text-gold-500 hover:text-white underline ml-2 transition-colors"
                >
                  En savoir plus
                </Link>
              </p>
            </div>
          </div>

          {/* Boutons d'action (Accept / Decline sont sur un pied d'égalité visuelle) */}
          <div className="flex flex-col sm:flex-row w-full lg:w-1/3 gap-3 shrink-0">
            <Button
              variant="secondary"
              onClick={handleDecline}
              className="flex-1 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 text-xs py-3"
            >
              Continuer sans accepter
            </Button>
            <Button
              variant="primary"
              onClick={handleAccept}
              className="flex-1 shadow-gold-glow text-xs py-3"
            >
              Tout accepter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
