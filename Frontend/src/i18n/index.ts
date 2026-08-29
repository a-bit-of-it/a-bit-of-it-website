import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import da from './locales/da/translation.json';

function detectLanguageFromDomain(): 'en' | 'da' {
    const hostname = window.location.hostname;
    if (hostname.endsWith('.dk')) return 'da';
    return 'en';
}

i18n
    .use(initReactI18next)
    .init({
        resources: { en: { translation: en }, da: { translation: da } },
        lng: detectLanguageFromDomain(),
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
    });

export default i18n;