import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 24,
        background: 'linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f4a261',
        fontWeight: 'bold',
      }}
    >
      ISTH
    </div>,
    // ImageResponse options
    {
      ...size,
    }
  )
}
