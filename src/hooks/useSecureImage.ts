import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export const useSecureImage = (path: string | null) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!path) {
      setImageUrl(null);
      return;
    }

    const fetchSignedUrl = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.storage
          .from('secure-documents') 
          .createSignedUrl(path, 3600);

        if (error) throw error;
        if (data) setImageUrl(data.signedUrl);
        
      } catch (err) {
        console.error("Erreur chargement image:", err);
        setImageUrl(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSignedUrl();
  }, [path]);

  return { imageUrl, loading };
};