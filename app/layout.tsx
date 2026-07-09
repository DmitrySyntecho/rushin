import type { Metadata } from 'next';
import './globals.css';
import ConsultModal from '@/components/ConsultModal';

export const metadata: Metadata = {
  title: 'Rush In Documentation Center — Notary, Apostille & Document Services',
  description:
    'Professional Notary, Apostille & Document Services in Southern California — fast, secure, done right. Notarization, apostille, translations, visas, passports, immigration documents, and Live Scan from certified professionals with 30+ years of experience.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
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
