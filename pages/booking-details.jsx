import { useRouter } from 'next/router'

import { parseISO, format } from 'date-fns'

export default function BookingDetailsPage() {
  const router = useRouter()
  const { time } = router.query
  console.log({ time })
  const formattedTime = time
    ? `${format(parseISO(time), 'eeee, do MMMM yyyy')} at ${format(parseISO(time), 'h:mm a')}`
    : ''

  function handleSubmit(event) {
    event.preventDefault()

    // TODO: Do the form fields thing...
    // Navigate to confirmation page
    router.push(`/confirmation?time=${time}`)
  }

  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-semibold md:text-left">
        Let's confirm your booking!
      </h1>
      <div className="mt-8 space-y-2">
        <p>
          You're about to book a one-hour meeting on{' '}
          <strong className="text-indigo-600">{formattedTime}</strong>.
        </p>
        <p>Please fill in the form below to confirm.</p>
      </div>

      <div className="mt-20">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="name">Name</label>
              <input
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm"
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className="mt-8">
            <label htmlFor="name">Notes & Questions</label>
            <textarea
              rows={6}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <input
            className="mt-6 rounded-md bg-indigo-600 px-5 py-3 text-white"
            type="submit"
            value="Confirm booking"
          />
        </form>
      </div>
    </div>
  )
}
