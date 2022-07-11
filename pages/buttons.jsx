import { Button } from '../components/button'

export default function ButtonsPage() {
  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-bold md:text-left">Buttons playground page</h1>
      <div className="flex flex-wrap items-center gap-2">
        <Button>Click mes</Button>
        <Button look="secondary">Click mes</Button>
        <Button size="small">Click mes</Button>
        <Button size="small" look="secondary">
          Click mes
        </Button>
        <Button disabled>Click mes</Button>
      </div>
      <div className="space-y-2">
        <Button>Click me!</Button>
        <Button>Click me!</Button>
        <Button>Click me!</Button>
        <Button>Click me!</Button>
        <Button>Click me!</Button>
        <Button>Click me!</Button>
        <Button>Click me!</Button>
      </div>
    </div>
  )
}
