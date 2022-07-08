export function MainPanel({ children }) {
  return (
    <main className="relative shadow-[0px_-30px_50px_-50px_rgba(0,0,0,0.2)] md:h-[700px] xl:shadow-[-60px_0_50px_-50px_rgba(0,0,0,0.2)]">
      <svg className="absolute top-0 -left-4 hidden h-full w-4 xl:block">
        <mask id="cutoff">
          <rect className="h-full w-full fill-white"></rect>
          <path
            className="translate-y-10 fill-black"
            d="M0 1.7C0 3 .5 4.2 1.4 5.1L12 15.7c.8.7.8 2 0 2.7L1.4 29C.5 30 0 31.1 0 32.4v.6V.9v.8Z"
          />
        </mask>
        <rect className="h-full w-full fill-white" mask="url(#cutoff)"></rect>
      </svg>
      <div className="relative h-full xl:-ml-4">{children}</div>
    </main>
  )
}
