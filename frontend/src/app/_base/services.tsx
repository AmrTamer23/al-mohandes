import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_base/services")({
  component: () => <div>Hello /_base/ourServices!</div>,
});
