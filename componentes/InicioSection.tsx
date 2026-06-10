import Image from "next/image";

export default function InicioSection() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center py-20 text-white relative overflow-hidden">
      
      {/* Imagen de fondo */}
      <Image
        src="/inicial_logo.png"
        alt="Fondo academia Taekwondo"
        fill
        className="object-cover"
        priority
      />

      {/* Capa oscura para que el texto se lea bien */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="z-10 max-w-5xl px-4">
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight leading-tight">
          Forjando <span className="text-red-500">campeones</span> <br />
          en <span className="text-yellow-400">Cajamarca</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
          Bienvenidos a la academia de Taekwondo Llan-Do, sede Baños del Inca. <br />
          Más que un deporte, es un estilo de vida.
        </p>
        
        <a 
          href="#contacto" 
          className="inline-block bg-red-600 text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-red-700 hover:scale-105 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]"
        >
          ¡Solicita información hoy!
        </a>
      </div>
    </section>
  );
}