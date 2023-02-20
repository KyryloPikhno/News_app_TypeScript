import {createContext} from "react";

import {I18next} from "../interfaces";

export const I18nextContext = createContext<I18next>({
    language: 'en',
    languages: ['en'],
    routed: false,
    defaultLanguage: 'en',
    generateDefaultLanguagePage: false,
    originalPath: '/',
    path: '/'
});


