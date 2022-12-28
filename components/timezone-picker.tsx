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

  // ------------------------------
  // Timezone management
  // ------------------------------
  const { locale } = useLocale()
  const [query, setQuery] = useState('')
  const [timezones, setTimezones] = useState([])
  const [selectedTimezone, setSelectedTimezone] = useState(getLocalTimeZone())
  const filteredTimezones =
    query === ''
      ? timezones
      : timezones.filter((zone) =>
          zone.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  // ------------------------------
  // Get a list of world timezones (clientside fetch)
  // ------------------------------
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

  // ------------------------------
  // To avoid server/client hydration mismatch, we need to re-establish
  // the times on the client, inside a useEffect.
  // ------------------------------
  const [formattedLocalTime, setFormattedLocalTime] = useState('loading...')
  useEffect(() => {
    const time = new DateFormatter(locale, {
      hourCycle: 'h11',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: selectedTimezone,
    }).format(now(selectedTimezone).toDate())
    setFormattedLocalTime(time)
  }, [locale, selectedTimezone])

  // ------------------------------
  // Component render
  // ------------------------------

  // TODO: Implement timezone picker
  return <p>Timezonepicker</p>
}
