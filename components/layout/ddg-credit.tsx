import Script from 'next/script'

type DdgCreditProps = {
  accent?: string
  label?: string
  variant?: 'bar'
  align?: 'start' | 'end'
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace -- JSX intrinsic elements can only be augmented this way
  namespace JSX {
    interface IntrinsicElements {
      'ddg-credit': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & DdgCreditProps
    }
  }
}

// Deschutes Design Group maker's mark. The <ddg-credit> element is defined by
// public/ddg-credit.js; the plain link inside is the fallback before it loads.
export function DdgCredit(props: DdgCreditProps) {
  return (
    <>
      <Script src="/ddg-credit.js" strategy="lazyOnload" />
      <ddg-credit {...props}>
        <a href="https://deschutesdesigngroup.com">Site by Deschutes Design Group</a>
      </ddg-credit>
    </>
  )
}
