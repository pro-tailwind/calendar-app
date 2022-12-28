import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDateFormatter } from 'react-aria'

export default function BookingDetailsPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const dateFormatter = useDateFormatter({ dateStyle: 'full' })
  const timeFormatter = useDateFormatter({ timeStyle: 'short' })

  const { time } = router.query
  // TypeScript hints that time is `string | string[]` but we want on only one string...
  const timeString = Array.isArray(time) ? time[0] : time

  const formattedTime = time
    ? `${dateFormatter.format(new Date(timeString))} at ${timeFormatter.format(
        new Date(timeString)
      )}`
    : ''

  function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    // Pretend to do some async tasks for 2.5 seconds :)
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }

  /*
    TODOD:
    Implement the Booking details screen
  */
  return (
    <div className="p-10">
      <p>Booking details form</p>
    </div>
  )
}
