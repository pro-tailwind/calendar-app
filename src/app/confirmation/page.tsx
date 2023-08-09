'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useDateFormatter } from 'react-aria'

import { Signature } from '@/components/signature'

export default function BookingDetailsPage() {
  const router = useRouter()
  const dateFormatter = useDateFormatter({ dateStyle: 'full' })
  const timeFormatter = useDateFormatter({ timeStyle: 'short' })

  const searchParams = useSearchParams()
  const time = searchParams?.get('time')

  // TypeScript hints that time is `string | string[]` but we want on only one string...
  const timeString = Array.isArray(time) ? time[0] : time

  const formattedTime = time
    ? `${dateFormatter.format(new Date(timeString))} at ${timeFormatter.format(
        new Date(timeString)
      )}`
    : ''

  return (
    <div className="grid h-full place-items-center p-10">
      <div className="grid justify-items-center">
        <ConfirmCorgi className="w-40" />
        <h1 className="mt-4 text-3xl font-bold">All set!</h1>
        <div className="mt-4 space-y-2 text-center">
          <p>
            We're scheduled on <strong className="text-primary-600">{formattedTime}</strong>.
          </p>
          <p>You'll find an invite in your inbox.</p>
          <p>See you then!</p>
        </div>
        <Signature className="mt-6 w-40 text-primary-600" />
      </div>
    </div>
  )
}

