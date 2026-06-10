import type { Metadata } from "next";
import "./globals.css";
import Header from "../componentes/Header";

export const metadata: Metadata = {
  title: "Estructura Base - Semana 2",
  description: "Navegación One-Page y Componentes",
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