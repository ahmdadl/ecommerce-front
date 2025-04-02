import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale/profile/wishlist')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$locale/profile/wishlist"!</div>
}
