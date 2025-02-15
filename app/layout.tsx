import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
// import PageTransition from "@/components/PageTransition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Crochet Nepal - Custom Crochet Gifts and Décor",
  description: "Handmade crochet gifts, flowers, and décor items from Nepal. Custom orders available.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-rose-50 text-gray-800`}>
        <Header />
        {/* <PageTransition> */}
          <main className="min-h-screen">{children}</main>
        {/* </PageTransition> */}
        <Footer />
      </body>
    </html>
  )
}

