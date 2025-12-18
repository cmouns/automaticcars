import React from "react";

interface ProfileHeaderProps {
  avatarUrl?: string;
  avatarPreview: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-gray-200 pb-10">
      <div className="flex-1 text-center space-y-2 pt-2">
        <h2 className="text-3xl md:text-4xl  font-serif text-[#c5a028] tracking-wide">
          Mon Profil
        </h2>
        <p className="text-gray-500 font-light max-w-md mx-auto leading-relaxed">
          Gérez vos informations personnelles.
        </p>
      </div>
    </div>
  );
};
