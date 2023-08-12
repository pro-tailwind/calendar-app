import Link from "next/link"
import Image from "next/image"
import { ClockIcon, VideoCameraIcon } from "@heroicons/react/24/outline"

import heroImage from "@/../public/img/social-large.jpg"

export function SidePanel() {
  return (
    <aside className="rounded-t-2xl border-8 border-b-0 border-white bg-white bg-opacity-90 backdrop-blur-md lg:rounded-l-2xl lg:rounded-tr-none lg:border-b-8 lg:border-r-0 lg:pr-4 [@supports(backdrop-filter:blur(0))]:bg-opacity-80">
      <div className="-mt-16 px-4 py-8 sm:px-8 md:mt-0 lg:-mt-16 lg:px-6 xl:px-8">
        <div className="flex flex-col items-start gap-6 min-[400px]:items-center md:flex-row lg:flex-col lg:items-start">
          <Link
            href="/"
            className="group relative aspect-square h-32 overflow-hidden rounded-xl shadow-xl focus:outline-none focus:ring focus:ring-primary-400 focus:ring-offset-1 sm:aspect-video sm:h-40 lg:h-32 xl:h-40"
          >
            <Image
              src={heroImage}
              priority
              sizes="(min-width: 640px) 400px, 200px"
              alt=""
              className="absolute h-full w-full object-cover transition duration-300 ease-in-out group-hover:rotate-1 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-xl ring-2 ring-inset ring-white/40 transition duration-500 group-hover:ring-primary-200/80"></div>
          </Link>
          <div className="min-[400px]:text-center md:text-left">
            <h2 className="text-3xl font-extrabold lg:text-2xl xl:text-3xl">
              Tailwind Coaching
            </h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary-600">
              with Simon Vrachliotis
            </p>
            <p className="mt-4 xl:mt-6">
              Let's nerd out on advanced Tailwind CSS concepts and patterns.
            </p>
          </div>
        </div>
        <div className="relative mt-12">
          {/* Mix blend mode "fake" border */}
          <div className="absolute inset-0 rounded-lg border-2 border-primary-400 mix-blend-color"></div>

          <dl className="m-px flex flex-col gap-x-12 gap-y-2 p-4 md:flex-row lg:flex-col lg:gap-y-6 xl:gap-y-2">
            <div className="flex items-center gap-x-4 gap-y-2 lg:flex-col lg:items-start xl:flex-row">
              <dt>
                <ClockIcon className="h-5 w-5 text-slate-500" />
              </dt>
              <dd>2 hours</dd>
            </div>
            <div className="flex gap-x-4 gap-y-2 md:items-center lg:flex-col lg:items-start xl:flex-row">
              <dt>
                <VideoCameraIcon className="h-5 w-5 text-slate-500" />
              </dt>
              <dd>Link to video conference to be provided upon confirmation</dd>
            </div>
          </dl>
        </div>
      </div>
    </aside>
  )
}
