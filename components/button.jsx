import cx from 'classnames'
import { ChevronRightIcon } from '@heroicons/react/solid'

export function Button({
  size = 'large',
  look = 'primary',
  noIcon = false,
  block = false,
  focusInset = false,
  isLoading = false,
  children,
  ...props
}) {
  const baseClasses = cx(
    'group font-semibold flex items-stretch focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
    block ? 'w-full' : 'w-auto',
    noIcon ? 'justify-center' : 'justify-between',
    focusInset ? 'focus:ring-inset' : 'focus:ring-offset-2'
  )

  const colorClasses = {
    primary: 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-md disabled:shadow-none',
    secondary: 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700',
    ghost: 'bg-transparent text-white disabled:opacity-100',
  }
  const spacingClasses = {
    small: 'px-3 py-1',
    large: 'px-5 py-3',
  }
  const radiusClasses = {
    small: 'rounded',
    large: 'rounded-lg',
  }

  const iconContainerClasses = {
    base: cx(
      'grid aspect-square place-items-center rounded-r group-disabled:bg-transparent overflow-hidden',
      size === 'small' ? 'px-1' : 'px-3'
    ),
    primary: cx(
      'bg-indigo-400/50 group-hover:bg-indigo-500/50 focus:bg-indigo-400/50 group-disabled:pointer-events-none',
      size === 'large' && !isLoading && 'group-hover:bg-stripes'
    ),
    secondary: 'bg-indigo-200/50 group-hover:bg-indigo-300/50 focus:bg-indigo-200/50 ',
  }

  if (noIcon === true) {
    return (
      <button
        className={cx(baseClasses, spacingClasses[size], radiusClasses[size], colorClasses[look])}
        {...props}
      >
        {children}
      </button>
    )
  }

  // Button with Icon
  return (
    <button className={cx(baseClasses, colorClasses[look], radiusClasses[size])} {...props}>
      <span className={cx(spacingClasses[size])}>{children}</span>
      <span className={cx(iconContainerClasses.base, iconContainerClasses[look])}>
        {isLoading ? <LoadingSpinner /> : <ChevronRightIcon className="h-5 w-5 text-inherit" />}
      </span>
    </button>
  )
}

// ------------------------------
// Implementation components
// ------------------------------

function LoadingSpinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin text-inherit"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}
