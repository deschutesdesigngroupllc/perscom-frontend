import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { LogoCloud } from '@/components/sections/logo-cloud'
import { PrimaryFeatures } from '@/components/sections/primary-features'
import { PersonnelRecord } from '@/components/sections/personnel-record'
import { SecondaryFeatures } from '@/components/sections/secondary-features'
import { Automations } from '@/components/sections/automations'
import { LivesInDiscord } from '@/components/sections/lives-in-discord'
import { Integrations } from '@/components/sections/integrations'
import { Security } from '@/components/sections/security'
import { Cloud } from '@/components/sections/cloud'
import { SelfHost } from '@/components/sections/self-host'
import { Pricing } from '@/components/sections/pricing'
import { Faqs } from '@/components/sections/faqs'
import { CTA } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <PrimaryFeatures />
        <PersonnelRecord />
        <SecondaryFeatures />
        <Automations />
        <LivesInDiscord />
        <Integrations />
        <Security />
        <Cloud />
        <SelfHost />
        <Pricing />
        <Faqs />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
