import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_base/about")({
  component: () => <div>Hello /_base/aboutUs!</div>,
});
