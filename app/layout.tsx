import type { Metadata } from "next";
import "./globals.css";
import Header from "../componentes/Header";

export const metadata: Metadata = {
  title: "Taekwondo Llan-Do",
  description: "¡Conoce más sobre nuestra academia de artes marciales con sede en Cajamarca! :D",
  openGraph: {
    title: "Taekwondo Llan-Do",
    description: "Forjando campeones. Más que un deporte, un estilo de vida.",
    images: ["/logo/pixel-academia.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">

        <Header />
        {children}

      </body>
    </html>
  );
}