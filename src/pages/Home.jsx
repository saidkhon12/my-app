import React from "react";
import Nav from "../nav";
import Section from "../section";
import New from "../new";
import New1 from "../New1";
import Registr from "../registr";
import Footer from "../footer";
import Banner from "../Banner";


const Home = () => {
    return (
        <>
            <Nav />
            <Banner/>
            <Section />
            <New />
            <New1 />
            <Registr />
            <Footer />
        </>
    )
}

export default Home