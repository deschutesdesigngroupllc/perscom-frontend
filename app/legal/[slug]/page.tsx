import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/ui/container'
import { legal, legalSlugs } from '@/lib/legal'
import Script from 'next/script'

export function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = legal[slug as keyof typeof legal]
  if (!entry) return {}
  return { title: entry.title }
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = legal[slug as keyof typeof legal]
  if (!entry) notFound()

  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <Container className="max-w-3xl">
          <h1 className="font-display text-ink-900 text-4xl font-semibold tracking-tight sm:text-5xl">
            {entry.title}
          </h1>
          <div className="border-ink-900/5 mt-10 rounded-2xl border bg-white p-8 shadow-sm">
            <div
              className="getterms-document-embed prose prose-ink max-w-none"
              data-getterms={entry.getTermsEmbedId}
              data-getterms-language="en-us"
              data-getterms-mode="direct"
              data-getterms-template="clean"
            />
          </div>
        </Container>
      </main>
      <Footer />
      <Script src="https://app.getterms.io/dist/js/embed.js" strategy="afterInteractive" />
    </>
  )
}
