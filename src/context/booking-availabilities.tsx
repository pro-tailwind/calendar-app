"use client"

import { createContext, useContext, useState, useEffect } from "react"

import {
  generateBookingAvailabilities,
  Availability,
} from "@/utils/generate-booking-availabilities"

const BookingAvailibilitiesContext = createContext<{
  bookingAvailabilities: Availability[]
}>({
  bookingAvailabilities: [],
})

export function BookingAvailabilitiesProvider({ children }) {
  const [bookingAvailabilities, setBookingAvailabilities] = useState<
    Availability[]
  >([])

  useEffect(() => {
    setBookingAvailabilities(generateBookingAvailabilities())
  }, [])
  const availabilities = bookingAvailabilities
  return (
    <BookingAvailibilitiesContext.Provider
      value={{ bookingAvailabilities: availabilities }}
    >
      {children}
    </BookingAvailibilitiesContext.Provider>
  )
}

export function useBookingAvailabilities() {
  const context = useContext(BookingAvailibilitiesContext)
  if (context === undefined) {
    throw new Error(
      "useBookingAvailabilities must be used within a BookingAvailabilitiesProvider",
    )
  }
  return context
}
