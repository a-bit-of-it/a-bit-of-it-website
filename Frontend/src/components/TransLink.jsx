import { Trans } from "react-i18next";

export default function TransLink({ i18nKey, href, className }) {
    return (
        <Trans
            i18nKey={i18nKey}
            components={{
                a: (
                    <a
                        className={className}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                )
            }}
        />
    );
}
