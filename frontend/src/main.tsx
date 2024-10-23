import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRouter, RouterProvider } from "@tanstack/react-router"

import "@/i18n"

import { cacheExchange, Client, fetchExchange, Provider } from "urql"

import { routeTree } from "./routes.gen"

const client = new Client({
  //TODO: change to be in the .env file
  url: "http://localhost:3000/api/graphql",
  exchanges: [cacheExchange, fetchExchange],
})

// Set up a Router instance
const isBotAgent = /bot|googlebot|crawler|spider|robot|crawling/i.test(
  navigator.userAgent,
)
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPendingMinMs: isBotAgent ? 100 : 0,
})

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
