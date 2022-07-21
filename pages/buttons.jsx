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
        <Button hasIcon>Primary</Button>
        <Button look="secondary">Secondary</Button>
        <Button>without icon</Button>

        <Button size="small" hasIcon>
          Small
        </Button>
        <Button size="small" look="secondary">
          Edit
        </Button>
        <Button size="small">Small no icon</Button>
        <Button isLoading hasIcon>
          Loading state
        </Button>
        <Button disabled hasIcon>
          Disabled
        </Button>
        <Button look="secondary" disabled>
          Disabled
        </Button>
        <Button disabled>No icon disabled</Button>

        <Button disabled size="small">
          Small, no icon disabled
        </Button>
        <Button look="secondary" disabled size="small">
          Small disabled
        </Button>

        <Button block hasIcon>
          Block with icon
        </Button>
        <Button look="secondary" block>
          Block
        </Button>
        <Button block>Block without icon</Button>
        <Button block disabled>
          Block disabled
        </Button>
        <Button look="secondary" block disabled>
          Block disabled
        </Button>
        <Button isLoading block hasIcon>
          Block and loading
        </Button>
        <Button size="small" isLoading block hasIcon>
          Small Block and loading
        </Button>
      </div>
    </div>
  )
}
