import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shakhrillo - Personal Website',
  description: 'This is my personal website',
  generator: 'Next.js',
  keywords: 'Shakhrillo, personal website, portfolio',
  authors: [{ name: 'Shakhrillo' }],
  creator: 'Shakhrillo',
  publisher: 'Shakhrillo'
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
