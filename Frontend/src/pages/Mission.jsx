import Banner from "../Banner";
import WhyWeExist from "../sections/WhyWeExist.jsx";
import Footer from "../Footer.jsx";

export default function Mission() {
    return (
        <div className="page">
            <Banner/>
            <div className="app">
                <WhyWeExist/>
            </div>
            <Footer/>
        </div>
    );
}
