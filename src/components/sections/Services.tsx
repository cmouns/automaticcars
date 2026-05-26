import React, { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICES_DATA, FEATURED_CARS } from "../../data/homeData";

const CARD_WIDTH = 280;
const GAP = 20;
const STEP = CARD_WIDTH + GAP;

const Services: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const isJumping = useRef(false);
  const totalReal = FEATURED_CARS.length;
  const loopedCars = [...FEATURED_CARS, ...FEATURED_CARS, ...FEATURED_CARS];

  const getBlockSize = useCallback(() => {
    const el = listRef.current;
    if (!el) return STEP;
    const visible = Math.floor(el.clientWidth / STEP);
    return Math.max(1, visible) * STEP;
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollLeft = totalReal * STEP;
  }, [totalReal]);

  const onScroll = useCallback(() => {
    const el = listRef.current;
    if (!el || isJumping.current) return;
    const min = STEP;
    const max = totalReal * 2 * STEP;
    if (el.scrollLeft <= min || el.scrollLeft >= max) {
      isJumping.current = true;
      el.scrollLeft = totalReal * STEP;
      requestAnimationFrame(() => {
        isJumping.current = false;
      });
    }
  }, [totalReal]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const scroll = (dir: "left" | "right") => {
    const block = getBlockSize();
    listRef.current?.scrollBy({
      left: dir === "left" ? -block : block,
      behavior: "smooth",
    });
  };

  return (
    <section id="services" aria-labelledby="services-heading">
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-left">
            <h3 className="text-gold-500 uppercase tracking-[0.2em] text-xs font-bold mb-3 font-sans">
              L'Excellence Automatic Cars
            </h3>
            <h2
              id="services-heading"
              className="font-serif text-4xl md:text-5xl text-dark-900 leading-tight"
            >
              Nos Services Exclusifs
            </h2>
          </div>

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
                    aria-hidden="true"
                    className={`transition-all duration-500 transform
                      ${service.isDark ? "text-gray-500" : "text-gray-300"}
                      group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-500
                    `}
                  />
                </div>

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

                <div
                  aria-hidden="true"
                  className={`
                    absolute bottom-0 left-0 h-1 bg-gold-500 transition-all duration-500
                    ${service.isDark ? "w-full opacity-100" : "w-0 group-hover:w-full opacity-100"}
                  `}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto max-w-[1500px] relative group/section mt-20">
          <button
            onClick={() => scroll("left")}
            aria-label="Défiler à gauche"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center bg-gold-400 hover:bg-gold-500 text-dark-900 transition-all opacity-0 group-hover/section:opacity-100 focus:opacity-100 shadow-xl"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>

          <button
            onClick={() => scroll("right")}
            aria-label="Défiler à droite"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center bg-gold-400 hover:bg-gold-500 text-dark-900 transition-all opacity-0 group-hover/section:opacity-100 focus:opacity-100 shadow-xl"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>

          <ul
            ref={listRef}
            aria-label="Véhicules disponibles"
            className="flex gap-5 overflow-x-auto pb-6 pt-2 [&::-webkit-scrollbar]:hidden px-6 md:px-12"
          >
            {loopedCars.map((car, index) => (
              <li
                key={index}
                aria-hidden={index < totalReal || index >= totalReal * 2}
                className="w-[220px] md:w-[280px] shrink-0 group/car"
              >
                <Link
                  to="/fleet"
                  tabIndex={
                    index < totalReal || index >= totalReal * 2 ? -1 : 0
                  }
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-xl"
                >
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-dark-800 border border-white/10 group-hover/car:border-gold-400/50 transition-all duration-500 shadow-lg">
                    <img
                      src={car.img}
                      alt={car.name}
                      width={280}
                      height={175}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover mix-blend-lighten group-hover/car:scale-110 transition-transform duration-700"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"
                    />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-serif text-lg">
                        {car.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
