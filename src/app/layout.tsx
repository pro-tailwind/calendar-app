'use client'

import { I18nProvider, useLocale } from 'react-aria'

import { useTheme } from '@/context/theme'
import { ThemeProvider } from '@/context/theme'
import { SelectedDateProvider } from '@/context/selected-date'

import { SidePanel } from '../components/side-panel'
import { MainPanel } from '../components/main-panel'
import { Ribbon } from '../components/ribbon'
import { BackgroundDecoration } from '../components/background-decoration'
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

function Body({ children }) {
  const { theme } = useTheme()
  return (
    <body className="antialiased" data-theme={theme}>
      <ThemeSwitcher />
      <div className="grid min-h-screen place-items-center">
        <BackgroundDecoration />
        <div className="mx-auto w-full max-w-5xl px-2 py-16 sm:px-6 lg:px-8 xl:max-w-7xl">
          <div className="relative">
            <Ribbon />
            <div className="grid h-full rounded-2xl shadow-lg xl:grid-cols-[theme(width.100),1fr]">
              <SidePanel />
              <MainPanel>{children}</MainPanel>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}
