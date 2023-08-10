"use client"

import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react"
import { today, getLocalTimeZone } from "@internationalized/date"
import { DateValue } from "react-aria"

export const SelectedDateContext = createContext<{
  selectedDate: DateValue
  setSelectedDate: Dispatch<SetStateAction<DateValue>>
}>({
  selectedDate: today(getLocalTimeZone()),
  setSelectedDate: () => {},
})

export function SelectedDateProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(today(getLocalTimeZone()))
  return (
    <SelectedDateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </SelectedDateContext.Provider>
  )
}

export function useSelectedDate() {
  const context = useContext(SelectedDateContext)
  if (context === undefined) {
    throw new Error(
      "useSelectedDate must be used within a SelectedDateProvider",
    )
  }
  return context
}
