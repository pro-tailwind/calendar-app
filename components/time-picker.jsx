import { useState, Fragment } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { format, isSameDay, parseISO } from 'date-fns'

export function TimePicker({ selectedDay, bookingAvailabilities }) {
  const [selectedTime, setSelectedTime] = useState(null)
  const availabilities = bookingAvailabilities.filter((availability) =>
    isSameDay(parseISO(availability.startTime), selectedDay)
  )
  const hasAvailability = availabilities.length > 0

  console.log({ availabilities, hasAvailability })
  return (
    <div className="relative grid h-full grid-rows-[auto,1fr] overflow-hidden px-4 sm:px-8 xl:px-10">
      {/* Scroll  mask */}
      <div className="pointer-events-none absolute inset-x-10 bottom-0 z-10 hidden h-40 bg-gradient-to-t from-white md:block"></div>

      <div className="flex h-12 items-center justify-center md:justify-start">
        <h2 className="text-lg font-semibold">{format(selectedDay, 'EEEE, do MMMM yyyy')}</h2>
      </div>
      <div className="-mx-4 overflow-y-auto p-4">
        <div className="relative">
          {/* Blur overlay to handle animation */}
          <div
            className={cx(
              'absolute -inset-x-4 inset-y-0 backdrop-blur-sm backdrop-saturate-0 transition',
              hasAvailability
                ? 'pointer-events-none z-0 opacity-0 duration-300 ease-out'
                : 'z-10 opacity-100 ease-in'
            )}
          ></div>

          {hasAvailability ? (
            <ul className="space-y-2 py-4 sm:pb-8 md:pb-40">
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
            <ul className="space-y-2 py-4" aria-hidden="true">
              {['8:00 AM', '9:00 AM', '2:00 PM', '4:00 PM'].map((time) => {
                return (
                  <li
                    key={time}
                    className="rounded-lg bg-indigo-100 px-5 py-3 text-center font-semibold text-indigo-700 opacity-50
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
          <p className="pb-4 text-center text-sm text-gray-500 sm:pb-8">
            No booking availabilities on this day.
          </p>
        )}
      </div>
    </div>
  )
}

function TimeSlot({ availability, selectedTime, setSelectedTime }) {
  const isSelected = selectedTime === availability.startTime
  return (
    <li className="flex gap-1 overflow-hidden rounded-lg bg-indigo-600 bg-stripes">
      <button
        disabled={isSelected}
        onClick={() => setSelectedTime(availability.startTime)}
        className={cx(
          'shrink-0 transition-all',
          isSelected
            ? 'basis-1/2 text-white'
            : 'basis-full rounded-lg bg-indigo-100 px-5 py-3 font-semibold text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring focus:ring-inset focus:ring-indigo-500'
        )}
      >
        {format(parseISO(availability.startTime), 'h:mm a')}
      </button>
      <Link href={`/booking-details?time=${availability.startTime}`}>
        <a
          tabIndex={isSelected ? 0 : -1}
          className="m-2 basis-1/2 rounded-md bg-indigo-100 px-3 py-1 text-center font-medium text-indigo-800 hover:bg-white"
        >
          Confirm
        </a>
      </Link>
    </li>
  )
}
