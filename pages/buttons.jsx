import { Button } from '../components/button'

export default function ButtonsPage() {
  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-bold md:text-left">Buttons playground page</h1>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button>Primary button</Button>
        <Button look="secondary">Secondary large</Button>
        <Button noIcon>Without icon</Button>
        <Button noIcon look="secondary">
          Without icon
        </Button>
        <Button size="small">Primary small</Button>
        <Button size="small" look="secondary">
          Secondary
        </Button>
        <Button size="small" noIcon>
          Small without icon
        </Button>
        <Button size="small" noIcon look="secondary">
          Small without icon
        </Button>
        <Button isLoading>Loading state</Button>
        <Button isLoading look="secondary">
          Loading state
        </Button>
        <Button disabled>Primary disabled</Button>
        <Button look="secondary" disabled>
          Secondary disabled
        </Button>
        <Button disabled noIcon>
          No icon disabled
        </Button>
        <Button look="secondary" disabled noIcon>
          No icon disabled
        </Button>
        <Button disabled noIcon size="small">
          Small, no icon disabled
        </Button>
        <Button look="secondary" disabled noIcon size="small">
          Small, no icon disabled
        </Button>
      </div>
    </div>
  )
}
