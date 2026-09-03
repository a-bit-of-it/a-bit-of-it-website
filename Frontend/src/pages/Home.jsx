import Banner from "../Banner";
import Hero from "../Hero.jsx";
import { InquiryProvider } from "../InquiryContext.jsx";
import Sections from "../sections/Sections.jsx";

export default function Home() {
    return (
        <>
            <Banner/>
            <Hero/>
            <div className="app">
                <InquiryProvider>
                    <Sections/>
                </InquiryProvider>
            </div>
        </>
    );
}
