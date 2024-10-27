"use client";

import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";

import { MenuIcon } from "lucide-react";

import { DesktopNavList } from "./desktop-nav-list";
import { MobileNavDropdown } from "./mobile-nav-list";
import { LanguageToggle } from "@/components/layout/nav/lang-toggle";
import { ModeToggle } from "@/components/layout/nav/mode-toggle";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/assets/logo.png";

const navigation = [
  {
    title: "Home",
    titleAR: "الرئيسية",
    path: "/",
  },
  {
    title: "Services",
    titleAR: "خدماتنا",
    path: `/services`,
  },
  {
    title: "Projects",
    titleAR: "مشروعاتنا",
    path: `/projects`,
  },
  {
    title: "Contact",
    titleAR: "تواصل معنا",
    path: `/services`,
  },
  {
    title: "Jobs",
    titleAR: "التوظيف",
    path: `/services`,
  },
  {
    title: "About",
    titleAR: "عن الشركة",
    path: `/about`,
  },
];

export function Navbar() {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar";

  const isMobile = window.innerWidth < 768;

  return (
    <nav className="fixed z-[50] mt-[2rem] flex h-fit w-full min-w-full items-center justify-center p-2">
      <div
        className={clsx(
          "relative flex w-[90%] justify-between rounded-xl border border-white border-opacity-20 bg-white bg-opacity-10 p-2 shadow-lg backdrop-blur-lg backdrop-filter dark:border-zinc-900 dark:bg-black",
          !isRTL ? "flex-row" : "flex-row-reverse",
        )}
      >
        <Dialog>
          <div
            className={clsx(
              "flex w-full items-center",
              !isRTL ? "justify-start" : "justify-end",
            )}
          >
            <div className={clsx("flex w-fit items-center gap-1")}>
              {isMobile && (
                <SheetTrigger className="min-[825px]:hidden flex w-fit items-center justify-between gap-4 p-2 transition">
                  <MenuIcon />
                </SheetTrigger>
              )}
              <Link to="/" className="max-h-10">
                <img src={Logo} alt="Al-Mohandes" className="w-56" />
              </Link>
            </div>
            <div
              className={clsx(
                "flex items-center gap-2 lg:hidden",
                isRTL && "flex-row-reverse",
              )}
            >
              {/* <ModeToggle /> */}
              <LanguageToggle />
            </div>
          </div>
          <SheetContent side={!isRTL ? "left" : "right"}>
            <SheetHeader>
              <SheetTitle>
                <Link to="/">
                  <img src={Logo} alt="Al-Mohandes" className="w-56" />
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
        <div
          className={clsx(
            "max-[825px]:hidden flex items-center gap-2",
            isRTL && "flex-row-reverse",
          )}
        >
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
              <Link to={item.path} key={`item-${index}`}>
                <Button variant="ghost" className="text-lg">
                  {isRTL ? item.titleAR : item.title}
                </Button>
              </Link>
            ),
          )}
          {/* <ModeToggle /> */}
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
