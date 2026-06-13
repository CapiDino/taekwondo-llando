import Carrusel from "./Carrusel";
import { FaCheckCircle } from "react-icons/fa";

export default function SobreNosotrosSection() {
  return (
    <section id="nosotros" className="min-h-screen flex flex-col justify-center py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">

        {/* Carrusel arriba */}
        <div className="relative group mb-12">
          <div className="absolute inset-0 bg-red-600 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          <div className="relative bg-gray-200 rounded-2xl border-4 border-white shadow-xl overflow-hidden z-10">
            <Carrusel />
          </div>
        </div>

        {/* Texto abajo */}
        <div className="text-center">
          <h2 className="text-4xl font-black mb-6 text-[#0b1b3d] uppercase">
            Sobre <span className="text-red-600">Nosotros</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            En la academia <strong>Taekwondo Llan-Do</strong> no solo formamos atletas de alto rendimiento, sino también seres humanos íntegros. Bajo la guía de instructores calificados, promovemos la disciplina, el respeto y la autoconfianza.
          </p>
          <ul className="space-y-4 font-medium text-gray-800 inline-block text-left">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-red-600 text-xl flex-shrink-0" />
              Clases para todas las edades y niveles.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-red-600 text-xl flex-shrink-0" />
              Defensa personal y acondicionamiento físico.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-red-600 text-xl flex-shrink-0" />
              Preparación para torneos locales y nacionales.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}