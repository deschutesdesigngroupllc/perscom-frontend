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
    default: 'PERSCOM — The AI-powered personnel platform for high-performing organizations',
    template: '%s · PERSCOM',
  },
  description:
    'PERSCOM is the AI-powered personnel platform for high-performing organizations. Build your structure with AI, ask your own AI tools about your people, and keep readiness and promotions on autopilot.',
  keywords: [
    'AI personnel management',
    'personnel management',
    'MCP server',
    'PERSCOM',
    'military software',
    'first responder software',
    'public safety',
    'personnel command',
  ],
  openGraph: {
    title: 'PERSCOM — The AI-powered personnel platform',
    description:
      'Build your organization with AI, ask Claude or Cursor about your personnel, and keep readiness on autopilot.',
    url: siteUrl,
    siteName: 'PERSCOM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PERSCOM',
    description: 'The AI-powered personnel platform for high-performing organizations.',
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
