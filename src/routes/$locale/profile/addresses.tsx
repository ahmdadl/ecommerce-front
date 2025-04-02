import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale/profile/addresses')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$locale/profile/addresses"!</div>
}
