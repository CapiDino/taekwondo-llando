"use client";

import { useState } from "react";
import { sedes } from "../data/sedes";

export default function SedeSection() {
  // Guarda cuál sede está activa. Empieza con la primera (Baños del Inca)
  const [sedeActiva, setSedeActiva] = useState(sedes[0]);

  return (
    <section id="sede" className="min-h-screen flex flex-col justify-center py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center w-full">

        <h2 className="text-4xl font-black mb-4 text-[#0b1b3d] uppercase">
          Visita Nuestra <span className="text-red-600">Sede</span>
        </h2>

        {/* Botones para elegir sede */}
        <div className="flex justify-center gap-4 mb-6">
          {sedes.map((sede) => (
            <button
              key={sede.id}
              onClick={() => setSedeActiva(sede)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                sedeActiva.id === sede.id
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {sede.nombre}
            </button>
          ))}
        </div>

        {/* Dirección (y teléfono si existe) de la sede activa */}
        <p className="text-xl text-gray-600 mb-2 font-medium">
          {sedeActiva.direccion}
        </p>
        {sedeActiva.telefono && (
          <p className="text-lg text-gray-500 mb-10 font-medium">
            Cel. {sedeActiva.telefono}
          </p>
        )}

        {/* Mapa de la sede activa */}
        <div className="w-full max-w-4xl mx-auto h-[400px] bg-gray-100 rounded-2xl shadow-lg border-4 border-gray-200 flex flex-col items-center justify-center text-gray-500 relative overflow-hidden group">
          <iframe
            src={sedeActiva.mapaUrl}
            title={`Mapa de la sede ${sedeActiva.nombre}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 z-0"
          ></iframe>
        </div>

      </div>
    </section>
  );
}