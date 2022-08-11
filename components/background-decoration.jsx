export function BackgroundDecoration({ selectedDate }) {
  return (
    /* 
      REVIEW:
      All elements in this component are decorative. 
      Is it therefore okay to put `aria-hidden` on the parentmost element?
    */
    <div aria-hidden="true" className="fixed inset-0 grid grid-cols-background-split">
      {/* Left split */}
      <div className="relative col-span-2 overflow-hidden bg-primary-600">
        <div className="absolute -left-40 -bottom-40 hidden aspect-square w-[700px] rounded-full border-[110px] border-primary-400 xl:block"></div>
      </div>
      {/* Right split */}
      <div className="relative col-span-2 overflow-hidden bg-primary-500">
        <div className="absolute -left-32 -top-32 hidden aspect-square w-[700px] rounded-full border-[110px] border-primary-400 xl:block"></div>
        <div className="absolute -bottom-16 -right-4 hidden text-[500px] font-extrabold tabular-nums leading-none text-primary-500/50 lg:block xl:text-primary-600/50">
          {selectedDate.day}
        </div>
      </div>
    </div>
  )
}
