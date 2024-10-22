import { initReactI18next } from "react-i18next"
import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import arTranslation from "@/locales/ar/translation.json"
import enTranslation from "@/locales/en/translation.json"

i18n
  .use(LanguageDetector) // Add the language detector
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      lookupLocalStorage: "lang",
    },
  })

export default i18n
