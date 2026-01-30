import './globals.css'
import { Header, Footer } from '@/components/common/layout'
import { AuthProvider } from '@/lib/AuthContext'
import StructuredData from '@/components/seo/StructuredData'
import { Metadata } from 'next'
import { SWRConfig } from 'swr'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.isthub.us'),
  title: {
    default: 'International Students Talent Hub (ISTH) – Learn, Connect, Grow',
    template: '%s | International Students Talent Hub',
  },
  description:
    'Accelerate your career as an international student. Join ISTH to learn professional skills, connect with peers, and get hired. 50+ events, 200+ students placed, 1000+ members.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <StructuredData />
        <SWRConfig
          value={{
            dedupingInterval: 2000,
            revalidateOnFocus: false,
          }}
        >
          <AuthProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </AuthProvider>
        </SWRConfig>
      </body>
    </html>
  )
}
