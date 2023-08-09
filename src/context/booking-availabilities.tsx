import { createContext, useContext } from "react";

import {
  bookingAvailabilities,
  Availability,
} from "@/data/booking-availabilities";

const BookingAvailibilitiesContext = createContext<{
  bookingAvailabilities: Availability[];
}>({
  bookingAvailabilities,
});

export function BookingAvailabilitiesProvider({ children }) {
  return (
    <BookingAvailibilitiesContext.Provider value={{ bookingAvailabilities }}>
      {children}
    </BookingAvailibilitiesContext.Provider>
  );
}

export function useBookingAvailabilities() {
  const context = useContext(BookingAvailibilitiesContext);
  if (context === undefined) {
    throw new Error(
      "useBookingAvailabilities must be used within a BookingAvailabilitiesProvider",
    );
  }
  return context;
}
