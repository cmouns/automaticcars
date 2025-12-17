import { useState, useCallback, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import type { UserProfile } from "../types";

// Valeurs par défaut
const INITIAL_FORM_DATA: UserProfile = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  dateOfBirth: "",
  address: "",
  city: "",
  zipCode: "",
  country: "",
  licenseNumber: "",
  licenseExpiry: "",
};

export const useProfile = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<UserProfile>(INITIAL_FORM_DATA);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [avatarPreview] = useState<string>("https://picsum.photos/200/200");

  // --- 1. RÉCUPÉRATION (Fetch) ---
  const fetchProfile = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();

      if (error && error.code !== "PGRST116") {
        throw new Error(error.message);
      }

      if (data) {
        // Mapping: Base de données (snake_case) -> React (camelCase)
        setFormData({
          id: data.id,
          email: data.email,
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          phoneNumber: data.phone_number || "",
          dateOfBirth: data.date_of_birth || "",
          address: data.address || "",
          city: data.city || "",
          zipCode: data.zip_code || "",
          country: data.country || "",
          licenseNumber: data.license_number || "",
          licenseExpiry: data.license_expiry || "",
          avatarUrl: data.avatar_url || "",
        });
      } else {
        setFormData((prev) => ({ ...prev, id: id }));
      }
    } catch (err) {
      console.error("Erreur de chargement:", err);
      setError("Impossible de charger le profil.");
    } finally {
      setLoading(false);
    }
  }, []);

  // --- 2. VÉRIFICATION AUTH ---
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
        fetchProfile(user.id);
      } else {
        setError("Vous devez être connecté.");
        setLoading(false);
      }
    };
    getUser();
  }, [fetchProfile]);

  // --- 3. ACTIONS (Change & Save) ---
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      setError("ID utilisateur manquant.");
      return;
    }

    setLoading(true);
    setError(null);

    // Mapping Inverse: React (camelCase) -> Base de données (snake_case)
    const profileData = {
      id: userId,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phoneNumber,
      date_of_birth: formData.dateOfBirth,
      address: formData.address,
      city: formData.city,
      zip_code: formData.zipCode,
      country: formData.country,
      license_number: formData.licenseNumber,
      license_expiry: formData.licenseExpiry,
      avatar_url: formData.avatarUrl,
    };

    try {
      const { error: saveError } = await supabase
        .from("profiles")
        .upsert(profileData)
        .select();

      if (saveError) throw new Error(saveError.message);
      alert("Profil mis à jour !");
    } catch (err) {
      console.error("Erreur sauvegarde:", err);
      setError("Erreur lors de l'enregistrement.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, formData, avatarPreview, handleChange, handleSave };
};