"use client";

import { useState } from "react";

export default function FormularioContacto() {
  // Guardamos lo que la persona escribe en cada campo
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Función que se ejecuta al enviar el formulario
  const enviarWhatsApp = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue

    // Tu número para pruebas (luego se cambia al de la empresa)
    const numeroDestino = "51956280006";

    // Armamos el mensaje con los datos ingresados
    const texto = `¡Hola! Soy ${nombre} ${apellidos}.

${mensaje}`;

    // Codificamos el texto para que funcione dentro de una URL
    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(texto)}`;

    // Abrimos WhatsApp en una pestaña nueva
    window.open(url, "_blank");
  };

  // Bloquea números mientras se escribe (nombre/apellidos)
  const soloLetras = (valor: string) => valor.replace(/[0-9]/g, "");

  // Bloquea letras mientras se escribe (teléfono)
  const soloNumeros = (valor: string) => valor.replace(/[^0-9]/g, "");

  return (
    <form
      onSubmit={enviarWhatsApp}
      className="max-w-xl mx-auto w-full bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-5 border-t-4 border-[#0b1b3d]"
    >

      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2 flex flex-col">
          <label className="font-bold text-[#0b1b3d] mb-1 text-sm uppercase">Nombre</label>
          <input
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(soloLetras(e.target.value))}
            className="border-2 border-gray-200 rounded-lg p-3 focus:border-[#0b1b3d] focus:outline-none transition-colors bg-gray-50"
            placeholder="Tu nombre"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <label className="font-bold text-[#0b1b3d] mb-1 text-sm uppercase">Apellidos</label>
          <input
            type="text"
            required
            value={apellidos}
            onChange={(e) => setApellidos(soloLetras(e.target.value))}
            className="border-2 border-gray-200 rounded-lg p-3 focus:border-[#0b1b3d] focus:outline-none transition-colors bg-gray-50"
            placeholder="Tus apellidos"
          />
        </div>
      </div>

      {/* Campo de teléfono obligatorio */}
      <div className="flex flex-col">
        <label className="font-bold text-[#0b1b3d] mb-1 text-sm uppercase">Teléfono</label>
        <input
          type="tel"
          required
          pattern="[0-9]{9}"
          maxLength={9}
          value={telefono}
          onChange={(e) => setTelefono(soloNumeros(e.target.value))}
          className="border-2 border-gray-200 rounded-lg p-3 focus:border-[#0b1b3d] focus:outline-none transition-colors bg-gray-50"
          placeholder="999 999 999"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-bold text-[#0b1b3d] mb-1 text-sm uppercase">Mensaje</label>
        <textarea
          required
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="border-2 border-gray-200 rounded-lg p-3 h-32 focus:border-[#0b1b3d] focus:outline-none transition-colors bg-gray-50"
          placeholder="¿En qué podemos ayudarte?"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-red-600 text-white font-bold uppercase tracking-wider py-4 mt-2 rounded-lg hover:bg-red-700 hover:shadow-lg transition-all"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}