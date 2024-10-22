import { createFileRoute, Outlet } from "@tanstack/react-router"

import { Navbar } from "@/components/layout/nav/nav-bar"
import { ScrollArea } from "@/components/ui/scroll-area"

export const Route = createFileRoute("/_base")({
  component: BaseLayout,
})

function BaseLayout() {
  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden">
      <Navbar />

      <ScrollArea
        className="flex h-full w-full flex-col pt-14 [&>[data-orientation=vertical]]:!top-14 [&>[data-orientation=vertical]]:!h-auto"
        type="scroll"
      >
        <main className="flex flex-1 overflow-x-hidden">
          <Outlet />
        </main>
      </ScrollArea>
    </div>
  )
}
