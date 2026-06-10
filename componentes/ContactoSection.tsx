import FormularioContacto from "./FormularioContacto";

export default function ContactoSection() {
  return (
    <section id="contacto" className="min-h-screen flex flex-col justify-center py-20 border-t-2 border-gray-200 bg-gray-50">
      <h2 className="text-4xl font-black mb-8 text-center text-[#0b1b3d] uppercase">
        Contácta<span className="text-red-600">nos</span>
      </h2>
      
      {/* Aquí llamamos a la cajita de tu formulario */}
      <FormularioContacto />
      
    </section>
  );
}