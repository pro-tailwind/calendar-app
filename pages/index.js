import { Calendar } from '../components/calendar'
import { TimePicker } from '../components/time-picker'

export default function Homepage() {
  return (
    <div className="grid h-full grid-rows-[auto,1fr] gap-8">
      <div className="mt-10 px-4 sm:px-8">
        <h1 className="text-2xl font-semibold">Select a date and time</h1>
      </div>
      <div className="grid min-h-0 divide-x md:grid-cols-[1fr,360px] xl:grid-cols-[1fr,360px]">
        <div>
          <Calendar />
          <div className="p-4 sm:p-8">
            <p>timezone</p>
          </div>
        </div>
        <div className="min-h-0">
          <TimePicker />
        </div>
      </div>
    </div>
  )
}
