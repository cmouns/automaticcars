import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, X, ZoomIn } from "lucide-react";
import { Button } from "../components/ui/Button";

interface FleetImage {
  src: string;
  alt: string;
}

const fleetImages: FleetImage[] = [
  {
    src: "/images/fleet/image00001-768x1024.jpg",
    alt: "Véhicule prestige Automatic Cars",
  },
  {
    src: "/images/fleet/image00002-768x1024.jpg",
    alt: "Flotte premium Bordeaux",
  },
  {
    src: "/images/fleet/image00003-768x1024.jpg",
    alt: "Location voiture luxe",
  },
  {
    src: "/images/fleet/image00016-768x1024.jpg",
    alt: "Automatic Cars Prestige",
  },
  { src: "/images/fleet/image00017-768x1024.jpg", alt: "Mercedes Bordeaux" },
  {
    src: "/images/fleet/image00018-768x1024.jpg",
    alt: "BMW Location Bordeaux",
  },
  { src: "/images/fleet/image00019-768x1024.jpg", alt: "Audi Prestige" },
  { src: "/images/fleet/image00041-768x1024.jpg", alt: "Porsche Bordeaux" },
  { src: "/images/fleet/image00042-768x1024.jpg", alt: "LLD Premium" },
  { src: "/images/fleet/image00070-768x1024.jpg", alt: "Prestige Motors" },
  { src: "/images/fleet/image00071-768x1024.jpg", alt: "Luxury Cars Bordeaux" },
  { src: "/images/fleet/image00072-768x1024.jpg", alt: "Flotte 2025" },
  { src: "/images/fleet/image00073-768x1024.jpg", alt: "Service Chauffeur" },
  { src: "/images/fleet/image00113-768x1024.jpg", alt: "Garez-vous en luxe" },
  { src: "/images/fleet/image00156-768x1024.jpg", alt: "Véhicule Sportif" },
  { src: "/images/fleet/image00157-768x1024.jpg", alt: "Location Cabriolet" },
  { src: "/images/fleet/image00158-768x1024.jpg", alt: "Mercedes Classe S" },
  { src: "/images/fleet/image00211-768x1024.jpg", alt: "Range Rover Bordeaux" },
  { src: "/images/fleet/image00269-768x1024.png", alt: "Bentley Location" },
  { src: "/images/fleet/image00270-771x1024.jpg", alt: "Luxe Bordeaux" },
  { src: "/images/fleet/image00271-768x1024.jpg", alt: "Automatic Cars" },
  { src: "/images/fleet/image00272-768x1024.jpg", alt: "Prestige" },
  { src: "/images/fleet/image00273-768x1024.png", alt: "Location SUV" },
  { src: "/images/fleet/image00274-768x1024.png", alt: "Voiture Premium" },
  { src: "/images/fleet/image00275-768x1024.png", alt: "Showroom Bordeaux" },
  { src: "/images/fleet/image00276-768x1024.jpg", alt: "Collection 2025" },
  { src: "/images/fleet/image00277-768x1024.jpg", alt: "Mercedes AMG" },
  { src: "/images/fleet/image00278-768x1024.jpg", alt: "BMW M Series" },
  { src: "/images/fleet/image00279-576x1024.jpg", alt: "Audi RS" },
  { src: "/images/fleet/image00280-768x1024.jpg", alt: "Luxe" },
  { src: "/images/fleet/image00281-768x1024.jpg", alt: "Premium Bordeaux" },
  { src: "/images/fleet/image00282-768x1024.jpg", alt: "Voiture de Sport" },
  { src: "/images/fleet/image00283-768x1024.jpg", alt: "Berline de Luxe" },
  { src: "/images/fleet/image00284-768x1024.jpg", alt: "Limousine Bordeaux" },
  { src: "/images/fleet/image00285-768x1024.jpg", alt: "Service VIP" },
  { src: "/images/fleet/image00287-768x1024.jpg", alt: "Automatic Cars" },
  { src: "/images/fleet/image00288-768x1024.jpg", alt: "Prestige" },
  { src: "/images/fleet/image00422-768x1024.jpg", alt: "Excellence" },
  { src: "/images/fleet/image00423-768x1024.jpg", alt: "Luxe" },
  { src: "/images/fleet/image00424-768x1024.jpg", alt: "Bordeaux" },
  { src: "/images/fleet/image00563-778x1024.jpg", alt: "Premium" },
  { src: "/images/fleet/image00564-1024x1024.jpg", alt: "Voiture" },
  { src: "/images/fleet/image00713-768x1024.jpg", alt: "Location" },
  { src: "/images/fleet/image00714-768x1024.jpg", alt: "Prestige" },
  {
    src: "/images/fleet/IMG_0887-1-scaled-e1752513609846-1024x817.png",
    alt: "Voiture",
  },
  {
    src: "/images/fleet/IMG_0893-2-scaled-e1752513649748-1024x811.png",
    alt: "Luxe",
  },
  {
    src: "/images/fleet/IMG_0916-scaled-e1752513810736-1024x461.png",
    alt: "Premium",
  },
  {
    src: "/images/fleet/IMG_0938-2-1-scaled-e1752513703136-1024x728.png",
    alt: "Bordeaux",
  },
  {
    src: "/images/fleet/IMG_0970-scaled-e1752511594260-1024x576.jpg",
    alt: "Location",
  },
  {
    src: "/images/fleet/IMG_1018-scaled-e1752512196218-1024x576.png",
    alt: "Prestige",
  },
  {
    src: "/images/fleet/IMG_1106-1-scaled-e1752513771561-1024x628.png",
    alt: "Premium",
  },
  {
    src: "/images/fleet/IMG-20241119-WA0002-scaled-e1732350729578-958x1024.jpg",
    alt: "Luxe",
  },
  {
    src: "/images/fleet/IMG-20241119-WA0005-scaled-e1732350700703-938x1024.jpg",
    alt: "Bordeaux",
  },
  {
    src: "/images/fleet/IMG-20241119-WA0010-scaled-1.jpg",
    alt: "Automatic Cars",
  },
  {
    src: "/images/fleet/IMG-20241119-WA0017-scaled-e1732350756526-938x1024.jpg",
    alt: "Prestige",
  },
  {
    src: "/images/fleet/IMG-20241119-WA0025-e1732350775993-890x1024.jpg",
    alt: "Premium",
  },
  {
    src: "/images/fleet/IMG-20241119-WA0031-1-scaled-e1732350832566-914x1024.jpg",
    alt: "Voiture",
  },
  { src: "/images/fleet/IMG-20241119-WA0032-768x1024.jpg", alt: "Luxe" },
  {
    src: "/images/fleet/IMG-20241119-WA0036-e1732350853590-1002x1024.jpg",
    alt: "Bordeaux",
  },
  {
    src: "/images/fleet/IMG-20241119-WA0037-e1732350875600-876x1024.jpg",
    alt: "Location",
  },
].slice(0, 60);

