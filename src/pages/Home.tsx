import React, { useEffect } from "react";
import Hero from "../components/sections/Hero";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-page">
      <div className="xl:-mt-20">
        <Hero />
      </div>

      <section className="min-h-[500px] bg-dark-800 text-white flex items-center justify-center p-10">
        <h2 className="text-3xl font-serif text-gold-400">
          Section 2: Nos Services (Flotte, LLD, etc.)
        </h2>
      </section>

      <section className="min-h-[500px] bg-dark-900 text-white flex items-center justify-center p-10">
        <h2 className="text-3xl font-serif text-gold-400">
          Section 3: Témoignages Clients
        </h2>
      </section>
    </div>
  );
};

export default Home;
