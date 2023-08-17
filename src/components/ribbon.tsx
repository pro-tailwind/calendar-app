import Link from "next/link"

export function Ribbon() {
  return (
    <div className="absolute -right-2 -top-2 z-10 aspect-square w-32 overflow-hidden rounded-sm">
      <div aria-hidden="true" className="absolute h-2 w-2 bg-violet-500"></div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-2 w-2 bg-violet-500"
      ></div>
      <div className="absolute bottom-0 right-0 w-square-diagonal origin-bottom-right rotate-45">
        <Link
          href="https://protailwind.com"
          className="flex flex-col items-center bg-violet-300 py-2.5 shadow hover:bg-violet-200 focus:outline-none focus:ring focus:ring-inset focus:ring-violet-500"
        >
          <span className="text-[10px] font-semibold uppercase leading-none tracking-wide text-violet-900/60">
            Powered by
          </span>
          <span className="font-bold leading-none text-violet-900">
            Pro Tailwind
          </span>
        </Link>
      </div>
    </div>
  )
}
