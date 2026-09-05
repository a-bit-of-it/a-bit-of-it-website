import './GithubLink.css'
import {GithubIcon} from "../../../Icons.jsx";

export default function GithubLink() {
    return (
        <a
            className="github-link"
            href="https://github.com/a-bit-of-it"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="a bit of IT on GitHub"
        >
            <GithubIcon/>
            a-bit-of-it
        </a>
    );
}
