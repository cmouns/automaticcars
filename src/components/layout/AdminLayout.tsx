import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Car,
  Calendar,
  Users,
  Wallet,
  Settings,
  Bell,
  Search,
  Home,
} from "lucide-react";
import { cn } from "../../lib/utils";

export default function AdminLayout() {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: Calendar, label: "Planning", path: "/admin/planning" },
    { icon: Car, label: "Flotte", path: "/admin/fleet" },
    { icon: Users, label: "Clients", path: "/admin/clients" },
    { icon: Wallet, label: "Finance", path: "/admin/finance" },
    { icon: Settings, label: "Réglages", path: "/admin/settings" },
  ];

  return (
    <div className="flex h-screen bg-zinc-950 text-white font-sans overflow-hidden">
      <aside className="w-64 border-r border-zinc-800 bg-zinc-900/50 backdrop-blur-xl flex flex-col z-20">
        <div className="p-6 border-b border-zinc-800">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center text-black font-bold group-hover:scale-105 transition-transform">
              AC
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tighter text-white">
                AUTOMATIC CARS
              </h1>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest group-hover:text-gold-500 transition-colors">
                Admin Panel
              </p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                  isActive
                    ? "bg-gold-500/10 text-gold-500 border-r-2 border-gold-500"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon
                  size={20}
                  className={cn(isActive && "text-gold-500")}
                />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:bg-white/5 hover:text-white rounded-lg w-full transition-colors duration-200"
          >
            <Home size={20} />
            <span className="font-medium">Retour au site</span>
          </Link>
        </div>
      </aside>
      ${" "}
      <main className="flex-1 flex flex-col min-w-0 bg-zinc-950 relative overflow-hidden">
        <header className="h-16 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-md flex items-center justify-between px-8 z-10 sticky top-0">
          <div className="relative w-96 hidden md:block">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Recherche globale..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:border-gold-500 focus:outline-none transition-all"
            />
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-gold-500 text-black flex items-center justify-center font-bold">
              MS
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-8 relative">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
