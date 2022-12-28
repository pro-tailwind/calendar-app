export default function Homepage() {
  return (
    <div className="grid min-h-screen place-items-center bg-cyan-500">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid h-[540px] grid-cols-[340px,1fr] overflow-hidden rounded-2xl bg-white shadow-2xl">
          <aside className="bg-gray-100"></aside>
          <main className="bg-white"></main>
        </div>
      </div>
    </div>
  )
}
