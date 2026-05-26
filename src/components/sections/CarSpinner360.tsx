import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

const TOTAL_FRAMES = 72;
const BASE_URL = "/images/g63/";
const SENSITIVITY_PX = 10;
const AUTOSPIN_INTERVAL_MS = 90; // ralenti : 1 rotation complète ≈ 6,5 s

function getFrameSrc(i: number) {
  return `${BASE_URL}${String(i + 1).padStart(4, "0")}-1-1024x576.webp`;
}

function useSpinnerImages() {
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        setLoadedCount((c) => c + 1);
        if (i === 0) setFirstLoaded(true);
      };
      imgs.push(img);
    }
    return () => {
      imgs.length = 0;
    };
  }, []);

  return {
    firstLoaded,
    progress: Math.round((loadedCount / TOTAL_FRAMES) * 100),
  };
}

const CarSpinner360: React.FC = () => {
  const [frame, setFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hintDone, setHintDone] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const dragStartX = useRef(0);
  const frameAtDragStart = useRef(0);
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useRef(false);

  const { firstLoaded, progress } = useSpinnerImages();

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  /* Auto-spin : une rotation complète au chargement */
  useEffect(() => {
    if (!firstLoaded || reducedMotion.current) return;
    let count = 0;
    timer.current = setInterval(() => {
      setFrame((f) => (f + 1) % TOTAL_FRAMES);
      if (++count >= TOTAL_FRAMES) {
        clearInterval(timer.current);
        timer.current = undefined;
      }
    }, AUTOSPIN_INTERVAL_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [firstLoaded]);

  const stopSpin = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = undefined;
    }
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      stopSpin();
      setIsDragging(true);
      setHintDone(true);
      dragStartX.current = e.clientX;
      frameAtDragStart.current = frame;
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    },
    [frame, stopSpin],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const d = Math.round((dragStartX.current - e.clientX) / SENSITIVITY_PX);
      setFrame(
        (((frameAtDragStart.current + d) % TOTAL_FRAMES) + TOTAL_FRAMES) %
          TOTAL_FRAMES,
      );
    },
    [isDragging],
  );

  const onPointerUp = useCallback(() => setIsDragging(false), []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        stopSpin();
        setFrame((f) => (f - 1 + TOTAL_FRAMES) % TOTAL_FRAMES);
      }
      if (e.key === "ArrowRight") {
        stopSpin();
        setFrame((f) => (f + 1) % TOTAL_FRAMES);
      }
    },
    [stopSpin],
  );

  // CORRECTION 1 : Gérer correctement l'événement de plein écran
  const toggleFullscreen = useCallback(
    (e?: React.MouseEvent | React.PointerEvent) => {
      if (e) e.stopPropagation(); // Empêche le container de capturer le clic
      if (!document.fullscreenElement) {
        containerRef.current?.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    },
    [],
  );

  useEffect(() => {
    const h = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", h);
    return () => document.removeEventListener("fullscreenchange", h);
  }, []);

  const src = useMemo(() => getFrameSrc(frame), [frame]);

  return (
    <section
      aria-labelledby="g63-heading"
      className="py-20 bg-white border-t border-gray-200"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Viewer */}
          <div className="w-full lg:w-1/2">
            <div
              ref={containerRef}
              role="img"
              aria-label={`Vue 360° Mercedes G63 2025 - image ${frame + 1}/${TOTAL_FRAMES}. Utilisez ← → pour faire pivoter.`}
              tabIndex={0}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onKeyDown={onKeyDown}
              className={`relative w-full aspect-video select-none rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 outline-none ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              } focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 ${
                isFullscreen ? "bg-white flex items-center justify-center" : ""
              }`}
            >
              {/* Progress */}
              {!firstLoaded && (
                <div
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Chargement ${progress}%`}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gray-50 z-10"
                >
                  <div className="w-10 h-10 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Chargement {progress} %
                  </p>
                  <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gold-400 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {firstLoaded && (
                <img
                  src={src}
                  alt={`Mercedes G63 2025 - angle ${frame + 1}`}
                  className={`w-full h-full object-contain pointer-events-none select-none ${
                    isFullscreen ? "max-h-screen" : ""
                  }`}
                  draggable={false}
                  aria-hidden="true"
                />
              )}

              {firstLoaded && !hintDone && !isDragging && (
                <div
                  aria-hidden="true"
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#63666A]/95 text-white text-sm font-medium px-6 py-3 rounded-full backdrop-blur-md shadow-xl pointer-events-none animate-pulse"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12c0-3.86-4.25-7-9.5-7S2 8.14 2 12c0 3.25 3.03 6.01 7.23 6.78" />
                    <path d="M18 15.5l3-3.5-3-3.5" />
                  </svg>
                  Glissez pour tourner
                </div>
              )}

              {/* Fullscreen Button */}
              {firstLoaded && (
                <button
                  onPointerDown={(e) => e.stopPropagation()} // Empêche le conflit avec le drag 360
                  onClick={toggleFullscreen}
                  aria-label={
                    isFullscreen ? "Quitter le plein écran" : "Plein écran"
                  }
                  className="absolute top-4 right-4 bg-dark-900/60 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-400 hover:text-dark-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 z-50"
                >
                  {isFullscreen ? (
                    <Minimize2 size={18} aria-hidden="true" />
                  ) : (
                    <Maximize2 size={18} aria-hidden="true" />
                  )}
                </button>
              )}

              <span className="sr-only">
                Vue {frame + 1} sur {TOTAL_FRAMES}
              </span>
            </div>
            <p className="mt-2 text-center text-xs text-gray-400 opacity-0 focus-within:opacity-100 transition-opacity select-none">
              ← → pour faire pivoter au clavier
            </p>
          </div>

          {/* Texte */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2
              id="g63-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-900 leading-tight"
            >
              Profitez d'un{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-400">
                Mercedes G63 2025
              </span>{" "}
              à partir de <span className="text-gold-500">569 €/jour.</span>
            </h2>
            <p className="mt-6 text-gray-500 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
              Le SUV le plus iconique sous toutes ses coutures. Puissance brute,
              intérieur somptueux.
            </p>
            <ul
              className="mt-6 space-y-3 text-sm text-gray-600 font-medium max-w-xs mx-auto lg:mx-0"
              aria-label="Points clés"
            >
              {[
                "Boîte automatique 9G-Tronic",
                "585 ch · 0–100 km/h en 4,5 s",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full bg-gold-light border border-gold-400 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      className="w-3 h-3"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#B08D20"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link
                to="/reservation"
                aria-label="Réserver la Mercedes G63 2025"
              >
                <Button className="px-10 py-4">Réserver le G63</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarSpinner360;