const Fleet: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<FleetImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") {
        const next = (selectedIndex + 1) % fleetImages.length;
        setSelectedIndex(next);
        setSelectedImage(fleetImages[next]);
      }
      if (e.key === "ArrowLeft") {
        const prev =
          (selectedIndex - 1 + fleetImages.length) % fleetImages.length;
        setSelectedIndex(prev);
        setSelectedImage(fleetImages[prev]);
      }
    };
    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setTimeout(() => closeBtnRef.current?.focus(), 10);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, selectedIndex]);

  const openImage = (image: FleetImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  return (
    <>
      <Helmet>
        <title>
          Notre Flotte - Automatic Cars Bordeaux | Mercedes, BMW, Cupra
        </title>
        <meta
          name="description"
          content="Découvrez notre sélection de véhicules premium disponibles à la location à Bordeaux."
        />
      </Helmet>

      <div className="font-sans bg-[#F9F9F5] min-h-screen selection:bg-gold-400 selection:text-black">
        <header className="bg-dark-900 pt-32 xl:pt-40 pb-24 text-center relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none"
          />
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <span className="text-gold-500 text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
              Showroom Digital
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Notre <span className="text-gold-400 font-light">Flotte</span>
            </h1>
            <p className="text-gray-300 font-light leading-relaxed text-lg max-w-2xl mx-auto">
              Une sélection premium entretenue avec soin pour une expérience de
              conduite optimale.
            </p>
          </div>
        </header>

        <main className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {fleetImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openImage(image, index)}
                  aria-label={`Agrandir : ${image.alt}`}
                  className="relative group w-full aspect-[4/5] overflow-hidden rounded-xl bg-dark-900 shadow-sm border border-dark-900/5 transition-transform hover:-translate-y-1"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col items-center gap-2">
                      <ZoomIn size={28} className="text-white" />
                      <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                        Agrandir
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>

        <section className="bg-dark-900 py-24 text-center border-t border-white/5">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Prêt à prendre le volant ?
            </h2>
            <p className="text-gray-400 font-light mb-10">
              Réservez votre véhicule d'exception dès maintenant.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/reservation" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  className="w-full py-4 shadow-gold-glow flex items-center justify-center gap-2"
                >
                  RÉSERVER UN VÉHICULE <ArrowRight size={18} />
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white hover:text-dark-900"
                onClick={() => (window.location.href = "tel:+33768176882")}
              >
                NOUS APPELER
              </Button>
            </div>
          </div>
        </section>

        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] bg-dark-900/98 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              ref={closeBtnRef}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest font-sans">
              {selectedIndex + 1} / {fleetImages.length}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Fleet;
