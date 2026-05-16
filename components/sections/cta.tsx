import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { links } from "@/lib/links";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-700 opacity-90" />
        <div className="absolute inset-0 bg-noise opacity-[0.12] mix-blend-overlay" />
        <div className="absolute inset-0 bg-grid opacity-30 mask-radial" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Get the right tool in your team&apos;s hands.
          </h2>
          <p className="mt-6 text-balance text-lg text-white/80">
            Free for a week. No credit card needed. Drop the duct tape and start running
            your organization the way it deserves.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href={links.register} size="lg" variant="white">
              Start your free trial
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button href={links.demo} size="lg" variant="secondary">
              Explore the demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
