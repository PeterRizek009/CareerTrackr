import React from "react";
import Header from "../components/header";
import Feature from "../components/feature";
import Banner from "../components/banner";
import Stats from "../components/stats";




const Landing = () => {

    return (
        <div>
            <Header />
            <div className="w-full my-8 bg-gray-100">
                <Feature />
            </div>

            <div className="w-full my-8 bg-white">
                <Stats />
            </div>
            <Banner />


        </div>
    );
};

export default Landing;
