import React, { useState, useEffect } from "react";
import { Input } from "../ui/Input";
import { DateInput } from "../ui/DateInput";
import { Button } from "../ui/Button";
import { FileText, Save, AlertTriangle } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";
import { UploadDocument } from "../UploadDocument";

interface LicenseSectionProps {
  userId: string;
  initialData?: {
    licenseNum: string;
    licenseExpirationDate: string;
    licenseObtainedDate: string;
    licenseFront: string | null;
    licenseBack: string | null;
  };
}

export const LicenseSection: React.FC<LicenseSectionProps> = ({
  userId,
  initialData,
}) => {
  const [licenseNumber, setLicenseNumber] = useState(
    initialData?.licenseNum || ""
  );
  const [expirationDate, setExpirationDate] = useState(
    initialData?.licenseExpirationDate || ""
  );
  const [obtainedDate, setObtainedDate] = useState(
    initialData?.licenseObtainedDate || ""
  );

  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const today = new Date();
  const minReasonableDate = new Date();
  minReasonableDate.setFullYear(today.getFullYear() - 100);

  useEffect(() => {
    if (initialData) {
      setLicenseNumber(initialData.licenseNum || "");
      setExpirationDate(initialData.licenseExpirationDate || "");
      setObtainedDate(initialData.licenseObtainedDate || "");
    }
  }, [initialData]);

  const handleSaveInfo = async () => {
    if (!userId) return;
    setSaving(true);
    setErrorMsg(null);

    const cleanExpiration = expirationDate === "" ? null : expirationDate;
    const cleanObtained = obtainedDate === "" ? null : obtainedDate;

    try {
      const { data, error } = await supabase
        .from("clients")
        .update({
          license_num: licenseNumber,
          license_expiration_date: cleanExpiration,
          license_obtained_date: cleanObtained,
        })
        .eq("user_id", userId)
        .select();

      if (error) throw error;

      if (!data || data.length === 0) {
        throw new Error(
          "Votre profil client n'existe pas encore. Veuillez sauvegarder vos Informations Personnelles (Nom/Prénom) d'abord."
        );
      }

      alert("Informations du permis sauvegardées avec succès !");

    } catch (error: unknown) {
      console.error("Erreur sauvegarde:", error);

      let message = "Une erreur inconnue est survenue.";
      if (error instanceof Error) {
        message = error.message;
      }

      setErrorMsg(`Erreur lors de la sauvegarde : ${message}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-serif text-dark-900">
          Permis de Conduire
        </h2>
        <p className="text-gray-500 text-sm font-light mt-2">
          Ces informations nous permettent de vérifier l'ancienneté de votre
          permis et sa validité.
        </p>
      </div>

      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md flex items-start gap-3">
          <AlertTriangle className="shrink-0 mt-0.5" size={18} />
          <p className="text-sm">{errorMsg}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <Input
            label="Numéro de Permis"
            placeholder="ex: 123456789"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            icon={<FileText size={16} />}
            variant="light"
          />
        </div>

        <DateInput
          label="Date d'obtention"
          name="licenseObtainedDate"
          value={obtainedDate}
          onChange={(e) => setObtainedDate(e.target.value)}
          variant="light"
          maxDate={today}
          minDate={minReasonableDate}
        />
        <DateInput
          label="Date d'expiration"
          name="licenseExpirationDate"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          variant="light"
          minDate={today}
        />
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleSaveInfo}
          disabled={saving || !licenseNumber}
          className="bg-dark-900 text-white hover:bg-gold-500 hover:text-black border border-transparent"
        >
          {saving ? "Sauvegarde..." : "Enregistrer les informations"}{" "}
          <Save size={16} className="ml-2" />
        </Button>
      </div>

      <div className="mt-8 border-t border-gray-200 pt-8">
        <h3 className="text-xl text-dark-900 font-serif mb-6">
          Photos du Permis
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UploadDocument
            userId={userId}
            label="Permis (Recto)"
            columnName="license_front_path"
            currentPath={initialData?.licenseFront}
            onUploadComplete={(path) => console.log("Recto update:", path)}
          />

          <UploadDocument
            userId={userId}
            label="Permis (Verso)"
            columnName="license_back_path"
            currentPath={initialData?.licenseBack}
            onUploadComplete={(path) => console.log("Verso update:", path)}
          />
        </div>
      </div>
    </div>
  );
};
