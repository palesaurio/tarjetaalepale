"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Facebook,
  Mail,
  Phone,
  Laptop,
  Music,
  GraduationCap,
  BookOpen,
  FileText,
  ExternalLink,
  Copy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

export default function DigitalCard() {
  const [activeTab, setActiveTab] = useState("contact")
  const { toast } = useToast()

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "¡Copiado!",
      description: `${label} copiado al portapapeles.`,
    })
  }

  const shareCard = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Ing. Alejandro José Pale Castellanos - Tarjeta Digital",
          text: "Contacta a Ing. Alejandro José Pale Castellanos - Maestro en Redes Computacionales, Docente, Músico, Ingeniero en Sistemas",
          url: window.location.href,
        })
        toast({
          title: "¡Compartido!",
          description: "Tarjeta compartida exitosamente.",
        })
      } catch (error) {
        toast({
          title: "Error al compartir",
          description: "No se pudo compartir la tarjeta.",
          variant: "destructive",
        })
      }
    } else {
      // Fallback para navegadores que no soportan Web Share API
      copyToClipboard(window.location.href, "Enlace de la tarjeta")
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <Card className="w-full max-w-md overflow-hidden rounded-xl bg-black text-white shadow-xl border border-[#FFD700]">
        <div className="relative h-40 bg-gradient-to-r from-[#B8860B] to-[#FFD700]">
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <div className="relative h-32 w-32 translate-y-16 overflow-hidden rounded-full border-4 border-[#FFD700] bg-black">
              <Image
                src="/profile-image.png"
                alt="Ing. Alejandro José Pale Castellanos"
                fill
                sizes="128px"
                priority
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
          </div>
        </div>

        <CardContent className="mt-20 p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#FFD700]">Ing. Alejandro José Pale Castellanos</h1>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-300">
              <GraduationCap className="h-4 w-4 text-[#FFD700]" />
              <span>Maestro en Redes Computacionales</span>
              <span className="mx-1 text-[#FFD700]">•</span>
              <BookOpen className="h-4 w-4 text-[#FFD700]" />
              <span>Docente</span>
              <span className="mx-1 text-[#FFD700]">•</span>
              <Music className="h-4 w-4 text-[#FFD700]" />
              <span>Músico</span>
              <span className="mx-1 text-[#FFD700]">•</span>
              <Laptop className="h-4 w-4 text-[#FFD700]" />
              <span>Ingeniero en Sistemas</span>
            </div>
          </div>

          <Tabs defaultValue="contact" className="mt-6" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 bg-gray-900">
              <TabsTrigger value="contact" className="data-[state=active]:bg-[#B8860B] data-[state=active]:text-white">
                Contacto
              </TabsTrigger>
              <TabsTrigger value="social" className="data-[state=active]:bg-[#B8860B] data-[state=active]:text-white">
                Redes Sociales
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contact" className="space-y-4 py-4">
              <div
                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-700 p-3 transition-colors hover:bg-gray-900"
                onClick={() => copyToClipboard("2281125145", "Número de teléfono")}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8860B] text-[#FFD700]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#FFD700]">Teléfono</div>
                    <div className="text-sm text-gray-300">228 112 5145</div>
                  </div>
                </div>
                <Copy className="h-4 w-4 text-gray-400" />
              </div>

              <div
                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-700 p-3 transition-colors hover:bg-gray-900"
                onClick={() => copyToClipboard("2281125145", "WhatsApp")}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900 text-green-400">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#FFD700]">WhatsApp</div>
                    <div className="text-sm text-gray-300">228 112 5145</div>
                  </div>
                </div>
                <Copy className="h-4 w-4 text-gray-400" />
              </div>

              <div
                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-700 p-3 transition-colors hover:bg-gray-900"
                onClick={() => copyToClipboard("alewes@hotmail.com", "Correo electrónico")}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8860B] text-[#FFD700]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#FFD700]">Correo</div>
                    <div className="text-sm text-gray-300">alewes@hotmail.com</div>
                  </div>
                </div>
                <Copy className="h-4 w-4 text-gray-400" />
              </div>

              <div
                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-700 p-3 transition-colors hover:bg-gray-900"
                onClick={() => copyToClipboard("palesaurio@gmail.com", "Correo electrónico")}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900 text-red-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#FFD700]">Correo Alternativo</div>
                    <div className="text-sm text-gray-300">palesaurio@gmail.com</div>
                  </div>
                </div>
                <Copy className="h-4 w-4 text-gray-400" />
              </div>

              <a
                href="https://drive.google.com/file/d/16k3WIn9B8lLX4trosdQpXYS8OBn3fr4H/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-700 p-3 transition-colors hover:bg-gray-900"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8860B] text-[#FFD700]">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#FFD700]">Curriculum Vitae</div>
                    <div className="text-sm text-gray-300">Ver mi CV completo</div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </a>
            </TabsContent>

            <TabsContent value="social" className="space-y-4 py-4">
              <a
                href="https://www.facebook.com/share/19sFoRdn9V/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-gray-700 p-3 transition-colors hover:bg-gray-900"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-blue-400">
                    <Facebook className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#FFD700]">Facebook</div>
                    <div className="text-sm text-gray-300">Alejandro Pale</div>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-between rounded-lg border border-gray-700 p-3 transition-colors hover:bg-gray-900"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-blue-400">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#FFD700]">Twitter</div>
                    <div className="text-sm text-gray-300">Agregar cuenta</div>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-between rounded-lg border border-gray-700 p-3 transition-colors hover:bg-gray-900"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-900 via-pink-900 to-amber-900 text-amber-300">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#FFD700]">Instagram</div>
                    <div className="text-sm text-gray-300">Agregar cuenta</div>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-between rounded-lg border border-gray-700 p-3 transition-colors hover:bg-gray-900"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900 text-red-400">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#FFD700]">YouTube</div>
                    <div className="text-sm text-gray-300">Agregar canal</div>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-between rounded-lg border border-gray-700 p-3 transition-colors hover:bg-gray-900"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#FFD700]">TikTok</div>
                    <div className="text-sm text-gray-300">Agregar cuenta</div>
                  </div>
                </div>
              </a>
            </TabsContent>
          </Tabs>

          <div className="mt-6 flex gap-2">
            <Button
              className="flex-1 bg-[#B8860B] hover:bg-[#8B6914] text-white"
              onClick={() => {
                if (activeTab === "contact") {
                  window.location.href = `tel:2281125145`
                } else {
                  window.location.href = "https://www.facebook.com/share/19sFoRdn9V/"
                }
              }}
            >
              {activeTab === "contact" ? "Llamar" : "Facebook"}
            </Button>
            <Button
              className="flex-1 bg-green-700 hover:bg-green-800 text-white"
              onClick={() => {
                if (activeTab === "contact") {
                  window.location.href = `https://wa.me/522281125145`
                } else {
                  shareCard()
                }
              }}
            >
              {activeTab === "contact" ? "WhatsApp" : "Compartir"}
            </Button>
          </div>

          <Button
            className="mt-4 w-full bg-[#B8860B] hover:bg-[#8B6914] text-white flex items-center justify-center gap-2"
            onClick={() =>
              window.open("https://drive.google.com/file/d/16k3WIn9B8lLX4trosdQpXYS8OBn3fr4H/view", "_blank")
            }
          >
            <FileText className="h-5 w-5" />
            Ver mi CV
          </Button>

          <Button
            className="mt-2 w-full bg-[#8B6914] hover:bg-[#6B550F] text-white flex items-center justify-center gap-2"
            onClick={shareCard}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.12548 15.0077 5.24917 15.0227 5.37061L8.08261 9.84066C7.54305 9.32015 6.80891 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.80891 15 7.54305 14.6798 8.08261 14.1593L15.0227 18.6294C15.0077 18.7508 15 18.8745 15 19C15 20.6569 16.3431 22 18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C17.1911 16 16.457 16.3202 15.9174 16.8407L8.97733 12.3706C8.99229 12.2492 9 12.1255 9 12C9 11.8745 8.99229 11.7508 8.97733 11.6294L15.9174 7.15934C16.457 7.67985 17.1911 8 18 8Z"
                fill="currentColor"
              />
            </svg>
            Compartir Tarjeta
          </Button>

          <div className="mt-6 text-center text-xs text-[#FFD700]">
            © {new Date().getFullYear()} Ing. Alejandro José Pale Castellanos
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
