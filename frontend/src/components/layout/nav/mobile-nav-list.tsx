import { LanguageToggle } from "./lang-toggle"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"

export function MobileNavDropdown({
  navigation,
  locale,
}: {
  navigation: {
    title: string
    titleAR: string
    path: string
  }[]
  locale: "en" | "ar"
}) {
  return (
    <>
      <div className="z-[99] mt-[1rem] flex flex-col space-y-3">
        <a href={navigation?.[0]?.path} key={`item-0`}>
          <Button variant="ghost" className="text-lg">
            {locale === "en"
              ? navigation?.[0]?.title
              : navigation?.[0]?.titleAR}
          </Button>
        </a>
        <a href={navigation?.[1]?.path} key={`item-1`}>
          <Button variant="ghost" className="text-lg">
            {locale === "en"
              ? navigation?.[1]?.title
              : navigation?.[1]?.titleAR}
          </Button>
        </a>

        <a href={navigation?.[3]?.path} key={`item-3`}>
          <Button variant="ghost" className="text-lg">
            {locale === "en"
              ? navigation?.[3]?.title
              : navigation?.[3]?.titleAR}
          </Button>
        </a>
        <a href={navigation?.[4]?.path} key={`item-4`}>
          <Button variant="ghost" className="text-lg">
            {locale === "en"
              ? navigation?.[4]?.title
              : navigation?.[4]?.titleAR}
          </Button>
        </a>
        <a href={navigation?.[5]?.path} key={`item-5`}>
          <Button variant="ghost" className="text-lg">
            {locale === "en"
              ? navigation?.[5]?.title
              : navigation?.[5]?.titleAR}
          </Button>
        </a>
        <div className="flex gap-2">
          <ModeToggle />
          {process.env.NODE_ENV !== "production" && <LanguageToggle />}
        </div>
      </div>
    </>
  )
}
