import React, { useEffect } from "react";
import { Star, MapPin, ShieldCheck, Key } from "lucide-react";

// Les vrais avis Google sélectionnés pour valoriser le service premium
const reviews = [
  { 
    name: "Sophie Wilcock", 
    text: "Fantastic service! Jad and his team delivered our vehicle directly to us at the airport after an emergency booking at 1am! They were friendly and helpful...", 
    time: "il y a 6 mois", 
    bg: "bg-purple-600" 
  },
  { 
    name: "Cameron Ngo", 
    text: "J’ai décidé de faire confiance à Automatic Cars Bordeaux pour partir un weekend au ski entre amis avec ce magnifique GLE 400D de chez Mercedes !", 
    time: "il y a 3 mois", 
    bg: "bg-blue-600" 
  },
  { 
    name: "Paul Foquet Carron", 
    text: "Week-end parfait avec une Mercedes Classe S louée chez Automatic Cars Bordeaux ! Voiture impeccable, service pro et accueil chaleureux.", 
    time: "il y a 7 mois", 
    bg: "bg-teal-600" 
  },
  { 
    name: "Djema Menam", 
    text: "Je loue chez eux depuis plus d’un an maintenant et je n’ai jamais été déçue ! Les voitures sont toujours propres, bien entretenues et prêtes à l’heure.", 
    time: "il y a 5 mois", 
    bg: "bg-orange-500" 
  },
  { 
    name: "Likmazeer", 
    text: "Location GLC coupé 2025 parfaite, rien à dire, répondent du tac au tac pour vos interrogations. Ça fait plaisir ce genre d’entreprise, des véhicules neufs...", 
    time: "il y a 3 mois", 
    bg: "bg-red-500" 
  },
  { 
    name: "Jean-François R.", 
    text: "Service de location de voitures très qualitatif. Bon rapport qualité/prix. Je recommande. Merci à Jad qui est très coopératif.", 
    time: "il y a 5 mois", 
    bg: "bg-green-600" 
  },
];

// Le vrai logo Google (G) en SVG
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans selection:bg-gold-400 selection:text-black">
      
      {/* 1. HEADER SECTION (Fond Sombre) */}
      <section className="bg-dark-900 text-white pt-32 xl:pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h1 className="text-sm md:text-base font-bold text-gold-400 uppercase tracking-[0.3em] mb-6">
            Notre Histoire
          </h1>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight text-white mb-8 drop-shadow-lg">
            L'excellence automobile,<br />
            <span className="italic text-gray-400 font-light">une passion partagée.</span>
          </h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 2. HISTOIRE SECTION (Fond Clair "Cream") */}
      <section className="bg-cream py-24 relative">
        <div className="container mx-auto max-w-5xl px-6">
          {/* La carte d'histoire en mode clair */}
          <div className="bg-white border border-gold-500/20 rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_-15px_rgba(218,175,55,0.15)] relative overflow-hidden">
            
            {/* Petite ligne dorée en haut de la carte */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
            
            <div className="grid md:grid-cols-2 gap-12 text-gray-600 font-light leading-relaxed text-lg">
              <div className="space-y-6">
                <p>
                  L’aventure <strong className="text-dark-900 font-bold">Automatic Cars</strong> a débuté en 2022 sous l'impulsion de Jad, entrepreneur et véritable passionné d’automobile. Après deux années d’expérience enrichissante dans la location entre particuliers, l'objectif était clair : créer un service innovant, entièrement pensé pour le confort absolu de nos clients.
                </p>
                <p>
                  Aujourd’hui, le projet prend une nouvelle dimension avec l’arrivée de Jules Foquet, professionnel expérimenté du secteur. Ensemble, nous unissons nos forces pour développer notre pôle haut de gamme et vous offrir une expérience toujours plus prestigieuse.
                </p>
              </div>
              
              <div className="space-y-6">
                <p>
                  Nous vous accueillons désormais dans notre <strong className="text-dark-900 font-bold">nouvelle agence de plus de 350 m²</strong>, idéalement située à deux pas de la gare Saint-Jean à Bordeaux. 
                </p>
                <p>
                  Afin de garantir un service irréprochable et un suivi sur-mesure, nous avons fait le choix privilégié de l'humain. Nous ne proposons plus de récupération autonome, mais continuons d'assurer <strong className="text-dark-900 font-bold">la livraison personnalisée de vos véhicules</strong> pour une flexibilité totale.
                </p>
              </div>
            </div>

            {/* Icon Values en version claire */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-gray-100">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="text-gold-500 mb-3" size={32} />
                <h3 className="text-dark-900 font-bold tracking-wider uppercase text-sm mb-2">Transparence</h3>
                <p className="text-sm text-gray-500">Un service clair, sans frais cachés.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MapPin className="text-gold-500 mb-3" size={32} />
                <h3 className="text-dark-900 font-bold tracking-wider uppercase text-sm mb-2">Bordeaux St-Jean</h3>
                <p className="text-sm text-gray-500">Une agence premium de 350 m².</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Key className="text-gold-500 mb-3" size={32} />
                <h3 className="text-dark-900 font-bold tracking-wider uppercase text-sm mb-2">Service Premium</h3>
                <p className="text-sm text-gray-500">Livraison personnalisée du véhicule.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TEMOIGNAGES SECTION (Retour au Fond Sombre) */}
      <section className="bg-dark-900 py-24 border-t border-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">La confiance de nos clients</h2>
            <div className="flex items-center justify-center gap-3 text-white font-medium text-lg">
              <span className="text-4xl font-bold">4.7</span>
              <div className="flex text-[#FBBC04] space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-current" />
                ))}
              </div>
              <span className="text-gray-400 text-sm ml-2">Basé sur 118 avis Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="bg-[#1A1A1A] rounded-xl p-6 border border-zinc-800/50 shadow-lg hover:shadow-gold-400/5 transition-all duration-300 flex flex-col"
              >
                {/* Header de l'avis (Avatar + Nom + G Logo) */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.bg}`}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm leading-tight">{review.name}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">1 avis</p>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>

                {/* Étoiles Google et Date */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-[#FBBC04]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs">{review.time}</span>
                </div>

                {/* Texte de l'avis */}
                <p className="text-gray-300 text-sm font-light leading-relaxed flex-grow">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;