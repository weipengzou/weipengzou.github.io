import type { Metadata } from 'next'
import { Playpen_Sans } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const font = Playpen_Sans({ subsets: ['latin'] })

export const metadata: Metadata = { title: 'weipeng zou' }

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
