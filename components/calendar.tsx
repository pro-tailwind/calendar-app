import * as React from 'react'
import {
  useCalendar,
  useCalendarGrid,
  useCalendarCell,
  useButton,
  useLocale,
  useDateFormatter,
} from 'react-aria'
import {
  createCalendar,
  getWeeksInMonth,
  getLocalTimeZone,
  isSameDay,
  parseDateTime,
  isToday,
  startOfWeek,
  today,
} from '@internationalized/date'
import { useCalendarState } from 'react-stately'

import cx from 'classnames'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

import { bookingAvailabilities } from '../data'

// ----------------------------
// Main component
// ----------------------------
export function Calendar(props) {
  const { locale } = useLocale()
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  })
  const ref = React.useRef()
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(props, state)

  return (
    <div {...calendarProps} ref={ref} className="calendar">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex gap-2">
          <CalendarButton {...prevButtonProps} />
          <CalendarButton {...nextButtonProps} />
        </div>
      </div>
      <CalendarGrid state={state} />
    </div>
  )
}

// ----------------------------
// Calendar grid
// ----------------------------
function CalendarGrid({ state, ...props }) {
  let { locale } = useLocale()
  let { gridProps, headerProps } = useCalendarGrid(props, state)
  const formatter = useDateFormatter({ weekday: 'long' })

  // Get the full day strings for the calendar heading
  let daysOfWeek = React.useMemo(() => {
    let weekStart = startOfWeek(today(state.timeZone), locale)
    return [...new Array(7).keys()].map((index) => {
      let date = weekStart.add({ days: index })
      let dateDay = date.toDate(state.timeZone)
      return formatter.format(dateDay)
    })
  }, [locale, state.timeZone, formatter])

  // Get the number of weeks in the month so we can render the proper number of rows.
  let weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

  return (
    <div className="-mx-4">
      <table {...gridProps} className="mt-4 w-full table-fixed border-separate border-spacing-2">
        <thead {...headerProps}>
          <tr>
            {daysOfWeek.map((day, index) => (
              <th key={index} className="pb-4">
                <abbr
                  className="cursor-help text-sm font-semibold uppercase tracking-wider text-slate-700 no-underline"
                  title={day}
                >
                  {day.slice(0, 3)}
                </abbr>
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

// ----------------------------
// Calendar cell
// ----------------------------
function CalendarCell({ state, date }) {
  let ref = React.useRef()
  let { cellProps, buttonProps, isSelected, isOutsideVisibleRange, isDisabled, formattedDate } =
    useCalendarCell({ date }, state, ref)

  const hasAvailability = bookingAvailabilities.some((availability) =>
    isSameDay(parseDateTime(availability.startTime), date)
  )
  const isCurrentDay = isToday(date, getLocalTimeZone())

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Styles lookup
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const baseClasses =
    'relative w-12 max-w-full aspect-square rounded-full grid place-items-center focus:outline-none focus:ring focus:ring-offset-1 focus:ring-primary-400'

  // Possible UI "states" of a calendar day:
  type Status = 'SELECTED' | 'DISABLED' | 'VACANCY' | 'NO_VACANCY' | 'TODAY_NO_VACANCY'

  const getStatus: () => Status = () => {
    if (isSelected) return 'SELECTED'
    if (isDisabled) return 'DISABLED'
    if (hasAvailability) return 'VACANCY'
    return isCurrentDay ? 'TODAY_NO_VACANCY' : 'NO_VACANCY'
  }

  const statusClasses: Record<Status, string> = {
    SELECTED: 'text-white bg-primary-600 font-bold bg-stripes',
    DISABLED: 'text-slate-300 pointer-events-none',
    VACANCY: 'text-primary-700 bg-primary-100 font-bold hover:bg-primary-200',
    NO_VACANCY: 'text-slate-800 hover:bg-slate-100',
    TODAY_NO_VACANCY: 'text-primary-700 font-bold hover:bg-slate-100 hover:text-slate-800',
  }

  // ------------------------------
  // Component render
  // ------------------------------
  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={cx(baseClasses, statusClasses[getStatus()])}
      >
        <span>{formattedDate}</span>
        {isToday(date, getLocalTimeZone()) && (
          <span
            className={cx(
              'absolute bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full',
              isSelected ? 'bg-white' : 'bg-primary-600'
            )}
          ></span>
        )}
      </div>
    </td>
  )
}

// ----------------------------
// Month switcher buttons
// ----------------------------
function CalendarButton(props) {
  let ref = React.useRef()
  let { buttonProps } = useButton(props, ref)

  const direction = buttonProps['aria-label']

  return (
    <button
      ref={ref}
      {...buttonProps}
      className="grid aspect-square w-12 max-w-full place-items-center rounded-full border border-slate-300 text-slate-400 hover:text-primary-600 disabled:border-slate-200 disabled:text-slate-300 disabled:hover:text-slate-300"
    >
      {direction === 'Previous' ? (
        <ChevronLeftIcon className="-ml-0.5 h-6 w-6" />
      ) : (
        <ChevronRightIcon className="ml-0.5 h-6 w-6" />
      )}
    </button>
  )
}
