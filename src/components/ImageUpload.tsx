import { useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Seules les images sont autorisées !");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "automaticcars_app_preset"); 

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/deznbtywe/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Erreur lors de l'upload");

      const data = await res.json();
      
      setImage(data.secure_url); 
      console.log("✅ Succès ! URL Cloudinary :", data.secure_url);

    } catch (error) {
      console.error("❌ Erreur d'upload :", error);
      alert("Erreur lors de l'envoi de l'image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 max-w-md mx-auto my-8 text-center">
      <h3 className="text-xl font-bold text-dark-900 mb-4">Test Upload Cloudinary ☁️</h3>
      
      <input 
        type="file" 
        accept="image/png, image/jpeg, image/webp" 
        onChange={uploadImage}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-gold-50 file:text-gold-600
          hover:file:bg-gold-100 mb-4"
      />

      {loading && <p className="text-blue-500 animate-pulse">Envoi en cours vers le cloud... 🚀</p>}

      {image && (
        <div className="mt-4">
          <p className="text-green-600 font-bold mb-2">Ça fonctionne ! 🎉</p>
          <p className="text-xs text-gray-400 break-all mb-2">{image}</p>
          <img 
            src={image} 
            alt="Retour de Cloudinary" 
            className="w-full h-48 object-cover rounded-lg border-2 border-green-500" 
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;