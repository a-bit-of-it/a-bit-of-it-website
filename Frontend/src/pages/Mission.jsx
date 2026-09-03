import Banner from "../Banner";
import WhyWeExist from "../sections/WhyWeExist.jsx";
import Footer from "../Footer.jsx";

export default function Mission() {
    return (
        <>
            <Banner/>
            <div className="app">
                <WhyWeExist/>
            </div>
            <Footer/>
        </>
    );
}
