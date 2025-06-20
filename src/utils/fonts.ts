import localFont from 'next/font/local';

export const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
export const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const sfPro = localFont({
  src: [
    {
      path: '../fonts/SF-Pro-Text-Light.woff',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../fonts/SF-Pro-Text-LightItalic.woff',
      weight: '100',
      style: 'italic'
    },
    {
      path: '../fonts/SF-Pro-Text-Light.woff',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../fonts/SF-Pro-Text-LightItalic.woff',
      weight: '200',
      style: 'italic'
    },
    {
      path: '../fonts/SF-Pro-Text-Light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../fonts/SF-Pro-Text-LightItalic.woff',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../fonts/SF-Pro-Text-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/SF-Pro-Text-Regular.woff',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../fonts/SF-Pro-Text-Medium.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/SF-Pro-Text-MediumItalic.woff',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../fonts/SF-Pro-Text-Semibold.woff',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../fonts/SF-Pro-Text-SemiboldItalic.woff',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../fonts/SF-Pro-Text-Bold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/SF-Pro-Text-BoldItalic.woff',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../fonts/SF-Pro-Text-Bold.woff',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../fonts/SF-Pro-Text-BoldItalic.woff',
      weight: '800',
      style: 'italic'
    },
    {
      path: '../fonts/SF-Pro-Text-Bold.woff',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../fonts/SF-Pro-Text-BoldItalic.woff',
      weight: '900',
      style: 'italic'
    }
  ],
  variable: '--font-sfpro'
});
