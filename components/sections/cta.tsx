import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Container } from '../ui/container'
import { Button } from '../ui/button'
import { links } from '@/lib/links'

export function CTA() {
  return (
    <section className="bg-ink-950 relative overflow-hidden py-24 text-white sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="from-brand-700 via-brand-600 to-brand-700 absolute inset-0 bg-gradient-to-br opacity-90" />
        <div className="bg-noise absolute inset-0 opacity-[0.12] mix-blend-overlay" />
        <div className="bg-grid mask-radial absolute inset-0 opacity-30" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Put an AI teammate on your staff.
          </h2>
          <p className="mt-6 text-lg text-balance text-white/80">
            Free for a week. No credit card needed. Describe your organization, and be running on
            PERSCOM before your next drill.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href={links.register} size="lg" variant="white">
              Start free trial
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button href={links.demo} size="lg" variant="secondary">
              Try the live demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
