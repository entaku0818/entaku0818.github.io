import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default function handler(_req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'linear-gradient(135deg, #111827 0%, #1e1b4b 50%, #111827 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#818cf8',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Mobile App Developer
          </div>
          <div
            style={{
              fontSize: '120px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            entaku
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#94a3b8',
              marginTop: '8px',
            }}
          >
            iOS / Android / Swift / Kotlin
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '80px',
            fontSize: '20px',
            color: '#6366f1',
            fontWeight: 600,
          }}
        >
          entaku.dev
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
