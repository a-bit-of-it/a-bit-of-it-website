import './CaseImages.css'

export default function CaseImages({ images }) {
    const shown = images.slice(0, 2);

    return (
        <div className={`case-images`}>
            {shown.map((src, i) => (
                <img key={i} src={src} alt="" className="case-image" />
            ))}
        </div>
    );
}
