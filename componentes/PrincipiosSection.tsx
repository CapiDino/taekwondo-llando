"use client";

import { useEffect, useRef, useState } from "react";
import { listaPrincipios } from "../data/principios";

// Componente para cada tarjeta con animación
function TarjetaPrincipio({ principio, delay }: { principio: any; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutRef.current = setTimeout(() => setVisible(true), delay);
        } else {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          setVisible(false);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`bg-white shadow-md rounded-xl p-8 border-b-4 border-yellow-500 
        hover:-translate-y-3 hover:shadow-2xl cursor-default
        flex flex-col items-center text-center
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="text-5xl mb-4">{principio.icono}</div>
      <h3 className="text-2xl font-bold text-[#0b1b3d] uppercase mb-3">{principio.titulo}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{principio.descripcion}</p>
    </div>
  );
}

export default function PrincipiosSection() {
  return (
    <section id="principios" className="min-h-screen flex flex-col justify-center items-center py-20 bg-gray-50 border-t-2 border-gray-200">
      <div className="max-w-6xl w-full px-4 text-center">

        <h2 className="text-4xl font-black mb-12 text-[#0b1b3d] uppercase">
          Nuestros <span className="text-red-600">Principios</span>
        </h2>

        {/* Fila 1: primeras 2 tarjetas — delay escalonado: 0ms y 150ms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-6">
          {listaPrincipios.slice(0, 2).map((principio, i) => (
            <TarjetaPrincipio key={principio.id} principio={principio} delay={i * 150} />
          ))}
        </div>

        {/* Fila 2: últimas 3 tarjetas — delay escalonado: 300ms, 450ms, 600ms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listaPrincipios.slice(2).map((principio, i) => (
            <TarjetaPrincipio key={principio.id} principio={principio} delay={300 + i * 150} />
          ))}
        </div>

      </div>
    </section>
  );
}