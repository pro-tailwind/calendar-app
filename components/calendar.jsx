import { useState } from 'react'
import cx from 'classnames'
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  startOfToday,
  isBefore,
  isSameMonth,
  isToday,
  addMonths,
  isSameDay,
  parseISO,
} from 'date-fns'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export function Calendar({ selectedDay, setSelectedDay, bookingAvailabilities }) {
  const [selectedMonth, setSelectedMonth] = useState(startOfMonth(selectedDay))

  const daysOfTheMonth = eachDayOfInterval({
    start: startOfWeek(selectedMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(selectedMonth), { weekStartsOn: 1 }),
  })

  function incrementMonth() {
    setSelectedMonth(addMonths(selectedMonth, 1))
  }

  function decrementMonth() {
    setSelectedMonth(addMonths(selectedMonth, -1))
  }

  /* 
    TODO: 
    Look into adding keyboard navigation
    The code below (commented out) changes the state, but instead arrow keys
    should set focus to the element (and only change selectedDay state on enter/space).
    Also, need to scope keyboad navigation to when the calendar is in focus only.

    useEffect(() => {
      function keyboardNavigation(event) {
        switch (event.key) {
          case 'ArrowRight':
            setSelectedDay(addDays(selectedDay, 1))
            break
          case 'ArrowLeft':
            setSelectedDay(addDays(selectedDay, -1))
            break
          case 'ArrowDown':
            setSelectedDay(addDays(selectedDay, 7))
            break
          case 'ArrowUp':
            setSelectedDay(addDays(selectedDay, -7))
            break
        }
      }
      addEventListener('keydown', keyboardNavigation)
      return () => removeEventListener('keydown', keyboardNavigation)
    }, [selectedDay, setSelectedDay])

    useEffect(() => {
      if (!isSameMonth(selectedMonth, startOfMonth(selectedDay))) {
        setSelectedMonth(startOfMonth(selectedDay))
      }
    }, [selectedDay, selectedMonth])

  */

  // We need to split the month into weeks to display the days in a table.
  const getWeekSplit = (array) =>
    Array(Math.ceil(array.length / 7))
      .fill()
      .map((_, index) => index * 7)
      .map((start) => array.slice(start, start + 7))

  const weekSplit = getWeekSplit(daysOfTheMonth)

  return (
    <div className="px-6 sm:px-8 xl:px-10">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{format(selectedMonth, 'MMMM yyyy')}</h2>
        <div className="flex gap-2">
          <button
            className="grid aspect-square w-12 max-w-full place-items-center rounded-full border border-slate-300 text-slate-400 hover:text-indigo-600"
            onClick={decrementMonth}
          >
            <ChevronLeftIcon className="-ml-0.5 h-6 w-6" />
          </button>
          <button
            className="grid aspect-square w-12 max-w-full place-items-center rounded-full border border-slate-300 text-slate-400 hover:text-indigo-600"
            onClick={incrementMonth}
          >
            <ChevronRightIcon className="ml-0.5 h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="-mx-4">
        <table className="mt-4 w-full table-fixed border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="pb-4">
                <abbr
                  className="cursor-help text-sm font-semibold uppercase tracking-wider text-slate-700 no-underline"
                  title="Monday"
                >
                  Mon
                </abbr>
              </th>
              <th className="pb-4">
                <abbr
                  className="cursor-help text-sm font-semibold uppercase tracking-wider text-slate-700 no-underline"
                  title="Tuesday"
                >
                  Tue
                </abbr>
              </th>
              <th className="pb-4">
                <abbr
                  className="cursor-help text-sm font-semibold uppercase tracking-wider text-slate-700 no-underline"
                  title="Wednesday"
                >
                  Wed
                </abbr>
              </th>
              <th className="pb-4">
                <abbr
                  className="cursor-help text-sm font-semibold uppercase tracking-wider text-slate-700 no-underline"
                  title="Thursday"
                >
                  Thu
                </abbr>
              </th>
              <th className="pb-4">
                <abbr
                  className="cursor-help text-sm font-semibold uppercase tracking-wider text-slate-700 no-underline"
                  title="Friday"
                >
                  Fri
                </abbr>
              </th>
              <th className="pb-4">
                <abbr
                  className="cursor-help text-sm font-semibold uppercase tracking-wider text-slate-700 no-underline"
                  title="Saturday"
                >
                  Sat
                </abbr>
              </th>
              <th className="pb-4">
                <abbr
                  className="cursor-help text-sm font-semibold uppercase tracking-wider text-slate-700 no-underline"
                  title="Sunday"
                >
                  Sun
                </abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            {weekSplit.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <td key={dayIndex} className="text-center">
                    <CalendarDay
                      day={day}
                      selectedDay={selectedDay}
                      setSelectedDay={setSelectedDay}
                      selectedMonth={selectedMonth}
                      bookingAvailabilities={bookingAvailabilities}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ------------------------------
// Implementation components
// ------------------------------

function CalendarDay({ day, selectedDay, setSelectedDay, selectedMonth, bookingAvailabilities }) {
  /*
  REVIEW:
  A general review of this component would be appreciated.
  It needs better accessibility, but from a styling perspective,
  I'd like your take on the approach of using `statusClasses` to handle the 
  various possible "states".
*/

  const today = startOfToday()
  const isPast = isBefore(day, today)
  const isCurrentMonth = isSameMonth(day, selectedMonth)
  const hasAvailability = bookingAvailabilities.some((availability) =>
    isSameDay(parseISO(availability.startTime), day)
  )
  const isSelected = isSameDay(selectedDay, day)
  const isCurrentDay = isToday(day)

  /* 
  Possible UI "states" of a calendar day: 
  NOT_ELIGIBLE | NO_VACANCY | VACANCY | TODAY_NO_VACANCY
*/

  function getEligibilityStatus() {
    if (isPast || !isCurrentMonth) return 'NOT_ELIGIBLE'
    if (!hasAvailability) {
      return isCurrentDay ? 'TODAY_NO_VACANCY' : 'NO_VACANCY'
    }
    return 'VACANCY'
  }

  const baseClasses = 'relative w-12 max-w-full aspect-square rounded-full'
  const selectedClasses = 'text-white bg-indigo-600 font-bold bg-stripes'

  const statusClasses = {
    NOT_ELIGIBLE: 'text-slate-300',
    NO_VACANCY: 'text-slate-800 hover:bg-slate-100',
    TODAY_NO_VACANCY: 'text-indigo-700 font-bold hover:bg-slate-100 hover:text-slate-800',
    VACANCY: 'text-indigo-700 bg-indigo-100 font-bold hover:bg-indigo-200',
  }

  const eligibilityStatus = getEligibilityStatus()

  return (
    <button
      className={cx(baseClasses, isSelected ? selectedClasses : statusClasses[eligibilityStatus])}
      onClick={() => setSelectedDay(day)}
      disabled={eligibilityStatus === 'NOT_ELIGIBLE'}
    >
      <span>{format(day, 'd')}</span>
      {isToday(day) && (
        <span
          className={cx(
            'absolute bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full',
            isSelected ? 'bg-white' : 'bg-indigo-600'
          )}
        ></span>
      )}
    </button>
  )
}
