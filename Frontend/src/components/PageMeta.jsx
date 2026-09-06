// React 19 hoists <title>/<meta> rendered anywhere in the tree into <head>,
// so no react-helmet-style library is needed for per-page metadata.
export default function PageMeta({ title, description }) {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
        </>
    );
}
