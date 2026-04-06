import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../../assets/logoAutomaticCarsSVG.svg";
import { NAV_ITEMS, SOCIAL_LINKS_DATA } from "./data";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: Readonly<NavbarProps>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [localPage, setLocalPage] = useState("home");
  const activePage = currentPage || localPage;

  const navigateFunction = onNavigate || ((id: string) => setLocalPage(id));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (id: string) => {
    navigateFunction(id);
    setIsMobileMenuOpen(false);
  };

  const isTransparent = activePage === "home" && !isScrolled;
  const bgClasses = isTransparent
    ? "bg-transparent shadow-none"
    : "bg-dark-900 backdrop-blur-md shadow-2xl";
  const paddingClasses = isTransparent ? "py-5" : "py-3";
  const currentTextColor = isTransparent ? "text-dark-900" : "text-white";

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${bgClasses} ${currentTextColor}`}
    >
      <nav className={`w-full ${paddingClasses}`} role="navigation" aria-label="Navigation principale">
        <div className="container mx-auto px-6 max-w-[1900px] flex items-center justify-between xl:justify-center gap-x-16">
          <button
            className="flex items-center cursor-pointer bg-transparent border-none p-0"
            onClick={() => handleNavClick("home")}
            aria-label="Accueil Automatic Cars"
          >
            <img
              src={logo}
              alt="Automatic Cars logo"
              className="h-12 md:h-14 w-auto"
            />
          </button>

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

            <div className="h-8 w-px bg-white/20 mx-2" aria-hidden="true"></div>

            <a
              href="tel:+33768176882"
              className="flex items-center gap-2 text-white hover:text-gold-400 mr-4"
              aria-label="Appeler le +33 7 68 17 68 82"
            >
              <Phone size={20} aria-hidden="true" />
              <span className="hidden 2xl:inline font-bold text-sm">
                +33 7 68 17 68 82
              </span>
            </a>

            <button
              className="bg-gold-400 text-dark-900 px-7 py-3 font-bold uppercase hover:bg-white transition-colors"
              onClick={() => handleNavClick("reservation")}
            >
              Réserver
            </button>
          </div>

          <div className="xl:hidden">
            <button
              className={currentTextColor}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={30} aria-hidden="true" /> : <Menu size={30} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`hidden xl:flex w-full justify-center items-center py-2.5 transition-all duration-500 ${isTransparent ? "bg-transparent" : "bg-dark-900 backdrop-blur-md"}`}
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

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        handleNavClick={handleNavClick}
        activePage={activePage}
      />
    </div>
  );
}
