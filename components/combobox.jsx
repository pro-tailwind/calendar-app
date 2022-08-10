import { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Combobox as ComboboxHeadlessUI, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const lookStyles = {
  primary: {
    input:
      'bg-white rounded-lg border-2 border-slate-400 py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 hover:border-indigo-600 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200',
    options:
      'absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-2 ring-black/5 focus:outline-none sm:text-sm',
    option: 'bg-indigo-600 text-white',
    selectedItem: {
      active: 'text-white',
      inActive: 'text-indigo-500',
    },
  },
  secondary: {
    input:
      'w-full overflow-hidden border-2 border-dashed border-black py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 hover:border-orange-600 focus:border-orange-600 focus:outline-none focus:ring focus:ring-orange-200',
    options:
      'absolute z-10 mt-2 max-h-60 w-full overflow-auto bg-white py-1 text-base border-2 border-dashed border-orange-300 focus:outline-none sm:text-sm',
    option: 'bg-orange-600 text-white',
    selectedItem: {
      active: 'text-white',
      inActive: 'text-orange-500',
    },
  },
}

export function Combobox({
  data,
  selected,
  setSelected,
  displayValue = (item) => item,
  optionView: OptionView = ({ item }) => item,
  look,
  placeholder,
  onChange,
  ...props
}) {
  const [query, setQuery] = useState('')

  function getDisplayValue(item) {
    if (typeof displayValue === 'string') {
      if (!item[displayValue]) {
        throw new Error(
          `The "${displayValue}" key does not exist on the data objects passed to the Combobox component. Make sure to pass a valid key to the displayValue prop.`
        )
      }
      return item[displayValue]
    }
    return displayValue(item)
  }

  const filteredData =
    query === ''
      ? data
      : data.filter((item) =>
          getDisplayValue(item)
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="w-full">
      <ComboboxHeadlessUI
        value={selected}
        // Hmmmmm this below is probably a terrible way to "pass through" extra `onChange` functionality when the selected value changes.
        onChange={(value) => {
          if (onChange) {
            onChange(value)
          }
          setSelected(value)
        }}
      >
        <div className="relative mt-1">
          <ComboboxHeadlessUI.Input
            className={`w-full overflow-hidden ${lookStyles[look].input}`}
            displayValue={(item) => item && getDisplayValue(item)}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
          />
          <ComboboxHeadlessUI.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </ComboboxHeadlessUI.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <ComboboxHeadlessUI.Options className={lookStyles[look].options}>
              {filteredData.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredData.map((item) => (
                  <ComboboxHeadlessUI.Option
                    key={item.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? lookStyles[look].option : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <OptionView selected={selected} active={active} item={item} />
                    )}
                  </ComboboxHeadlessUI.Option>
                ))
              )}
            </ComboboxHeadlessUI.Options>
          </Transition>
        </div>
      </ComboboxHeadlessUI>
    </div>
  )
}

Combobox.propTypes = {
  data: PropTypes.array,
  look: PropTypes.oneOf(['primary', 'secondary']),
  selected: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  setSelected: PropTypes.func,
  displayValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  placeholder: PropTypes.string,
}

Combobox.defaultProps = {
  placeholder: 'Start typing...',
  look: 'primary',
}
