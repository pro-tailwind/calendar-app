import { useState } from 'react'
import { startOfToday } from 'date-fns'

import '../styles/tailwind.css'

import { SidePanel } from '../components/side-panel'
import { MainPanel } from '../components/main-panel'
import { Ribbon } from '../components/ribbon'
import { BackgroundDecoration } from '../components/background-decoration'

function MyApp({ Component, pageProps }) {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  return (
    <>
      <div className="grid min-h-screen place-items-center">
        <BackgroundDecoration selectedDay={selectedDay} />
        <div className="mx-auto w-full max-w-5xl px-2 py-10 sm:px-6 lg:px-8 xl:max-w-7xl">
          <div className="relative">
            <Ribbon />
            <div className="grid h-full rounded-2xl bg-white shadow-lg xl:grid-cols-[400px,1fr]">
              <SidePanel />
              <MainPanel>
                <Component
                  {...pageProps}
                  selectedDay={selectedDay}
                  setSelectedDay={setSelectedDay}
                />
              </MainPanel>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
