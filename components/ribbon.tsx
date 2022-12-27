export function Ribbon() {
  return (
    <div className="absolute -right-2 -top-2 z-10 aspect-square w-32 overflow-hidden rounded-sm">
      <div aria-hidden="true" className="absolute h-2 w-2 bg-amber-500"></div>
      <div aria-hidden="true" className="absolute bottom-0 right-0 h-2 w-2 bg-amber-500"></div>
      <div className="absolute bottom-0 right-0 w-square-diagonal origin-bottom-right rotate-45">
        <a
          href="#"
          className="flex flex-col items-center bg-amber-300 py-2.5 shadow hover:bg-yellow-300"
        >
          <span className="text-[10px] font-semibold uppercase leading-none tracking-wide text-amber-900/60">
            Powered by
          </span>
          <span className="font-bold leading-none text-amber-900">Badass.dev</span>
        </a>
      </div>
    </div>
  )
}
