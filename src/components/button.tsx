import React from 'react'
import cx from 'classnames'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

// ------------------------------
// Prop types
// ------------------------------
type ButtonProps = {
  look?: 'primary' | 'secondary' | 'ghost'
  size?: 'large' | 'small'
  hasIcon?: boolean
  isLoading?: boolean
  block?: boolean
  focusInset?: boolean
}

// ------------------------------
// Component definition
// ------------------------------
export function Button({
  size = 'large',
  look = 'primary',
  hasIcon = false,
  isLoading = false,
  block = false,
  focusInset = false,
  children,
  ...restProps
}: ButtonProps & React.ComponentProps<'button'>) {
  const baseClasses = cx(
    'group font-semibold flex items-stretch focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
    block ? 'w-full' : 'w-auto',
    focusInset ? 'focus:ring-inset' : 'focus:ring-offset-2'
  )

  // We use `let` here because we'll redefine this for buttons with icon
  let alignClasses = 'justify-center'

  const colorClasses: Record<ButtonProps['look'], string> = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-md disabled:shadow-none',
    secondary: 'bg-primary-100 hover:bg-primary-200 text-primary-700',
    ghost: 'bg-transparent text-white disabled:opacity-100',
  }

  const spacingClasses: Record<ButtonProps['size'], string> = {
    small: 'px-3 py-1',
    large: 'px-5 py-3',
  }
  const radiusClasses: Record<ButtonProps['size'], string> = {
    small: 'rounded',
    large: 'rounded-lg',
  }

  // ------------------------------
  // Button without icon (only Primary buttons can have an icon)
  // ------------------------------
  if (look !== 'primary' || hasIcon === false) {
    return (
      <button
        className={cx(
          baseClasses,
          alignClasses,
          spacingClasses[size],
          radiusClasses[size],
          colorClasses[look]
        )}
        {...restProps}
      >
        {children}
      </button>
    )
  }

  // ------------------------------
  // Button with icon
  // ------------------------------
  const iconContainerBaseClasses = cx(
    'grid aspect-square place-items-center rounded-r-lg group-disabled:bg-transparent overflow-hidden',
    size === 'small' ? 'px-1' : 'px-3'
  )

  alignClasses = 'justify-between'

  const iconContainerClasses: Omit<Record<ButtonProps['look'], string>, 'ghost'> = {
    primary: cx(
      'bg-primary-400/50 group-hover:bg-primary-500/50 focus:bg-primary-400/50 group-disabled:pointer-events-none',
      size === 'large' && !isLoading && 'group-hover:bg-stripes'
    ),
    secondary: 'bg-primary-200/50 group-hover:bg-primary-300/50 focus:bg-primary-200/50 ',
  }

  return (
    <button
      className={cx(baseClasses, alignClasses, colorClasses[look], radiusClasses[size])}
      {...restProps}
    >
      <span className={cx(spacingClasses[size])}>{children}</span>
      <span className={cx(iconContainerBaseClasses, iconContainerClasses[look])}>
        {isLoading ? (
          <LoadingSpinner size={size} />
        ) : (
          <ChevronRightIcon className="h-5 w-5 text-inherit" />
        )}
      </span>
    </button>
  )
}

// ------------------------------
// Implementation components
// ------------------------------
function LoadingSpinner({ size }) {
  return (
    <svg
      className={cx('animate-spin text-inherit', size === 'large' ? 'h-5 w-5' : 'm-1 h-4 w-4')}
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
