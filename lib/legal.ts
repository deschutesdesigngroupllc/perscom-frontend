type LegalSlug = 'terms' | 'privacy' | 'cookies' | 'acceptable-use'

type LegalEntry = {
  title: string
  getTermsEmbedId: string
}

// PERSCOM hosts its legal docs on getterms.io. The original Laravel app embeds
// these via the GetTerms embed script. We render a placeholder container; the
// script populates it on the client.
export const legal: Record<LegalSlug, LegalEntry> = {
  terms: {
    title: 'Terms of Service',
    getTermsEmbedId: 'terms-of-service',
  },
  privacy: {
    title: 'Privacy Policy',
    getTermsEmbedId: 'privacy-policy',
  },
  cookies: {
    title: 'Cookie Policy',
    getTermsEmbedId: 'cookie-policy',
  },
  'acceptable-use': {
    title: 'Acceptable Use Policy',
    getTermsEmbedId: 'acceptable-use-policy',
  },
}

export const legalSlugs: LegalSlug[] = ['terms', 'privacy', 'cookies', 'acceptable-use']
