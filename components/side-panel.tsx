import Link from 'next/link'
import Image from 'next/image'
import { ClockIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

import heroImage from '../public/img/social-large.jpg'

export function SidePanel() {
  return (
    <aside className="rounded-t-2xl border-8 border-b-0 border-white bg-white bg-opacity-90 backdrop-blur-md xl:rounded-l-2xl xl:rounded-tr-none xl:border-b-8 xl:border-r-0 xl:pr-4 [@supports(backdrop-filter:blur(0))]:bg-opacity-80">
      <div className="-mt-16 py-8 px-4 sm:px-8 md:mt-0 xl:-mt-16 xl:px-10">
        <div className="flex flex-col items-start gap-6 min-[400px]:items-center md:flex-row xl:flex-col xl:items-start">
          <Link
            href="/"
            className="group relative aspect-square h-32 overflow-hidden rounded-xl shadow-xl focus:outline-none focus:ring focus:ring-cyan-400 focus:ring-offset-1 sm:aspect-video sm:h-40"
          >
            <Image
              src={heroImage}
              priority
              sizes="(min-width: 640px) 400px, 200px"
              alt=""
              className="absolute h-full w-full object-cover transition duration-300 ease-in-out group-hover:rotate-1 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-xl ring-2 ring-inset ring-white/40 transition duration-500 group-hover:ring-cyan-200/80"></div>
          </Link>
          <div className="min-[400px]:text-center md:text-left">
            <h2 className="text-3xl font-extrabold">Online Workshop</h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-cyan-600">
              with Simon Vrachliotis
            </p>
            <p className="mt-4 xl:mt-8">Tailwind CSS for production-grade web applications.</p>
          </div>
        </div>
        <dl className="mt-12 flex flex-col gap-y-2 gap-x-12 rounded-lg border border-slate-300 p-4 md:flex-row xl:flex-col">
          <div className="flex items-center gap-x-4">
            <dt>
              <ClockIcon className="h-5 w-5 text-slate-500" />
            </dt>
            <dd>2 hours</dd>
          </div>
          <div className="flex gap-x-4 md:items-center xl:items-start">
            <dt>
              <VideoCameraIcon className="h-5 w-5 text-slate-500" />
            </dt>
            <dd>Link to videoconference to be provided upon confirmation</dd>
          </div>
        </dl>
      </div>
    </aside>
  )
}
