import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button"; // Vérifie bien le chemin vers ton composant Button
import { FEATURED_CARS } from "../../data/homeData";

const FeaturedCars: React.FC = () => {
  const carsRef = useRef<HTMLDivElement>(null);

  const scrollElement = (scrollAmount: number) => {
    if (carsRef.current) {
      carsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-[#fafafa] relative border-b border-gray-200">
      <div className="container mx-auto max-w-[1400px] relative group">
        {/* Bouton Gauche */}
        <button
          onClick={() => scrollElement(-380)}
          aria-label="Voir les véhicules précédents"
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 text-dark-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gold-400 hover:text-white transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Carrousel de véhicules */}
        <div
          ref={carsRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6 md:px-24"
          role="region"
          aria-label="Sélection de véhicules"
        >
          {FEATURED_CARS.map((car, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[350px] shrink-0 snap-center group/car cursor-pointer"
            >
              <div className="flex flex-col h-full">
                {/* Nom du véhicule en haut */}
                <h4 className="font-bold text-dark-900 text-lg mb-3 pl-2 transition-colors group-hover/car:text-gold-600">
                  {car.name}
                </h4>

                {/* Cadre de l'image */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gold-500/10 hover:border-gold-200 transition-all duration-500 relative">
                  <img
                    src={car.img}
                    alt={car.name}
                    loading="lazy"
                    className="w-full h-full object-cover mix-blend-multiply transform group-hover/car:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Droit */}
        <button
          onClick={() => scrollElement(380)}
          aria-label="Voir les véhicules suivants"
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 text-dark-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gold-400 hover:text-white transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bouton Voir toute la flotte */}
      <div className="text-center mt-10">
        <Link to="/fleet">
          <Button
            variant="secondary"
            className="border-gray-300 text-dark-900 hover:bg-dark-900 hover:text-white hover:border-dark-900 transition-colors py-3 px-8"
          >
            Découvrir toute la flotte
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCars;
