import React from "react";
import { NAV_ITEMS, SOCIAL_LINKS_DATA } from "./data";
import NavLink from "./NavLink";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  handleNavClick: (id: string) => void;
  activePage: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  handleNavClick,
  activePage,
}) => {
  return (
    <div
      className={`fixed inset-0 w-full h-[100dvh] bg-dark-900 z-40 transition-transform duration-500 xl:hidden ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col justify-start items-center h-full px-6 pt-32 pb-10 space-y-6 overflow-y-auto">
        <div className="w-full space-y-2 mt-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              type="nav"
              item={item}
              activePage={activePage}
              handleNavClick={handleNavClick}
              isMobile
            />
          ))}
        </div>

        <button
          className="w-full bg-gold-400 text-dark-900 py-4 font-bold uppercase tracking-widest text-lg mt-4 hover:bg-white transition-colors"
          onClick={() => handleNavClick("reservation")}
        >
          Réserver
        </button>

        <div className="flex gap-8 pt-6 mt-auto">
          {SOCIAL_LINKS_DATA.map((link) => (
            <NavLink key={link.href} type="social" link={link} isMobile />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
