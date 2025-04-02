import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale/profile/orders/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$locale/profile/orders/$id"!</div>
}
