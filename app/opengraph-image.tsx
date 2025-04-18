import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Ing. Alejandro José Pale Castellanos - Tarjeta Digital"
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "#000000",
        color: "#ffffff",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        border: "4px solid #FFD700",
      }}
    >
      <div style={{ fontSize: 64, fontWeight: "bold", marginBottom: 24, color: "#FFD700" }}>
        Ing. Alejandro José Pale Castellanos
      </div>
      <div style={{ fontSize: 36, marginBottom: 40, textAlign: "center", color: "#B8860B" }}>
        Maestro en Redes • Docente • Músico • Ingeniero en Sistemas
      </div>
      <div style={{ fontSize: 24, opacity: 0.8, color: "#FFD700" }}>Tarjeta Digital de Contacto</div>
    </div>,
    {
      ...size,
    },
  )
}
