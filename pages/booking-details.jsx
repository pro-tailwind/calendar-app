import { useState } from 'react'
import { useRouter } from 'next/router'

import { Button } from '../components/button'
import { Input, Textarea } from '../components/input'

import { parseISO, format } from 'date-fns'

export default function BookingDetailsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { time } = router.query

  const formattedTime = time
    ? `${format(parseISO(time), 'eeee, do MMMM yyyy')} at ${format(parseISO(time), 'h:mm a')}`
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
          <strong className="text-indigo-600">{formattedTime}</strong>.
        </p>
        <p>Please fill in the form below to confirm.</p>
      </div>

      <div className="mt-20">
        {/* TODO: Make better styles for form fields (focus state, invalid, etc) */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <Input name="name" id="name" label="Name" required />
            <Input name="email" id="email" label="Email" type="email" required />
          </div>
          <div className="mt-8">
            <Textarea
              name="notes"
              label="Notes & Questions"
              id="notes"
              // placeholder="Any comments or suggestions to help prepare our discussion? Please share!"
            />
          </div>
          {/* TODO: Loading spinner emulating an API call */}
          <div className="mt-8">
            <Button type="input" isLoading={isLoading}>
              Confirm booking
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
