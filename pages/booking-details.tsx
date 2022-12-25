import { useState } from 'react'
import { useRouter } from 'next/router'

import { Button } from '../components/button'
import { Input, Textarea } from '../components/input'

import { useDateFormatter } from 'react-aria'

export default function BookingDetailsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

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
    setTimeout(() => {
      router.push(`/confirmation?time=${time}`)
      setIsLoading(false)
    }, 2500)
  }

  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-bold md:text-left">Let's confirm your booking!</h1>
      <div className="mt-8 space-y-2">
        <p>
          You're about to book a one-hour meeting on{' '}
          <strong className="text-primary-600">{formattedTime}</strong>.
        </p>
        <p>Please fill in the form below to confirm.</p>
      </div>

      <div className="mt-20">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <Input name="name" id="name" label="Name" required />
            <Input name="email" id="email" label="Email" type="email" required />
          </div>
          <div className="mt-8">
            <Textarea name="notes" label="Notes & Questions" id="notes" />
          </div>
          <div className="mt-8">
            <Button type="submit" isLoading={isLoading} hasIcon>
              Confirm booking
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
