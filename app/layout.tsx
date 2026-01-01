import './globals.css'
import { Header, Footer } from '@/components/common/layout'
import { AuthProvider } from '@/lib/AuthContext'
import StructuredData from '@/components/seo/StructuredData'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <StructuredData />
        <AuthProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
