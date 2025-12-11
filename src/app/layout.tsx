import type { Metadata } from "next"
import { Comfortaa, DM_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ChatBot from "@/components/ai-chatbot"

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Roby Café | Viral Croffles, Waffles & Desserts in Subiaco, Perth",
  description: "Perth's sweetest dessert destination. Handcrafted waffles, viral croffles, artisan ice cream & specialty coffee in Subiaco. Everything made in-house. Open 7 days.",
  keywords: ["croffles perth", "best waffles subiaco", "dessert cafe perth", "ice cream subiaco", "family friendly cafe", "instagram desserts perth", "rokeby road cafes", "subiaco breakfast"],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Roby Café",
    title: "Roby Café | Viral Croffles, Waffles & Desserts in Subiaco, Perth",
    description: "Perth's sweetest dessert destination. Handcrafted waffles, viral croffles, artisan ice cream & specialty coffee in Subiaco.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roby Café | Viral Croffles, Waffles & Desserts in Subiaco, Perth",
    description: "Perth's sweetest dessert destination. Handcrafted waffles, viral croffles, artisan ice cream & specialty coffee in Subiaco.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${comfortaa.variable} ${dmSans.variable}`}>
      <body className="grain-texture">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  )
}
