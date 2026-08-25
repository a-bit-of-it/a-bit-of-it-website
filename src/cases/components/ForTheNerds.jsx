import './ForTheNerds.css';
import {useState} from "react";

export default function ForTheNerds({ text, children })
{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="for-the-nerds">
            <button
                type="button"
                className="for-the-nerds-toggle"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
            >
                <span className="for-the-nerds-title">For nerds</span>
                <span className={`for-the-nerds-chevron ${isOpen ? "for-the-nerds-chevron-open" : ""}`}>
                    ▾
                </span>
            </button>

            <div className={`for-the-nerds-collapse ${isOpen ? "for-the-nerds-collapse-open" : ""}`}>
                <div className="for-the-nerds-collapse-inner">
                    <p className="for-the-nerds-text">{text}</p>
                    {children}
                </div>
            </div>
        </div>
    );
}