import React, { useState, useRef } from "react";
import {
  X,
  Cloud,
  DollarSign,
  Zap,
  Gauge,
  Settings,
  Check,
  Trash2,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "../ui/Button";

export interface CarData {
  brand: string;
  model: string;
  year: number;
  category: string;
  energy: string;
  gearbox: string;
  hp: number;
  accel: number;
  seats: number;
  price: number;
  deposit: number;
  km: number;
  plate: string;
  status: string;
  features: string[];
  images: { id: string; url: string; isCover: boolean; file?: File }[];
}

interface AddCarFormProps {
  onClose: () => void;
  onSave: (carData: CarData) => void;
}

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

export default function AddCarForm({ onClose, onSave }: AddCarFormProps) {
  const [formData, setFormData] = useState<Partial<CarData>>({
    brand: "",
    model: "",
    plate: "",
    category: "Sport",
    energy: "Essence",
    gearbox: "Auto",
    status: "available",
    features: [],
  });

  const [localImages, setLocalImages] = useState<
    { id: string; url: string; isCover: boolean; file?: File }[]
  >([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const toggleFeature = (feature: string) => {
    setFormData((prev) => {
      const current = prev.features || [];
      if (current.includes(feature))
        return { ...prev, features: current.filter((f) => f !== feature) };
      return { ...prev, features: [...current, feature] };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        url: URL.createObjectURL(file),
        isCover: localImages.length === 0,
        file,
      }));
      setLocalImages([...localImages, ...newImages]);
    }
  };

  const setCover = (id: string) => {
    setLocalImages((prev) =>
      prev.map((img) => ({ ...img, isCover: img.id === id }))
    );
  };

  const removeImage = (id: string) => {
    setLocalImages((prev) => {
      const filtered = prev.filter((img) => img.id !== id);
      if (prev.find((img) => img.id === id)?.isCover && filtered.length > 0) {
        filtered[0].isCover = true;
      }
      return filtered;
    });
  };

  const handleSubmit = () => {
    if (!formData.brand || !formData.model || !formData.price) {
      alert("Merci de remplir au moins la Marque, le Modèle et le Prix.");
      return;
    }

    const finalCar: CarData = {
      brand: formData.brand || "",
      model: formData.model || "",
      year: formData.year || new Date().getFullYear(),
      category: formData.category || "Sport",
      energy: formData.energy || "Essence",
      gearbox: formData.gearbox || "Auto",
      hp: formData.hp || 0,
      accel: formData.accel || 0,
      seats: formData.seats || 2,
      price: formData.price || 0,
      deposit: formData.deposit || 0,
      km: formData.km || 0,
      plate: formData.plate || "WW-000-XX",
      status: formData.status || "available",
      features: formData.features || [],
      images: localImages,
    };

    onSave(finalCar);
  };

  return (
    <div className="h-full flex flex-col bg-zinc-950 text-white">
      <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50 backdrop-blur-md sticky top-0 z-10">
        <div>
          <h2 className="text-xl font-bold text-white font-serif tracking-tight">
            Ajouter un Véhicule
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Complétez la fiche technique du bolide
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-zinc-800 rounded-full transition-colors"
        >
          <X size={20} className="text-zinc-400" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-10">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gold-500 uppercase tracking-widest flex items-center gap-2">
              <ImageIcon size={16} /> Galerie Photos
            </h3>
            <span className="text-xs text-zinc-500">
              {localImages.length} photo(s)
            </span>
          </div>

          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-zinc-800 hover:border-gold-500 hover:bg-gold-500/5 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group"
          >
            <input
              type="file"
              multiple
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
              accept="image/*"
            />
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
              <Cloud size={24} className="text-gold-500" />
            </div>
            <p className="text-sm font-medium text-white group-hover:text-gold-500 transition-colors">
              Glissez vos photos ou cliquez ici
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              HD Recommandée • Max 10Mo
            </p>
          </div>

          {localImages.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mt-6">
              {localImages.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setCover(img.id)}
                  className={`aspect-[4/3] rounded-lg relative group cursor-pointer overflow-hidden transition-all duration-300 ${
                    img.isCover
                      ? "ring-2 ring-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-[1.02]"
                      : "border border-zinc-800 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.url}
                    className="w-full h-full object-cover"
                    alt="preview"
                  />

                  {img.isCover && (
                    <div className="absolute bottom-0 inset-x-0 bg-gold-500 text-black text-[10px] font-bold text-center py-1">
                      PHOTO PRINCIPALE
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {!img.isCover && (
                      <span className="text-xs font-bold text-white">
                        Définir Cover
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(img.id);
                    }}
                    className="absolute top-2 right-2 p-1.5 bg-red-500/80 text-white rounded-md hover:bg-red-600 transition"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-bold text-gold-500 uppercase tracking-widest border-b border-zinc-800 pb-2">
            Identité
          </h3>
          <div className="grid grid-cols-2 gap-5">
            <FormInput
              label="Marque"
              name="brand"
              placeholder="Audi"
              value={formData.brand}
              onChange={handleChange}
            />
            <FormInput
              label="Modèle"
              name="model"
              placeholder="RS6 Avant"
              value={formData.model}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <FormInput
              label="Immatriculation"
              name="plate"
              placeholder="AA-123-BB"
              value={formData.plate}
              onChange={handleChange}
            />
            <FormInput
              label="Année"
              name="year"
              type="number"
              placeholder="2024"
              value={formData.year}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-xs uppercase text-zinc-500 font-bold mb-1.5 block ml-1">
              Catégorie
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
            >
              <option value="Sport">Sport</option>
              <option value="Luxe">Luxe / Prestige</option>
              <option value="SUV">SUV</option>
              <option value="Cabriolet">Cabriolet</option>
            </select>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-bold text-gold-500 uppercase tracking-widest border-b border-zinc-800 pb-2 flex gap-2">
            <Zap size={16} /> Performances
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <FormInput
              label="Puissance (ch)"
              name="hp"
              type="number"
              placeholder="600"
              icon={<Zap size={12} />}
              value={formData.hp}
              onChange={handleChange}
            />
            <FormInput
              label="0-100 km/h (s)"
              name="accel"
              type="number"
              step="0.1"
              placeholder="3.6"
              icon={<Gauge size={12} />}
              value={formData.accel}
              onChange={handleChange}
            />
            <FormInput
              label="Vitesse Max"
              name="vmax"
              type="number"
              placeholder="305"
              value={250}
              onChange={() => {}}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-xs uppercase text-zinc-500 font-bold mb-1.5 block ml-1">
                Motorisation
              </label>
              <select
                name="energy"
                value={formData.energy}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:border-gold-500 outline-none"
              >
                <option value="Essence">Essence SP98</option>
                <option value="Hybride">Hybride</option>
                <option value="Électrique">Électrique</option>
                <option value="Diesel">Diesel</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase text-zinc-500 font-bold mb-1.5 block ml-1">
                Boîte de vitesse
              </label>
              <select
                name="gearbox"
                value={formData.gearbox}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:border-gold-500 outline-none"
              >
                <option value="Auto">Automatique</option>
                <option value="Manuelle">Manuelle</option>
              </select>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-bold text-gold-500 uppercase tracking-widest border-b border-zinc-800 pb-2 flex gap-2">
            <DollarSign size={16} /> Tarification
          </h3>
          <div className="grid grid-cols-2 gap-5">
            <FormInput
              label="Prix / Jour (€)"
              name="price"
              type="number"
              placeholder="450"
              icon={<DollarSign size={12} />}
              value={formData.price}
              onChange={handleChange}
            />
            <FormInput
              label="Caution (€)"
              name="deposit"
              type="number"
              placeholder="5000"
              icon={<DollarSign size={12} />}
              value={formData.deposit}
              onChange={handleChange}
            />
          </div>
          <FormInput
            label="Kilométrage Actuel"
            name="km"
            type="number"
            placeholder="12500"
            value={formData.km}
            onChange={handleChange}
          />
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-bold text-gold-500 uppercase tracking-widest border-b border-zinc-800 pb-2 flex gap-2">
            <Settings size={16} /> Équipements
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Toit Panoramique",
              "Sièges Massants",
              "Système Audio Bang & Olufsen",
              "Freins Céramique",
              "Affichage Tête Haute",
              "Pack Carbone",
              "Échappement Sport",
            ].map((feat) => (
              <div
                key={feat}
                onClick={() => toggleFeature(feat)}
                className={`cursor-pointer p-3 rounded-lg border text-sm flex items-center gap-3 transition-all ${
                  formData.features?.includes(feat)
                    ? "bg-gold-500/10 border-gold-500 text-gold-500"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    formData.features?.includes(feat)
                      ? "border-gold-500 bg-gold-500 text-black"
                      : "border-zinc-600"
                  }`}
                >
                  {formData.features?.includes(feat) && (
                    <Check size={10} strokeWidth={4} />
                  )}
                </div>
                {feat}
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="p-6 border-t border-zinc-800 bg-zinc-900/50 backdrop-blur flex gap-4">
        <Button
          variant="secondary"
          fullWidth
          onClick={onClose}
          className="h-12"
        >
          Annuler
        </Button>
        <Button
          variant="primary"
          fullWidth
          onClick={handleSubmit}
          className="h-12 text-md shadow-lg shadow-gold-500/20"
        >
          Enregistrer le bolide
        </Button>
      </div>
    </div>
  );
}

function FormInput({ label, icon, ...props }: FormInputProps) {
  return (
    <div>
      <label className="text-xs uppercase text-zinc-500 font-bold mb-1.5 block ml-1">
        {label}
      </label>
      <div className="relative group">
        <input
          {...props}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 pl-4 text-white placeholder-zinc-600 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
        />
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-gold-500 transition-colors">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
