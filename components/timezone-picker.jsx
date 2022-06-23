import { useState, useEffect, Fragment } from 'react'
import cx from 'classnames'
import { formatInTimeZone } from 'date-fns-tz'

import { Dialog, Combobox, Transition } from '@headlessui/react'
import { SearchIcon, GlobeIcon, ChevronDownIcon } from '@heroicons/react/solid'

import { timezones } from '../data'

export function TimezonePicker({ activeTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const filteredTimezones =
    query === ''
      ? timezones
      : timezones.filter((time) =>
          time.text
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  const [selectedTimezone, setSelectedTimezone] = useState(null)
  useEffect(() => {
    const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const currentTimezone = timezones.find((time) => time.utc.includes(localTimezone))
    setSelectedTimezone(currentTimezone)
  }, [])

  if (!selectedTimezone) return 'loading...'
  return (
    <>
      <div className="">
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full border-2 border-indigo-50 px-4 py-2 text-slate-900 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
        >
          <span className="flex items-center justify-between gap-2">
            <span className="flex min-w-0 items-center gap-2">
              <GlobeIcon className="h-5 w-5 shrink-0 text-slate-500" />
              <span className="min-w-0 truncate text-sm">{selectedTimezone.value}</span>
              <span className=" shrink-0 text-sm">
                ({formatInTimeZone(new Date(), selectedTimezone.utc[0], 'h:mm a')})
              </span>
            </span>
            <ChevronDownIcon className="h-5 w-5 text-slate-500" />
          </span>
        </button>
      </div>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          data-theme={activeTheme}
          onClose={setIsOpen}
          className="fixed inset-0 z-10 overflow-y-auto px-4 pt-[35vh]"
        >
          <Transition.Child
            enter="transition ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-indigo-900/80" />
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
                <SearchIcon className="h-5 w-5 text-slate-600" />
                <Combobox.Input
                  placeholder="Search..."
                  className="w-full border-0 px-4 py-3 focus:outline-none"
                  // displayValue={(timezone) => `${timezone.text}`}
                  onChange={(e) => setQuery(e.target.value)}
                ></Combobox.Input>
              </div>
              <Combobox.Options static className="max-h-96 overflow-y-auto border-t py-4 text-sm">
                {filteredTimezones.map((item) => (
                  <Combobox.Option key={item.value} value={item}>
                    {({ active }) => (
                      <div className={cx('px-8 py-2', active ? 'bg-indigo-500' : 'bg-white')}>
                        <div className="flex gap-2">
                          <span
                            className={cx('font-medium', active ? ' text-white' : 'text-slate-900')}
                          >
                            {item.text}
                          </span>
                          <span className={cx(active ? 'text-indigo-200' : 'text-slate-400')}>
                            {formatInTimeZone(new Date(), item.utc[0], 'h:mm a')}
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
