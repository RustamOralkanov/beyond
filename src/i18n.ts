import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationKK from "./locales/kk.json";
import translationRU from "./locales/ru.json";
// import translationEN from "./locales/en.json";
// import translationTR from "./locales/tr.json";

const resources = {
    // en: {
    //     translation: translationEN,
    // },
    // tr: {
    //     translation: translationTR,
    // },
    ru: {
        translation: translationRU,
    },
    kk: {
        translation: translationKK,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
