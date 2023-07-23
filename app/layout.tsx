import Navigation from '@/components/Navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from "next/font/local";
import { ClerkProvider } from '@clerk/nextjs'
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Priyo Blood',
  description: 'Blood Donation Foundation. Dev by Sanu Islam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
