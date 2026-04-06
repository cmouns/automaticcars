import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "../../data/homeData";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 bg-gray-50 border-b border-gray-200"
    >
      <div className="container mx-auto px-6">
        {/* En-tête de section */}
        <div className="mb-16 text-left">
          <h3 className="text-gold-500 uppercase tracking-[0.2em] text-xs font-bold mb-3 font-sans">
            L'Excellence Automatic Cars
          </h3>
          <h2 className="font-serif text-4xl md:text-5xl text-dark-900 leading-tight">
            Nos Services Exclusifs
          </h2>
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className={`
                group relative p-8 transition-all duration-500 rounded-sm flex flex-col min-h-[300px]
                ${
                  service.isDark
                    ? "bg-dark-900 text-white shadow-xl lg:translate-y-[-8px]"
                    : "bg-white text-dark-900 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:border-gold-200"
                }
              `}
            >
              {/* Zone Icône & Flèche */}
              <div className="flex justify-between items-start mb-8">
                <div
                  className={`
                  p-3 rounded-sm transition-colors duration-300
                  ${
                    service.isDark
                      ? "bg-white/10 text-gold-400"
                      : "bg-gold-50 text-gold-600 group-hover:bg-gold-500 group-hover:text-white"
                  }
                `}
                >
                  <service.icon size={28} strokeWidth={1.5} />
                </div>

                <ArrowUpRight
                  size={24}
                  className={`transition-all duration-500 transform 
                    ${service.isDark ? "text-gray-500" : "text-gray-300"}
                    group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-500
                  `}
                />
              </div>

              {/* Texte */}
              <h3
                className={`font-serif text-2xl mb-4 ${service.isDark ? "text-white" : "text-dark-900"}`}
              >
                {service.title}
              </h3>

              <p
                className={`text-sm leading-relaxed font-sans ${service.isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                {service.description}
              </p>

              {/* Ligne décorative animée en bas */}
              <div
                className={`
                absolute bottom-0 left-0 h-1 bg-gold-500 transition-all duration-500
                ${service.isDark ? "w-full opacity-100" : "w-0 group-hover:w-full opacity-100"}
              `}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
