import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BRANDS_DATA } from "../../data/homeData";

const BrandsCarousel: React.FC = () => {
  const brandsRef = useRef<HTMLDivElement>(null);

  const scrollElement = (scrollAmount: number) => {
    if (brandsRef.current) {
      brandsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-12 border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-5xl relative group flex items-center">
        {/* Bouton Gauche */}
        <button
          onClick={() => scrollElement(-200)}
          className="hidden md:flex shrink-0 bg-transparent border border-gray-200 text-gray-400 w-10 h-10 rounded-full items-center justify-center hover:bg-gold-400 hover:text-white hover:border-gold-400 transition-all mr-4"
          aria-label="Voir les marques précédentes"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Liste des marques */}
        <div
          ref={brandsRef}
          className="flex gap-12 md:gap-16 overflow-x-auto snap-x snap-mandatory items-center justify-start pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
        >
          {BRANDS_DATA.map((brand, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-20 md:w-24 opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <img
                src={brand.img}
                alt={brand.name}
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Bouton Droit */}
        <button
          onClick={() => scrollElement(200)}
          className="hidden md:flex shrink-0 bg-transparent border border-gray-200 text-gray-400 w-10 h-10 rounded-full items-center justify-center hover:bg-gold-400 hover:text-white hover:border-gold-400 transition-all ml-4"
          aria-label="Voir les marques suivantes"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default BrandsCarousel;
