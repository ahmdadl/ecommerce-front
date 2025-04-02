import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale/_catalog/categories/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$locale/_catalog/categories/$slug"!</div>
}
