import type { Metadata } from 'next'
import './globals.css'
import { Header, Footer } from '@/components/common/layout'
import { AuthProvider } from '@/lib/AuthContext'

export const metadata: Metadata = {
  title: 'ISTH',
  description: 'ISTH Application',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
