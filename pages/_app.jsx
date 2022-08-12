import { useState } from 'react'
import { today } from '@internationalized/date'
import { SSRProvider, useLocale } from 'react-aria'

import '../styles/tailwind.css'

import { SidePanel } from '../components/side-panel'
import { MainPanel } from '../components/main-panel'
import { Ribbon } from '../components/ribbon'
import { BackgroundDecoration } from '../components/background-decoration'
import { ThemeSwitcher } from '../components/theme-switcher'

function MyApp({ Component, pageProps }) {
  const { locale } = useLocale()
  const [selectedDate, setSelectedDate] = useState(today())
  const [activeTheme, setActiveTheme] = useState('base')
  return (
    <SSRProvider>
      <ThemeSwitcher activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
      <div className="grid min-h-screen place-items-center">
        <BackgroundDecoration selectedDate={selectedDate} />
        <div className="mx-auto w-full max-w-5xl px-2 py-16 sm:px-6 lg:px-8 xl:max-w-7xl">
          <div className="relative">
            <Ribbon />
            <div className="grid h-full rounded-2xl shadow-lg xl:grid-cols-[theme(width.100),1fr]">
              <SidePanel />
              <MainPanel>
                <Component
                  {...pageProps}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              </MainPanel>
            </div>
          </div>
        </div>
      </div>
    </SSRProvider>
  )
}

export default MyApp
