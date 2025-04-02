import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale/profile/orders/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$locale/profile/orders/"!</div>
}
