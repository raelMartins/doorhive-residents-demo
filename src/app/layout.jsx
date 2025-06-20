import '@/styles/globals.css';
import { geistMono, geistSans, sfPro } from '@/utils/fonts';
import { Providers } from '@/utils/providers';

export const metadata = {
  metadataBase: new URL('https://app.doorhive.io'),
  title: {
    default:
      'DoorHive Residents: Create an Application for Your Community | HOA Management Software',
    template: '%s | DoorHive Residents'
  },
  description:
    'DoorHive is the #1 platform for property management firms to create a branded web & mobile app, automate dues & requests, and grow communities. Modern HOA management, resident-first.',
  keywords: [
    'HOA management software',
    'community management app',
    'resident portal',
    'online payments HOA',
    'maintenance requests HOA',
    'violation tracking HOA',
    'ACC requests HOA',
    'HOA voting',
    'property management software',
    'doorhive',
    'prop-tech',
    'homeowner association app',
    'digital document vault HOA',
    'community analytics dashboard',
    'automated accounting HOA',
    'resident CRM',
    'AI community assistant',
    'amenity reservations HOA'
  ],
  authors: [{ name: 'DoorHive', url: 'https://app.doorhive.io' }],
  creator: 'DoorHive',
  publisher: 'DoorHive',

  alternates: {
    canonical: 'https://app.doorhive.io'
  },

  openGraph: {
    title: 'DoorHive: Create a Branded App for Your Community & HOA Management',
    description:
      'Collect dues, handle requests, and keep every homeowner in the loop with DoorHive - the all-in-one platform for property management firms. Automate, engage, and grow.',
    url: 'https://app.doorhive.io',
    siteName: 'DoorHive',
    images: [
      {
        url: 'https://app.doorhive.io/doorHiveLogo.png',
        width: 1200,
        height: 630,
        alt: 'DoorHive: Modern HOA Management Software'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    site: '@DoorHiveOfficial',
    creator: '@DoorHiveOfficial',
    title: 'DoorHive: Streamline HOA Management with a Resident App',
    description:
      "Turn your HOA into smart prop-tech. Collect dues, manage requests, and boost resident engagement with DoorHive's all-in-one platform for property managers.",
    images: ['https://app.doorhive.io/doorHiveLogo.png']
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/oakridge_logo.png', type: 'image/png', sizes: '192x192' }
      // { url: '/icon-512x512.png', type: 'image/png', sizes: '512x512' }, // For larger icons
      // { url: '/images/oakridge_logo.svg', type: 'image/svg+xml' }
    ],
    apple: {
      url: '/images/oakridge_logo.png',
      sizes: '180x180',
      type: 'image/png'
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sfPro.variable} ${sfPro.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
