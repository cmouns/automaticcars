import { useState, useCallback, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import type { UserProfile } from "../types";

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
  licenseExpirationDate: "",
  licenseObtainedDate: "",
  licenseFrontPath: null,
  licenseBackPath: null,
  avatarUrl: "",
};

export const useProfile = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<UserProfile>(INITIAL_FORM_DATA);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [avatarPreview] = useState<string>("https://picsum.photos/200/200");

  const fetchProfile = useCallback(async (uid: string) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from("clients")
        .select("*")
        .eq("user_id", uid)
        .single();

      if (error && error.code !== "PGRST116") {
        throw new Error(error.message);
      }

      if (data) {
        setFormData({
          id: data.id,
          email: data.email,
          firstName: data.firstname || "",
          lastName: data.lastname || "",
          phoneNumber: data.phone || "",
          dateOfBirth: data.date_of_birth || "",
          address: data.addr_street || "",
          city: data.addr_city || "",
          zipCode: data.addr_zip || "",
          country: data.country || "",
          licenseNumber: data.license_num || "",
          licenseExpirationDate: data.license_expiration_date || "",
          licenseObtainedDate: data.license_obtained_date || "",
          avatarUrl: data.avatar_url || "",
          isPro: data.is_pro || false,
          licenseFrontPath: data.license_front_path || null,
          licenseBackPath: data.license_back_path || null,
        });
      }
    } catch (err: unknown) {
      console.error(err);
      setError("Impossible de charger le profil.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user && mounted) {
        setUserId(session.user.id);
        fetchProfile(session.user.id);
      } else if (mounted) {
        setLoading(false);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user && mounted) {
        setUserId(session.user.id);
        fetchProfile(session.user.id);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [fetchProfile]);

  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | { target: { name: string; value: string } }
    ) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return;

    setLoading(true);
    setError(null);

    const clientData = {
      user_id: userId,
      email: formData.email,
      firstname: formData.firstName,
      lastname: formData.lastName,
      phone: formData.phoneNumber,
      date_of_birth: formData.dateOfBirth || null,
      addr_street: formData.address,
      addr_city: formData.city,
      addr_zip: formData.zipCode,
      country: formData.country,
      license_num: formData.licenseNumber,
      license_expiration_date: formData.licenseExpirationDate || null,
      license_obtained_date: formData.licenseObtainedDate || null,
    };

    try {
      const { error: saveError } = await supabase
        .from("clients")
        .upsert(clientData, { onConflict: "user_id" });

      if (saveError) throw new Error(saveError.message);
      alert("Profil mis à jour !");
    } catch (err: unknown) {
      console.error(err);
      const message =
        err instanceof Error ? err.message : "Erreur lors de l'enregistrement.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    formData,
    avatarPreview,
    handleChange,
    handleSave,
    userId,
  };
};
