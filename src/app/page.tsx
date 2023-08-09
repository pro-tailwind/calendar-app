import { Calendar } from "../components/calendar"
import { TimePicker } from "../components/time-picker"
import { TimezonePicker } from "../components/timezone-picker"

export default function Homepage() {
  return (
    <div className="mx-auto grid h-full max-w-lg grid-rows-[auto,1fr] gap-8 md:max-w-none">
      <div className="mt-10 px-4 sm:px-8 xl:px-10">
        <h1 className="text-center text-2xl font-bold md:text-left">
          Select a Date & Time
        </h1>
      </div>
      <div className="grid min-h-0 md:grid-cols-[1fr,360px] md:divide-x lg:grid-cols-[1fr,40%] xl:grid-cols-[1fr,360px]">
        {/* 
          ------------------------------
          Calendar section 
          ------------------------------
        */}
        <div>
          <div className="px-6 sm:px-8 xl:px-10">
            <Calendar aria-label="Availability calendar" />
          </div>
          <div className="p-4 sm:p-8 xl:p-10">
            <TimezonePicker />
          </div>
        </div>

        {/* 
          ------------------------------
          Timepicker
          ------------------------------
        */}
        <div className="min-h-0">
          <TimePicker />
        </div>
      </div>
    </div>
  )
}
