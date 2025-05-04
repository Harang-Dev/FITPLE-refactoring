import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Providers from "./providers"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header />
          <main className="min-h-[calc(100vh-120px)] max-w-6xl mx-auto px-6">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
