"use client"

import { useState } from "react"
import { Facebook, Mail, Phone, Music, Calculator, Headphones, Twitter, Instagram, Youtube, Copy } from "lucide-react"
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
          title: "Alejandro Pale Landero - Tarjeta Digital",
          text: "Contacta a Alejandro Pale Landero - Músico, Contador y Renta de Audio",
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-800 p-4">
      <Card className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-xl">
        <div className="relative h-40 bg-gradient-to-r from-purple-600 to-blue-500">
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <div className="h-32 w-32 translate-y-16 overflow-hidden rounded-full border-4 border-white bg-white">
              <img src="/profile-image.png" alt="Alejandro Pale Landero" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <CardContent className="mt-20 p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Alejandro Pale Landero</h1>
            <div className="mt-1 flex items-center justify-center gap-2 text-sm text-gray-600">
              <Music className="h-4 w-4" />
              <span>Músico</span>
              <span className="mx-1">•</span>
              <Calculator className="h-4 w-4" />
              <span>Contador</span>
              <span className="mx-1">•</span>
              <Headphones className="h-4 w-4" />
              <span>Renta de Audio</span>
            </div>
          </div>

          <Tabs defaultValue="contact" className="mt-6" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="contact">Contacto</TabsTrigger>
              <TabsTrigger value="social">Redes Sociales</TabsTrigger>
            </TabsList>

            <TabsContent value="contact" className="space-y-4 py-4">
              <div
                className="flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-colors hover:bg-gray-50"
                onClick={() => copyToClipboard("2287538071", "Número de teléfono")}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Teléfono</div>
                    <div className="text-sm text-gray-600">2287538071</div>
                  </div>
                </div>
                <Copy className="h-4 w-4 text-gray-400" />
              </div>

              <div
                className="flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-colors hover:bg-gray-50"
                onClick={() => copyToClipboard("2287538071", "WhatsApp")}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">WhatsApp</div>
                    <div className="text-sm text-gray-600">2287538071</div>
                  </div>
                </div>
                <Copy className="h-4 w-4 text-gray-400" />
              </div>

              <div
                className="flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-colors hover:bg-gray-50"
                onClick={() => copyToClipboard("alepale101@hotmail.com", "Correo electrónico")}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Correo</div>
                    <div className="text-sm text-gray-600">alepale101@hotmail.com</div>
                  </div>
                </div>
                <Copy className="h-4 w-4 text-gray-400" />
              </div>
            </TabsContent>

            <TabsContent value="social" className="space-y-4 py-4">
              <a
                href="https://www.facebook.com/alejandro.palelandero/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Facebook className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Facebook</div>
                    <div className="text-sm text-gray-600">alejandro.palelandero</div>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 text-white">
                    <Twitter className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Twitter</div>
                    <div className="text-sm text-gray-600">Agregar cuenta</div>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Instagram</div>
                    <div className="text-sm text-gray-600">Agregar cuenta</div>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
                    <Youtube className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">YouTube</div>
                    <div className="text-sm text-gray-600">Agregar canal</div>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">TikTok</div>
                    <div className="text-sm text-gray-600">Agregar cuenta</div>
                  </div>
                </div>
              </a>
            </TabsContent>
          </Tabs>

          <div className="mt-6 flex gap-2">
            <Button
              className="flex-1 bg-purple-600 hover:bg-purple-700"
              onClick={() => {
                if (activeTab === "contact") {
                  window.location.href = `tel:2287538071`
                } else {
                  window.location.href = "https://www.facebook.com/alejandro.palelandero/"
                }
              }}
            >
              {activeTab === "contact" ? "Llamar" : "Facebook"}
            </Button>
            <Button
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={() => {
                if (activeTab === "contact") {
                  window.location.href = `https://wa.me/522287538071`
                } else {
                  shareCard()
                }
              }}
            >
              {activeTab === "contact" ? "WhatsApp" : "Compartir"}
            </Button>
          </div>

          <Button
            className="mt-4 w-full bg-gray-800 hover:bg-gray-900 flex items-center justify-center gap-2"
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

          <div className="mt-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Alejandro Pale Landero
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
