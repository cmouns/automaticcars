import React, { useEffect } from "react";

const Reservation: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="flex-grow w-full flex flex-col bg-white">
      <iframe
        src="https://automatic-cars.fleetee.io/recherche"
        className="flex-grow w-full border-0 min-h-0"
        title="Module de réservation Fleetee"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
        allow="payment; geolocation"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Reservation;
