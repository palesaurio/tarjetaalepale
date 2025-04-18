import DigitalCard from "@/components/digital-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ing. Alejandro José Pale Castellanos - Tarjeta Digital",
  description: "Maestro en Redes Computacionales, Docente, Músico, Ingeniero en Sistemas",
  openGraph: {
    title: "Ing. Alejandro José Pale Castellanos - Tarjeta Digital",
    description: "Maestro en Redes Computacionales, Docente, Músico, Ingeniero en Sistemas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ing. Alejandro José Pale Castellanos",
      },
    ],
  },
}

export default function Home() {
  return <DigitalCard />
}
