import './Banner.css'

export default function Banner() {
    return (
        <header className="banner">
            <div className="banner-content">
                <a href="#" className="banner-logo">a bit of it</a>
                <nav className="navigation">
                    <a href="#cases">Cases</a>
                    <a href="#about">Who we are</a>
                    <a href="#contact">Get in touch</a>
                </nav>
            </div>
        </header>
    );
}
