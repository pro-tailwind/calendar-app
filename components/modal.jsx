import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

function ModalRoot({ isOpen, onClose, title, footer, children, ...props }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto pt-[20vh]">
        <Transition.Child
          enter="transition ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-indigo-900/50" />
        </Transition.Child>
        <Transition.Child
          enter="transition ease-out duration-300"
          enterFrom="translate-y-4 scale-95 opacity-0"
          enterTo="translate-y-0 scale-100 opacity-100"
          leave="transition ease-in"
          leaveFrom="translate-y-0 scale-100 opacity-100"
          leaveTo="translate-y-4 scale-95 opacity-0"
        >
          <Dialog.Panel className="relative mx-auto max-w-xl rounded-lg bg-white shadow-md">
            {title && <Dialog.Title className="border-b p-6 text-gray-900">{title}</Dialog.Title>}
            <Header />

            {children}
            {footer && (
              <footer className="border-t p-6 text-gray-900">
                <p>I am the footer</p>
              </footer>
            )}
            <Footer />
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

ModalRoot.defaultProps = {
  isOpen: false,
  onClose: () => {
    onchange(false)
  },
  title: '',
}

function Header(children) {
  return (
    <header className="border-t p-6 text-gray-900">
      <p>I am the header</p>
    </header>
  )
}
function Footer(children) {
  return (
    <footer className="border-t p-6 text-gray-900">
      <p>I am the footer</p>
    </footer>
  )
}

export const Modal = Object.assign(ModalRoot, { Header, Footer })
