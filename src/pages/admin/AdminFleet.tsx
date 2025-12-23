import React, { useState } from "react";
import { Plus, Fuel, Gauge, Settings, MoreVertical } from "lucide-react";
import { Button } from "../../components/ui/Button";
import AddCarForm, { type CarData } from "../../components/admin/AddCarForm";

interface Car extends CarData {
  id: number;
}

export default function AdminFleet() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cars, setCars] = useState<Car[]>([
    {
      id: 1,
      brand: "Audi",
      model: "RS6 Avant",
      year: 2023,
      plate: "GA-123-FE",
      status: "available",
      price: 450,
      deposit: 5000,
      km: 12000,
      category: "Sport",
      energy: "Essence",
      gearbox: "Auto",
      hp: 600,
      accel: 3.6,
      seats: 5,
      features: [],
      images: [
        {
          id: "1",
          url: "https://images.unsplash.com/photo-1603584173870-7b23140c25b2?auto=format&fit=crop&q=80&w=1000",
          isCover: true,
        },
      ],
    },
    {
      id: 2,
      brand: "Lamborghini",
      model: "Urus",
      year: 2022,
      plate: "LU-999-XP",
      status: "rented",
      price: 1200,
      deposit: 8000,
      km: 25000,
      category: "SUV",
      energy: "Essence",
      gearbox: "Auto",
      hp: 650,
      accel: 3.6,
      seats: 5,
      features: [],
      images: [
        {
          id: "2",
          url: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=1000",
          isCover: true,
        },
      ],
    },
  ]);

  const handleAddNewCar = (newCarData: CarData) => {
    const newCar: Car = {
      id: Date.now(),
      ...newCarData,
    };

    setCars([newCar, ...cars]);
    setIsDrawerOpen(false);
  };

  const getCoverImage = (car: Car) => {
    const cover = car.images.find((img) => img.isCover);
    return cover
      ? cover.url
      : "https://via.placeholder.com/400x300?text=No+Image";
  };

  return (
    <div className="relative h-full">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white font-serif">
              Ma Flotte
            </h1>
            <p className="text-zinc-400">
              Gestion du parc automobile ({cars.length} véhicules)
            </p>
          </div>
          <Button
            variant="primary"
            icon={<Plus size={18} />}
            onClick={() => setIsDrawerOpen(true)}
          >
            Ajouter un véhicule
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-gold-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/5"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={getCoverImage(car)}
                  alt={car.model}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <StatusPill status={car.status} />
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] text-white font-bold uppercase border border-white/10">
                  {car.category}
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white font-serif">
                      {car.brand} {car.model}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mt-0.5">
                      {car.plate}
                    </p>
                  </div>
                  <button className="text-zinc-500 hover:text-white transition p-1 hover:bg-zinc-800 rounded">
                    <MoreVertical size={18} />
                  </button>
                </div>

                <div className="flex gap-4 my-5 py-3 border-y border-zinc-800/50">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                    <Gauge size={14} className="text-gold-500" />{" "}
                    <span>{car.hp} ch</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                    <Fuel size={14} className="text-gold-500" />{" "}
                    <span>{car.energy}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                    <Settings size={14} className="text-gold-500" />{" "}
                    <span>{car.gearbox}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-white">
                        {car.price}€
                      </span>
                      <span className="text-xs text-zinc-500">/jour</span>
                    </div>
                    <p className="text-[10px] text-zinc-600">
                      Caution: {car.deposit}€
                    </p>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-white text-black text-sm font-bold hover:bg-gold-400 transition-colors shadow-lg shadow-white/5">
                    Gérer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}

      <div
        className={`fixed inset-y-0 right-0 w-full md:w-[600px] bg-zinc-950 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out border-l border-zinc-800 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {isDrawerOpen && (
          <AddCarForm
            onClose={() => setIsDrawerOpen(false)}
            onSave={handleAddNewCar}
          />
        )}
      </div>
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const config: Record<string, { color: string; text: string }> = {
    available: { color: "bg-emerald-500 text-emerald-950", text: "Disponible" },
    rented: { color: "bg-amber-500 text-amber-950", text: "Louée" },
    maintenance: { color: "bg-red-500 text-red-950", text: "Garage" },
  };

  const current = config[status] || config.available;

  return (
    <span
      className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wide ${current.color} shadow-lg backdrop-blur-md`}
    >
      {current.text}
    </span>
  );
}
