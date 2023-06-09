
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import HeaderSlider from "./Common/HeaderSlider";

import './Home.css';
import Section1 from "./HomePage/Section1";
import Section2 from "./HomePage/Section2";
import Section3 from "./HomePage/Section3";
import Section4 from "./HomePage/Section4";
import Section5 from "./HomePage/Section5";
import Section6 from "./HomePage/Section6";
import Section7 from "./HomePage/Section7";
import Section8 from "./HomePage/Section8";

const Home = () => {
    return(
        <div>
            <Header />
            <HeaderSlider />
            <br/><br/>
            <Section1 />
            <br/><br/>
            <Section2 />
            <Section3 />
            <br/><br/>
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Footer />
        </div>
    );
}


export default Home;