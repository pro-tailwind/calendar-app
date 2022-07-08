import cx from 'classnames'
import { ChevronRightIcon } from '@heroicons/react/solid'

// This Button component is not yet used in any parts of the app - trying to build the "starting point" app and accidentally started making a button in this repo 🤣

export function Button({
  size = 'large',
  look = 'primary',
  noIcon = false,
  block = false,
  children,
  ...props
}) {
  const baseStyles = `group font-semibold flex items-stretch ${block ? 'w-full' : 'w-auto'} ${
    noIcon ? 'justify-center' : 'justify-between'
  }`

  const colorStyles = {
    primary:
      'bg-indigo-500 hover:bg-indigo-600 text-white disabled:opacity-50 shadow disabled:shadow-none focus:outline-none focus:ring-indigo-500 focus:ring-offset-2',
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
          size === 'large' && look === 'primary' && 'group-hover:bg-stripes',
          size === 'small' ? 'px-1' : 'px-3',
          iconStyles[look]
        )}
      >
        <ChevronRightIcon className="h-5 w-5 text-inherit" />
      </span>
    </button>
  )
}
