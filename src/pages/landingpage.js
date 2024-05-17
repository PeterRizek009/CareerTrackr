import React from "react";
import Header from "../components/header";
import Feature from "../components/feature";
import Banner from "../components/banner";
import Testimoni from "../components/testmonis";


const Landing = () => {


    return (
        <div>
            <Header />

            <div className="w-full my-8 bg-gray-200">
                <Feature />
            </div>
            <Testimoni />
            {/* <Banner /> */}
        </div>
    );
};

export default Landing;
