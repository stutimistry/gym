import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gym',
  description: 'Modern Gym Management SaaS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}