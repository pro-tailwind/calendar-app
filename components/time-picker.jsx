import { useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { format, isSameDay, parseISO } from 'date-fns'

export function TimePicker({ selectedDay, bookingAvailabilities }) {
  const [selectedTime, setSelectedTime] = useState(null)
  const availabilities = bookingAvailabilities.filter((availability) =>
    isSameDay(parseISO(availability.startTime), selectedDay)
  )
  return (
    <div className="relative grid h-full grid-rows-[auto,1fr] overflow-hidden px-4 sm:px-8 xl:px-10">
      {/* Scroll  mask */}
      <div className="pointer-events-none absolute inset-x-8 bottom-0 z-10 hidden h-40 bg-gradient-to-t from-white md:block"></div>

      <div className="flex h-12 items-center justify-center md:justify-start">
        <h2 className="text-lg font-semibold">{format(selectedDay, 'EEEE, do MMMM yyyy')}</h2>
      </div>
      <div className="-mx-4 mt-4 overflow-y-auto px-4">
        <div className="relative">
          {availabilities.length > 0 ? (
            <ul className="space-y-2 pb-4 sm:pb-8 md:pb-40">
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
            <EmptyPlaceholder />
          )}
          <div
            className={cx(
              'absolute -inset-x-2 -top-2 bottom-0 transition-all',
              availabilities.length > 0
                ? 'bg-grayscale-0 pointer-events-none backdrop-blur-0'
                : 'bg-white/80 backdrop-blur-sm backdrop-grayscale [@supports(backdrop-filter:blur(0px))]:bg-white/20'
            )}
          ></div>
        </div>
        {availabilities.length === 0 && (
          <p className="pb-4 text-center text-sm text-gray-600 sm:pb-8 md:text-left">
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
    <li className="bg-stripes flex gap-1 overflow-hidden rounded-lg bg-indigo-600">
      <button
        disabled={isSelected}
        onClick={() => setSelectedTime(availability.startTime)}
        className={cx(
          'shrink-0 transition-all',
          isSelected
            ? 'basis-1/2 text-white'
            : 'basis-full rounded-lg bg-indigo-200 px-5 py-3 font-semibold text-indigo-700 hover:bg-indigo-300 focus:outline-none focus:ring focus:ring-inset focus:ring-indigo-500'
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

function EmptyPlaceholder() {
  return (
    <ul className="space-y-2 pb-4 sm:pb-8">
      {['8:00 AM', '9:00 AM', '2:00 PM', '4:00 PM'].map((time) => {
        return (
          <li
            key={time}
            className="rounded-lg bg-indigo-50 px-5 py-3 text-center font-semibold text-indigo-700 [@supports_not_(backdrop-filter:blur(0))]:line-through"
          >
            {time}
          </li>
        )
      })}
    </ul>
  )
}
