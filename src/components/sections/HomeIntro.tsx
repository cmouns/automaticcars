import React from "react";

const HomeIntro: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="bg-white/5 border border-white/10 text-gold-400 text-[10px] font-bold px-4 py-2 uppercase tracking-[0.2em] mb-8 inline-block rounded-sm">
              L'Expérience Automatique
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              L'excellence à portée de main, <br />
              <span className=" font-light text-gold-400">sans compromis.</span>
            </h2>
            <p className="mt-8 text-gray-400 font-light leading-relaxed text-lg">
              Choisissez parmi notre sélection de voitures automatiques
              récentes, alliant confort, style et performance pour tous vos
              besoins de déplacement.
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6 w-full">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gold-400/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <img
                src="/images/intro/mercedes-cla-cabriolet-blanche-bordeaux.webp"
                alt="Mercedes Prestige"
                width={800}
                height={350}
                loading="lazy"
                decoding="async"
                className="relative w-full h-[350px] object-cover rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img
                src="/images/intro/mercedes-interieur-bordeaux.webp"
                alt="Intérieur Luxe"
                width={400}
                height={200}
                loading="lazy"
                decoding="async"
                className="w-full h-40 object-cover rounded-2xl shadow-lg border border-white/10"
              />
              <img
                src="/images/intro/mercedes-g63-bordeaux.webp"
                alt="Arrière du Mercedes G63"
                width={400}
                height={200}
                loading="lazy"
                decoding="async"
                className="w-full h-40 object-cover rounded-2xl shadow-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
