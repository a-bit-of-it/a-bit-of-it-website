import './Home.css';
import Cases from "./components/Cases.jsx";
import Services from "./components/Services.jsx";
import Hero from "./components/Hero.jsx";

export default function Home() {
    return (
        <div className="page">
            <Hero/>
            <div className="app">
                <Cases/>
                <Services/>
            </div>
        </div>
    );
}
