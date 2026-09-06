import './CaseImages.css'

export default function CaseImages({ images }) {
    return (
        <div className={`case-images`}>
            {images.map(({ src, alt }, i) => (
                <img key={i} src={src} alt={alt} className="case-image" />
            ))}
        </div>
    );
}
