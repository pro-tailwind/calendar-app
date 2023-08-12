"use client"

import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  Heading,
} from "react-aria-components"
import {
  isSameDay,
  parseDateTime,
  isToday,
  getLocalTimeZone,
} from "@internationalized/date"
import cx from "classnames"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

import { useBookingAvailabilities } from "@/context/booking-availabilities"
import { useSelectedDate } from "@/context/selected-date"

export function CalendarDemo() {
  const { bookingAvailabilities } = useBookingAvailabilities()
  const { setSelectedDate } = useSelectedDate()

  return (
    <Calendar aria-label="Appointment date" onChange={setSelectedDate}>
      <header className="flex items-center justify-between">
        <Heading className="text-lg font-semibold" />
        <MonthsNavigation />
      </header>

      {/* HTML Table */}
      <CalendarGrid
        className="mt-4 w-full table-fixed border-separate border-spacing-2"
        weekdayStyle="long"
      >
        <>
          {/* Header row (week days) */}
          <CalendarGridHeader>
            {(day) => (
              <CalendarHeaderCell className="pb-4">
                <abbr
                  className="cursor-help text-sm font-semibold uppercase tracking-wider text-slate-700 no-underline"
                  title={day}
                >
                  {day.slice(0, 3)}
                </abbr>
              </CalendarHeaderCell>
            )}
          </CalendarGridHeader>

          {/* Body rows (dates) */}
          <CalendarGridBody>
            {(date) => (
              <CalendarCell
                date={date}
                /* 
                  We use the selected / disabled states to work out what 
                  classes to apply to each cell — scroll below to 
                  find the `getCalendarCellClasses` function.
                */
                className={({ isSelected, isDisabled }) =>
                  getCalendarCellClasses({
                    date,
                    isSelected,
                    isDisabled,
                    bookingAvailabilities,
                  })
                }
              >
                {({ isSelected, formattedDate }) => (
                  <>
                    <span>{formattedDate}</span>
                    {isToday(date, getLocalTimeZone()) && (
                      <span
                        className={cx(
                          "absolute bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full",
                          isSelected ? "bg-white" : "bg-primary-600",
                        )}
                      ></span>
                    )}
                  </>
                )}
              </CalendarCell>
            )}
          </CalendarGridBody>
        </>
      </CalendarGrid>
    </Calendar>
  )
}

// ----------------------------
// Months navigation
// ----------------------------
function MonthsNavigation() {
  const monthNavigationButtonClasses =
    "grid aspect-square w-12 max-w-full place-items-center rounded-full border border-slate-300 text-slate-400 hover:text-primary-600 focus:outline-none focus:ring focus:ring-primary-400 focus:ring-offset-1 disabled:border-slate-200 disabled:text-slate-300 disabled:hover:text-slate-300"
  return (
    <div className="flex gap-2">
      <Button slot="previous" className={monthNavigationButtonClasses}>
        <ChevronLeftIcon className="-ml-0.5 h-6 w-6" />
      </Button>
      <Button slot="next" className={monthNavigationButtonClasses}>
        <ChevronRightIcon className="ml-0.5 h-6 w-6" />
      </Button>
    </div>
  )
}

// ----------------------------
// Calendar cell styles
// ----------------------------
function getCalendarCellClasses({
  date,
  isSelected,
  isDisabled,
  bookingAvailabilities,
}) {
  // Working out which days have availability
  const hasAvailability = bookingAvailabilities.some((availability) =>
    isSameDay(parseDateTime(availability.startTime), date),
  )
  // Today's day
  const isCurrentDay = isToday(date, getLocalTimeZone())

  // Common classes for all calendar days
  const baseClasses =
    "relative mx-auto grid aspect-square w-12 max-w-full place-items-center rounded-full focus:outline-none focus:ring focus:ring-primary-400 focus:ring-offset-1"

  // Possible UI "states" of a calendar day:
  type Status =
    | "SELECTED"
    | "DISABLED"
    | "VACANCY"
    | "NO_VACANCY"
    | "TODAY_NO_VACANCY"

  // Style variants for each possible UI "state"
  const statusClasses: Record<Status, string> = {
    SELECTED: "bg-primary-600 font-bold text-white bg-stripes",
    DISABLED: "pointer-events-none text-slate-300",
    VACANCY: "bg-primary-100 font-bold text-primary-700 hover:bg-primary-200",
    NO_VACANCY: "text-slate-800 hover:bg-slate-100",
    TODAY_NO_VACANCY:
      "font-bold text-primary-700 hover:bg-slate-100 hover:text-slate-800",
  }

  //  Working out in which "status" the day is
  const getStatus: () => Status = () => {
    if (isSelected) return "SELECTED"
    if (isDisabled) return "DISABLED"
    if (hasAvailability) return "VACANCY"
    return isCurrentDay ? "TODAY_NO_VACANCY" : "NO_VACANCY"
  }

  // Mix all classes in a blender, serve with ice 🍹
  return cx(baseClasses, statusClasses[getStatus()])
}