// ------------------------------
// Implementation components
// ------------------------------
function ConfirmCorgi({ className: classNameAttribute, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={classNameAttribute}
      {...props}
      viewBox="0 0 521 600"
    >
      <path
        fill="#F70"
        d="M361.269 444.379c-.39-.93-1.67-4.61-2-5.55-4.01-11.37-6.75-20.35-6.75-20.35l-185.482 2.8s-1.16 9.02-8.02 20.62c38.97 13.9 55.76 43.67 62.36 60.48 3.67-3.93 5.82-6.54 5.82-6.54s14.58 4.29 32.1 4.29c17.52 0 32.1-4.29 32.1-4.29s4.98 5.55 8.65 9.47c6.65-16.93 21.69-47.17 61.212-60.95l.01.02Z"
      />
      <path
        fill="#fff"
        d="M159.017 441.909c-2.32 3.92-9.29 12.14-13.09 16.4-9.71-3.07-20.49-2.44-30.96 6.47-31.17 26.53 18.43 82.47 47.49 78.05 21.51-3.27 48.45-29.24 58.92-40.44 0 .01-40.67-52.74-62.36-60.48ZM356.149 542.829c29.05 4.42 78.66-51.53 47.49-78.05-10.99-9.35-22.32-9.59-32.39-5.99-2.24-3.6-8.88-12.29-10.89-17.15-39.522 13.78-52.602 46.76-59.252 63.69 10.47 11.19 33.532 34.23 55.042 37.5Z"
      />
      <path
        fill="currentColor"
        className="fill-primary-400"
        d="M257.658 445.279c86.161 0 103.691-38.79 103.691-38.79-2.82-16.45-5.6-18.2-7.14-28.09 0 0 17.08-8.06 30.67-13.43l-32.94-74.06H150.668l-18.88 75.39c13.59 5.37 29.33 12.11 29.33 12.11-1.55 9.89-4.32 11.64-7.14 28.09 0 0 17.54 38.79 103.69 38.79"
      />
      <path
        fill="#F70"
        d="M130.357 178.97c4.74 6.82 12.18 12.14 21.44 16.26v-.02c-2.63 9.39-3.88 19.15-3.5 29.01 2.07 54.289 52.36 90.869 112.59 88.579 60.23-2.3 107.592-42.61 105.512-96.899-.38-9.86-2.36-19.49-5.71-28.66l.02.02c8.92-4.81 15.93-10.68 20.14-17.85 28.98-49.34 13.83-103.25 13.83-103.25-57.76 21.18-89.002 61.05-89.042 61.1-3.74-1.82-7.6-3.44-11.56-4.85 0 0 6.731-19.21-5.479-22.06-12.22-2.85-36.411 15.9-36.411 15.9s9.27-26.77-5.83-27.41c-18.45-.78-39.93 29.57-45.4 37.79l-2.68.72c-10.47-9.97-41.91-36.81-89.58-50.27 0 0-10.99 54.9 21.66 101.89Zm175.14-51.15.14-.56.7.77-.84-.21Z"
      />
      <path fill="#fff" d="m306.347 128.03-.84-.21.13-.56.71.77Z" />
      <path
        fill="#fff"
        d="m305.507 127.82.14-.56.7.77-.84-.21ZM254.467 144.53s24.6-2.94 36.55 42.27c2.04 7.7 8.52 13.41 16.41 14.48 15.16 2.06 43.112 10.93 61.232 24.67-4.13 47.309-47.192 82.559-102.052 86.519l-5.73.32c-54.96 2.1-101.64-28.19-110.96-74.759 16.5-15.66 43.3-27.55 58.14-31.27 7.73-1.94 13.54-8.32 14.72-16.2 6.9-46.26 31.68-46.04 31.68-46.04"
      />
      <path
        fill="#A81B46"
        d="m278.127 244.18-20.26-6.21-19.73 7.74s-2.83 25.109 20.95 24.199c23.78-.91 19.04-25.729 19.04-25.729Z"
      />
      <path
        fill="#fff"
        d="M353.989 172.62s5.4-10.74 3-16.28c-2.5-5.77-15.41-1.41-15.41-1.41s5.68-11.87 1.38-17.95c-3.43-4.84-21.011.31-21.011.31s20.931-31.3 61.161-46.25c0 0 3.35 62.99-29.12 81.57v.01ZM157.387 180.12s-6.21-10.3-4.23-16c2.06-5.94 15.25-2.58 15.25-2.58s-6.57-11.41-2.74-17.79c3.05-5.09 20.97-1.29 20.97-1.29s-23.25-29.61-64.51-41.45c0 0 1.46 63.06 35.26 79.11Z"
      />
      <path
        fill="#DCDFE2"
        d="M365.839 229.8c-5.74 47.139-49.982 80.899-104.942 82.999-54.96 2.1-101.64-28.19-110.96-74.759 0 0 26.16 61.839 110.35 58.629 84.182-3.21 105.552-66.869 105.552-66.869Z"
      />
      <path
        fill="#FFAA2A"
        d="M242.557 101.7c-12.28-2.35-41.6 24.93-41.6 24.93 5.47-8.22 26.96-38.57 45.4-37.79 15.11.64 5.83 27.41 5.83 27.41s2.65-12.2-9.64-14.55h.01ZM252.198 116.25s24.19-18.75 36.41-15.9c12.2 2.85 5.5 22.01 5.48 22.06 0 0-.16-9.27-9.65-12.43-9.5-3.15-32.23 6.26-32.23 6.26"
      />
      <path
        fill="#FF4173"
        d="M259.087 269.909c8.53-.33 13.38-3.74 16.11-7.97-3.05-6.15-9.49-10.28-16.79-10-7.3.28-13.41 4.88-15.98 11.25 3.04 4.01 8.13 7.04 16.67 6.72h-.01Z"
      />
      <path
        fill="#F70"
        d="M185.717 291.889c-9.06-7.09-17.31-15.56-24.61-24.3-4.22 18.48-16.55 50.38-52.08 62.37 28.06 17.61 50.65 24.92 50.65 24.92l14.85-29.94 11.2-33.05h-.01Z"
      />
      <path
        fill="#fff"
        d="M161.107 267.579c-4.95-5.94-9.47-12-13.5-17.84-16.49-23.939-51.21-26.099-70.47-4.329l-.84.96c-16.52 19.029-14.1 48.089 5.43 64.019 9.29 7.58 18.56 14.06 27.3 19.55 35.53-11.99 47.86-43.89 52.08-62.37v.01Z"
      />
      <path
        fill="#F70"
        d="M327.619 291.889c9.06-7.09 17.31-15.56 24.61-24.3 4.22 18.48 16.55 50.38 52.08 62.37-28.06 17.61-50.65 24.92-50.65 24.92l-14.85-29.94-11.2-33.05h.01Z"
      />
      <path
        fill="#fff"
        d="M352.239 267.579c4.95-5.94 9.47-12 13.5-17.84 16.49-23.939 51.21-26.099 70.47-4.329l.84.96c16.52 19.029 14.1 48.089-5.43 64.019-9.29 7.58-18.56 14.06-27.3 19.55-35.53-11.99-47.86-43.89-52.08-62.37v.01ZM295.478 341.509s-3.96 10.6-12.02 10.08c-8.06-.52-15.43-10.91-29.55-6.6-14.12 4.31-17.01 15.08-16.25 21.67 0 0 3.65-8.13 11.46-9.28 6.82-1.01 14.37 10.59 31.66 6.1 16.35-4.24 14.69-21.98 14.69-21.98l.01.01ZM283.138 371.559s-3.96 10.6-12.02 10.08c-8.06-.53-15.43-10.91-29.55-6.6-14.12 4.31-17.01 15.08-16.25 21.67 0 0 3.65-8.13 11.46-9.28 6.82-1.01 14.37 10.59 31.66 6.1 16.35-4.24 14.69-21.98 14.69-21.98l.01.01Z"
      />
      <path
        fill="currentColor"
        className="fill-primary-500"
        d="m397.029 332.939-42.61 20.42s7.87 20.62 30.46 11.62c18.6-7.41 12.16-32.04 12.16-32.04h-.01ZM117.387 332.939l42.61 20.42s-7.87 20.62-30.46 11.62c-18.6-7.41-12.16-32.04-12.16-32.04h.01ZM353.159 382.159c-.24 0-.48-.02-.72-.08-13.57-2.85-21.45-13.81-21.78-14.28a3.498 3.498 0 0 1 .84-4.88c1.58-1.11 3.76-.74 4.87.83.12.17 6.73 9.21 17.5 11.47 1.89.4 3.1 2.25 2.71 4.14a3.5 3.5 0 0 1-3.42 2.78v.02ZM162.158 382.159c-1.62 0-3.08-1.13-3.42-2.78-.4-1.89.82-3.75 2.71-4.14 10.91-2.29 17.43-11.37 17.5-11.46a3.507 3.507 0 0 1 4.88-.84c1.58 1.12 1.95 3.3.84 4.88-.33.46-8.21 11.43-21.78 14.28-.24.05-.48.08-.72.08l-.01-.02Z"
      />
      <path
        fill="#DCDFE2"
        d="M161.454 538.689c8.148-5.83 6.686-21.84-3.266-35.75s-24.625-20.46-32.773-14.63c-8.148 5.83-6.686 21.83 3.266 35.74 9.952 13.91 24.625 20.46 32.773 14.64ZM389.939 524.059c9.95-13.91 11.41-29.91 3.27-35.74-8.15-5.83-22.82.72-32.78 14.63-9.95 13.92-11.41 29.92-3.26 35.75 8.14 5.83 22.82-.72 32.77-14.64Z"
      />
      <path
        fill="#FFA2BE"
        d="M383.249 519.659c4.52-6.55 4.85-14.15.74-16.99-4.11-2.83-11.11.18-15.62 6.72-4.52 6.55-4.85 14.15-.74 16.99 4.11 2.83 11.1-.17 15.62-6.72ZM380.139 488.929c3-4.81 3-10.23 0-12.1-3-1.87-7.86.52-10.86 5.34-3 4.81-3 10.23 0 12.1 3 1.87 7.86-.52 10.86-5.34ZM150.939 526.569c4.11-2.84 3.78-10.44-.736-16.99-4.516-6.54-11.508-9.55-15.618-6.72-4.11 2.84-3.78 10.44.736 16.99 4.516 6.55 11.508 9.56 15.618 6.72ZM149.356 494.179c3.001-1.87 3.001-7.29.003-12.1-2.999-4.82-7.863-7.2-10.863-5.33-3 1.86-3.001 7.28-.002 12.1 2.999 4.81 7.862 7.2 10.862 5.33ZM129.368 494.609c2.823-1.83 2.734-6.98-.199-11.51-2.934-4.53-7.6-6.72-10.423-4.89-2.823 1.83-2.734 6.98.199 11.51 2.934 4.53 7.6 6.72 10.423 4.89ZM123.474 511.949c2.695-1.9 2.435-6.91-.581-11.19-3.016-4.28-7.645-6.21-10.34-4.31-2.696 1.9-2.436 6.91.58 11.19 3.016 4.28 7.645 6.21 10.341 4.31Z"
      />
      <path
        fill="#DADDE0"
        d="M158.007 594.669c0-7.61 43.43-23.13 97-23.13s97.002 15.52 97.002 23.13c0 7.61-43.432 4.43-97.002 4.43-53.57 0-97 3.18-97-4.43Z"
      />
      <path
        fill="#FFAA2A"
        d="M271.717 60.64c9.731 0 17.62-13.575 17.62-30.32S281.448 0 271.717 0c-9.731 0-17.62 13.575-17.62 30.32s7.889 30.32 17.62 30.32ZM224.029 60.553c6.206-2.998 7.055-14.084 1.896-24.761-5.159-10.676-14.372-16.9-20.578-13.902-6.206 2.999-7.055 14.085-1.896 24.762 5.159 10.676 14.372 16.9 20.578 13.9ZM340.569 62.377c8.06-8.702 10.49-19.551 5.43-24.234-5.06-4.682-15.69-1.423-23.745 7.278-8.055 8.702-10.484 19.552-5.426 24.234 5.058 4.682 15.691 1.424 23.741-7.278ZM57.186 215.107c3.552-9.06-6.206-21.36-21.796-27.472-15.59-6.113-31.107-3.724-34.66 5.336-3.552 9.059 6.206 21.359 21.796 27.472 15.59 6.113 31.107 3.723 34.66-5.336ZM25.81 270.849c11.845-.58 21.176-6.62 20.843-13.51-.334-6.88-10.205-11.999-22.048-11.426-11.844.573-21.175 6.616-20.842 13.506.333 6.88 10.204 12 22.048 11.43ZM84.656 184.258c6.52-2.237 8.685-13.143 4.836-24.358-3.85-11.216-12.254-18.494-18.773-16.257-6.52 2.237-8.685 13.143-4.836 24.358 3.849 11.216 12.254 18.494 18.773 16.257ZM498.579 245.707c15.33-6.755 24.56-19.449 20.64-28.354-3.93-8.904-19.53-10.647-34.85-3.892-15.32 6.755-24.56 19.449-20.64 28.354 3.93 8.904 19.53 10.644 34.85 3.892ZM464.099 194.102c8.16-8.597 10.73-19.414 5.74-24.161-5-4.747-15.67-1.627-23.84 6.97s-10.73 19.415-5.74 24.162c5 4.747 15.67 1.626 23.84-6.971ZM515.289 296.389c1.68-6.68-6.28-14.45-17.77-17.34-11.5-2.9-22.19.17-23.87 6.86-1.68 6.68 6.27 14.45 17.77 17.34 11.5 2.9 22.19-.17 23.87-6.86Z"
      />
      <path
        fill="#511500"
        d="M383.809 92.93c-23.46 9.39-44.37 25.67-58.95 46.31l-3.891-5.3c6.571-1.62 20.081-5.37 24.881 1.07 4.25 6.63 1.69 14.84-1.11 21.44l-4.28-4.83c20.71-6.44 24.93 5.4 16.65 22.58-2.13 4.09-8.21 1.14-6.29-3.07 1.71-3.88 4.06-9.13 2.97-13.33-.21-.4-.36-.43-.9-.64-3.08-.81-7.05.17-10.19 1.09-1.86.6-3.85-.42-4.44-2.29-.57-1.72.48-3 1.01-4.59 1.18-3.24 2.23-7.12 1.61-10.45-.19-1.07-.89-2.18-.84-1.93-2.28-.95-5.19-.54-7.74-.28-3.1.4-6.36 1.11-9.371 1.95-1.92.6-4-.53-4.45-2.51-.23-1 0-2.01.55-2.79 2.05-2.85 4.13-5.28 6.411-7.85 6.66-7.38 14.09-14.05 22.11-19.89 10.65-7.78 22.41-14.06 34.85-18.44 2.46-.8 3.83 2.74 1.4 3.76l.01-.01Z"
      />
      <path
        fill="#511500"
        d="M360.709 190.75a3.498 3.498 0 0 1-1.66-6.58c8.81-4.75 15.12-10.31 18.78-16.54 23.56-40.11 17.01-83.92 14.35-96.79-53.76 20.89-83.482 58.19-83.782 58.57a3.489 3.489 0 0 1-4.91.59 3.5 3.5 0 0 1-.6-4.91c1.3-1.66 32.532-40.94 90.592-62.23.92-.33 1.93-.27 2.8.17.87.44 1.51 1.23 1.78 2.17.64 2.26 15.21 55.91-14.19 105.97-4.31 7.34-11.54 13.79-21.49 19.16-.53.29-1.1.42-1.66.42h-.01Z"
      />
      <path
        fill="#511500"
        d="M260.897 316.299c-1.87 0-3.42-1.48-3.5-3.37a3.498 3.498 0 0 1 3.36-3.63c28.73-1.1 54.98-11.06 73.922-28.06 19.16-17.19 29.18-40.349 28.24-65.209-.36-9.3-2.2-18.58-5.49-27.57a3.5 3.5 0 0 1 2.09-4.49c1.81-.67 3.83.27 4.49 2.09 3.54 9.69 5.53 19.68 5.91 29.71 1.03 26.97-9.82 52.079-30.55 70.679-20.152 18.09-47.972 28.69-78.322 29.85H260.897ZM122.687 99.08c25.53 6.96 49.1 21.42 66.71 41.22 2.06 2.36-.12 6.16-3.16 5.63-3.18-.6-6.58-1.12-9.81-1.28-2.56-.06-5.5-.25-7.69.87-2.17 3.72.75 10.54 2.71 14.27.95 1.69.35 3.84-1.34 4.79-.81.45-1.72.55-2.55.35-2.32-.54-5.04-.91-7.33-.82-1.44.09-2.7.21-3.58.9-.5.72-.39 1.68-.28 2.95.54 3.57 2.28 7.3 4.07 10.43 2.22 4.04-3.57 7.47-6.04 3.54-.83-1.41-1.47-2.68-2.12-4.07-7.76-16.55.05-23.7 17-19.72l-3.9 5.14c-.52-.92-.89-1.68-1.29-2.54-4.19-8.74-6.02-22.18 7.11-23.01 5.54-.46 10.78.27 16.17 1.29l-3.48 5.59c-7.9-9.77-17.64-18.12-28.03-25.18-5.27-3.55-10.8-6.72-16.52-9.5-5.74-2.76-11.68-5.1-17.77-7-2.43-.79-1.44-4.49 1.12-3.86v.01ZM199.627 132.16a3.5 3.5 0 0 1-2.97-5.35c1.07-1.71 26.14-41.49 49.02-41.49.28 0 .55 0 .83.02 4.05.17 7.29 1.87 9.36 4.92 3.2 4.71 2.96 11.88 1.99 17.7 8.65-5.65 22.37-13.15 31.53-11.01 3.6.84 6.39 2.92 8.09 6 4.23 7.71.35 19.33-.1 20.63a3.501 3.501 0 0 1-4.46 2.14 3.501 3.501 0 0 1-2.14-4.46c.95-2.72 2.9-10.72.57-14.95-.74-1.34-1.87-2.15-3.54-2.54-7.72-1.81-24.63 8.4-33.47 15.25a3.51 3.51 0 0 1-4.19.08 3.51 3.51 0 0 1-1.27-3.99c2.01-5.82 4.1-16.64 1.19-20.91-.55-.81-1.49-1.76-3.87-1.86-15.84-.67-36.84 27.33-43.61 38.18a3.509 3.509 0 0 1-2.97 1.65l.01-.01Z"
      />
      <path
        fill="#511500"
        d="M305.637 130.76c-.51 0-1.04-.11-1.53-.35a108.2 108.2 0 0 0-11.2-4.69c-1.82-.65-2.78-2.65-2.13-4.47a3.499 3.499 0 0 1 4.47-2.13c4.04 1.43 8.05 3.11 11.92 5 1.74.85 2.46 2.94 1.62 4.68a3.494 3.494 0 0 1-3.15 1.97v-.01ZM151.798 198.73c-.48 0-.96-.1-1.42-.3-10.33-4.59-18.03-10.47-22.89-17.46-33.13-47.67-22.68-102.27-22.22-104.58.19-.96.77-1.79 1.61-2.3a3.48 3.48 0 0 1 2.78-.38c50.76 14.33 83.59 43.77 92.44 52.45 1.38 1.35 1.4 3.57.05 4.95a3.504 3.504 0 0 1-4.95.05c-8.33-8.17-38.64-35.37-85.63-49.6-1.68 13.03-4.86 57.21 21.68 95.41 4.12 5.93 10.84 10.99 19.99 15.06 1.77.79 2.56 2.85 1.78 4.62a3.51 3.51 0 0 1-3.2 2.08h-.02ZM274.912 215.378c.197-7.939-7.687-14.575-17.608-14.821-9.922-.246-18.124 5.991-18.321 13.931-.197 7.939 7.686 14.574 17.608 14.82 9.921.246 18.124-5.99 18.321-13.93Z"
      />
      <path
        fill="#7A2106"
        d="M254.122 216.426c4.023-.154 7.201-2.48 7.097-5.195-.104-2.715-3.45-4.792-7.473-4.638-4.023.154-7.2 2.48-7.097 5.195.104 2.716 3.45 4.792 7.473 4.638Z"
      />
      <path
        fill="#511500"
        d="M275.737 247.76c-14.75 0-21.04-13.97-21.31-14.58-.78-1.77.03-3.83 1.8-4.61a3.51 3.51 0 0 1 4.61 1.79c.21.47 4.94 10.66 15.35 10.39 9.48-.25 10.56-8.05 10.65-8.94.2-1.91 1.9-3.31 3.81-3.14 1.91.18 3.32 1.86 3.16 3.77-.44 5.14-4.66 14.96-17.43 15.31h-.63l-.01.01Z"
      />
      <path
        fill="#511500"
        d="M238.968 249.159c-11.88 0-16.54-9.029-17.35-13.959-.31-1.91.98-3.71 2.89-4.02 1.91-.31 3.69.97 4.02 2.86.16.9 1.83 8.58 11.3 8.1 9.18-.45 13.31-8.68 14.29-10.96l-.25-6.53a3.498 3.498 0 0 1 3.36-3.63 3.48 3.48 0 0 1 3.63 3.36l.28 7.27c.02.44-.05.88-.19 1.29-.22.63-5.58 15.45-20.77 16.199-.41.02-.81.03-1.2.03l-.01-.01ZM259.088 273.409c-1.87 0-3.42-1.48-3.5-3.37a3.498 3.498 0 0 1 3.36-3.63c5.69-.22 9.9-1.99 12.53-5.28 5-6.25 3.22-16.209 3.2-16.299-.35-1.9.9-3.73 2.79-4.08 1.9-.35 3.72.88 4.08 2.78.1.53 2.41 13.149-4.58 21.939-3.96 4.97-9.93 7.64-17.76 7.94h-.14.02Z"
      />
      <path
        fill="#511500"
        d="M257.837 273.439c-7.18 0-12.87-2.21-16.93-6.59-7.64-8.23-6.3-20.989-6.24-21.529a3.478 3.478 0 0 1 3.87-3.08c1.92.22 3.3 1.94 3.09 3.86-.02.19-1 10.189 4.44 16.009 2.87 3.08 7.22 4.52 12.9 4.31 1.97-.09 3.56 1.43 3.63 3.36a3.498 3.498 0 0 1-3.36 3.63c-.47.02-.93.03-1.38.03h-.02ZM255.527 316.399c-28.29 0-54.7-8.39-74.87-23.89-22.09-16.97-34.82-41.18-35.85-68.149-.38-10.03.84-20.16 3.63-30.1a3.497 3.497 0 0 1 4.32-2.42c1.86.52 2.95 2.46 2.42 4.32-2.6 9.23-3.73 18.63-3.38 27.93.95 24.859 12.71 47.179 33.12 62.869 20.18 15.51 47.13 23.43 75.84 22.35a3.467 3.467 0 0 1 3.63 3.36 3.498 3.498 0 0 1-3.36 3.63c-1.84.07-3.67.11-5.5.11v-.01ZM287.887 199.17c-1.64 0-3.18-.9-3.97-2.38-.89-1.67-.64-3.73.64-5.14l22.32-24.65a4.515 4.515 0 0 1 6.36-.32 4.514 4.514 0 0 1 .32 6.36l-13.93 15.38 16.43-2.38a4.501 4.501 0 0 1 5.1 3.81 4.501 4.501 0 0 1-3.81 5.1l-28.81 4.17c-.22.03-.43.05-.65.05ZM226.337 202.57h-.15l-29.09-.98a4.503 4.503 0 0 1-4.35-4.65c.08-2.48 2.19-4.46 4.65-4.35l16.59.56-15.54-13.75a4.505 4.505 0 0 1-.39-6.35 4.496 4.496 0 0 1 6.35-.39l24.9 22.04a4.5 4.5 0 0 1 1.2 5.03 4.483 4.483 0 0 1-4.18 2.83l.01.01ZM257.658 448.789c-87.41 0-106.13-39.18-106.88-40.84-.33-.72-.4-1.54-.2-2.3l6.4-25.18c-5.11-2.17-16.451-6.93-26.481-10.9a3.496 3.496 0 0 1-1.969-4.54 3.495 3.495 0 0 1 4.539-1.97c13.48 5.32 29.26 12.07 29.42 12.14 1.58.68 2.44 2.41 2.01 4.08l-6.799 26.76c1.54 2.6 6.64 9.97 18.26 17.27 24.32 15.27 57.85 18.48 81.7 18.48 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5Z"
      />
      <path
        fill="#511500"
        d="M257.658 448.789c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5c75.181 0 96.511-29.88 99.971-35.74l-6.81-26.77c-.41-1.62.38-3.31 1.9-4.03.17-.08 17.34-8.17 30.87-13.52 1.8-.71 3.83.17 4.54 1.97s-.17 3.83-1.97 4.54c-10.21 4.03-22.55 9.67-27.85 12.12l6.43 25.28c.2.77.12 1.58-.2 2.3-.75 1.67-19.47 40.84-106.881 40.84v.01ZM359.579 546.579c-1.34 0-2.66-.09-3.95-.29-26.97-4.1-58.272-38.29-65.442-46.49-4.81 1.21-16.87 3.84-30.88 3.84-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5c16.82 0 30.97-4.11 31.11-4.15a3.5 3.5 0 0 1 3.67 1.11c.35.42 35.192 41.6 62.592 45.77 15.66 2.38 39.68-15.6 49.44-37.01 3.79-8.31 8.21-23.89-4.75-34.92-6.63-5.64-13.92-8.04-21.67-7.12-20.44 2.42-38.18 26.48-38.35 26.72a3.5 3.5 0 1 1-5.66-4.12c.79-1.09 19.68-26.75 43.17-29.55 9.77-1.17 18.88 1.77 27.06 8.74 12.03 10.23 14.43 25.96 6.58 43.15-9.37 20.54-33.16 41.32-52.91 41.32h-.01Z"
      />
      <path
        fill="#511500"
        d="M370.969 460.129c-1.01 0-2.01-.43-2.7-1.27l-7.28-8.79c-.07-.08-.13-.17-.19-.26a76.474 76.474 0 0 1-10.89-23.86l-1.73-6.59a3.498 3.498 0 1 1 6.77-1.77l1.73 6.59a69.621 69.621 0 0 0 9.8 21.55l7.17 8.67a3.512 3.512 0 0 1-.46 4.93c-.65.54-1.44.8-2.23.8h.01Z"
      />
      <path
        fill="#511500"
        d="M300.107 509.829a3.494 3.494 0 0 1-3.33-4.58c16.08-49.74 61.572-63.67 63.502-64.23 1.85-.54 3.8.51 4.35 2.37.55 1.85-.51 3.8-2.36 4.35-.44.13-43.912 13.54-58.822 59.67a3.499 3.499 0 0 1-3.33 2.42h-.01ZM159.038 546.579c-19.75 0-43.54-20.78-52.91-41.32-7.84-17.19-5.44-32.92 6.58-43.15 8.18-6.96 17.29-9.9 27.06-8.74 23.48 2.8 42.37 28.46 43.17 29.55a3.5 3.5 0 1 1-5.66 4.12c-.18-.24-17.92-24.3-38.35-26.72-7.76-.92-15.04 1.47-21.67 7.12-5.56 4.74-13.58 15.57-4.75 34.92 9.77 21.41 33.78 39.39 49.44 37.01 27.4-4.17 62.24-45.35 62.59-45.77.89-1.06 2.33-1.5 3.67-1.11.14.04 14.35 4.15 31.12 4.15 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-14.02 0-26.07-2.63-30.88-3.84-7.16 8.19-38.47 42.38-65.44 46.49-1.29.2-2.61.29-3.95.29h-.02Z"
      />
      <path
        fill="#511500"
        d="M147.637 460.129c-.68 0-1.37-.2-1.97-.61a3.51 3.51 0 0 1-.91-4.87l3.28-4.79c7.6-11.11 12.4-19.99 13.89-25.68l1.12-4.27a3.498 3.498 0 1 1 6.77 1.77l-1.12 4.27c-1.72 6.55-6.73 15.93-14.89 27.86l-3.28 4.79c-.68.99-1.78 1.52-2.89 1.52v.01Z"
      />
      <path
        fill="#511500"
        d="M218.497 508.829c-1.48 0-2.85-.94-3.33-2.42-14.95-46.26-58.38-59.54-58.82-59.67a3.512 3.512 0 0 1-2.37-4.35c.55-1.85 2.5-2.91 4.35-2.37 1.93.57 47.42 14.49 63.5 64.23.59 1.84-.41 3.81-2.25 4.41-.36.12-.72.17-1.08.17ZM138.397 370.889c-2.54 0-5.11-.42-7.7-1.25-18.58-6-19.92-25.7-18.03-35.27.37-1.9 2.22-3.14 4.11-2.76 1.9.37 3.13 2.21 2.76 4.11-.17.88-3.96 21.68 13.32 27.26 5.04 1.63 9.81 1.08 14.57-1.68 9.24-5.36 18.18-19.07 25.85-39.63 5.94-15.91 8.99-30.35 9.02-30.49.4-1.89 2.25-3.11 4.14-2.71 1.89.4 3.1 2.25 2.71 4.14-.51 2.44-12.79 59.98-38.21 74.74-4.07 2.36-8.26 3.54-12.54 3.54Z"
      />
      <path
        fill="#511500"
        d="M159.668 358.369c-.36 0-.72-.05-1.08-.17-1.61-.52-39.93-13.14-79.08-45.09-10.16-8.29-16.38-20.08-17.5-33.19-1.13-13.16 3-25.89 11.64-35.839.28-.33.57-.66.86-.99 9.89-11.17 24.13-17.06 39.08-16.15 14.97.91 28.42 8.5 36.9 20.82 12.03 17.459 24.6 31.379 37.38 41.369a3.5 3.5 0 0 1 .6 4.91 3.5 3.5 0 0 1-4.91.6c-13.34-10.43-26.41-24.87-38.84-42.92-7.25-10.529-18.76-17.019-31.56-17.799-12.77-.78-24.96 4.25-33.41 13.81-.28.31-.55.62-.82.93-7.39 8.509-10.92 19.399-9.95 30.649.96 11.21 6.27 21.29 14.95 28.37 38.08 31.08 76.43 43.73 76.81 43.85 1.84.6 2.85 2.57 2.25 4.41a3.499 3.499 0 0 1-3.33 2.42l.01.01Z"
      />
      <path
        fill="#511500"
        d="M107.727 332.629a3.5 3.5 0 0 1-3.44-2.88c-.34-1.9.92-3.72 2.82-4.06 39.39-7.1 50.77-57.96 50.88-58.47a3.511 3.511 0 0 1 4.16-2.69c1.89.41 3.09 2.27 2.69 4.16-.12.57-3.09 14.09-11.41 28.74-11.19 19.7-26.78 31.86-45.07 35.15-.21.04-.42.06-.62.06l-.01-.01Z"
      />
      <path
        fill="#FFA2BE"
        d="M123.706 292.039c6.007-4.39 7.577-12.46 3.506-18.04-4.072-5.57-12.243-6.54-18.25-2.15-6.008 4.39-7.578 12.47-3.507 18.04 4.072 5.58 12.243 6.54 18.251 2.15ZM129.695 260.419a8.954 8.954 0 0 0 .517-12.656 8.96 8.96 0 0 0-12.661-.517c-3.639 3.353-3.87 9.023-.517 12.663a8.953 8.953 0 0 0 12.661.51ZM104.032 265.544a8.954 8.954 0 0 0 .517-12.656 8.96 8.96 0 0 0-12.661-.517c-3.639 3.353-3.87 9.023-.517 12.663a8.953 8.953 0 0 0 12.661.51ZM93.032 288.544a8.954 8.954 0 0 0 .517-12.656 8.96 8.96 0 0 0-12.661-.517c-3.639 3.353-3.87 9.023-.517 12.663a8.953 8.953 0 0 0 12.661.51Z"
      />
      <path
        fill="#511500"
        d="M374.939 370.889c-4.28 0-8.47-1.18-12.54-3.54-25.42-14.76-37.7-72.3-38.21-74.74-.4-1.89.82-3.75 2.71-4.14 1.9-.4 3.75.82 4.14 2.71.12.57 12.14 56.93 34.87 70.12 4.76 2.76 9.52 3.31 14.57 1.68 17.28-5.58 13.49-26.38 13.32-27.26-.36-1.9.87-3.73 2.77-4.1 1.9-.37 3.73.86 4.1 2.76 1.89 9.57.54 29.27-18.03 35.27-2.59.84-5.16 1.25-7.7 1.25v-.01Z"
      />
      <path
        fill="#511500"
        d="M353.669 358.369c-1.48 0-2.85-.94-3.33-2.42-.6-1.84.41-3.81 2.25-4.41.38-.12 38.73-12.78 76.81-43.85 8.68-7.08 13.99-17.16 14.95-28.37.97-11.25-2.57-22.14-9.95-30.649l-.82-.94c-8.45-9.55-20.63-14.59-33.41-13.8-12.8.78-24.31 7.27-31.56 17.799-12.43 18.05-25.5 32.49-38.84 42.92a3.498 3.498 0 1 1-4.31-5.51c12.78-9.99 25.36-23.91 37.38-41.369 8.48-12.32 21.93-19.91 36.9-20.82 14.95-.9 29.19 4.98 39.08 16.15l.87.99c8.63 9.949 12.77 22.679 11.64 35.829-1.13 13.11-7.34 24.9-17.5 33.19-39.15 31.95-77.47 44.57-79.08 45.09-.36.12-.72.17-1.08.17Z"
      />
      <path
        fill="#511500"
        d="M405.619 332.629c-.21 0-.42-.02-.62-.06-18.29-3.29-33.88-15.45-45.07-35.15-8.32-14.65-11.29-28.17-11.41-28.74a3.504 3.504 0 0 1 6.85-1.48c.11.51 11.57 51.39 50.88 58.48 1.9.34 3.17 2.16 2.82 4.06a3.5 3.5 0 0 1-3.44 2.88l-.01.01Z"
      />
      <path
        fill="#FFA2BE"
        d="M410.169 290.208c4.08-5.58 2.51-13.65-3.5-18.04-6.01-4.39-14.18-3.42-18.25 2.15-4.07 5.58-2.5 13.65 3.5 18.04 6.01 4.39 14.18 3.43 18.25-2.15ZM398.549 260.028a8.958 8.958 0 0 0-.52-12.657c-3.64-3.354-9.31-3.122-12.66.517-3.35 3.64-3.12 9.31.52 12.66a8.962 8.962 0 0 0 12.66-.52ZM424.589 265.648c3.36-3.64 3.13-9.31-.51-12.67-3.64-3.35-9.31-3.12-12.66.52-3.36 3.64-3.13 9.31.51 12.66 3.64 3.36 9.31 3.12 12.66-.51ZM432.919 289.788c3.35-3.64 3.12-9.31-.52-12.66-3.64-3.36-9.3-3.12-12.66.51-3.35 3.64-3.12 9.31.52 12.67 3.64 3.35 9.31 3.12 12.66-.52Z"
      />
    </svg>
  )
}