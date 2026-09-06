import { useLocation } from "react-router-dom";

const DOMAIN_BY_LANG = { en: "https://a-bit-of-it.com", da: "https://a-bit-of-it.dk" };

// React 19 hoists <title>/<meta>/<link> rendered anywhere in the tree into <head>,
// so no react-helmet-style library is needed for per-page metadata.
export default function PageMeta({ title, description }) {
    const { pathname } = useLocation();

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="alternate" hreflang="en" href={`${DOMAIN_BY_LANG.en}${pathname}`} />
            <link rel="alternate" hreflang="da" href={`${DOMAIN_BY_LANG.da}${pathname}`} />
            <link rel="alternate" hreflang="x-default" href={`${DOMAIN_BY_LANG.en}${pathname}`} />
        </>
    );
}
