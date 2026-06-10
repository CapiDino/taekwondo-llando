import type { Metadata } from "next";
import "./globals.css";
import Header from "../componentes/Header";

export const metadata: Metadata = {
  title: "TaekWondo Llan-Do-Cajamarca",
  description: "Conoce más sobre nuestra academia de artes marciales :D",
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