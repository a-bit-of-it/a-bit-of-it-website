import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import da from './locales/da/translation.json';

function detectLanguageFromDomain(): 'en' | 'da' {
    const hostname = window.location.hostname;
    if (hostname.endsWith('.dk')) return 'da';
    return 'en';
}

const initialLanguage = detectLanguageFromDomain();
document.documentElement.lang = initialLanguage;

i18n
    .use(initReactI18next)
    .init({
        resources: { en: { translation: en }, da: { translation: da } },
        lng: initialLanguage,
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
    });

// Keeps <html lang> correct when changeLanguage() is called directly,
// e.g. on domains that aren't recognized as either .dk or .com.
i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
});

export default i18n;