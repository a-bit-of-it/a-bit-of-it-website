import Banner from "../Banner";
import GetInTouch from "../sections/GetInTouch.jsx";
import Footer from "../Footer.jsx";

export default function Contact() {
    return (
        <>
            <Banner/>
            <div className="app">
                <GetInTouch/>
            </div>
            <Footer/>
        </>
    );
}
