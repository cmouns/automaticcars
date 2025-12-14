import React, { useEffect, useState } from "react";
import { CheckCircle, Infinity as InfinityIcon, BadgeCheck } from "lucide-react";
import { Button } from "../ui/Button"; 
import bordeaux from "../../assets/reflection-place-de-la-bourse-bordeaux-francee.png";

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => requestAnimationFrame(() => setOffset(window.pageYOffset));
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center bg-dark-900">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-up { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>

      <div className="absolute inset-0 w-full h-full will-change-transform" style={{ transform: `translate3d(0, ${offset * 0.5}px, 0)` }}>
        <img src={bordeaux} alt="Bordeaux" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-10 md:px-16 pt-32">
        <div className="max-w-6xl">
          
          <div className="flex items-center gap-4 mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="h-px w-16 bg-gold-400"></div>
            <p className="text-gold-400 uppercase tracking-[0.25em] text-sm font-bold m-0">
              Bordeaux & Gironde
            </p>
          </div>

          <h1 className="font-serif text-white leading-[0.9] mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <span className="block text-5xl md:text-7xl lg:text-7xl mb-2">Location de</span>
            <span className="block text-6xl md:text-9xl lg:text-[9rem] text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-light italic">
              Prestige
            </span>
          </h1>

          <h2 className="text-white text-2xl md:text-4xl font-serif mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            Roulez l'Exception.
          </h2>

          <p className="text-gray-200 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-12 border-l-4 border-gold-400 pl-8 drop-shadow-lg opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            L’alliance parfaite entre performance et confort. Que vous choisissiez de conduire ou d'être conduit, 
            profitez d'offres flexibles conçues pour répondre à vos plus hautes exigences.
          </p>

          <div className="flex flex-wrap gap-8 mb-14 text-white text-sm font-semibold tracking-widest opacity-0 animate-fade-up" style={{ animationDelay: "1.0s" }}>
            <div className="flex items-center gap-3"><CheckCircle size={20} className="text-gold-400" /><span>Formules Flexibles</span></div>
            <div className="flex items-center gap-3"><InfinityIcon size={20} className="text-gold-400" /><span>Kilométrage illimité*</span></div>
            <div className="flex items-center gap-3"><BadgeCheck size={20} className="text-gold-400" /><span>Partenaire Mercedes</span></div>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-6 opacity-0 animate-fade-up" style={{ animationDelay: "1.3s" }}>
            <Button className="!bg-gold-400 !text-dark-900 hover:!bg-white hover:!text-black !rounded-sm !px-10 !py-5 !text-sm !font-bold !tracking-widest shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                RÉSERVER MON VÉHICULE
            </Button>
            <Button variant="secondary" className="!bg-transparent !border !border-gray-400 !text-gray-100 hover:!bg-white/10 hover:!border-white hover:!text-white !rounded-sm !px-10 !py-5 !text-sm !font-bold !tracking-widest">
              VOIR LA FLOTTE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;