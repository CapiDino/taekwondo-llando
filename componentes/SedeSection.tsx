export default function SedeSection() {
  return (
    <section id="sede" className="min-h-screen flex flex-col justify-center py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center w-full">
        
        <h2 className="text-4xl font-black mb-4 text-[#0b1b3d] uppercase">
          Visita Nuestra <span className="text-red-600">Sede</span>
        </h2>
        <p className="text-xl text-gray-600 mb-10 font-medium">
          Jr. Cápac Yupanqui #148 - Baños del Inca, Cajamarca
        </p>
        
        <div className="w-full max-w-4xl mx-auto h-[400px] bg-gray-100 rounded-2xl shadow-lg border-4 border-gray-200 flex flex-col items-center justify-center text-gray-500 relative overflow-hidden group">
          {/* Mapa de Google embebido */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.334005089337!2d-78.4735!3d-7.1656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25ab9058b29e9%3A0x6e1b6d0bd1d589e4!2sBa%C3%B1os%20del%20Inca%2C%20Cajamarca!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe" 
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