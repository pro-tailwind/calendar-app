export function BackgroundDecoration({ selectedDate }) {
  return (
    <div
      aria-hidden="true"
      className="bg-primary-500 fixed inset-0 xl:grid xl:grid-cols-background-split xl:bg-transparent"
    >
      {/* Left split */}
      <div className="bg-primary-600 relative col-span-2 hidden overflow-hidden xl:block">
        <div className="border-primary-400 absolute -left-40 -bottom-40 hidden aspect-square w-[700px] rounded-full border-[110px] xl:block"></div>
      </div>
      {/* Right split */}
      <div className="bg-primary-500 relative col-span-2 hidden overflow-hidden xl:block">
        <div className="border-primary-400 absolute -left-32 -top-32 aspect-square w-[700px] rounded-full border-[110px]"></div>
        <div className="text-primary-500/50 xl:text-primary-600/50 absolute -bottom-16 -right-4 text-[500px] font-extrabold tabular-nums leading-none">
          {selectedDate.day}
        </div>
      </div>
    </div>
  )
}
