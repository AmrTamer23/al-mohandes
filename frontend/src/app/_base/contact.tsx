import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_base/contact")({
  component: () => <div>Hello /_base/contactUs!</div>,
});
