import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { REVIEWS_DATA } from "../../data/homeData";

const SCROLL_AMOUNT = 344;

/* SVG Google officiel */
const GoogleLogo: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    aria-hidden="true"
    focusable="false"
  >
    <g transform="matrix(1,0,0,1,27.009,-39.239)">
      <path
        fill="#4285F4"
        d="M-3.264 51.509c0-.79-.07-1.54-.19-2.27H-14.754v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M-14.754 63.239c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96l-3.98 3.09c1.97 3.92 6.02 6.62 10.71 6.62z"
      />
      <path
        fill="#FBBC05"
        d="M-21.484 53.529c-.25-.72-.39-1.49-.39-2.29s.14-1.57.39-2.29v-3.09h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M-14.754 43.989c1.77 0 3.35.61 4.6 1.8l3.32-3.42c-2.07-1.94-4.78-3.13-7.92-3.13-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
      />
    </g>
  </svg>
);

/* Logo Turo simplifié */
const TuroLogo: React.FC = () => (
  <span
    className="text-[10px] font-black tracking-tighter text-[#00A5BC]"
    aria-label="Turo"
  >
    turo
  </span>
);

const Testimonials: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: "left" | "right") => {
    listRef.current?.scrollBy({
      left: dir === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby="reviews-heading"
      className="py-24 bg-cream relative overflow-hidden border-t border-gold-300"
    >
      <div className="container mx-auto max-w-7xl relative group/section">
        {/* En-tête */}
        <div className="text-center mb-14 px-6">
          <span className="inline-block border border-gold-400 text-gold-600 text-xs font-bold px-4 py-2 uppercase tracking-widest rounded-sm mb-5">
            Avis clients vérifiés
          </span>
          <h2
            id="reviews-heading"
            className="font-serif text-3xl md:text-4xl text-dark-900 leading-tight max-w-xl mx-auto"
          >
            Ils nous font confiance,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-400">
              satisfaction garantie.
            </span>
          </h2>

          {/* Score global corrigé */}
          <div
            className="flex items-center justify-center gap-3 mt-6"
            aria-label="Note globale : 4.7 étoiles sur 5"
          >
            <div className="flex text-gold-400" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" stroke="none" />
              ))}
            </div>
            <span className="text-dark-900 font-bold text-lg">4,7</span>
            <span className="text-gray-500 text-sm font-light">
              · Basé sur 118 avis Google
            </span>
          </div>
        </div>

        {/* Navigation Gauche */}
        <button
          onClick={() => scroll("left")}
          aria-label="Voir les avis précédents"
          className="absolute left-2 md:left-6 top-[60%] -translate-y-1/2 z-20 bg-white border border-gold-200 text-dark-900 w-11 h-11 rounded-full flex items-center justify-center shadow-sm hover:bg-gold-400 hover:text-dark-900 hover:border-gold-400 transition-all opacity-100 md:opacity-0 md:group-hover/section:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        {/* Carrousel */}
        <ul
          ref={listRef}
          role="list"
          aria-label="Témoignages clients"
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6 md:px-20"
        >
          {REVIEWS_DATA.map((review, i) => (
            <li
              key={`${review.name}-${i}`}
              className="w-[300px] md:w-[320px] shrink-0 snap-center"
            >
              <article
                aria-label={`Avis de ${review.name}`}
                className="bg-white rounded-2xl p-6 border border-gold-100 flex flex-col h-full shadow-sm hover:shadow-md hover:border-gold-300 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar initiale */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${review.bg}`}
                      aria-hidden="true"
                    >
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-dark-900 text-sm leading-tight">
                        {review.name}
                      </p>
                      <time className="text-xs text-gray-500">
                        {review.time}
                      </time>
                    </div>
                  </div>

                  {/* Source */}
                  <div
                    aria-label={`Publié sur ${review.source === "google" ? "Google" : "Turo"}`}
                  >
                    {review.source === "google" ? <GoogleLogo /> : <TuroLogo />}
                  </div>
                </div>

                {/* Étoiles */}
                <div
                  className="flex text-gold-400 mb-3"
                  aria-label="5 étoiles sur 5"
                >
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      fill="currentColor"
                      stroke="none"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Texte */}
                <p className="text-gray-600 text-sm font-light leading-relaxed flex-grow">
                  {review.text}
                </p>

                {/* Ligne déco or en bas */}
                <div
                  className="mt-5 h-px bg-gradient-to-r from-gold-200 via-gold-400/40 to-transparent"
                  aria-hidden="true"
                />
              </article>
            </li>
          ))}
        </ul>

        {/* Navigation Droite */}
        <button
          onClick={() => scroll("right")}
          aria-label="Voir les avis suivants"
          className="absolute right-2 md:right-6 top-[60%] -translate-y-1/2 z-20 bg-white border border-gold-200 text-dark-900 w-11 h-11 rounded-full flex items-center justify-center shadow-sm hover:bg-gold-400 hover:text-dark-900 hover:border-gold-400 transition-all opacity-100 md:opacity-0 md:group-hover/section:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
