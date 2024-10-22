import { useTranslation } from "react-i18next"
import { Link } from "@tanstack/react-router"

import { MenuIcon } from "lucide-react"
import WhiteLogo from "@/assets/imgs/logo.webp"
import RedLogo from "@/assets/imgs/red-logo.webp"

import { DesktopNavList } from "./desktop-nav-list"
import { MobileNavDropdown } from "./mobile-nav-list"
import { LanguageToggle } from "@/components/layout/nav/lang-toggle"
import { ModeToggle } from "@/components/layout/nav/mode-toggle"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  {
    title: "Home",
    titleAR: "الرئيسية",
    path: "/",
  },
  {
    title: "About",
    titleAR: "عننا",
    path: `/about`,
  },
  {
    title: "Services",
    titleAR: "خدماتنا",
    path: `/services`,
  },
  {
    title: "Portfolio",
    titleAR: "أعمالنا",
    path: `/portfolio`,
  },
  {
    title: "Contact",
    titleAR: "اتصل بنا",
    path: `/contact`,
  },
]

export function Navbar() {
  const { i18n, t } = useTranslation()

  const theme = "dark" as string

  return (
    <nav className="fixed z-[50] mt-[2rem] flex h-fit w-full min-w-full items-center justify-center p-2">
      <div className="relative flex w-[90%] justify-between rounded-xl border border-white border-opacity-20 bg-white bg-opacity-10 p-2 shadow-lg backdrop-blur-lg backdrop-filter dark:border-zinc-900 dark:bg-black">
        <Dialog>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center justify-start gap-1">
              <SheetTrigger className="min-[825px]:hidden flex w-fit items-center justify-between gap-4 p-2 transition">
                <MenuIcon />
              </SheetTrigger>
              <Link href="/" className="max-h-10">
                {theme === "white" ? "Logo" : "Logo"}
              </Link>
            </div>
            <div className="flex items-center gap-2 lg:hidden">
              <ModeToggle />
              {process.env.NODE_ENV !== "production" && <LanguageToggle />}
            </div>
          </div>
          <SheetContent side={i18n.language === "en" ? "left" : "right"}>
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                  <img
                    src="https://wp.dbrandria.com/wp-content/uploads/2024/09/RedLogo.svg"
                    alt="logo"
                    width={200}
                    height={200}
                    className="w-44"
                  />
                </Link>
              </SheetTitle>
              <SheetDescription>{t("description")}</SheetDescription>
            </SheetHeader>
            {MobileNavDropdown && (
              <MobileNavDropdown
                locale={i18n.language as "en" | "ar"}
                navigation={navigation}
              />
            )}
          </SheetContent>
        </Dialog>
        <div className="max-[825px]:hidden flex items-center gap-2">
          {navigation.map((item, index) =>
            item.title === "Services" ? (
              <div key={`item-${index}`} className="group relative">
                {DesktopNavList && (
                  <DesktopNavList
                    item={item}
                    locale={i18n.language as "en" | "ar"}
                  />
                )}
              </div>
            ) : (
              <Link href={item.path} key={`item-${index}`}>
                <Button variant="ghost" className="text-lg">
                  {i18n.language === "en" ? item.title : item.titleAR}
                </Button>
              </Link>
            ),
          )}
          <ModeToggle />
          {process.env.NODE_ENV !== "production" && <LanguageToggle />}
        </div>
      </div>
    </nav>
  )
}
