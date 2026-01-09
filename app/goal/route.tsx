import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  // Load Bebas Neue font from jsDelivr CDN
  const bebasNeue = await fetch(
    'https://cdn.jsdelivr.net/fontsource/fonts/bebas-neue@latest/latin-400-normal.ttf'
  ).then((res) => res.arrayBuffer())

  const { searchParams } = new URL(request.url)

  // Parse parameters
  const goal = searchParams.get('goal') || '$1000'
  const startDateStr = searchParams.get('start_date') || '2026-01-01'
  const goalDateStr = searchParams.get('goal_date') || '2026-12-31'
  const width = parseInt(searchParams.get('width') || '1179')
  const height = parseInt(searchParams.get('height') || '2556')
  const quote = searchParams.get('quote') || 'Obsession Beats Talent'

  // Calculate dates
  const startDate = new Date(startDateStr)
  const goalDate = new Date(goalDateStr)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const totalDays = Math.ceil((goalDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
  const daysPassed = Math.max(0, Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1)
  const daysLeft = Math.max(0, totalDays - daysPassed)
  const percentage = Math.round((daysPassed / totalDays) * 100)

  // Calculate grid dimensions
  const columns = 13
  const rows = Math.ceil(totalDays / columns)

  // Dot styling
  const dotSize = Math.min(width / (columns * 2.5), 32)
  const gap = dotSize * 0.6

  // Colors
  const bgColor = '#1a1a1a'
  const completedColor = '#e5e5e5'
  const currentColor = '#f97316' // Orange
  const remainingColor = '#404040'
  const quoteColor = '#f97316' // Orange for quote
  const textColor = '#888888'

  // Generate dots
  const dots: { x: number; y: number; color: string }[] = []
  for (let i = 0; i < totalDays; i++) {
    const row = Math.floor(i / columns)
    const col = i % columns

    let color = remainingColor
    if (i < daysPassed - 1) {
      color = completedColor
    } else if (i === daysPassed - 1) {
      color = currentColor
    }

    dots.push({
      x: col,
      y: row,
      color,
    })
  }

  // Calculate grid dimensions for centering
  const gridWidth = columns * (dotSize + gap) - gap
  const gridHeight = rows * (dotSize + gap) - gap

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: bgColor,
          fontFamily: 'Bebas Neue',
          textTransform: 'uppercase',
        }}
      >
        {/* Quote */}
        <div
          style={{
            color: quoteColor,
            fontSize: dotSize * 1.4,
            marginBottom: dotSize * 0.6,
            letterSpacing: '0.1em',
          }}
        >
          {quote.toUpperCase()}
        </div>

        {/* Goal */}
        <div
          style={{
            color: textColor,
            fontSize: dotSize * 1.6,
            marginBottom: dotSize * 1.5,
            letterSpacing: '0.05em',
          }}
        >
          {goal.toUpperCase()}
        </div>

        {/* Dot Grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: gap,
          }}
        >
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: gap,
              }}
            >
              {Array.from({ length: columns }).map((_, colIndex) => {
                const dotIndex = rowIndex * columns + colIndex
                if (dotIndex >= totalDays) {
                  return (
                    <div
                      key={colIndex}
                      style={{
                        width: dotSize,
                        height: dotSize,
                      }}
                    />
                  )
                }
                const dot = dots[dotIndex]
                return (
                  <div
                    key={colIndex}
                    style={{
                      width: dotSize,
                      height: dotSize,
                      borderRadius: '50%',
                      backgroundColor: dot.color,
                    }}
                  />
                )
              })}
            </div>
          ))}
        </div>

        {/* Status */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: dotSize * 1.5,
            fontSize: dotSize * 1.1,
            letterSpacing: '0.08em',
          }}
        >
          <span style={{ color: quoteColor }}>{daysLeft} DAYS LEFT</span>
          <span style={{ color: textColor, margin: '0 12px' }}>·</span>
          <span style={{ color: textColor }}>{percentage}%</span>
        </div>
      </div>
    ),
    {
      width,
      height,
      fonts: [
        {
          name: 'Bebas Neue',
          data: bebasNeue,
          style: 'normal',
        },
      ],
    }
  )
}
