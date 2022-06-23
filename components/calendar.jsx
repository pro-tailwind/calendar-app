import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export function Calendar() {
  return (
    <div className="px-6 sm:px-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">July 2022</h2>
        <div className="flex gap-2">
          <button className="grid aspect-square w-12 max-w-full place-items-center rounded-full border border-gray-300 text-gray-400 hover:text-indigo-600">
            <ChevronLeftIcon className="-ml-0.5 h-6 w-6" />
          </button>
          <button className="grid aspect-square w-12 max-w-full place-items-center rounded-full border border-gray-300 text-gray-400 hover:text-indigo-600">
            <ChevronRightIcon className="ml-0.5 h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="-mx-4">
        <table className="mt-4 w-full table-fixed border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="pb-4">
                <abbr title="Monday">Mon</abbr>
              </th>
              <th className="pb-4">
                <abbr title="Tuesday">Tue</abbr>
              </th>
              <th className="pb-4">
                <abbr title="Wednesday">Wed</abbr>
              </th>
              <th className="pb-4">
                <abbr title="Thursday">Thu</abbr>
              </th>
              <th className="pb-4">
                <abbr title="Friday">Fri</abbr>
              </th>
              <th className="pb-4">
                <abbr title="Saturday">Sat</abbr>
              </th>
              <th className="pb-4">
                <abbr title="Sunday">Sun</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  27
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  28
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  29
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  30
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  31
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  1
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  2
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  27
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  28
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  29
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  30
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  31
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  1
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  2
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  27
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  28
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  29
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  30
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  31
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  1
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  2
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  27
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  28
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  29
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  30
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  31
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  1
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  2
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  27
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  28
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  29
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  30
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  31
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  1
                </button>
              </td>
              <td className="text-center">
                <button className="aspect-square w-12 max-w-full rounded-full bg-gray-100 hover:bg-gray-200">
                  2
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
