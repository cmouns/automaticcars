import React, { useState, useEffect } from "react";
import { Sidebar } from "../components/profile/SideBar";
import { ProfileSection } from "../components/profile/ProfileSection";
import { LicenseSection } from "../components/profile/LicenseSection";
import { SecuritySection } from "../components/profile/SecuritySection";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSection />;
      case "license":
        return <LicenseSection />;
      case "security":
        return <SecuritySection />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-64 text-dark-900">
            <p className="font-serif text-xl italic">Fonctionnalité à venir</p>
            <p className="text-sm mt-2">
              Cette section est en cours de développement.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="text-dark-900 font-sans selection:bg-gold-400 selection:text-black min-h-screen bg-cream ">
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl text-dark-900 mb-2">
            Espace <span className="text-gold-500">Client</span>
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Bienvenue dans votre espace personnel. Gérez vos préférences, vos
            documents et sécurisez votre compte pour une expérience de location
            d'exception.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="flex-1 min-w-0">
            <div className="bg-white border border-gold-500/30 shadow-[0_0_20px_rgba(218,175,55,0.25)] p-8 md:p-12">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default Profile;
