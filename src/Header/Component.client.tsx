'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import type { Header } from '@/payload-types'
import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { Dialog } from '@/components/ui/dialog'
import clsx from 'clsx'
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
      {/* <div className="py-8  flex justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <HeaderNav header={header} />
      </div> */}

      <nav className="fixed w-[80%] z-[50] mt-3 flex h-fit  items-center justify-center p-2">
        <div
          className={clsx(
            'relative flex w-[90%] justify-between rounded-xl border border-white border-opacity-20 bg-white bg-opacity-80 p-4 shadow-lg backdrop-blur-lg backdrop-filter dark:border-zinc-900',
            // !isRTL ? 'flex-row' : 'flex-row-reverse',
          )}
        >
          <Dialog>
            <div
              className={clsx(
                'flex w-full items-center',
                //  !isRTL ? 'justify-start' : 'justify-end'
              )}
            >
              <div className={clsx('flex w-fit items-center gap-1')}>
                {/* {isMobile && (
                  <SheetTrigger className="min-[825px]:hidden flex w-fit items-center justify-between gap-4 p-2 transition">
                    <MenuIcon />
                  </SheetTrigger>
                )} */}
                <Link href="/" className="max-h-10">
                  <Logo />
                </Link>
              </div>
              <div
                className={clsx(
                  'flex items-center gap-2 lg:hidden',
                  //  isRTL && 'flex-row-reverse'
                )}
              >
                {/* <ModeToggle /> */}
                {/* <LanguageToggle /> */}
              </div>
            </div>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/">
                    <Logo />
                  </Link>
                </SheetTitle>
                {/* <SheetDescription>{t('description')}</SheetDescription> */}
              </SheetHeader>
              {/* {MobileNavDropdown && (
                <MobileNavDropdown locale={i18n.language as 'en' | 'ar'} navigation={navigation} />
              )} */}
            </SheetContent>
          </Dialog>
          <div
            className={clsx(
              'max-[825px]:hidden flex items-center gap-2',
              // isRTL && 'flex-row-reverse',
            )}
          >
            <HeaderNav header={header} />

            {/* <ModeToggle /> */}
            {/* <LanguageToggle /> */}
          </div>
        </div>
      </nav>
    </header>
  )
}
