import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/projects')({
  component: () => <div>Hello /_base/ourProjects!</div>
})