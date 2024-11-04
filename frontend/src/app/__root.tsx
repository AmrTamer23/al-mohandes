import { createRootRoute, Outlet } from "@tanstack/react-router";

import "unfonts.css";
import "./globals.css";

import clsx from "clsx";
import { useAtom } from "jotai";

import { themeAtom } from "@/atoms/theme-atom";

export const Route = createRootRoute({
  component: RootLayout,

  notFoundComponent: () => {
    return (
      <p className="flex h-dvh w-full items-center justify-center bg-background text-foreground">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl">404</h1>
          <span className="h-10 w-px bg-accent" />
          <span className="text-sm">This page could not be found</span>
        </div>
      </p>
    );
  },
});

export default function RootLayout() {
  const [theme] = useAtom(themeAtom);
  return (
    <>
      <head>
        <title>Al-Mohandes</title>
        <meta name="description" content="Al-Mohandes" />
      </head>
      <div
        className={clsx(
          "min-h-dvh w-full",
          theme === "dark" ? "dark" : "light",
        )}
      >
        <Outlet />
      </div>
    </>
  );
}
