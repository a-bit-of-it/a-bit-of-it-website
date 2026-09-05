import { Trans } from "react-i18next";

export default function TransText({ i18nKey, components }) {
    return <Trans i18nKey={i18nKey} components={components} />;
}
