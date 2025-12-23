import React, { useEffect } from "react";
import { Button } from "../../ui/Button";
import { ProfileHeader } from "./Header";
import { PersonalDetails, AddressDetails, LicenseDetails } from "./Fields";
import type { UserProfile } from "../../../types";

interface PersonalInfoProps {
  formData: UserProfile;
  loading: boolean;
  error: string | null;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: string } }
  ) => void;
  handleSave: (e: React.FormEvent) => Promise<void>;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  formData,
  loading,
  error,
  handleChange,
  handleSave,
}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (loading && !formData.firstName) {
    return (
      <div className="flex justify-center items-center h-64 text-gold-500 animate-pulse">
        <p>Chargement du profil...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-64 text-red-500 bg-red-50 rounded-lg m-4 border border-red-100">
        <p className="font-bold mb-2">Une erreur est survenue</p>
        <p className="text-sm">{error}</p>
        <Button className="mt-4" onClick={() => window.location.reload()}>
          Réessayer
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSave}
      className="space-y-10 animate-in fade-in duration-500 text-gray-900 max-w-4xl mx-auto p-4 md:p-8"
    >
      <ProfileHeader />

      <PersonalDetails formData={formData} handleChange={handleChange} />
      <AddressDetails formData={formData} handleChange={handleChange} />
      <LicenseDetails formData={formData} handleChange={handleChange} />

      <div className="flex justify-end pt-8 border-t border-gray-200">
        <Button type="submit" isLoading={loading} className="px-8">
          {loading ? "Sauvegarde..." : "Enregistrer"}
        </Button>
      </div>
    </form>
  );
};
