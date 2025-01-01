import type { Metadata } from 'next'
import DeviceProvider from '@/style/DeviceProvider'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const geistMono = GeistMono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: 'The Ticket',
  description: 'the ticket web ver',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <DeviceProvider>{children}</DeviceProvider>
      </body>
    </html>
  )
}
