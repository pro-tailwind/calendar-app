import cx from 'classnames'
import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

// ------------------------------
// Input
// ------------------------------
type InputProps = {
  name: string
  id: string
  label: string
  type?: HTMLInputTypeAttribute
  required?: boolean
}

// TODO: Work something out for validation/state of inputs
export function Input({
  name,
  id,
  label,
  type = 'text',
  required = false,
  ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label
        htmlFor={id}
        className={cx(
          'relative',
          required &&
            'after:-right- after:absolute after:-top-1 after:h-2 after:w-2 after:content-["*"]'
        )}
      >
        {label}
      </label>
      <input
        className={cx(
          'mt-1 block w-full rounded-lg px-4 py-2 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500'
        )}
        type={type}
        name={name}
        id={id}
        required
        {...props}
      />
    </div>
  )
}

// ------------------------------
// Textarea
// ------------------------------
type TextareaProps = {
  name: string
  id: string
  label: string
  required?: boolean
  rows?: number
}

export function Textarea({
  name,
  id,
  label,
  rows = 6,
  required = false,
  ...props
}: TextareaProps & InputHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <label
        htmlFor={id}
        className={cx(
          'relative',
          required &&
            'after:-right- after:absolute after:-top-1 after:h-2 after:w-2 after:content-["*"]'
        )}
      >
        {label}
      </label>
      <textarea
        rows={rows}
        className="mt-1 block w-full rounded-lg px-4 py-2 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 invalid:ring-red-600 placeholder-shown:invalid:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
        name={name}
        id={id}
        {...props}
      />
    </div>
  )
}
