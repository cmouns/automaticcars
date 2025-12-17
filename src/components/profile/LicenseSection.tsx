import React, { useState, useRef } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { FileText, Upload, CheckCircle, Trash2 } from "lucide-react";
import type { FileUploadState } from "../../types";

export const LicenseSection: React.FC = () => {
  const [licenseNumber, setLicenseNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [uploadState, setUploadState] = useState<FileUploadState>({
    file: null,
    fileName: null,
    uploading: false,
    success: false,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== "application/pdf") {
        alert("Seuls les fichiers PDF sont acceptés.");
        return;
      }

      setUploadState({ ...uploadState, uploading: true });
      setTimeout(() => {
        setUploadState({
          file: file,
          fileName: file.name,
          uploading: false,
          success: true,
        });
      }, 1500);
    }
  };

  const removeFile = () => {
    setUploadState({
      file: null,
      fileName: null,
      uploading: false,
      success: false,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="border-b border-zinc-800 pb-6">
        <h2 className="text-3xl font-serif text-white">Permis de Conduire</h2>
        <p className="text-zinc-400 text-sm font-light mt-2">
          Obligatoire pour toute location. Vos documents sont stockés de manière
          sécurisée.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Numéro de Permis"
          placeholder="ex: 123456789"
          value={licenseNumber}
          onChange={(e) => setLicenseNumber(e.target.value)}
          icon={<FileText size={16} />}
        />
        <Input
          label="Date d'expiration"
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </div>

      <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-sm">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-700">
            {uploadState.success ? (
              <CheckCircle className="text-gold-400 w-8 h-8" />
            ) : (
              <FileText className="text-zinc-500 w-8 h-8" />
            )}
          </div>

          <div>
            <h4 className="text-white font-serif text-lg">
              {uploadState.success
                ? "Document Ajouté"
                : "Copie du Permis (PDF)"}
            </h4>
            <p className="text-zinc-500 text-xs mt-1 max-w-sm mx-auto">
              {uploadState.success
                ? `Fichier: ${uploadState.fileName}`
                : "Veuillez télécharger une copie lisible de votre permis de conduire au format PDF."}
            </p>
          </div>

          {!uploadState.success && !uploadState.uploading && (
            <div className="relative">
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
                id="license-upload"
              />
              <label
                htmlFor="license-upload"
                className="inline-flex items-center gap-2 cursor-pointer bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-6 py-3 text-xs uppercase tracking-widest transition-colors border border-zinc-700 hover:border-gold-400"
              >
                <Upload size={16} />
                Sélectionner un fichier
              </label>
            </div>
          )}

          {uploadState.uploading && (
            <div className="text-gold-400 text-sm animate-pulse uppercase tracking-widest">
              Téléchargement en cours...
            </div>
          )}

          {uploadState.success && (
            <button
              onClick={removeFile}
              className="text-red-500 hover:text-red-400 text-xs uppercase tracking-widest flex items-center gap-2"
            >
              <Trash2 size={14} /> Supprimer le fichier
            </button>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button
          onClick={() => alert("Informations permis sauvegardées")}
          disabled={!licenseNumber || !uploadState.success}
        >
          Valider le permis
        </Button>
      </div>
    </div>
  );
};
