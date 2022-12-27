import { useState, useEffect, Fragment } from 'react'
import { useLocale } from 'react-aria'
import cx from 'classnames'

import { now, getLocalTimeZone, DateFormatter } from '@internationalized/date'

import { Dialog, Combobox, Transition } from '@headlessui/react'
import {
  MagnifyingGlassIcon,
  GlobeAsiaAustraliaIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function TimezonePicker() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [timezones, setTimezones] = useState([])
  const { locale } = useLocale()
  const [selectedTimezone, setSelectedTimezone] = useState(getLocalTimeZone())

  const filteredTimezones =
    query === ''
      ? timezones
      : timezones.filter((zone) =>
          zone.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  // Get a list of world timezones
  async function getTimezones() {
    try {
      const response = await fetch('https://worldtimeapi.org/api/timezone')
      const json = await response.json()
      setTimezones(json)
    } catch (error) {
      console.error('Unable to fetch timezones! ', error)
    }
  }
  useEffect(() => {
    getTimezones()
  }, [])

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    <>
      <div className="text-center md:text-left">
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full border-2 border-primary-50 px-4 py-2 text-slate-900 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
        >
          <span className="flex items-center justify-between gap-2">
            <span className="flex min-w-0 items-center gap-2">
              <GlobeAsiaAustraliaIcon className="h-5 w-5 shrink-0 text-slate-500" />
              <span className="min-w-0 truncate text-sm">{selectedTimezone}</span>
              <span className=" shrink-0 text-sm">
                (
                {new DateFormatter(locale, {
                  hourCycle: 'h11',
                  hour: 'numeric',
                  minute: 'numeric',
                  timeZone: selectedTimezone,
                }).format(now(selectedTimezone).toDate())}
                )
              </span>
            </span>
            <ChevronDownIcon className="h-5 w-5 text-slate-500" />
          </span>
        </button>
      </div>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog onClose={setIsOpen} className="fixed inset-0 z-10 overflow-y-auto px-4 pt-[20vh]">
          <Transition.Child
            enter="transition ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-primary-900/80" />
          </Transition.Child>
          <Transition.Child
            enter="transition ease-out duration-300"
            enterFrom="translate-y-4 scale-95 opacity-0"
            enterTo="translate-y-0 scale-100 opacity-100"
            leave="transition ease-in"
            leaveFrom="translate-y-0 scale-100 opacity-100"
            leaveTo="translate-y-4 scale-95 opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox
              as="div"
              value={selectedTimezone}
              onChange={(value) => {
                setSelectedTimezone(value)
                setIsOpen(false)
              }}
              className="relative mx-auto max-w-xl overflow-hidden rounded-lg bg-white shadow-2xl"
            >
              <div className="flex items-center px-4">
                <MagnifyingGlassIcon className="h-5 w-5 text-slate-600" />
                <Combobox.Input
                  placeholder="Search..."
                  className="w-full border-0 px-4 py-3 focus:outline-none"
                  // displayValue={(timezone) => `${timezone.text}`}
                  onChange={(e) => setQuery(e.target.value)}
                ></Combobox.Input>
              </div>
              <Combobox.Options static className="max-h-96 overflow-y-auto border-t py-4 text-sm">
                {filteredTimezones.map((item) => (
                  <Combobox.Option key={item} value={item}>
                    {({ active }) => (
                      <div className={cx('px-8 py-2', active ? 'bg-primary-500' : 'bg-white')}>
                        <div className="flex gap-2">
                          <span className={cx(active ? ' text-white' : 'text-slate-900')}>
                            {item}
                          </span>
                          <span
                            className={cx(
                              active ? 'text-primary-200' : 'font-semibold text-slate-400'
                            )}
                          >
                            {new DateFormatter(locale, {
                              timeZone: item,
                              hourCycle: 'h11',
                              hour: 'numeric',
                              minute: 'numeric',
                            }).format(now(item).toDate())}
                          </span>
                        </div>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
                {query && filteredTimezones.length === 0 && (
                  <p className="px-4 text-slate-900">No results found.</p>
                )}
              </Combobox.Options>
            </Combobox>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  )
}
