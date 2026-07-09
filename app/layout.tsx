import type { Metadata, Viewport } from 'next';
import './globals.css';
import ConsultModal from '@/components/ConsultModal';

export const metadata: Metadata = {
  metadataBase: new URL('https://rushindocumentation.com'),
  title: 'Rush In Documentation Center — Notary, Apostille & Document Services',
  description:
    'Professional Notary, Apostille & Document Services in Southern California — fast, secure, done right. Notarization, apostille, translations, visas, passports, immigration documents, and Live Scan from certified professionals with 30+ years of experience.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  appleWebApp: { title: 'Rush In', capable: true, statusBarStyle: 'default' },
};

export const viewport: Viewport = {
  themeColor: '#283778',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ConsultModal />
      </body>
    </html>
  );
}
