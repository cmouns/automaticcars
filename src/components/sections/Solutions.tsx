import React from "react";
import { Link } from "react-router-dom";
import { Zap, Package, Car } from "lucide-react";
import { Button } from "../ui/Button"; // Ajuste le chemin si besoin

const Solutions: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <span className="bg-dark-900 text-white text-xs font-bold px-4 py-2 uppercase tracking-widest mb-6 inline-block rounded-sm">
            Nos Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-dark-900">
            Trouvez la location qui vous convient
          </h2>
        </div>

        {/* Grille de Prix (Split Design Blanc/Noir) */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
          {/* CARTE COURTE DURÉE (Blanc) */}
          <div className="bg-white p-10 md:p-14 flex flex-col items-center text-center relative group">
            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-4 py-1.5 rounded uppercase tracking-wider mb-8 inline-block transition-colors group-hover:bg-gold-50 group-hover:text-gold-600">
              Location Courte Durée
            </span>

            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-6xl font-bold text-dark-900">25</span>
              <span className="text-gray-500 text-sm">€/jour</span>
            </div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-10">
              A PARTIR
            </p>

            <ul className="space-y-5 mb-12 text-gray-600 font-medium w-full">
              <li className="flex items-center justify-center gap-3">
                <Zap size={18} className="text-gold-500" /> Idéal pour
                particulier
              </li>
              <li className="flex items-center justify-center gap-3">
                <Package size={18} className="text-gold-500" /> Location
                flexible
              </li>
              <li className="flex items-center justify-center gap-3">
                <Car size={18} className="text-gold-500" /> Différents modèles
              </li>
            </ul>

            <Link to="/reservation" className="w-full mt-auto">
              <Button
                variant="secondary"
                className="w-full py-4 border-gray-900 text-dark-900 hover:bg-dark-900 hover:text-white transition-colors duration-300"
              >
                Voir nos offres
              </Button>
            </Link>
          </div>

          {/* CARTE LONGUE DURÉE (Noir) */}
          <div className="bg-dark-900 p-10 md:p-14 flex flex-col items-center text-center relative overflow-hidden">
            {/* Effet de lumière subtil en arrière-plan */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 blur-[40px] rounded-full pointer-events-none"></div>

            <span className="bg-white text-dark-900 text-xs font-bold px-4 py-1.5 rounded uppercase tracking-wider mb-8 inline-block relative z-10">
              Location Longue Durée
            </span>

            <div className="flex items-baseline gap-1 mb-2 relative z-10">
              <span className="text-6xl font-bold text-white">18</span>
              <span className="text-gray-400 text-sm">€/jour</span>
            </div>
            <p className="text-xs text-gold-500 font-bold uppercase tracking-widest mb-10 relative z-10">
              A PARTIR
            </p>

            <ul className="space-y-5 mb-12 text-gray-300 font-medium w-full relative z-10">
              <li className="flex items-center justify-center gap-3">
                <Zap size={18} className="text-gold-400" /> Idéal pour
                particulier
              </li>
              <li className="flex items-center justify-center gap-3">
                <Package size={18} className="text-gold-400" /> Location
                flexible
              </li>
              <li className="flex items-center justify-center gap-3">
                <Car size={18} className="text-gold-400" /> Différents modèles
              </li>
            </ul>

            <Link to="/lld" className="w-full mt-auto relative z-10">
              <Button
                variant="primary"
                className="w-full py-4 shadow-gold-glow"
              >
                Voir nos offres
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
