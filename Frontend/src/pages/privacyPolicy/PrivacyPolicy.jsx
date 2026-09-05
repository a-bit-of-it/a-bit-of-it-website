import {useTranslation} from "react-i18next";
import SectionHeading from "../../components/SectionHeading.jsx";

export default function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <div className="privacy-policy">
            <div className="section">
                <SectionHeading header={t('privacy-policy.header')} subtitle=""/>
                <p>{t('privacy-policy.p1')}</p>
                <p>{t('privacy-policy.p2')}</p>
                <p>{t('privacy-policy.p3')}</p>
            </div>
        </div>
    );
}