export function Ribbon() {
  return (
    <div className="absolute -right-2 -top-2 z-10 aspect-square w-32 overflow-hidden rounded-lg">
      <div className="absolute h-2 w-2 bg-amber-500"></div>
      <div className="absolute bottom-0 right-0 h-2 w-2 bg-amber-500"></div>
      <div className="absolute bottom-0 right-0 w-[141.42%] origin-bottom-right rotate-45">
        <a href="#" className="flex flex-col items-center bg-amber-300 py-2 hover:bg-yellow-300">
          <span className="text-xs leading-none">Powered by</span>
          <span className="font-semibold leading-none text-amber-800">Badass.dev</span>
        </a>
      </div>
    </div>
  )
}
