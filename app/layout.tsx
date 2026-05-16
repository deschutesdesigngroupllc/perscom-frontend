import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = 'https://perscom.io'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PERSCOM — Personnel management built for mission-critical teams',
    template: '%s · PERSCOM',
  },
  description:
    'Mission-critical personnel management for police, fire, EMS, military, and public safety agencies. Streamline communications, centralize records, and run a tighter operation.',
  keywords: [
    'personnel management',
    'PERSCOM',
    'military software',
    'first responder software',
    'public safety',
    'personnel command',
  ],
  openGraph: {
    title: 'PERSCOM — Personnel management built for mission-critical teams',
    description:
      'Streamline communications, centralize records, and run a tighter operation with PERSCOM.',
    url: siteUrl,
    siteName: 'PERSCOM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PERSCOM',
    description: 'Personnel management built for mission-critical teams.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="bg-surface text-ink-800 flex min-h-full flex-col">{children}</body>
    </html>
  )
}
