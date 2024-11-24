/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from "./app/__root"
import { Route as BaseImport } from "./app/_base"
import { Route as BaseIndexImport } from "./app/_base/index"
import { Route as BaseServicesImport } from "./app/_base/services"
import { Route as BaseRecuritmentImport } from "./app/_base/recuritment"
import { Route as BaseProjectsImport } from "./app/_base/projects"
import { Route as BaseContactImport } from "./app/_base/contact"
import { Route as BaseAboutImport } from "./app/_base/about"

// Create/Update Routes

const BaseRoute = BaseImport.update({
  id: "/_base",
  getParentRoute: () => rootRoute,
} as any)

const BaseIndexRoute = BaseIndexImport.update({
  path: "/",
  getParentRoute: () => BaseRoute,
} as any)

const BaseServicesRoute = BaseServicesImport.update({
  path: "/services",
  getParentRoute: () => BaseRoute,
} as any)

const BaseRecuritmentRoute = BaseRecuritmentImport.update({
  path: "/recuritment",
  getParentRoute: () => BaseRoute,
} as any)

const BaseProjectsRoute = BaseProjectsImport.update({
  path: "/projects",
  getParentRoute: () => BaseRoute,
} as any)

const BaseContactRoute = BaseContactImport.update({
  path: "/contact",
  getParentRoute: () => BaseRoute,
} as any)

const BaseAboutRoute = BaseAboutImport.update({
  path: "/about",
  getParentRoute: () => BaseRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_base": {
      id: "/_base"
      path: ""
      fullPath: ""
      preLoaderRoute: typeof BaseImport
      parentRoute: typeof rootRoute
    }
    "/_base/about": {
      id: "/_base/about"
      path: "/about"
      fullPath: "/about"
      preLoaderRoute: typeof BaseAboutImport
      parentRoute: typeof BaseImport
    }
    "/_base/contact": {
      id: "/_base/contact"
      path: "/contact"
      fullPath: "/contact"
      preLoaderRoute: typeof BaseContactImport
      parentRoute: typeof BaseImport
    }
    "/_base/projects": {
      id: "/_base/projects"
      path: "/projects"
      fullPath: "/projects"
      preLoaderRoute: typeof BaseProjectsImport
      parentRoute: typeof BaseImport
    }
    "/_base/recuritment": {
      id: "/_base/recuritment"
      path: "/recuritment"
      fullPath: "/recuritment"
      preLoaderRoute: typeof BaseRecuritmentImport
      parentRoute: typeof BaseImport
    }
    "/_base/services": {
      id: "/_base/services"
      path: "/services"
      fullPath: "/services"
      preLoaderRoute: typeof BaseServicesImport
      parentRoute: typeof BaseImport
    }
    "/_base/": {
      id: "/_base/"
      path: "/"
      fullPath: "/"
      preLoaderRoute: typeof BaseIndexImport
      parentRoute: typeof BaseImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  BaseRoute: BaseRoute.addChildren({
    BaseAboutRoute,
    BaseContactRoute,
    BaseProjectsRoute,
    BaseRecuritmentRoute,
    BaseServicesRoute,
    BaseIndexRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_base"
      ]
    },
    "/_base": {
      "filePath": "_base.tsx",
      "children": [
        "/_base/about",
        "/_base/contact",
        "/_base/projects",
        "/_base/recuritment",
        "/_base/services",
        "/_base/"
      ]
    },
    "/_base/about": {
      "filePath": "_base/about.tsx",
      "parent": "/_base"
    },
    "/_base/contact": {
      "filePath": "_base/contact.tsx",
      "parent": "/_base"
    },
    "/_base/projects": {
      "filePath": "_base/projects.tsx",
      "parent": "/_base"
    },
    "/_base/recuritment": {
      "filePath": "_base/recuritment.tsx",
      "parent": "/_base"
    },
    "/_base/services": {
      "filePath": "_base/services.tsx",
      "parent": "/_base"
    },
    "/_base/": {
      "filePath": "_base/index.tsx",
      "parent": "/_base"
    }
  }
}
ROUTE_MANIFEST_END */