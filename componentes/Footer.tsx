import Image from "next/image";
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { redesSociales } from "../data/redes";


// Mapa de iconos reales
const iconos: Record<string, React.ReactNode> = {
  facebook: <FaFacebook className="text-2xl text-blue-500" />,
  youtube: <FaYoutube className="text-2xl text-red-600" />,
  instagram: <FaInstagram className="text-2xl text-pink-500" />,
  tiktok: <FaTiktok className="text-2xl text-white" />,
};

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
            {redesSociales.map((red, i) => (

              <a key={i}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 transition-colors text-lg mb-3"
              >
                {iconos[red.icono]} {red.nombre}
              </a>
            ))}
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
            Diseñado por{" "}
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