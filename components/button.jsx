import cx from 'classnames'
import { ChevronRightIcon } from '@heroicons/react/solid'

// This Button component is not yet used in any parts of the app - trying to build the "starting point" app and accidentally started making a button in this repo 🤣

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
  const baseStyles = `group font-semibold flex items-stretch focus:outline-none focus:ring-2   ${
    block ? 'w-full' : 'w-auto'
  } ${noIcon ? 'justify-center' : 'justify-between'} ${
    focusInset ? 'focus:ring-inset' : 'focus:ring-offset-2'
  }`

  const colorStyles = {
    primary:
      'bg-indigo-500 hover:bg-indigo-600 text-white disabled:opacity-50 shadow disabled:shadow-none focus:ring-indigo-500',
    secondary: 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700 disabled:opacity-50',
    ghost: 'bg-transparent text-white',
  }
  const spacingStyles = {
    small: 'px-3 py-1',
    large: 'px-5 py-3',
  }
  const radiusStyles = {
    small: 'rounded',
    large: 'rounded-md',
  }

  const iconStyles = {
    base: 'group-disabled:bg-transparent group-hover:bg-stripes overflow-hidden',
    primary:
      'bg-indigo-400/50 group-hover:bg-indigo-500/50 focus:bg-indigo-400/50 group-disabled:pointer-events-none',
    secondary: 'bg-indigo-200/50 group-hover:bg-indigo-300/50 focus:bg-indigo-200/50 ',
  }

  if (noIcon === true) {
    return (
      <button
        className={cx(baseStyles, spacingStyles[size], radiusStyles[size], colorStyles[look])}
        {...props}
      >
        {children}
      </button>
    )
  }

  return (
    <button className={cx(baseStyles, colorStyles[look], radiusStyles[size])} {...props}>
      <span className={cx(spacingStyles[size], 'shrink-0')}>{children}</span>
      <span
        className={cx(
          `grid aspect-square place-items-center rounded-r`,
          size === 'large' && look === 'primary' && !isLoading && 'group-hover:bg-stripes',
          size === 'small' ? 'px-1' : 'px-3',
          iconStyles[look]
        )}
      >
        {isLoading ? <LoadingSpinner /> : <ChevronRightIcon className="h-5 w-5 text-inherit" />}
      </span>
    </button>
  )
}

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
