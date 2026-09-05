import './CaseImages.css'

export default function CaseImages({ images }) {
    return (
        <div className={`case-images`}>
            {images.map((src, i) => (
                <img key={i} src={src} alt="" className="case-image" />
            ))}
        </div>
    );
}
