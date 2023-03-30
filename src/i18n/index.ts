import detector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import i18n from "i18next";
import pt from "./pt.json";
import en from "./en.json";

const resources = {
    pt: {
        translation: pt
    },
    en: {
        translation: en
    }
}

i18n.use(initReactI18next).use(detector).init({
    resources,
    fallbackLng: "en",

    interpolation: {
        escapeValue: false
    }
});

export default i18n;