import type { Metadata } from 'next'
import React from 'react'
import '@/app/_styles/index.scss'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio zolotovpa99',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
