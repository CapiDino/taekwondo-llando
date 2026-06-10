"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const imagenes = [
  { src: "/galeria/20231014_130736.jpg", alt: "Foto 1 de la academia" },
  { src: "/galeria/20231014_145831.jpg", alt: "Foto 2 de la academia" },
  { src: "/galeria/20231014_150719.jpg", alt: "Foto 3 de la academia" },
  { src: "/galeria/IMG-20250802-WA0026.jpg", alt: "Foto 4 de la academia" },
  { src: "/galeria/IMG-20250806-WA0109.jpg", alt: "Foto 5 de la academia" },
];

export default function Carrusel() {
  const [indice, setIndice] = useState(0);
  const touchStartX = useRef(0);

  const anterior = () => {
    setIndice(indice === 0 ? imagenes.length - 1 : indice - 1);
  };

  const siguiente = () => {
    setIndice(indice === imagenes.length - 1 ? 0 : indice + 1);
  };

  // Detecta dónde el dedo toca la pantalla
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Detecta dónde el dedo se levanta y decide la dirección
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diferencia = touchStartX.current - touchEndX;

    // Si deslizó más de 50px, cambia de imagen
    if (diferencia > 50) siguiente();
    if (diferencia < -50) anterior();
  };

  const iAnterior = indice === 0 ? imagenes.length - 1 : indice - 1;
  const iSiguiente = indice === imagenes.length - 1 ? 0 : indice + 1;

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8">

      <div
        className="flex items-center justify-center gap-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {/* Imagen anterior */}
        <div
          onClick={anterior}
          className="relative w-48 h-48 rounded-xl overflow-hidden shadow-md opacity-40 scale-90 cursor-pointer hover:opacity-60 transition-all duration-500 hidden md:block flex-shrink-0"
        >
          <Image
            src={imagenes[iAnterior].src}
            alt={imagenes[iAnterior].alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Imagen principal */}
        <div className="relative w-full max-w-lg h-[320px] rounded-2xl overflow-hidden shadow-2xl z-10 flex-shrink-0">
          <Image
            src={imagenes[indice].src}
            alt={imagenes[indice].alt}
            fill
            className="object-cover transition-all duration-500"
          />
        </div>

        {/* Imagen siguiente */}
        <div
          onClick={siguiente}
          className="relative w-48 h-48 rounded-xl overflow-hidden shadow-md opacity-40 scale-90 cursor-pointer hover:opacity-60 transition-all duration-500 hidden md:block flex-shrink-0"
        >
          <Image
            src={imagenes[iSiguiente].src}
            alt={imagenes[iSiguiente].alt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={anterior}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors z-20"
      >
        ◀
      </button>

      {/* Flecha derecha */}
      <button
        onClick={siguiente}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors z-20"
      >
        ▶
      </button>

      {/* Puntos indicadores */}
      <div className="flex justify-center gap-2 mt-6">
        {imagenes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndice(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === indice ? "bg-red-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}