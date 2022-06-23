import { format } from 'date-fns'

export function TimePicker({ selectedDay }) {
  return (
    <div className="relative grid h-full grid-rows-[auto,1fr] overflow-hidden px-4 sm:px-8">
      {/* Scroll  mask */}
      <div className="absolute inset-x-8 bottom-0 hidden h-40 bg-gradient-to-t from-white md:block"></div>

      <div className="flex h-12 items-center">
        <h2 className="text-lg font-semibold">{format(selectedDay, 'EEEE, do MMMM yyyy')}</h2>
      </div>
      <div className="-mx-4 mt-4 overflow-y-auto px-4">
        <ul className="space-y-2 pb-4 sm:pb-8 md:pb-40">
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
          <li className="h-12 rounded-lg bg-indigo-100"></li>
        </ul>
      </div>
    </div>
  )
}

function TimeSlot() {
  return <button>8:00 AM</button>
}
