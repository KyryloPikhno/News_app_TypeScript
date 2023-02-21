import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import Backend from 'i18next-http-backend';
import i18n from 'i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'en',
        supportedLngs: ["en", "uk"],
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    Home: {
                        Home: "Home"
                    },
                    NewsApp: {
                        NewsApp: "NewsDay"
                    },
                    Login: {
                        Login: "Login"
                    },
                    Logout: {
                        Logout: "Logout"
                    },
                    News: {
                        News: "News"
                    },
                    Profile: {
                        Profile: "Profile"
                    },
                    Language: {
                        Language: "EN"
                    },
                    UK:{
                        UK:"UK"
                    },
                    EN:{
                        EN:"EN"
                    }
                }
            },
            uk: {
                translation: {
                    Home: {
                        Home: "Головна"
                    },
                    NewsApp: {
                        NewsApp: "ДеньНовин"
                    },
                    Login: {
                        Login: "Увійти"
                    },
                    Logout: {
                        Logout: "Вийти"
                    },
                    News: {
                        News: "Новини"
                    },
                    Profile: {
                        Profile: "Профіль"
                    },
                    Language: {
                        Language: "УК"
                    },
                    UK:{
                        UK:"УК"
                    },
                    EN:{
                        EN:"АН"
                    }
                }
            }
        }
    });

export default i18n;