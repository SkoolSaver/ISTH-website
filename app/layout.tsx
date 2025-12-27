import type { Metadata } from 'next'
import './globals.css'
import { Header, Footer } from '@/components/common/layout'
import { AuthProvider } from '@/lib/AuthContext'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/metadata'
import StructuredData from '@/components/seo/StructuredData'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Home',
  description:
    'Accelerate your career as an international student. Join International Students Talent Hub - learn skills, join events, and get hired. Platform for international student success.',
})

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
