import React from "react";
import { User, Mail, Phone, MapPin, FileText } from "lucide-react";
import { Input } from "../../ui/Input";
import { DateInput } from "../../ui/DateInput";
import { SectionHeader } from "../../ui/SectionHeader";
import type { UserProfile } from "../../../types";

interface SectionProps {
  formData: UserProfile;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: string } }
  ) => void;
}

const today = new Date();
const maxBirthDate = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDate()
);
const minBirthDate = new Date(
  today.getFullYear() - 65,
  today.getMonth(),
  today.getDate()
);

export const PersonalDetails: React.FC<SectionProps> = ({
  formData,
  handleChange,
}) => (
  <div className="space-y-6">
    <SectionHeader title="Détails Personnels" />
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
        name="phoneNumber"
        type="tel"
        value={formData.phoneNumber || ""}
        onChange={handleChange}
        icon={<Phone size={18} />}
        placeholder="+33 6..."
        variant="light"
      />
      <DateInput
        label="Date de Naissance"
        name="dateOfBirth"
        value={formData.dateOfBirth || ""}
        onChange={handleChange}
        variant="light"
        maxDate={maxBirthDate}
        minDate={minBirthDate}
      />
    </div>
  </div>
);

export const AddressDetails: React.FC<SectionProps> = ({
  formData,
  handleChange,
}) => (
  <div className="space-y-6 pt-4">
    <SectionHeader title="Adresse" />
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
        disabled
        variant="light"
      />
    </div>
  </div>
);

export const LicenseDetails: React.FC<SectionProps> = ({
  formData,
  handleChange,
}) => (
  <div className="space-y-6 pt-4">
    <SectionHeader title="Permis de Conduire" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
      <Input
        label="Numéro de Permis"
        name="licenseNumber"
        placeholder="Ex: 123456789"
        value={formData.licenseNumber}
        onChange={handleChange}
        icon={<FileText size={18} />}
        variant="light"
      />
      <DateInput
        label="Date d'obtention"
        name="licenseObtainedDate"
        value={formData.licenseObtainedDate || ""}
        onChange={handleChange}
        variant="light"
        maxDate={today}
      />
      <DateInput
        label="Date d'expiration"
        name="licenseExpirationDate"
        value={formData.licenseExpirationDate || ""}
        onChange={handleChange}
        variant="light"
        minDate={today}
      />
    </div>
  </div>
);
