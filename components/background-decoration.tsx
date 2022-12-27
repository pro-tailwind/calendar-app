export function BackgroundDecoration({ selectedDate }) {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 bg-cyan-500 xl:grid xl:grid-cols-background-split xl:bg-transparent"
    >
      {/* Left split */}
      <div className="relative col-span-2 hidden overflow-hidden bg-primary-600 xl:block">
        <div className="absolute -left-40 -bottom-40 hidden aspect-square w-[700px] rounded-full border-[110px] border-primary-400 xl:block"></div>
      </div>
      {/* Right split */}
      <div className="relative col-span-2 hidden overflow-hidden bg-primary-500 xl:block">
        <div className="absolute -left-32 -top-32 aspect-square w-[700px] rounded-full border-[110px] border-primary-400"></div>
        <div className="absolute -bottom-16 -right-4 text-[500px] font-extrabold tabular-nums leading-none text-primary-500/50 xl:text-primary-600/50">
          {selectedDate.day}
        </div>
      </div>
    </div>
  )
}
