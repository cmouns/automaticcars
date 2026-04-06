// src/pages/Home.tsx
import React, { useEffect } from "react";
import Hero from "../components/sections/Hero";
import BrandsCarousel from "../components/sections/BrandsCarousel";
import HomeIntro from "../components/sections/HomeIntro";
import Services from "../components/sections/Services";
import FeaturedCars from "../components/sections/FeaturedCars";
import Solutions from "../components/sections/Solutions";
import FaqContact from "../components/sections/FaqContact";
import Testimonials from "../components/sections/Testimonials";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page font-sans selection:bg-gold-400 selection:text-black bg-[#fafafa] overflow-x-hidden">
      <Hero />
      <BrandsCarousel />
      <HomeIntro />
      <Services />
      <FeaturedCars />
      <Solutions />
      <FaqContact />
      <Testimonials />
    </div>
  );
};

export default Home;
