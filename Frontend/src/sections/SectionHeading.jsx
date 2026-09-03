export default function SectionHeading({ id, header, subtitle }) {
    return (
        <div className="section-heading">
            <h1 className="section-header" id={id}>{header}</h1>
            <p className="section-subtitle">{subtitle}</p>
        </div>
    );
}
