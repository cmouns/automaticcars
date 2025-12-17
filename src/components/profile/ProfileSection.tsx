import React from "react";
import { MapPin, Mail, User, Camera, Phone } from "lucide-react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { DateInput } from "../ui/DateInput";
import { useProfile } from "../../hooks/useProfile";

export const ProfileSection: React.FC = () => {
  const { loading, error, formData, avatarPreview, handleChange, handleSave } =
    useProfile();

  if (loading && !formData.id) {
    return (
      <div className="flex justify-center items-center h-64 text-gold-500 animate-pulse">
        <p>Chargement du profil...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="flex flex-col justify-center items-center h-64 text-red-500 bg-red-500/10 rounded-lg 
       
      -red-500/20 m-4"
      >
        <p className="font-bold">Erreur :</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSave}
      className="space-y-10 animate-in fade-in duration-500 text-gray-900 max-w-4xl mx-auto p-4 md:p-8"
    >
      {/* --- HEADER AVEC AVATAR --- */}
      <div
        className="flex flex-col md:flex-row items-center md:items-start gap-8 
      -b 
      -gray-200 pb-10"
      >
        <div className="relative group shrink-0">
          <div
            className="w-32 h-32 rounded-full 
          -2 
          -gold-500 p-1 relative shadow-[0_0_20px_rgba(218,165,32,0.2)]"
          >
            <img
              src={formData.avatarUrl || avatarPreview}
              alt="Profile"
              className="w-full h-full object-cover rounded-full bg-gray-100"
            />
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              title="Modifier la photo"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full flex items-center justify-center pointer-events-none z-10">
              <Camera className="text-gold-500 w-8 h-8" />
            </div>
          </div>
          <p className="text-center text-[10px] text-gold-500/80 mt-3 uppercase tracking-[0.2em] font-serif">
            Modifier
          </p>
        </div>

        <div className="flex-1 text-center md:text-left space-y-2 pt-2">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 tracking-wide">
            Mon Profil
          </h2>
          <p className="text-gray-500 font-light max-w-md mx-auto md:mx-0 leading-relaxed">
            Gérez vos informations personnelles.
          </p>
        </div>
      </div>

      {/* --- DÉTAILS PERSONNELS --- */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] bg-gold-500 flex-1"></div>
          <h3 className="text-gold-500 text-xl uppercase whitespace-nowrap">
            Détails Personnels
          </h3>
          <div className="h-[2px] bg-gold-500 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <Input
            label="Prénom"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            icon={<User size={18} />}
            placeholder="Prénom"
            variant="light"
          />
          <Input
            label="Nom"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            icon={<User size={18} />}
            placeholder="Nom"
            variant="light"
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            icon={<Mail size={18} />}
            disabled
            variant="light"
          />

          <Input
            label="Téléphone"
            name="phone"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            icon={<Phone size={18} />}
            placeholder="+33 6..."
            variant="light"
          />

          <DateInput
            label="Date de Naissance"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            variant="light"
          />
        </div>
      </div>

      {/* --- ADRESSE --- */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] bg-gold-500 flex-1"></div>
          <h3 className="text-gold-500 text-xl uppercase whitespace-nowrap">
            Adresse
          </h3>
          <div className="h-[2px] bg-gold-500 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <div className="md:col-span-2">
            <Input
              label="Numéro et rue"
              name="address"
              placeholder="14 rue de Bordeaux"
              value={formData.address}
              onChange={handleChange}
              icon={<MapPin size={18} />}
              variant="light"
            />
          </div>
          <Input
            label="Code Postal"
            name="zipCode"
            placeholder="33000"
            value={formData.zipCode}
            onChange={handleChange}
            variant="light"
          />
          <Input
            label="Ville"
            name="city"
            placeholder="Bordeaux"
            value={formData.city}
            onChange={handleChange}
            variant="light"
          />
          <Input
            label="Pays"
            name="country"
            placeholder="France"
            value={formData.country}
            onChange={handleChange}
            variant="light"
          />
        </div>
      </div>

      <div
        className="flex justify-end pt-8 
      -t 
      -gray-200"
      >
        <Button type="submit" isLoading={loading} className="px-8">
          {loading ? "Sauvegarde..." : "Enregistrer"}
        </Button>
      </div>
    </form>
  );
};
