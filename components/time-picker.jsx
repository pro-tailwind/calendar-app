import { useState } from 'react'
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

      <div className="flex h-12 items-center">
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
                : 'bg-white/75 backdrop-blur-sm backdrop-grayscale'
            )}
          ></div>
        </div>
        {availabilities.length === 0 && (
          <p className="pb-4 text-sm text-gray-600 sm:pb-8">
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
    <li className="flex gap-1 overflow-hidden rounded-lg bg-indigo-600">
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
      <button
        tabIndex={isSelected ? 0 : -1}
        className="m-2 basis-1/2 rounded-md bg-indigo-100 px-3 py-1 font-medium text-indigo-800 hover:bg-white"
      >
        Confirm
      </button>
    </li>
  )
}

function EmptyPlaceholder() {
  return (
    <ul className="space-y-2 pb-4 sm:pb-8">
      {['unavailable', 'unavailable', 'unavailable', 'unavailable'].map((time) => {
        return (
          <li
            key={time}
            className="rounded-lg bg-indigo-50 px-5 py-3 text-center font-semibold text-indigo-700"
          >
            {time}
          </li>
        )
      })}
    </ul>
  )
}
