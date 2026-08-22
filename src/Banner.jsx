import './Banner.css'

export default function Banner() {
    return (
        <header className="banner">
            <div className="banner-content">
                <span>a-bit-of-it</span>
                <nav className="navigation">
                    <a href="#cases">CASES</a>
                    <a href="#about">WHO WE ARE</a>
                    <a href="#contact">GET IN TOUCH</a>
                </nav>
            </div>
        </header>
    );
}