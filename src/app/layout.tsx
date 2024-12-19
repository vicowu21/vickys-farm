import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Vicky's Farm - Premium Poultry Breeds",
  description: 'Discover high-quality poultry breeds at Vicky\'s Farm. We offer expert guidance, premium breeds, and comprehensive farm solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
