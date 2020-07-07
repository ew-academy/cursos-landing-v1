import i18next from "i18next"

i18next.init({
  fallbackLng: "pt",
  resources: {
    pt: {
      translations: require("./locales/pt.json"),
    },
    en: {
      translations: require("./locales/en.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  react: {
    wait: true,
  },
})

i18next.languages = ["pt", "en"]

export default i18next
