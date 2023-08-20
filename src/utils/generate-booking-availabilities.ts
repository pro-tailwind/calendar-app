export type Availability = {
  startTime: string
  endTime: string
}

export const generateBookingAvailabilities = (): Availability[] => {
  // Bookable time range
  const START_TIME = 5
  const END_TIME = 24

  const startDate = new Date()
  const endDate = new Date(startDate)
  endDate.setMonth(endDate.getMonth() + 6)

  const timeSlots: Availability[] = []

  while (startDate < endDate) {
    // Check if the day is a weekday
    if (startDate.getDay() !== 0 && startDate.getDay() !== 6) {
      // Randomise amount of days with bookable times
      if (Math.random() < 0.4) {
        // Randomise amount of bookable times within a day
        const timesForDay =
          Math.floor(Math.random() * (END_TIME - START_TIME)) + 1
        let currentTime = START_TIME

        Array.from({ length: timesForDay }).forEach(() => {
          // Bookings go for 2 hours
          const duration = 2
          const endTime = currentTime + duration

          if (endTime <= END_TIME) {
            const datePart = startDate.toISOString().split("T")[0]
            // Format time as ISO string
            const startTimeStr = `${datePart}T${String(currentTime).padStart(
              2,
              "0",
            )}:00`
            const endTimeStr = `${datePart}T${String(endTime).padStart(
              2,
              "0",
            )}:00`

            // Populate timeSlots array with day's bookable times
            timeSlots.push({
              startTime: startTimeStr,
              endTime: endTimeStr,
            })

            // Add a "break" of 0 to 2 hours until next bookable slot
            currentTime = endTime + Math.floor(Math.random() * 2)
          }
        })
      }
    }

    // Move on to next day
    startDate.setDate(startDate.getDate() + 1)
  }

  return timeSlots
}
