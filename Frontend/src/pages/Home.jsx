import Banner from "../Banner";
import Hero from "../Hero.jsx";
import Sections from "../sections/Sections.jsx";
import Footer from "../Footer.jsx";

export default function Home() {
    return (
        <div className="page">
            <Banner/>
            <Hero/>
            <div className="app">
                <Sections/>
            </div>
            <Footer/>
        </div>
    );
}
