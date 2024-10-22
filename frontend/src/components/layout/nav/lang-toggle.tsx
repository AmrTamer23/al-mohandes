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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 512 512"
          >
            <mask id="IconifyId192b598663ef0d621307">
              <circle cx="256" cy="256" r="256" fill="#fff" />
            </mask>
            <g mask="url(#IconifyId192b598663ef0d621307)">
              <path fill="#eee" d="m0 144l256-32l256 32v224l-256 32L0 368Z" />
              <path fill="#d80027" d="M0 0h512v144H0Z" />
              <path fill="#333" d="M0 368h512v144H0Z" />
              <path
                fill="#ff9811"
                d="M250 191c-8 0-17 4-22 14c5-3 16-1 16 13c0 4-2 8-5 10c-8 0-14-14-29-14c-10 0-19 7-19 17v69l46-7l-14 27h66l-14-27l46 7v-69c0-10-9-17-19-17c-15 0-21 14-29 14c8-23-7-37-23-37"
              />
            </g>
          </svg>
        </>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 512 512"
        >
          <mask id="IconifyId192b598663ef0d6211">
            <circle cx="256" cy="256" r="256" fill="#fff" />
          </mask>
          <g mask="url(#IconifyId192b598663ef0d6211)">
            <path
              fill="#eee"
              d="M256 0h256v64l-32 32l32 32v64l-32 32l32 32v64l-32 32l32 32v64l-256 32L0 448v-64l32-32l-32-32v-64z"
            />
            <path
              fill="#d80027"
              d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"
            />
            <path fill="#0052b4" d="M0 0h256v256H0Z" />
            <path
              fill="#eee"
              d="m187 243l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67zm162-81l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Zm162-82l57-41h-70l57 41l-22-67Zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Z"
            />
          </g>
        </svg>
      )}
      <span className="sr-only">Toggle Language</span>
    </Button>
  )
}
