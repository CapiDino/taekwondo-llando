export interface Sede {
  id: string;
  nombre: string;
  direccion: string;
  telefono?: string; // opcional, por si una sede no tiene
  mapaUrl: string;
}

export const sedes: Sede[] = [
  {
    id: "banos-del-inca",
    nombre: "Baños del Inca",
    direccion: "Jr. Cápac Yupanqui #148 - Baños del Inca, Cajamarca",
    mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.6654679326656!2d-78.46527821574277!3d-7.165030882558052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b245006b60aa63%3A0xb9076d8a1d63f329!2sAcademia%20de%20Taekwondo%20LLAN-DO!5e0!3m2!1ses!2spe!4v1781120918111!5m2!1ses!2spe",
  },
  {
    id: "pacasmayo",
    nombre: "Pacasmayo",
    direccion: "Jr. Sarmiento 892 - Pacasmayo, La Libertad",
    telefono: "+51 999 998 278",
    mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31652.28953478346!2d-79.58624877266!3d-7.405748818675949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904d4600667853af%3A0x3f7df1a841a8374!2sPacasmayo!5e0!3m2!1ses!2spe!4v1781308566041!5m2!1ses!2spe",
  },
];