import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        i18n.language === "ar" ? changeLanguage("en") : changeLanguage("ar")
      }}
      className="bg-transparent"
    >
      {i18n.language === "en" ? (
        <>
          <img
            src="https://wp.dbrandria.com/wp-content/uploads/2024/09/arIcon.png"
            alt="AR"
            width={50}
            height={50}
            className="h-full w-full object-cover"
          />
        </>
      ) : (
        <img
          src="https://wp.dbrandria.com/wp-content/uploads/2024/09/enIcon.png"
          alt="EN"
          width={50}
          height={50}
          className="h-full w-full object-cover"
        />
      )}
      <span className="sr-only">Toggle Language</span>
    </Button>
  )
}
