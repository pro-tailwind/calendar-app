'use client'

import { I18nProvider, useLocale } from 'react-aria'

import { ThemeProvider, useTheme } from '@/context/theme'
import { SelectedDateProvider } from '@/context/selected-date'

import { Shell } from '@/components/shell'
import { ThemeSwitcher } from '../components/theme-switcher'

import '../styles/tailwind.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale, direction } = useLocale()

  return (
    <I18nProvider locale={locale}>
      <ThemeProvider>
        <html lang={locale} dir={direction}>
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap"
              rel="stylesheet"
            />
          </head>
          <SelectedDateProvider>
            <Body>{children}</Body>
          </SelectedDateProvider>
        </html>
      </ThemeProvider>
    </I18nProvider>
  )
}

// Body with active theme applied
function Body({ children }) {
  const { theme } = useTheme()
  return (
    <body className="antialiased" data-theme={theme}>
      <ThemeSwitcher />
      <Shell>{children}</Shell>
    </body>
  )
}
