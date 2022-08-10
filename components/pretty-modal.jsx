import { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Dialog, Transition } from '@headlessui/react'
import cx from 'classnames'

const twClasses = {
  containerWidth: {
    small: 'max-w-md',
    medium: 'max-w-lg',
    large: 'max-w-xl',
  },
}

export function PrettyModal({ isOpen, onClose, size, title, footer, children }) {
  return (
    <Transition.Root show={isOpen}>
      <Dialog onClose={onClose}>
        <div className="fixed inset-0">
          <Transition.Child
            enter="transition"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-indigo-500/50" />
          </Transition.Child>
          <div className="relative grid h-full w-full place-items-center">
            <Transition.Child
              as={Fragment}
              enter="transition"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={cx('w-full rounded-lg bg-white', twClasses.containerWidth[size])}
              >
                {title && (
                  <header className="border-b px-6 py-4">
                    <Dialog.Title className="text-xl font-semibold">{title}</Dialog.Title>
                  </header>
                )}
                <Dialog.Description className="px-6 py-4">{children}</Dialog.Description>

                {footer && <footer className="border-t px-6 py-4">{footer}</footer>}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

PrettyModal.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

PrettyModal.defaultProps = {
  size: 'medium',
  title: null,
  footer: null,
}
