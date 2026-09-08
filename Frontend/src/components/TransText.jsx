import { Trans } from "react-i18next";

export default function TransText({ i18nKey, components, values }) {
    return <Trans i18nKey={i18nKey} components={components} values={values} />;
}
