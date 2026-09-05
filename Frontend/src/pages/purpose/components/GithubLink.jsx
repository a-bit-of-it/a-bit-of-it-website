import './GithubLink.css'

export default function GithubLink() {
    return (
        <a
            className="github-link"
            href="https://github.com/a-bit-of-it"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="a bit of IT on GitHub"
        >
            <svg className="github-link-icon" width="20" height="20" viewBox="0 0 19 19" aria-hidden="true">
                <use href="/icons.svg#github-icon" />
            </svg>
            a-bit-of-it
        </a>
    );
}
