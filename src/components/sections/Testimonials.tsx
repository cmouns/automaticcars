import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { REVIEWS_DATA } from "../../data/homeData";

const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollElement = (scrollAmount: number) => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl relative group">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 px-4">
            Découvrez les retours de nos clients satisfaction garantie !
          </h2>
        </div>

        {/* Bouton Gauche */}
        <button
          onClick={() => scrollElement(-344)} // Largeur carte (320px) + Gap (24px) = Défilement parfait
          aria-label="Voir les avis précédents"
          className="absolute left-2 md:left-8 top-[60%] -translate-y-1/2 z-20 bg-white border border-gray-200 text-dark-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gold-400 hover:text-white hover:border-gold-400 transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none"
        >
          <ChevronLeft size={24} aria-hidden="true" />
        </button>

        {/* Carrousel d'avis */}
        <div
          ref={testimonialsRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6 md:px-24"
          role="region"
          aria-label="Avis clients vérifiés"
        >
          {REVIEWS_DATA.map((testi, index) => (
            <div
              key={index}
              className="w-[320px] shrink-0 snap-center bg-white rounded-2xl p-6 border border-gray-200 flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              {/* En-tête de la carte (Profil + Logo Google) */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${testi.bg}`}
                  >
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-900 text-sm leading-tight">
                      {testi.name}
                    </h4>
                    <span className="text-xs text-gray-500">{testi.time}</span>
                  </div>
                </div>

                {/* Logo Google Officiel SVG */}
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path
                      fill="#4285F4"
                      d="M -3.264,51.509 C -3.264,50.719 -3.334,49.969 -3.454,49.239 L -14.754,49.239 L -14.754,53.749 L -8.284,53.749 C -8.574,55.229 -9.424,56.479 -10.684,57.329 L -10.684,60.329 L -6.824,60.329 C -4.564,58.239 -3.264,55.159 -3.264,51.509 Z"
                    />
                    <path
                      fill="#34A853"
                      d="M -14.754,63.239 C -11.514,63.239 -8.804,62.159 -6.824,60.329 L -10.684,57.329 C -11.764,58.049 -13.134,58.489 -14.754,58.489 C -17.884,58.489 -20.534,56.379 -21.484,53.529 L -25.464,53.529 L -25.464,56.619 C -23.494,60.539 -19.444,63.239 -14.754,63.239 Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M -21.484,53.529 C -21.734,52.809 -21.864,52.039 -21.864,51.239 C -21.864,50.439 -21.724,49.669 -21.484,48.949 L -21.484,45.859 L -25.464,45.859 C -26.284,47.479 -26.754,49.299 -26.754,51.239 C -26.754,53.179 -26.284,54.999 -25.464,56.619 L -21.484,53.529 Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M -14.754,43.989 C -12.984,43.989 -11.404,44.599 -10.154,45.789 L -6.734,42.369 C -8.804,40.429 -11.514,39.239 -14.754,39.239 C -19.444,39.239 -23.494,41.939 -25.464,45.859 L -21.484,48.949 C -20.534,46.099 -17.884,43.989 -14.754,43.989 Z"
                    />
                  </g>
                </svg>
              </div>

              {/* Étoiles Google */}
              <div className="flex text-[#fbbc04] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="currentColor"
                    stroke="none"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Texte de l'avis */}
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {testi.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bouton Droit */}
        <button
          onClick={() => scrollElement(344)} // Largeur carte (320px) + Gap (24px)
          aria-label="Voir les avis suivants"
          className="absolute right-2 md:right-8 top-[60%] -translate-y-1/2 z-20 bg-white border border-gray-200 text-dark-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gold-400 hover:text-white hover:border-gold-400 transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none"
        >
          <ChevronRight size={24} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
