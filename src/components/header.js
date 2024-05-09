import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layouts/ScrollAnimationWrapper";
import headerImage from '../assets/header.jpg'
import { Link } from "react-router-dom";



const Header = () => {


    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="max-w-screen-xl my-8 px-4 xl:px-8 mx-auto">
            <ScrollAnimationWrapper>
                <motion.div
                    className="container mx-auto flex flex-col items-center justify-center md:flex-row md:items-center"
                    variants={scrollAnimation}>
                    <div className="md:w-1/2 md:order-2 md:ml-6">
                        <motion.div className="h-full w-full" variants={scrollAnimation}>
                            <img src={headerImage} alt="header" className="mx-auto md:mx-0 w-full md:max-w-lg" />
                        </motion.div>
                    </div>
                    <div className="md:w-1/2 md:order-1 text-left md:mx-0 mx-10">
                        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-800 leading-normal my-2">
                            Effortlessly Manage Your Job Applications, From Submission to Success!..
                        </h1>
                        <p className="text-gray-600 my-6">
                            Welcome to Job Trackr, your comprehensive solution for effortlessly managing your job applications,
                           
                        </p>
                        <Link to="/home" className='button-primary mt-4'>Get Started</Link>
                    </div>

                </motion.div>
            </ScrollAnimationWrapper>
        </div>
    );
};

export default Header;
