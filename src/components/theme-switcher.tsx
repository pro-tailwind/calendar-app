import { Fragment, useEffect } from 'react'
import cx from 'classnames'

import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon, SwatchIcon } from '@heroicons/react/20/solid'

export function ThemeSwitcher({ activeTheme, setActiveTheme }) {
  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', activeTheme)
  }, [activeTheme])

  const themesList = ['ocean', 'rainforest', 'candy']

  return (
    <div className="fixed top-2 right-2 z-20 text-right">
      <Listbox value={activeTheme} onChange={setActiveTheme}>
        <div className="relative mt-1">
          <Listbox.Button className="inline-flex w-full justify-center rounded-md bg-primary-600 px-4 py-2 hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
            <SwatchIcon className="h-5 w-5 text-primary-100" />
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-primary-100 hover:text-primary-50"
              aria-hidden="true"
            />
          </Listbox.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Listbox.Options className="absolute right-0 mt-2 w-40 origin-top-right cursor-pointer  overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            {themesList.map((theme) => (
              <Listbox.Option key={theme} value={theme} className="relative">
                {({ active, selected }) => (
                  <span
                    data-theme={theme}
                    className={cx(
                      'group flex w-full items-center py-2 pl-10 pr-4 text-sm font-semibold capitalize',
                      (active || selected) && 'bg-primary-100 text-primary-600',
                      !active && !selected && 'text-slate-500'
                    )}
                  >
                    {theme}
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}
