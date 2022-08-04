import * as React from 'react'
import { useCalendar, useCalendarGrid, useCalendarCell, useLocale } from 'react-aria'
import { useCalendarState } from 'react-stately'
import {
  createCalendar,
  getWeeksInMonth,
  today,
  isSameDay,
  parseDateTime,
  parseDate,
  isToday,
} from '@internationalized/date'
import cx from 'classnames'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { bookingAvailabilities } from '../data'

import { TimezonePicker } from '../components/timezone-picker'

export default function Page({ selectedDate, setSelectedDate }) {
  return (
    <div className="mx-auto grid h-full max-w-lg grid-rows-[auto,1fr] gap-8 md:max-w-none">
      <div className="mt-10 px-4 sm:px-8 xl:px-10">
        <h1 className="text-center text-2xl font-bold md:text-left">Select a Date & Time</h1>
      </div>
      <div className="grid min-h-0 md:grid-cols-[1fr,360px] md:divide-x xl:grid-cols-[1fr,360px]">
        <div>
          <Calendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            value={parseDateTime(selectedDate)}
            onChange={setSelectedDate}
          />
          <div className="p-4 sm:p-8 xl:p-10">
            <TimezonePicker />
          </div>
        </div>
        <div className="min-h-0">
          <div className="px-8">
            <h2>Timepicker</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

function Calendar(props) {
  let { locale } = useLocale()
  let state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  })

  let ref = React.useRef()
  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(props, state, ref)

  return (
    <div className="px-6 sm:px-8 xl:px-10">
      <div {...calendarProps} ref={ref} className="calendar">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="flex gap-2">
            <button
              className="grid aspect-square w-12 max-w-full place-items-center rounded-full border border-slate-300 text-slate-400 hover:text-indigo-600"
              {...prevButtonProps}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              className="grid aspect-square w-12 max-w-full place-items-center rounded-full border border-slate-300 text-slate-400 hover:text-indigo-600"
              {...nextButtonProps}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        <CalendarGrid state={state} />
      </div>
    </div>
  )
}

// Grid

function CalendarGrid({ state, ...props }) {
  let { locale } = useLocale()
  let { gridProps, headerProps, weekDays } = useCalendarGrid(props, state)

  // Get the number of weeks in the month so we can render the proper number of rows.
  let weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

  return (
    <div className="-mx-4">
      <table {...gridProps} className="mt-4 w-full table-fixed border-separate border-spacing-2">
        <thead {...headerProps}>
          <tr>
            {weekDays.map((day, index) => (
              <th key={index} className="pb-4">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
            <tr key={weekIndex} className="text-center">
              {state
                .getDatesInWeek(weekIndex)
                .map((date, i) =>
                  date ? <CalendarCell key={i} state={state} date={date} /> : <td key={i} />
                )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Cell
function CalendarCell({ state, date }) {
  let ref = React.useRef()
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref)

  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------

  const hasAvailability = bookingAvailabilities.some((availability) =>
    isSameDay(parseDateTime(availability.startTime), date)
  )

  const isCurrentDay = isToday(date)

  /* 
Possible UI "states" of a calendar day: 
NOT_ELIGIBLE | NO_VACANCY | VACANCY | TODAY_NO_VACANCY
*/

  function getEligibilityStatus() {
    if (isDisabled) return 'NOT_ELIGIBLE'
    if (!hasAvailability) {
      return isCurrentDay ? 'TODAY_NO_VACANCY' : 'NO_VACANCY'
    }
    return 'VACANCY'
  }

  const baseClasses = 'relative w-12 max-w-full aspect-square rounded-full grid place-items-center'
  const selectedClasses = 'text-white bg-indigo-600 font-bold bg-stripes'

  const statusClasses = {
    NOT_ELIGIBLE: 'text-slate-300',
    NO_VACANCY: 'text-slate-800 hover:bg-slate-100',
    TODAY_NO_VACANCY: 'text-indigo-700 font-bold hover:bg-slate-100 hover:text-slate-800',
    VACANCY: 'text-indigo-700 bg-indigo-100 font-bold hover:bg-indigo-200',
  }

  const eligibilityStatus = getEligibilityStatus()

  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={cx(
          baseClasses,
          isSelected ? selectedClasses : statusClasses[eligibilityStatus]
          // isDisabled && 'text-gray-300',
          // isUnavailable && 'text-red-700'
        )}
      >
        {formattedDate}
      </div>
    </td>
  )
}
