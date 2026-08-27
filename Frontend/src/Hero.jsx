import './Hero.css'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-kicker">Cool people. Cool tech.</p>
                <h1 className="hero-headline">We do not sell software. We create solutions.</h1>
                <p className="hero-subline">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#cases" className="hero-cta">See what we've built</a>
            </div>
        </section>
    );
}
