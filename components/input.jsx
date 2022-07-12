/*
  NOTE:
  The starter-app may not include these components,
  since one of the workshops is about extracting re-usable components
  and create such input fields.
  This was me experimenting with some styling approaches, but my guess is
  the actual starter app will not use this, and rather have hardcoded form fields
  throughout the app.
  This will come critical though in the "Extracting Reusable UI Components" workshop,
  which I'll focus on at a later stage (and for which I'll need plenty of Thinkmill insights!)
*/

import cx from 'classnames'

// TODO: Work something out for validation/state of inputs
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
          'mt-1 block w-full rounded-lg px-4 py-2 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500'
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
