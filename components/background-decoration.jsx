import { format } from 'date-fns'

export function BackgroundDecoration({ selectedDay }) {
  return (
    <div className="fixed inset-0 bg-indigo-500">
      <div className="relative h-full">
        {/* Split background */}
        <div className="absolute inset-0 hidden xl:flex">
          <div className="w-1/2 bg-indigo-500"></div>
          <div className="w-1/2 bg-indigo-400"></div>
        </div>

        {/* Mirroring the card's side/main panel split within max-width container */}
        <div className="absolute inset-0 hidden -translate-x-4 xl:block">
          <div className="mx-auto flex h-full max-w-7xl px-8">
            <div className="w-[400px] bg-indigo-500 transition-all duration-300 ease-in-out"></div>
            <div className="flex-1 bg-indigo-400 transition-all duration-300 ease-in-out"></div>
          </div>
        </div>

        {/* Decorative background circles */}
        <div className="absolute -left-40 -bottom-40 hidden aspect-square w-[700px] rounded-full border-[110px] border-indigo-400 xl:block"></div>
        <div className="absolute left-1/4 -top-32 hidden aspect-square w-[700px] rounded-full border-[110px] border-indigo-500 xl:block"></div>
        {/* Selected day */}

        {/* TODO: 
          Find out the cleanest way to align the digits to the bottom right edges.
          Do a calculation like what CapSize does? What about norizontal space.
          Is it even possible?
        */}
        <div className="absolute -bottom-20 -right-20 hidden text-[500px] font-extrabold tabular-nums leading-none text-indigo-500/50 lg:block xl:text-indigo-500/50">
          {selectedDay ? format(selectedDay, 'd') : '01'}
        </div>
      </div>
    </div>
  )
}
