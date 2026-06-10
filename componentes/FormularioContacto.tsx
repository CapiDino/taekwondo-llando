export default function FormularioContacto() {
  return (
    <form 
      action="https://formspree.io/f/mrbkoreb" 
      method="POST"
      className="max-w-xl mx-auto w-full bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-5 border-t-4 border-[#0b1b3d]"
    >
      
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2 flex flex-col">
          <label className="font-bold text-[#0b1b3d] mb-1 text-sm uppercase">Nombre</label>
          {/* Agregamos name="nombre" y required */}
          <input type="text" name="nombre" required className="border-2 border-gray-200 rounded-lg p-3 focus:border-[#0b1b3d] focus:outline-none transition-colors bg-gray-50" placeholder="Tu nombre" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <label className="font-bold text-[#0b1b3d] mb-1 text-sm uppercase">Apellidos</label>
          {/* Agregamos name="apellidos" y required */}
          <input type="text" name="apellidos" required className="border-2 border-gray-200 rounded-lg p-3 focus:border-[#0b1b3d] focus:outline-none transition-colors bg-gray-50" placeholder="Tus apellidos" />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-bold text-[#0b1b3d] mb-1 text-sm uppercase">Email</label>
        {/* Agregamos name="email" y required */}
        <input type="email" name="email" required className="border-2 border-gray-200 rounded-lg p-3 focus:border-[#0b1b3d] focus:outline-none transition-colors bg-gray-50" placeholder="tu@correo.com" />
      </div>

      <div className="flex flex-col">
        <label className="font-bold text-[#0b1b3d] mb-1 text-sm uppercase">Mensaje</label>
        {/* Agregamos name="mensaje" y required */}
        <textarea name="mensaje" required className="border-2 border-gray-200 rounded-lg p-3 h-32 focus:border-[#0b1b3d] focus:outline-none transition-colors bg-gray-50" placeholder="¿En qué podemos ayudarte?"></textarea>
      </div>

      {/* Cambiamos a type="submit" */}
      <button type="submit" className="bg-red-600 text-white font-bold uppercase tracking-wider py-4 mt-2 rounded-lg hover:bg-red-700 hover:shadow-lg transition-all">
        Enviar Mensaje
      </button>
    </form>
  );
}