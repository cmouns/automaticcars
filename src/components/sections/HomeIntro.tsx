import React from "react";

const HomeIntro: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100 relative overflow-hidden">
      {/* Ligne décorative discrète en haut */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Texte à gauche */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="bg-dark-900 text-white text-xs font-bold px-4 py-2 uppercase tracking-widest mb-6 inline-block rounded-sm shadow-md">
              Location de voiture automatique
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-dark-900 leading-tight">
              Choisissez parmi notre sélection de voitures automatiques
              récentes, alliant{" "}
              <span className="italic font-light text-gold-600">
                confort, style et performance
              </span>{" "}
              pour tous vos besoins de déplacement.
            </h2>
          </div>

          {/* Grille d'images asymétrique à droite */}
          <div className="lg:w-1/2 flex flex-col gap-4 w-full">
            <img
              src="https://automaticcars.fr/wp-content/uploads/2025/07/CLE-CAB-NOIR-1-scaled-e1752523435609.webp"
              alt="Mercedes Extérieur"
              loading="lazy"
              className="w-full h-[250px] md:h-[300px] object-cover rounded-2xl shadow-lg border border-gray-100"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://automaticcars.fr/wp-content/uploads/2025/07/IMG_1018-scaled-e1752512196218-1024x576.png"
                alt="Intérieur Mercedes"
                loading="lazy"
                className="w-full h-[150px] md:h-[180px] object-cover rounded-2xl shadow-lg border border-gray-100"
              />
              <div className="bg-dark-900 rounded-2xl shadow-lg flex items-center justify-center p-6 text-center border border-white/5 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-500/10 blur-[30px] rounded-full"></div>
                <p className="text-white font-serif text-lg md:text-xl relative z-10">
                  Confort absolu <br />
                  <span className="text-gold-400">&</span> Technologie
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
