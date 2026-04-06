import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { Button } from "../components/ui/Button";

// Extraction et nettoyage des images du code source fourni
const fleetImages = [
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00070-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00276-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00277-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00270-771x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00269-768x1024.png",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00283-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00282-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00280-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00281-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00279-576x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00285-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00284-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00563-778x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00288-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00287-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00278-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00714-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00424-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00422-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00423-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00713-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00275-768x1024.png",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00274-768x1024.png",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00273-768x1024.png",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00272-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00271-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00211-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00158-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00157-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00156-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00113-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00073-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00072-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00071-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00042-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00041-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00019-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00018-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00017-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00016-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00003-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00002-768x1024.jpeg",
  "https://automaticcars.fr/wp-content/uploads/2025/11/image00001-768x1024.jpeg",
];

const Fleet: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-cream min-h-screen selection:bg-gold-400 selection:text-black">
      {/* HEADER SECTION (Sombre) */}
      <header className="bg-dark-900 pt-32 xl:pt-40 pb-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <span className="text-gold-500 text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
            Showroom Digital
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Notre{" "}
            <span className="italic text-gold-400 font-light">Flotte</span>
          </h1>
          <p className="text-gray-300 font-light leading-relaxed text-lg max-w-2xl mx-auto">
            Découvrez nos véhicules en photos. Une sélection premium entretenue
            avec soin pour vous offrir la meilleure expérience de conduite.
          </p>
        </div>
      </header>

      {/* GALLERY SECTION (Masonry Layout) */}
      <main className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Utilisation des colonnes CSS (columns-1, sm:columns-2, md:columns-3, lg:columns-4) 
            C'est l'astuce pour faire un vrai design "Masonry" (style Pinterest) en CSS pur sans JS lourd.
          */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {fleetImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl break-inside-avoid cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                {/* On garde le ratio d'origine de l'image (pas de h-full ou object-cover) 
                  pour respecter le vrai design Masonry
                */}
                <img
                  src={image}
                  alt={`Véhicule Automatic Cars ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay discret au survol avec une icône de zoom (simulée ici par une opacité) */}
                <div className="absolute inset-0 bg-dark-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-sm tracking-widest uppercase border border-white px-4 py-2 rounded">
                    Agrandir
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CALL TO ACTION */}
      <section className="bg-dark-900 py-20 text-center border-t border-white/10">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-serif text-white mb-6">
            Prêt à prendre le volant ?
          </h2>
          <p className="text-gray-400 font-light mb-10">
            Tous nos véhicules sont disponibles à la réservation en ligne ou par
            téléphone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/reservation">
              <Button
                variant="primary"
                className="w-full sm:w-auto shadow-gold-glow flex items-center justify-center gap-2"
              >
                RÉSERVER UN VÉHICULE <ArrowRight size={18} />
              </Button>
            </Link>
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={() => (window.location.href = "tel:+33768176882")}
            >
              NOUS APPELER
            </Button>
          </div>
        </div>
      </section>

      {/* MODALE LIGHTBOX POUR AFFICHER L'IMAGE EN GRAND */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-dark-900/95 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Bouton Fermer */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation(); // Évite que le clic sur le bouton ferme la modale puis la rouvre
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>

          {/* L'image en grand */}
          <img
            src={selectedImage}
            alt="Véhicule en grand"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Permet de ne pas fermer la modale si on clique SUR l'image
          />
        </div>
      )}
    </div>
  );
};

export default Fleet;
