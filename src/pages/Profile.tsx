import React, { useState, useEffect, useRef } from "react";
import { Sidebar } from "../components/profile/SideBar";
import { PersonalInfo } from "../components/profile/PersonalInfo";
import { LicenseSection } from "../components/profile/LicenseSection";
import { SecuritySection } from "../components/profile/SecuritySection";
import { useProfile } from "../hooks/useProfile";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const {
    userId,
    formData,
    loading,
    error,
    handleChange,
    handleSave,
    refreshProfile,
  } = useProfile();

  const [sidebarProfile, setSidebarProfile] = useState({
    firstName: "",
    lastName: "",
  });

  const latestDataRef = useRef(formData);

  useEffect(() => {
    latestDataRef.current = formData;
  }, [formData]);

  useEffect(() => {
    if (!loading) {
      setSidebarProfile({
        firstName: latestDataRef.current.firstName,
        lastName: latestDataRef.current.lastName,
      });
    }
  }, [loading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <PersonalInfo
            formData={formData}
            loading={loading}
            error={error}
            handleChange={handleChange}
            handleSave={handleSave}
          />
        );

      case "license":
        return (
          <LicenseSection
            userId={userId || ""}
            initialData={{
              licenseNum: formData.licenseNumber,
              licenseExpirationDate: formData.licenseExpirationDate,
              licenseObtainedDate: formData.licenseObtainedDate,
              licenseFront: formData.licenseFrontPath || null,
              licenseBack: formData.licenseBackPath || null,
            }}
            onUpdate={refreshProfile}
          />
        );

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

  if (loading && !formData.email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream text-gold-500">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
        <span className="ml-4">Chargement de votre espace...</span>
      </div>
    );
  }

  return (
    <div className="text-dark-900 font-sans selection:bg-gold-400 selection:text-black min-h-screen bg-cream">
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl text-dark-900 mb-2">
            Espace <span className="text-gold-500">Client</span>
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Bienvenue dans votre espace personnel. Gérez vos préférences, vos
            documents et sécurisez votre compte.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            firstName={sidebarProfile.firstName}
            lastName={sidebarProfile.lastName}
          />

          <div className="flex-1 min-w-0">
            <div className="bg-white border border-gold-500/30 shadow-[0_0_20px_rgba(218,175,55,0.25)] p-8 md:p-12 text-dark-900">
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
