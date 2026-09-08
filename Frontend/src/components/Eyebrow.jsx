import './Eyebrow.css';

export default function Eyebrow({ children, level: Level = 'h4', className = '' }) {
    return <Level className={`eyebrow ${className}`.trim()}>{children}</Level>;
}
