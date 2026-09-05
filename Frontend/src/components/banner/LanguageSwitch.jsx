import './LanguageSwitch.css'
import { useTranslation } from 'react-i18next';

const DOMAIN_SUFFIX = { en: '.com', da: '.dk' };

function switchLanguage(lang, i18n) {
    const targetSuffix = DOMAIN_SUFFIX[lang];
    const otherSuffix = lang === 'en' ? DOMAIN_SUFFIX.da : DOMAIN_SUFFIX.en;
    const { hostname, protocol, pathname, search, hash } = window.location;

    if (hostname.endsWith(targetSuffix)) return;

    if (hostname.endsWith(otherSuffix)) {
        const newHostname = hostname.slice(0, -otherSuffix.length) + targetSuffix;
        window.location.href = `${protocol}//${newHostname}${pathname}${search}${hash}`;
        return;
    }

    i18n.changeLanguage(lang);
}

export default function LanguageSwitch() {
    const { i18n } = useTranslation();

    return (
        <div className="language-switch">
            <button
                type="button"
                className="language-switch-button"
                onClick={() => switchLanguage('en', i18n)}
                aria-label="Switch to English"
                aria-pressed={i18n.language === 'en'}
            >
                <img src="/languages/EnglishIcon.svg" alt="English" width={24} height={24} />
            </button>
            <button
                type="button"
                className="language-switch-button"
                onClick={() => switchLanguage('da', i18n)}
                aria-label="Skift til dansk"
                aria-pressed={i18n.language === 'da'}
            >
                <img src="/languages/DanishIcon.svg" alt="Dansk" width={24} height={24} />
            </button>
        </div>
    );
}
