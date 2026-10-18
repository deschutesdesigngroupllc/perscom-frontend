import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'PERSCOM — The AI-powered personnel platform for high-performing organizations'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logo = await readFile(join(process.cwd(), 'public/logo.svg'))
  const logoSrc = `data:image/svg+xml;base64,${logo.toString('base64')}`

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 80,
        background:
          'radial-gradient(ellipse 80% 70% at 50% 0%, rgba(37,99,235,0.45) 0%, #090b0f 70%)',
        backgroundColor: '#090b0f',
        color: 'white',
      }}
    >
      <img src={logoSrc} alt="" width={309} height={72} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.1, letterSpacing: -2 }}>
          The AI-powered personnel platform
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: -2,
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          for high-performing organizations.
        </div>
      </div>
      <div style={{ display: 'flex', fontSize: 28, color: 'rgba(255,255,255,0.6)' }}>
        Military · Police · Fire · EMS · Public safety — perscom.io
      </div>
    </div>,
    { ...size },
  )
}
