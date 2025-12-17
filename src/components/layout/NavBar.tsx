import { useState, useEffect } from "react";
import { Menu, X, Phone, UserCircle } from "lucide-react";
import type { Session } from "@supabase/supabase-js";
import logo from "../../assets/logoAutomaticCarsSVG.svg";

import { NAV_ITEMS, SOCIAL_LINKS_DATA } from "./Navbar.data";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import UserDropdown from "./UserDropdown";

interface NavbarProps {
  session: Session | null;
  onLogout: () => void;
  onOpenAuth: () => void;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export default function Navbar({
  session,
  onLogout,
  onOpenAuth,
  currentPage,
  onNavigate,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [localPage, setLocalPage] = useState("home");
  const activePage = currentPage || localPage;

  const navigateFunction = onNavigate || ((id: string) => setLocalPage(id));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const scrollY = Math.abs(parseInt(document.body.style.top || "0", 10));
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (id: string) => {
    navigateFunction(id);
    setIsMobileMenuOpen(false);
  };

  // Définition de la transparence
  const isTransparent = activePage === "home" && !isScrolled;

  // Classes conditionnelles de background
  const bgClasses = isTransparent
    ? "bg-transparent shadow-none"
    : "bg-dark-900 backdrop-blur-md shadow-2xl"; // => couleur 100% opaque

  const paddingClasses = isTransparent ? "py-5" : "py-3";
  const currentTextColor = isTransparent ? "text-dark-900" : "text-white";

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${bgClasses} ${currentTextColor}`}
    >
      {/* NAVBAR PRINCIPALE */}
      <nav className={`w-full ${paddingClasses}`}>
        <div className="container mx-auto px-6 max-w-[1900px] flex items-center justify-center gap-x-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <img
              src={logo}
              alt="Automatic Cars logo"
              className="h-12 md:h-14 w-auto"
            />
          </div>

          {/* Menu Desktop */}
          <div className="hidden xl:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                type="nav"
                item={item}
                activePage={activePage}
                handleNavClick={handleNavClick}
                isMobile={false}
              />
            ))}

            <div className="h-8 w-px bg-white/20 mx-2"></div>

            <a
              href="tel:+33768176882"
              className="flex items-center gap-2 text-white hover:text-gold-400"
            >
              <Phone size={20} />
              <span className="hidden 2xl:inline font-bold text-sm">
                +33 7 68 17 68 82
              </span>
            </a>

            {session ? (
              <UserDropdown
                session={session}
                onLogout={onLogout}
                onNavigate={handleNavClick}
              />
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-2 text-white hover:text-gold-400 font-bold uppercase"
              >
                <UserCircle size={22} />
                Connexion
              </button>
            )}

            <button
              className="bg-gold-400 text-dark-900 px-7 py-3 font-bold uppercase"
              onClick={() => handleNavClick("reservation")}
            >
              Réserver
            </button>
          </div>

          {/* Bouton Mobile */}
          <div className="xl:hidden ml-auto">
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </nav>

      {/* SOUS-NAVBAR */}
      <div
        className={`hidden xl:flex w-full justify-center items-center py-2.5 transition-all duration-500 ${
          isTransparent ? "bg-transparent" : "bg-dark-900 backdrop-blur-md" // même couleur opaque que navbar principale
        }`}
      >
        <div className="flex items-center gap-6 text-[13px] font-sans">
          <span className="uppercase tracking-widest text-gold-400 font-bold opacity-90">
            Suivez-nous sur :
          </span>
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS_DATA.map((link) => (
              <NavLink
                key={link.href}
                type="social"
                link={link}
                isMobile={false}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        handleNavClick={handleNavClick}
        session={session}
        onLogout={onLogout}
        onOpenAuth={onOpenAuth}
        activePage={activePage}
      />
    </div>
  );
}
