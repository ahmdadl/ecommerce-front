import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale/_catalog/brands/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$locale/_catalog/brands/$slug"!</div>
}
