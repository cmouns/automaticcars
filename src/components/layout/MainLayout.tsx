import type { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface MainLayoutProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const MainLayout: React.FC<PropsWithChildren<MainLayoutProps>> = ({
  children,
  currentPage,
  onNavigate,
}) => {
  const isHome = currentPage === "home";
  const isReservation = currentPage === "reservation";

  // La navbar fait ~80px sur mobile, et ~130px sur PC (à cause de la sous-navbar "Suivez-nous")
  // Sur la page réservation, on force le main à prendre 100vh (hauteur de l'écran)
  const mainClasses = isHome
    ? "pt-0"
    : `pt-[80px] xl:pt-[130px] ${isReservation ? "flex flex-col h-[100dvh]" : ""}`;

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />

      <main className={`flex-grow w-full ${mainClasses}`}>{children}</main>

      {/* On désactive totalement le Footer sur la page Réservation pour un effet "App Native" */}
      {!isReservation && <Footer onNavigate={onNavigate} />}
    </div>
  );
};

export default MainLayout;
