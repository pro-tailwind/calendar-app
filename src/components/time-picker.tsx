"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import cx from "classnames"
import { useDateFormatter } from "react-aria"
import {
  getLocalTimeZone,
  isSameDay,
  parseDateTime,
} from "@internationalized/date"

import { useSelectedDate } from "@/context/selected-date"
import { useBookingAvailabilities } from "@/context/booking-availabilities"
import { Button } from "./button"

export function TimePicker() {
  const { selectedDate } = useSelectedDate()
  const { bookingAvailabilities } = useBookingAvailabilities()
  const [selectedTime, setSelectedTime] = useState(null)
  const formatter = useDateFormatter({ dateStyle: "full" })
  const availabilities = bookingAvailabilities.filter((availability) =>
    isSameDay(parseDateTime(availability.startTime), selectedDate),
  )
  const hasAvailability = availabilities.length > 0
  return (
    <div className="relative grid h-full grid-rows-[auto,1fr] overflow-hidden px-4 sm:px-8 lg:px-6 xl:px-10">
      {/* Scroll  mask */}
      <div className="pointer-events-none absolute inset-x-8 bottom-0 z-10 hidden h-40 bg-gradient-to-t from-white md:block lg:inset-x-6 xl:inset-x-10"></div>

      <div className="flex h-12 items-center justify-center md:justify-start">
        <h2 className="text-lg font-semibold">
          {formatter.format(selectedDate.toDate(getLocalTimeZone()))}
        </h2>
      </div>
      <div className="-mx-4 mt-4 overflow-y-auto px-4">
        <div className="relative">
          {/* Blur mask for days without availability */}
          <div
            className={cx(
              "absolute -inset-x-4 -inset-y-1 blur-sm backdrop-saturate-0 transition",
              hasAvailability
                ? "pointer-events-none z-0 opacity-0 duration-300 ease-out"
                : "z-10 opacity-100 ease-in",
            )}
          ></div>

          {hasAvailability ? (
            <ul className="space-y-2 pt-2 sm:pb-8 md:pb-40">
              {availabilities.map((availability) => (
                <TimeSlot
                  key={availability.startTime}
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                  availability={availability}
                ></TimeSlot>
              ))}
            </ul>
          ) : (
            // Empty list placeholder (faks list)
            <ul className="space-y-2 py-2" aria-hidden="true">
              {["8:00 AM", "9:00 AM", "2:00 PM", "4:00 PM"].map((time) => {
                return (
                  <li
                    key={time}
                    className="rounded-lg bg-primary-100 px-5 py-3 text-center font-semibold text-primary-700 opacity-50
                    [@supports_not_(backdrop-filter:blur(0))]:line-through [@supports_not_(backdrop-filter:blur(0))]:opacity-30"
                  >
                    {time}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        {!hasAvailability && (
          <p className="mt-2 pb-4 text-center text-sm text-slate-500 sm:pb-8">
            No booking availabilities on this day.
          </p>
        )}
      </div>
    </div>
  )
}

// ------------------------------
// Implementation components
// ------------------------------

function TimeSlot({ availability, selectedTime, setSelectedTime }) {
  const router = useRouter()
  const timeFormatter = useDateFormatter({ timeStyle: "short" })
  const isSelected = selectedTime === availability.startTime
  return (
    <li
      className={cx(
        "flex items-center gap-1 overflow-hidden rounded",
        isSelected && "bg-primary-600 bg-stripes",
      )}
    >
      <div
        className={cx(
          "shrink-0 transition-all",
          isSelected ? "basis-1/2 text-white ease-out" : "basis-full",
        )}
      >
        <Button
          impact={isSelected ? "none" : "light"}
          disabled={isSelected}
          className={cx(
            "w-full focus:ring-inset focus:ring-offset-0 active:translate-y-0",
            isSelected && "text-white disabled:opacity-100",
          )}
          onClick={() => setSelectedTime(availability.startTime)}
        >
          {timeFormatter.format(new Date(availability.startTime))}
        </Button>
      </div>
      <div className="m-2 basis-1/2">
        <Button
          size="small"
          impact="light"
          tabIndex={isSelected ? 0 : -1}
          className="w-full focus-visible:ring-inset focus-visible:ring-offset-0"
          onClick={() =>
            router.push(`/booking-details?time=${availability.startTime}`)
          }
        >
          Confirm
        </Button>
      </div>
    </li>
  )
}
