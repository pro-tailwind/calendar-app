import React from "react"
import { twMerge } from "tailwind-merge"

import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline"

// ------------------------------
// Prop types
// ------------------------------
export type ButtonProps = {
  impact?: "bold" | "light" | "none"
  size?: "small" | "medium" | "large"
  shape?: "square" | "rounded" | "pill"
  tone?: "default" | "danger" | "success"
  status?: "idle" | "loading" | "success" | "error"
}

// ------------------------------
// Tailwind Classes lookup directory
// ------------------------------
const baseClasses =
  "font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-80 transition"

const impactClasses: Record<
  NonNullable<ButtonProps["tone"]>,
  Record<NonNullable<ButtonProps["impact"]>, string>
> = {
  default: {
    bold: "bg-primary-500 text-white shadow-md hover:bg-primary-600 focus-visible:ring-primary-500",
    light:
      "bg-primary-100 text-primary-700 hover:bg-primary-200 focus-visible:ring-primary-500",
    none: "bg-transparent text-primary-700 hover:bg-primary-50 focus-visible:ring-primary-500",
  },
  danger: {
    bold: "bg-red-500 text-white shadow-md hover:bg-red-600 focus-visible:ring-red-500",
    light:
      "bg-red-100 text-red-700 hover:bg-red-200 focus-visible:ring-red-500",
    none: "bg-transparent text-red-700 hover:bg-red-50 focus-visible:ring-red-500",
  },
  success: {
    bold: "bg-emerald-500 text-white shadow-md hover:bg-emerald-600 focus-visible:ring-emerald-500",
    light:
      "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 focus-visible:ring-emerald-500",
    none: "bg-transparent text-emerald-700 hover:bg-emerald-50 focus-visible:ring-emerald-500",
  },
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-5 py-2.5 text-base",
  large: "px-7 py-3 text-lg",
}

const shapeClasses: Record<NonNullable<ButtonProps["shape"]>, string> = {
  square: "rounded-none",
  rounded: "rounded",
  pill: "rounded-full",
}

function getToneFromStatus(
  status: ButtonProps["status"],
): NonNullable<ButtonProps["tone"]> {
  switch (status) {
    case "success":
      return "success"
    case "error":
      return "danger"
    default:
      return "default"
  }
}

// ------------------------------
// Component definition (with default variants)
// ------------------------------
export const Button = ({
  size = "medium",
  impact = "bold",
  shape = "rounded",
  tone = "default",
  status = "idle",
  className,
  children,
  ...restProps
}: ButtonProps & React.ComponentProps<"button">) => {
  return (
    <button
      {...restProps}
      className={twMerge(
        baseClasses,
        impactClasses[getToneFromStatus(status)][impact],
        sizeClasses[size],
        shapeClasses[shape],
        className,
      )}
    >
      {status === "idle" ? (
        children
      ) : (
        <div className="flex items-center justify-center gap-3">
          <span>{children}</span>
          <StatusIcon status={status} />
        </div>
      )}
    </button>
  )
}

function StatusIcon({ status }: { status: ButtonProps["status"] }) {
  switch (status) {
    case "loading":
      return <LoadingIcon />
    case "success":
      return <CheckCircleIcon className="h-6 w-6 text-inherit" />
    case "error":
      return <ExclamationCircleIcon className="h-6 w-6 text-inherit" />
    default:
      return null
  }
}

function LoadingIcon() {
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
