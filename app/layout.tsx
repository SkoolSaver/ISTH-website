import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/common/layout'

export const metadata: Metadata = {
  title: 'ISTH',
  description: 'ISTH Application',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
