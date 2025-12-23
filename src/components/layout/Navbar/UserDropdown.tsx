import React, { useState, useRef, useEffect } from "react";
import { LogOut, User, Heart, UserCircle, LayoutDashboard } from "lucide-react"; 
import type { Session } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom"; 

interface UserDropdownProps {
  session: Session;
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({
  session,
  onLogout,
  onNavigate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const userEmail = session.user.email || "Compte";

  const menuItems = [
    { label: "Mon Profil", icon: User, page: "profile" },
    { label: "Mes Favoris", icon: Heart, page: "favorites" },
  ];

  const handleActionClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  const handleLogoutClick = () => {
    onLogout();
    setIsOpen(false);
  };

  const handleAdminClick = () => {
    navigate("/admin"); 
    setIsOpen(false);
  };

  return (
    <div className="relative group/user" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1 rounded-full text-white transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-gold-400"
        aria-expanded={isOpen}
      >
        <UserCircle size={22} />
        <span className="text-sm font-bold uppercase hidden 2xl:inline text-white/90">
          Compte
        </span>
      </button>

      <div
        className={`absolute right-0 mt-3 w-56 origin-top-right bg-dark-800 border border-white/10 rounded-lg shadow-2xl transition-all duration-300 z-50 ${
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
        style={{ transformOrigin: "top right" }}
      >
        <div className="py-2 text-white">
          <div className="px-4 py-2 text-sm text-gray-400 border-b border-white/10 truncate">
            {userEmail}
          </div>

          <button
            onClick={handleAdminClick}
            className="flex items-center w-full px-4 py-3 text-sm font-bold text-gold-500 hover:bg-white/5 transition-colors border-b border-white/10 mb-1"
          >
            <LayoutDashboard size={18} className="mr-3" />
            ADMINISTRATION
          </button>
          {/* ------------------------------------------- */}

          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleActionClick(item.page)}
              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gold-400 hover:text-dark-900 transition-colors"
            >
              <item.icon size={18} className="mr-3" />
              {item.label}
            </button>
          ))}

          <div className="border-t border-white/10 my-1"></div>

          <button
            onClick={handleLogoutClick}
            className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-red-600/20 transition-colors"
          >
            <LogOut size={18} className="mr-3" />
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
