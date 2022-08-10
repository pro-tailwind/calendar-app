import { useState, useEffect } from 'react'
import { useLocale } from 'react-aria'
import { getLocalTimeZone, DateFormatter, now } from '@internationalized/date'
import { GlobeAltIcon } from '@heroicons/react/outline'
import cx from 'classnames'

import { Modal } from '../components/modal'
import { PrettyModal } from '../components/pretty-modal'
import { Combobox } from '../components/combobox'
import { Button } from '../components/button'

export default function Test() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPrettyModalOpen, setIsPrettyModalOpen] = useState(false)
  const [timezones, setTimezones] = useState([])
  const [selectedTimezone, setSelectedTimezone] = useState(getLocalTimeZone())
  const locale = useLocale()

  async function getTimezones() {
    const response = await fetch('http://worldtimeapi.org/api/timezone')
    const json = await response.json()
    setTimezones(json)
  }
  useEffect(() => {
    getTimezones()
  }, [])

  return (
    <div className="p-10">
      <Button look="secondary" onClick={() => setIsModalOpen(true)}>
        <span className="flex items-center gap-2">
          <GlobeAltIcon className=" h-5 w-5 text-indigo-500" />
          <span>{selectedTimezone}</span>
        </span>
      </Button>
      <PrettyModal size="small" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Combobox
          data={timezones}
          look={'secondary'}
          selected={selectedTimezone}
          setSelected={setSelectedTimezone}
          onChange={() => setIsModalOpen(false)}
          optionView={({ active, item }) => (
            <div className="flex gap-2">
              <span className={cx(active ? ' text-white' : 'text-slate-900')}>{item}</span>
              <span className={cx(active ? 'text-indigo-200' : 'font-semibold text-slate-400')}>
                {new DateFormatter(locale, {
                  timeZone: item,
                  timeStyle: 'short',
                  hourCycle: 'h12',
                }).format(now(item).toDate())}
              </span>
            </div>
          )}
        />
      </PrettyModal>
      <p className="mt-6">
        The selected timezone is <strong>{selectedTimezone}</strong>, where it's currently{' '}
        <strong>
          {new DateFormatter(locale, {
            timeZone: selectedTimezone,
            timeStyle: 'short',
            hourCycle: 'h12',
          }).format(now(selectedTimezone).toDate())}
        </strong>
        .
      </p>
      <div className="mt-8">
        <Button onClick={() => setIsPrettyModalOpen(true)}>Open Pretty Modal</Button>
        <PrettyModal
          size="small"
          isOpen={isPrettyModalOpen}
          onClose={() => setIsPrettyModalOpen(false)}
          title="This is the modal title"
          footer={
            <div className="flex justify-end gap-4">
              <Button size="small" look="secondary" onClick={() => setIsPrettyModalOpen(false)}>
                Cancel
              </Button>
              <Button size="small" onClick={() => setIsPrettyModalOpen(false)}>
                Hell yeah, do it!
              </Button>
            </div>
          }
        >
          <p>
            I am super excited to present to you this fancy modal component. It's really great, you
            will enjoy it.
          </p>
        </PrettyModal>
      </div>
    </div>
  )
}
