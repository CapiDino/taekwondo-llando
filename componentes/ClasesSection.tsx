// src/components/ClasesSection.tsx
import { listaClases } from "../data/clases";

export default function ClasesSection() {
  return (
    <section id="clases" className="min-h-screen flex flex-col justify-center py-20 bg-gray-50 border-t-2 border-gray-200">
      <div className="max-w-6xl mx-auto px-4 w-full">
        
        <h2 className="text-4xl font-black mb-12 text-center text-[#0b1b3d] uppercase">
          Nuestras <span className="text-red-600">Clases</span>
        </h2>

        {/* Contenedor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* arreglo de datos con .map */}
          {listaClases.map((clase) => (
            
            <div key={clase.id} className="bg-white rounded-2xl shadow-lg border-t-4 border-[#0b1b3d] p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-bold text-red-600 mb-2 uppercase">{clase.titulo}</h3>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-yellow-400 text-[#0b1b3d] text-sm font-bold px-3 py-1 rounded-full">
                  Edades: {clase.edades}
                </span>
              </div>
              
              <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                {clase.descripcion}
              </p>
              
              <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3 border border-gray-200">
                <span className="text-xl">⏱️</span>
                <span className="font-semibold text-[#0b1b3d]">{clase.horario}</span>
              </div>
            </div>

          ))}
          
        </div>
      </div>
    </section>
  );
}