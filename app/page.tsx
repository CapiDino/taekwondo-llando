import InicioSection from "../componentes/InicioSection";
import SobreNosotrosSection from "../componentes/SobreNosotrosSection";
import ClasesSection from "../componentes/ClasesSection"; 
import PrincipiosSection from "../componentes/PrincipiosSection";
import SedeSection from "../componentes/SedeSection";
import ContactoSection from "../componentes/ContactoSection";
import Footer from "@/componentes/Footer";

export default function Inicio() {
  return (
    <main>
      <InicioSection />
      <SobreNosotrosSection />
      <PrincipiosSection />
      <ClasesSection /> 
      <SedeSection />
      <ContactoSection />
      <Footer />
    </main>
  );
}