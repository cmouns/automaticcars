import React from 'react';
import { Fuel, Settings, Gauge } from 'lucide-react';

export interface CarProps {
  id: string;
  name: string;
  category: string;
  image: string;
  features: string[];
  engineType?: string;
  transmission?: string;
  fuelConsumption?: string;
  price?: string; 
}

interface CarCardProps {
  car: CarProps;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="group relative bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden border border-gray-100 h-full flex flex-col">
      
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-dark-900/0 transition-colors"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
           <p className="text-xs text-gold-600 font-bold uppercase tracking-wider mb-1">{car.category}</p>
           <h3 className="text-xl font-serif text-dark-900">{car.name}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {car.features.map((f, i) => (
            <span key={i} className="text-[10px] uppercase tracking-wide border border-gray-200 px-2 py-1 rounded text-gray-500 group-hover:border-gold-200 transition-colors">
              {f}
            </span>
          ))}
        </div>
        
        {(car.engineType || car.transmission) && (
          <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-t border-gray-100 mt-auto">
             {car.engineType && (
               <div className="flex flex-col items-center text-center">
                 <Settings size={14} className="text-gold-400 mb-1" />
                 <span className="text-[10px] text-gray-400 uppercase">Moteur</span>
                 <span className="text-xs font-bold text-dark-900 leading-tight">{car.engineType}</span>
               </div>
             )}
             {car.transmission && (
               <div className="flex flex-col items-center text-center border-l border-gray-100">
                 <Gauge size={14} className="text-gold-400 mb-1" />
                 <span className="text-[10px] text-gray-400 uppercase">Boîte</span>
                 <span className="text-xs font-bold text-dark-900 leading-tight">{car.transmission}</span>
               </div>
             )}
             {car.fuelConsumption && (
               <div className="flex flex-col items-center text-center border-l border-gray-100">
                 <Fuel size={14} className="text-gold-400 mb-1" />
                 <span className="text-[10px] text-gray-400 uppercase">Conso</span>
                 <span className="text-xs font-bold text-dark-900 leading-tight">{car.fuelConsumption}</span>
               </div>
             )}
          </div>
        )}

        <button className="w-full py-3 bg-dark-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-gold-400 hover:text-dark-900 transition-colors mt-auto">
          Réserver
        </button>
      </div>
    </div>
  );
};

export default CarCard;