import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ing. Alejandro José Pale Castellanos - Tarjeta Digital",
    short_name: "Alejandro Pale",
    description: "Maestro en Redes Computacionales, Docente, Músico, Ingeniero en Sistemas",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#FFD700",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
