import { Button } from '../components/button'

export default function ButtonsPage() {
  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-bold md:text-left">Buttons playground page</h1>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {/* 
          Variants
            - primary (default) | secondary
            - large (default) | small

          Only for primary variant:
            - with icon (default) | without icon
        */}
        <Button>Primary</Button>
        <Button look="secondary">Secondary</Button>
        <Button noIcon>without icon</Button>

        <Button size="small">Small</Button>
        <Button size="small" look="secondary">
          Edit
        </Button>
        <Button size="small" noIcon>
          Small no icon
        </Button>
        <Button isLoading>Loading state</Button>
        <Button disabled>Disabled</Button>
        <Button look="secondary" disabled>
          Disabled
        </Button>
        <Button disabled noIcon>
          No icon disabled
        </Button>

        <Button disabled noIcon size="small">
          Small, no icon disabled
        </Button>
        <Button look="secondary" disabled size="small">
          Small disabled
        </Button>

        <Button block>Block with icon</Button>
        <Button look="secondary" block>
          Block
        </Button>
        <Button block noIcon>
          Block with no icon
        </Button>
        <Button block disabled>
          Block disabled
        </Button>
        <Button look="secondary" block disabled>
          Block disabled
        </Button>
        <Button isLoading block>
          Block and loading
        </Button>
        <Button size="small" isLoading block>
          Block and loading
        </Button>
      </div>
    </div>
  )
}
