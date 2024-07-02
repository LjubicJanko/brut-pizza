import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    backend: {
      loadPath: 'assets/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: [
        'querystring',
        'localStorage',
        'cookie',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      lookupQuerystring: 'language',
    },
    returnEmptyString: false,
    ns: 'translation',
    defaultNS: 'translation',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
