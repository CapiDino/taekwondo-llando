import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b1b3d] text-white py-12 w-full">
      <div className="max-w-6xl mx-auto px-4">

        {/* Contenido principal en 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Columna 1: Contacto */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-4 text-yellow-400">Contacto</h3>
            <p className="mb-2">📞 Cel 1: <a href="tel:950452949" className="hover:text-yellow-400 transition-colors">950 452 949</a></p>
            <p className="mb-2">📞 Cel 2: <a href="tel:948779008" className="hover:text-yellow-400 transition-colors">948 779 008</a></p>
            <p className="mb-2">📧 <a href="mailto:llandotkd@gmail.com" className="hover:text-yellow-400 transition-colors">llandotkd@gmail.com</a></p>
            <p className="mt-4">📍 Jr. Cápac Yupanqui #148<br />Baños del Inca, Cajamarca</p>
          </div>

          {/* Columna 2: Redes sociales */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-4 text-yellow-400">Síguenos</h3>

            <a href="https://www.facebook.com/llandotkd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-yellow-400 transition-colors text-lg"
            >
              <span className="text-2xl">📘</span> Facebook - Llan-Do TKD
            </a>

            <br />

            <a href="https://www.youtube.com/@llandotaekwondo2941"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-yellow-400 transition-colors text-lg mt-3"
            >
              <span className="text-2xl">▶️</span> YouTube - Llan-Do TKD
            </a>
          </div>

          {/* Columna 3: Logos afiliados */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-4 text-yellow-400">Afiliados a</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <Image src="/logo/logorojo.png" alt="Federación Deportiva Peruana de Taekwondo" width={70} height={70} className="object-contain" />
              <Image src="/logo/pixel-academia.png" alt="Academia Taekwondo Llan-Do" width={70} height={70} className="object-contain" />
              <Image src="/logo/logoazulblanco.png" alt="World Taekwondo" width={70} height={70} className="object-contain" />
            </div>
          </div>

        </div>

        {/* Línea de copyright */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Academia Taekwondo Llan-Do. Todos los derechos reservados.
            <span className="mx-3">|</span>
            Hecho por{" "}
            <a href="https://github.com/CapiDino"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Cristopher Pulache
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}