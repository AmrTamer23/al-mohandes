import * as React from "react"
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { Link } from "@tanstack/react-router"

import { cn } from "@/lib/utils"

export const ListItem = React.memo(function ListItem({
  className,
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href ?? "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {typeof children === "function"
              ? children({ isActive: false, isTransitioning: false })
              : children}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
