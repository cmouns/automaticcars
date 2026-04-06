import React, { useEffect } from "react";

const Reservation: React.FC = () => {
  useEffect(() => {
    // Empêche le scroll du site entier, seul le module Fleetee scrollera
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    // "flex-grow" prend automatiquement 100% de l'espace restant sous la navbar.
    // Fini les calc() et les marges négatives !
    <div className="flex-grow w-full flex flex-col bg-white">
      <iframe
        src="https://automatic-cars.fleetee.io/recherche"
        className="flex-grow w-full border-none"
        title="Module de réservation Fleetee"
      />
    </div>
  );
};

export default Reservation;
