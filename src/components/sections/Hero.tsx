import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { CheckCircle, Infinity as InfinityIcon, BadgeCheck } from "lucide-react";
import bordeaux from "../../assets/hero-automaticcars.jpg";

const Hero: React.FC = () => {
  const rafId = useRef<number | undefined>(undefined);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        if (bgRef.current) {
          bgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.5}px, 0)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden flex items-center bg-dark-900"
      aria-label="Automatic Cars – Location de prestige à Bordeaux"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <img
          src={bordeaux}
          alt="Location voiture de luxe Bordeaux Place de la Bourse de nuit"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-10 md:px-16 pt-32">
        <div className="max-w-6xl md:ml-12 lg:ml-24">
          <div
            className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="h-px w-12 bg-gold-400"></div>
            <p className="text-gold-400 uppercase tracking-[0.2em] text-sm font-bold m-0">
              Bordeaux & Gironde
            </p>
          </div>

          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Location de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-light italic pr-4 pb-4 inline-block">
              Prestige
            </span>
            <span className="sr-only"> à Bordeaux</span>
          </h1>

          <h2
            className="text-white text-2xl md:text-3xl font-serif mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Roulez l'Exception.
          </h2>

          <p
            className="text-gray-200 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-8 border-l-2 border-gold-400 pl-6 drop-shadow-lg opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            L'alliance parfaite entre performance et confort. Que vous
            choisissiez de conduire ou d'être conduit, profitez d'offres
            flexibles conçues pour répondre à vos plus hautes exigences.
          </p>

          <div
            className="flex flex-wrap gap-6 mb-12 text-white text-sm font-medium tracking-wide opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.0s" }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-gold-400" aria-hidden="true" />
              <span>Formules Flexibles</span>
            </div>
            <div className="flex items-center gap-2">
              <InfinityIcon size={18} className="text-gold-400" aria-hidden="true" />
              <span>Kilométrage illimité*</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck size={18} className="text-gold-400" aria-hidden="true" />
              <span>Partenaire Mercedes</span>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.3s" }}
          >
            <Link to="/reservation" className="w-full sm:w-auto">
              <Button className="shadow-gold-glow w-full">
                Réserver mon véhicule
              </Button>
            </Link>
            <Link to="/fleet" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                className="border-gray-400 text-gray-200 hover:border-white hover:text-white hover:bg-white/10 w-full"
              >
                Voir la flotte
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
