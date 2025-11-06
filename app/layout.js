export const metadata = {
  title: 'NovaWorks ? Digital Services that Scale',
  description: 'We design, build, and grow digital products for startups and enterprises.',
  metadataBase: new URL('https://agentic-2913f860.vercel.app'),
  openGraph: {
    title: 'NovaWorks ? Digital Services that Scale',
    description: 'We design, build, and grow digital products for startups and enterprises.',
    url: 'https://agentic-2913f860.vercel.app',
    siteName: 'NovaWorks',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'NovaWorks' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaWorks ? Digital Services that Scale',
    description: 'We design, build, and grow digital products for startups and enterprises.',
    images: ['/og.png'],
  },
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
