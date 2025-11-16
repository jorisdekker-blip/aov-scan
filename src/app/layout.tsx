// src/app/layout.tsx
import './globals.css'; // LAADT ONZE CSS

import type { Metadata, Viewport } from 'next';
import { Inter, Baloo_2 } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const baloo = Baloo_2({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-baloo',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#2D2E5B',
};

export const metadata: Metadata = {
  title: 'AOV-Scan',
  description:
    'Valt jouw AOV onder de vrijstelling voor de verplichte AOV (BAZ)?',
  openGraph: {
    title: 'AOV-Scan',
    description:
      'Valt jouw AOV onder de vrijstelling voor de verplichte AOV (BAZ)?',
    images: [
      {
        url: 'https://www.databaseaov.nl/wijzijnaov/website/DeelAOVcheckWijZijnAOV.png',
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://aovscan.wijzijnaov.nl',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AOV-Scan',
    description:
      'Valt jouw AOV onder de vrijstelling voor de verplichte AOV (BAZ)?',
    images: [
      'https://www.databaseaov.nl/wijzijnaov/website/DeelAOVcheckWijZijnAOV.png',
    ],
  },
  icons: {
    icon: '/favicon-main.svg',
    apple: '/favicon-main.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${baloo.variable}`}>
      <body className="min-h-screen flex flex-col items-center justify-start sm:justify-center p-4">
        {/* Logo */}
        <div className="mb-8 mt-0 sm:mt-4 text-center">
          <img
            src="https://www.databaseaov.nl/wijzijnaov/mailbestanden/WijZijnAOV_Logo.png"
            alt="WijZijn AOV Logo"
            className="mx-auto h-16 sm:h-20"
          />
        </div>
        {/* Pagina-inhoud wordt hier geladen */}
        <div className="w-full max-w-xl">{children}</div>
        {/* Footer */}
        <footer className="w-full max-w-xl mx-auto text-center px-4 py-8 mt-4 text-xs text-gray-600">
          <p className="mb-2">
            WijZijnAOV ©2025 Alle rechten voorbehouden &nbsp;•&nbsp; KVK:91105013
            &nbsp;•&nbsp; AFM:12049592 &nbsp;•&nbsp; Kifid:300.01.8692
          </p>
          <p>
            <a
              href="https://ket.wijzijnaov.nl/docs1/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-900"
            >
              Alg. Voorwaarden
            </a>
            &nbsp; • &nbsp;
            <a
              href="https://ket.wijzijnaov.nl/docs1/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-900"
            >
              Disclaimer
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}