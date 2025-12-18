import React from 'react';
import { Eye, Loader2 } from 'lucide-react'; // J'ai retiré FileText
import { useSecureImage } from '../../hooks/useSecureImage';

interface Props {
  path: string | null;
  label: string;
}

export const SecureImagePreview: React.FC<Props> = ({ path, label }) => {
  const { imageUrl, loading } = useSecureImage(path);

  if (!path) return null;

  if (loading) return (
    <div className="flex items-center text-xs text-gray-400 mt-2">
      <Loader2 className="animate-spin w-3 h-3 mr-2"/> Chargement...
    </div>
  );

  if (!imageUrl) return <div className="text-red-500 text-xs mt-2">Erreur chargement</div>;

  return (
    <div className="mt-3 flex justify-end">
      <a 
        href={imageUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-800 hover:underline font-medium transition-colors"
      >
        <Eye size={16} />
        Voir {label}
      </a>
    </div>
  );
};