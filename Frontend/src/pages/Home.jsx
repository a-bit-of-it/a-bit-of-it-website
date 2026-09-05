import Hero from "../Hero.jsx";
import Sections from "../sections/Sections.jsx";

export default function Home() {
    return (
        <div className="page">
            <Hero/>
            <div className="app">
                <Sections/>
            </div>
        </div>
    );
}
