import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../locales/en/translation.json";
import faTranslation from "../locales/fa/translation.json";

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      fa: {
        translation: faTranslation,
      },
    },
    lng: "fa", // Default language
    fallbackLng: "en", // Fallback to English
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
