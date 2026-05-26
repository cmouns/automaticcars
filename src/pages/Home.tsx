import React, { useEffect } from "react";
import Hero from "../components/sections/Hero";
import BrandsCarousel from "../components/sections/BrandsCarousel";
import CarSpinner360 from "../components/sections/CarSpinner360";
import HomeIntro from "../components/sections/HomeIntro";
import Services from "../components/sections/Services";
import Solutions from "../components/sections/Solutions";
import FaqContact from "../components/sections/FaqContact";
import Testimonials from "../components/sections/Testimonials";

const skipLinkClass =
  "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-gold-400 text-dark-900 font-bold px-4 py-2 rounded z-[9999] focus:outline-none focus:ring-2 focus:ring-dark-900";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <a href="#main-content" className={skipLinkClass}>
        Aller au contenu principal
      </a>

      <div
        id="main-content"
        className="font-sans selection:bg-gold-400 selection:text-black bg-[#fafafa] overflow-x-hidden"
      >
        <Hero />
        <BrandsCarousel />
        <CarSpinner360 />
        <HomeIntro />
        <Services />
        <Solutions />
        <FaqContact />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
