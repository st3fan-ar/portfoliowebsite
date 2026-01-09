import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stefan - Power Electronics Engineering Leader',
  description: 'Team Lead Power Electronics | Hydrogen Technology Expert | H-TEC SYSTEMS',
  keywords: ['Power Electronics', 'Engineering Leadership', 'Hydrogen Technology', 'PEM Electrolysis'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
