import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale/_cart/checkout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$locale/_cart/checkout"!</div>
}
