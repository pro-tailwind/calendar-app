import React from "react"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"
import { ChevronRightIcon } from "@heroicons/react/20/solid"

// ------------------------------
// Prop types
// ------------------------------
type ButtonProps = {
  look?: "primary" | "secondary" | "ghost"
  size?: "large" | "small"
  className?: string
}

const baseClasses =
  "group font-semibold flex items-stretch justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none"

const lookClasses: Record<NonNullable<ButtonProps["look"]>, string> = {
  primary:
    "bg-primary-500 hover:bg-primary-600 text-white shadow-md disabled:shadow-none",
  secondary: "bg-primary-100 hover:bg-primary-200 text-primary-700",
  ghost: "bg-transparent text-white disabled:opacity-100",
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  small: "px-3 py-1 rounded",
  large: "px-5 py-3 rounded-lg",
}

// const buttonStyles = tv({
//   base: "group font-semibold flex items-stretch focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
//   variants: {
//     size: {
//       small: "px-3 py-1 rounded",
//       large: "px-5 py-3 rounded-lg",
//     },
//     look: {
//       primary:
//         "bg-primary-500 hover:bg-primary-600 text-white shadow-md disabled:shadow-none",
//       secondary: "bg-primary-100 hover:bg-primary-200 text-primary-700",
//       ghost: "bg-transparent text-white disabled:opacity-100",
//     },
//   },
//   slots: {
//     iconContainer:
//       "grid aspect-square place-items-center rounded-r-lg group-disabled:bg-transparent overflow-hidden",
//   },
// })

// ------------------------------
// Component definition
// ------------------------------
export function Button({
  size = "large",
  look = "primary",
  className,
  children,
  ...restProps
}: ButtonProps & React.ComponentProps<"button">) {
  return (
    <button
      className={twMerge(baseClasses, size[size], lookClasses[look], className)}
      {...restProps}
    >
      {children}
    </button>
  )
}

// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------

// ------------------------------
// Prop types
// ------------------------------
type IconButtonProps = {
  size?: "large" | "small"
  status: "IDLE" | "LOADING" | "SUCCESS" | "ERROR"
  className?: string
  children: React.ReactNode
}

export function IconButton({
  size = "large",
  status = "IDLE",
  className = "",
  children,
  ...restProps
}) {
  // ------------------------------
  // Button with icon
  // ------------------------------

  const baseClasses =
    "group font-semibold flex items-stretch justify-beetween focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none rounded-lg"

  const iconContainerBaseClasses = twMerge(
    "grid aspect-square place-items-center rounded-r-lg group-disabled:bg-transparent overflow-hidden",
    size === "small" ? "px-1" : "px-3",
  )

  const iconContainerLookClasses = twMerge(
    "bg-primary-400/50 group-hover:bg-primary-500/50 focus:bg-primary-400/50 group-disabled:pointer-events-none",
    size === "large" && status === "LOADING" && "group-hover:bg-stripes",
  )

  return (
    <button
      className={twMerge(baseClasses, lookClasses["primary"])}
      {...restProps}
    >
      <span className={twMerge(sizeClasses[size])}>{children}</span>
      <span
        className={twMerge(iconContainerBaseClasses, iconContainerLookClasses)}
      >
        {status === "loading" ? (
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
      className={twMerge(
        "animate-spin text-inherit",
        size === "large" ? "h-5 w-5" : "m-1 h-4 w-4",
      )}
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
