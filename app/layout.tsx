// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FOKO LLC',
  description: 'Site oficial da FOKO LLC - Pisos, azulejos e remodelações.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}
