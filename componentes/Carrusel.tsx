"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Ahora cada elemento tiene un "tipo": video o imagen
const contenidos = [
  { tipo: "video", src: "https://www.youtube.com/embed/JFbZaA4HTko", alt: "Video de la academia" },
  { tipo: "imagen", src: "/galeria/20231014_130736.jpg", alt: "Foto 1 de la academia" },
  { tipo: "imagen", src: "/galeria/20231014_145831.jpg", alt: "Foto 2 de la academia" },
  { tipo: "imagen", src: "/galeria/20231014_150719.jpg", alt: "Foto 3 de la academia" },
  { tipo: "imagen", src: "/galeria/IMG-20250802-WA0026.jpg", alt: "Foto 4 de la academia" },
  { tipo: "imagen", src: "/galeria/IMG-20250806-WA0109.jpg", alt: "Foto 5 de la academia" },
];

export default function Carrusel() {
  const [indice, setIndice] = useState(0);
  const touchStartX = useRef(0);

  const anterior = () => {
    setIndice(indice === 0 ? contenidos.length - 1 : indice - 1);
  };

  const siguiente = () => {
    setIndice(indice === contenidos.length - 1 ? 0 : indice + 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diferencia = touchStartX.current - touchEndX;
    if (diferencia > 50) siguiente();
    if (diferencia < -50) anterior();
  };

  const iAnterior = indice === 0 ? contenidos.length - 1 : indice - 1;
  const iSiguiente = indice === contenidos.length - 1 ? 0 : indice + 1;

  // Renderiza imagen o video según el tipo
  const renderContenido = (item: typeof contenidos[0], esPrincipal: boolean) => {
    if (item.tipo === "video") {
      return (
        <iframe
          src={item.src}
          title={item.alt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      );
    }
    return (
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className={`object-cover ${esPrincipal ? "transition-all duration-500" : ""}`}
      />
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8">

      <div
        className="flex items-center justify-center gap-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {/* Imagen/video anterior */}
        <div
          onClick={anterior}
          className="relative w-48 h-48 rounded-xl overflow-hidden shadow-md opacity-40 scale-90 cursor-pointer hover:opacity-60 transition-all duration-500 hidden md:block flex-shrink-0"
        >
          {renderContenido(contenidos[iAnterior], false)}
        </div>

        {/* Imagen/video principal */}
        <div className="relative w-full max-w-lg h-[320px] rounded-2xl overflow-hidden shadow-2xl z-10 flex-shrink-0">
          {renderContenido(contenidos[indice], true)}
        </div>

        {/* Imagen/video siguiente */}
        <div
          onClick={siguiente}
          className="relative w-48 h-48 rounded-xl overflow-hidden shadow-md opacity-40 scale-90 cursor-pointer hover:opacity-60 transition-all duration-500 hidden md:block flex-shrink-0"
        >
          {renderContenido(contenidos[iSiguiente], false)}
        </div>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={anterior}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors z-20"
      >
        <FaChevronLeft />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={siguiente}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors z-20"
      >
        <FaChevronRight />
      </button>
    
      {/* Puntos indicadores */}
      <div className="flex justify-center gap-2 mt-6">
        {contenidos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndice(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === indice ? "bg-red-600" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
}