"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const cinturones = [
  { id: "inicio",     bg: "bg-[#FFFFFF]", border: "border-gray-300",   texto: "text-gray-900", llandoColor: "text-yellow-400" },
  { id: "nosotros",   bg: "bg-[#FFD300]", border: "border-yellow-600", texto: "text-white",    llandoColor: "text-gray-900"   },
  { id: "principios", bg: "bg-[#00994C]", border: "border-green-900",   texto: "text-white",    llandoColor: "text-yellow-400" },
  { id: "clases",     bg: "bg-[#0000CC]", border: "border-blue-500",  texto: "text-white",    llandoColor: "text-yellow-400" },
  { id: "sede",       bg: "bg-[#CC0000]", border: "border-red-900",    texto: "text-white",    llandoColor: "text-yellow-400" },
  { id: "contacto",   bg: "bg-[#000000]", border: "border-gray-700",   texto: "text-white",    llandoColor: "text-yellow-400" },
];

export default function Header() {
  const [cinturonActual, setCinturonActual] = useState(cinturones[0]);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = cinturones.find((c) => c.id === entry.target.id);
            if (found) setCinturonActual(found);
          }
        });
      },
      { threshold: 0.4 }
    );

    cinturones.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`sticky top-0 ${cinturonActual.bg} border-b-4 ${cinturonActual.border} p-4 z-50 shadow-lg transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo y Nombre */}
        <div className={`text-2xl font-black tracking-wide flex items-center gap-2 ${cinturonActual.texto}`}>
          <Image
            src="/Pixel academia.png"
            alt="Logo Taekwondo Llan-Do"
            width={76}
            height={76}
            className="object-contain"
          />
          <span>TAEKWONDO <span className={cinturonActual.llandoColor}>LLAN-DO</span></span>
        </div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          onClick={toggleMenu}
          className={`md:hidden text-3xl focus:outline-none ${cinturonActual.texto}`}
        >
          {menuAbierto ? "✖" : "☰"}
        </button>

        {/* Menú escritorio (oculto en móvil) */}
        <ul className={`hidden md:flex space-x-6 font-bold uppercase text-sm ${cinturonActual.texto}`}>
          <li><a href="#inicio"     className="hover:text-yellow-400 transition-colors">Inicio</a></li>
          <li><a href="#nosotros"   className="hover:text-yellow-400 transition-colors">Sobre Nosotros</a></li>
          <li><a href="#principios" className="hover:text-yellow-400 transition-colors">Principios</a></li>
          <li><a href="#clases"     className="hover:text-yellow-400 transition-colors">Clases</a></li>
          <li><a href="#sede"       className="hover:text-yellow-400 transition-colors">Sede</a></li>
          <li><a href="#contacto"   className="hover:text-yellow-400 transition-colors">Contacto</a></li>
        </ul>
      </div>

      {/* Menú móvil desplegable */}
      {menuAbierto && (
        <ul className={`md:hidden mt-4 flex flex-col space-y-4 font-bold uppercase text-sm ${cinturonActual.bg} ${cinturonActual.texto} p-4 rounded-lg border-t-2 ${cinturonActual.border}`}>
          <li><a href="#inicio"     onClick={toggleMenu} className="block hover:text-yellow-400">Inicio</a></li>
          <li><a href="#nosotros"   onClick={toggleMenu} className="block hover:text-yellow-400">Sobre Nosotros</a></li>
          <li><a href="#clases"     onClick={toggleMenu} className="block hover:text-yellow-400">Clases</a></li>
          <li><a href="#principios" onClick={toggleMenu} className="block hover:text-yellow-400">Principios</a></li>
          <li><a href="#sede"       onClick={toggleMenu} className="block hover:text-yellow-400">Sede</a></li>
          <li><a href="#contacto"   onClick={toggleMenu} className="block hover:text-yellow-400">Contacto</a></li>
        </ul>
      )}
    </nav>
  );
}