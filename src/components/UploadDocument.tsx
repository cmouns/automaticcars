import React, { useState } from "react";
import {
  Upload,
  Check,
  Loader2,
  AlertCircle,
  Edit2,
} from "lucide-react";
import { supabase } from "../lib/supabaseClient";
import { SecureImagePreview } from "./ui/SecureImagePreview";

interface UploadProps {
  userId: string;
  label: string;
  columnName: "license_front_path" | "license_back_path";
  currentPath?: string | null;
  onUploadComplete: (path: string) => void;
}

export const UploadDocument: React.FC<UploadProps> = ({
  userId,
  label,
  columnName,
  currentPath,
  onUploadComplete,
}) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filePath, setFilePath] = useState<string | null>(currentPath || null);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      setError(null);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("Veuillez sélectionner une image.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const newFilePath = `${userId}/${columnName}_${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("secure-documents")
        .upload(newFilePath, file);

      if (uploadError) throw uploadError;

      const { error: dbError } = await supabase
        .from("clients")
        .update({ [columnName]: newFilePath })
        .eq("user_id", userId);

      if (dbError) throw dbError;

      setFilePath(newFilePath);
      onUploadComplete(newFilePath);
      setIsEditing(false);
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Une erreur inconnue est survenue.");
      }
    } finally {
      setUploading(false);
    }
  };

  if (filePath && !isEditing) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-dark-900 mb-2 uppercase">
          {label}
        </label>

        <div className="p-4 border border-green-500/30 bg-green-50 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-green-700 font-medium">
              <Check size={18} />
              <span>Document enregistré</span>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="text-xs text-gray-500 hover:text-dark-900 flex items-center gap-1 underline"
            >
              <Edit2 size={12} /> Modifier
            </button>
          </div>

          <SecureImagePreview path={filePath} label={label} />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-medium text-gray-700 uppercase">
          {label}
        </label>
        {isEditing && (
          <button
            onClick={() => setIsEditing(false)}
            className="text-xs text-gray-500 hover:text-red-500"
          >
            Annuler
          </button>
        )}
      </div>

      <div
        className={`
        relative 
        border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center transition-colors
        ${
          uploading
            ? "border-gold-500 bg-gold-50"
            : "border-gray-300 hover:border-gold-500 bg-gray-50"
        }
      `}
      >
        {uploading ? (
          <>
            <Loader2 className="animate-spin text-gold-500 h-8 w-8 mb-2" />
            <p className="text-sm text-gray-500">Envoi sécurisé en cours...</p>
          </>
        ) : (
          <>
            <Upload className="text-gray-400 h-8 w-8 mb-2" />
            <p className="text-sm text-gray-500 mb-2">
              Cliquez ou glissez votre fichier <br />
              <span className="text-xs text-gray-400">(PDF, JPG, PNG)</span>
            </p>
          </>
        )}

        {!uploading && (
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={handleUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        )}
      </div>

      {error && (
        <p className="flex items-center text-red-500 text-xs mt-2">
          <AlertCircle size={12} className="mr-1" /> {error}
        </p>
      )}
    </div>
  );
};