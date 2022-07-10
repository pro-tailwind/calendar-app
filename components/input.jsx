import cx from 'classnames'

export function Input({ name, id, label, type, required = false, ...props }) {
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
          'mt-1 block w-full rounded-lg px-4 py-2 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 invalid:ring-red-600 placeholder-shown:invalid:ring-slate-300 focus:ring-2 focus:ring-indigo-500'
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

export function Textarea({ name, id, label, rows = 6, required = false, ...props }) {
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
        className="mt-1 block w-full rounded-lg px-4 py-2 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 invalid:ring-red-600 placeholder-shown:invalid:ring-slate-300 focus:ring-2 focus:ring-indigo-500"
        name={name}
        id={id}
        {...props}
      />
    </div>
  )
}
