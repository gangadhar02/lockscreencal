import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Life Calendar',
  description: 'Minimalist wallpapers for mindful living',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: '#1a1a1a', color: '#fff' }}>
        {children}
      </body>
    </html>
  )
}
