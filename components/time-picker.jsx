import { useState } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'
import { format, isSameDay, parseISO } from 'date-fns'

import { Button } from '../components/button'

export function TimePicker({ selectedDay, bookingAvailabilities }) {
  const [selectedTime, setSelectedTime] = useState(null)
  const availabilities = bookingAvailabilities.filter((availability) =>
    isSameDay(parseISO(availability.startTime), selectedDay)
  )
  const hasAvailability = availabilities.length > 0
  return (
    <div className="relative grid h-full grid-rows-[auto,1fr] overflow-hidden px-4 sm:px-8 xl:px-10">
      {/* Scroll  mask */}
      <div className="pointer-events-none absolute inset-x-8 bottom-0 z-10 hidden h-40 bg-gradient-to-t from-white md:block xl:inset-x-10"></div>

      <div className="flex h-12 items-center justify-center md:justify-start">
        <h2 className="text-lg font-semibold">{format(selectedDay, 'EEEE, do MMMM yyyy')}</h2>
      </div>
      <div className="-mx-4 overflow-y-auto p-4">
        <div className="relative">
          {/* 
            REVIEW:
            Review blur/desaturate transition overlay below.
            This works quite well, but I'm worried it's a bit hacky.
            The part I'm worried about is the "pointer-events: none" going wrong, 
            since it would prevent users from booking a time!
            It should be ok though, since the z-index should prevent it from being an issue.
            Could transform scale to 0% instead, I guess.
          */}
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
          <p className="pb-4 text-center text-sm text-slate-500 sm:pb-8">
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

/*
  REVIEW:
  Review the below implementation.
  The `Button` component is not really complete yet, 
  but what you should focus on here is the transition from
  showing 1 to showing 2 buttons,
  Specifically, how I handle the `tabIndex`,
  and the `overflow-hidden` parent container to hide the confirm button.
*/
function TimeSlot({ availability, selectedTime, setSelectedTime }) {
  const router = useRouter()
  const isSelected = selectedTime === availability.startTime
  return (
    <li
      className={cx(
        'flex gap-1 overflow-hidden rounded-lg',
        isSelected && 'bg-indigo-600 bg-stripes'
      )}
    >
      <div
        className={cx(
          'shrink-0 transition-all',
          isSelected ? 'basis-1/2 text-white ease-out' : 'basis-full'
        )}
      >
        <Button
          block
          noIcon
          focusInset
          look={isSelected ? 'ghost' : 'secondary'}
          disabled={isSelected}
          onClick={() => setSelectedTime(availability.startTime)}
        >
          {format(parseISO(availability.startTime), 'h:mm a')}
        </Button>
      </div>
      <div className="m-2 basis-1/2">
        <Button
          size="small"
          look="secondary"
          block
          tabIndex={isSelected ? 0 : -1}
          onClick={() => router.push(`/booking-details?time=${availability.startTime}`)}
        >
          Confirm
        </Button>
      </div>
    </li>
  )
}
