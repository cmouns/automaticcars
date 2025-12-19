import React from "react";
import { User, Shield, FileText, CreditCard, LogOut, Car } from "lucide-react";
import { supabase } from "../../lib/supabaseClient"; //
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  firstName?: string;
  lastName?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  firstName = "",
  lastName = "",
}) => {
  const navigate = useNavigate();

  const initial = firstName.charAt(0).toUpperCase() || "U";
  const fullName = `${firstName} ${lastName}`.trim() || "Utilisateur";

  const menuItems = [
    { id: "profile", label: "Mon Profil", icon: <User size={18} /> },
    {
      id: "license",
      label: "Permis de Conduire",
      icon: <FileText size={18} />,
    },
    { id: "security", label: "Sécurité", icon: <Shield size={18} /> },
    { id: "bookings", label: "Mes Réservations", icon: <Car size={18} /> },
    {
      id: "payments",
      label: "Moyens de Paiement",
      icon: <CreditCard size={18} />,
    },
  ];

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut(); //
      if (error) throw error;
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="bg-white border border-gold-500/30 shadow-[0_0_20px_rgba(218,175,55,0.25)] p-6 sticky lg:top-32">
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-zinc-800">
          <div className="w-12 h-12 rounded-full bg-gold-400 text-black flex items-center justify-center font-serif text-xl font-bold">
            {initial}
          </div>
          <div className="overflow-hidden">
            <div className="text-black font-medium truncate">{fullName}</div>
            <div className="text-xs text-black uppercase tracking-wider truncate">
              Membre
            </div>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full flex items-center gap-4 px-4 py-4 text-sm uppercase tracking-widest transition-all duration-300
                ${
                  activeTab === item.id
                    ? "bg-gold-400 text-white border-l-2 border-gold-400 font-semibold"
                    : "text-gray-400 hover:text-white hover:bg-gold-400 border-l-2 border-transparent"
                }
              `}
            >
              <span className={activeTab === item.id ? "text-white" : ""}>
                {item.icon}
              </span>
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 px-4 py-2 text-sm text-red-500 hover:text-red-400 transition-colors uppercase tracking-widest w-full"
          >
            <LogOut size={18} />
            Déconnexion
          </button>
        </div>
      </div>
    </aside>
  );
};
