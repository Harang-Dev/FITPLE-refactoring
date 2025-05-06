import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
          <Header />
          <main className="min-h-[calc(100vh-120px)] max-w-6xl mx-auto px-6">{children}</main>
          <Footer />
      </body>
    </html>
  )
}
