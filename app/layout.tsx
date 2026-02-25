import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Fondation TELEMA | Entrepreneuriat des Jeunes au Congo',
  description:
    "La Fondation TELEMA accompagne les jeunes entrepreneurs congolais a travers l'incubation, le financement et le mentorat pour creer des emplois durables en Republique du Congo.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-mesh-gradient relative min-h-screen overflow-x-hidden`}
      >
        {/* Decorative background blobs */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[120px] animate-float-slow [animation-delay:2s]" />
          <div className="absolute top-[30%] right-[10%] w-[20%] h-[20%] bg-primary/3 rounded-full blur-[100px] animate-float" />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
