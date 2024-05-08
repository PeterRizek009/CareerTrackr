import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layouts/ScrollAnimationWrapper";
import headerImage from '../assets/header.jpg'
import { Link } from "react-router-dom";


const Landing = ({
    listUser = [
        {
            name: "Users",
            number: "390",
            icon: "/assets/Icon/heroicons_sm-user.svg",
        },
        {
            name: "Locations",
            number: "20",
            icon: "/assets/Icon/gridicons_location.svg",
        },
        {
            name: "Server",
            number: "50",
            icon: "/assets/Icon/bx_bxs-server.svg",
        },
    ],
}) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="max-w-screen-xl my-16 px-4 xl:px-16 mx-auto"
            id="about"
        >
            <ScrollAnimationWrapper>
                <motion.div
                    className="container mx-auto flex flex-col items-center justify-center md:flex-row md:items-center"
                    variants={scrollAnimation}>
                    <div className="md:w-1/2 md:order-2">
                        <motion.div className="h-full w-full" variants={scrollAnimation}>
                            <img src={headerImage} alt="header" className="mx-auto md:mx-0 w-full md:max-w-md" />
                        </motion.div>
                    </div>
                    <div className="md:w-1/2 md:order-1 text-left md:mx-0 mx-10">
                        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-800 leading-normal py-2">
                            Effortlessly Manage Your Job Applications, From Submission to Success!..
                        </h1>
                        <p className="text-gray-600 mt-4 mb-6">
                            Welcome to Job Trackr, your comprehensive solution for effortlessly managing your job applications,
                            empowering your career journey with insightful analytics and personalized recommendations.
                        </p>
                        <Link to="/home" className='button-primary'>Get Started</Link>
                    </div>



                </motion.div>
            </ScrollAnimationWrapper>
            <div className="relative w-full flex">
                <ScrollAnimationWrapper
                    className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
                    {/* {listUser.map((listUsers, index) => (
                        <motion.div
                            className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                            key={index}
                            custom={{ duration: 2 + index }}
                            variants={scrollAnimation}
                        >
                            <div className="flex mx-auto w-40 sm:w-auto">
                                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                                    <img src={listUsers.icon} className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl text-black-600 font-bold">
                                        {listUsers.number}+
                                    </p>
                                    <p className="text-lg text-black-500">{listUsers.name}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))} */}
                </ScrollAnimationWrapper>
                <div
                    className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
                    style={{ filter: "blur(114px)" }}
                ></div>
            </div>
        </div>
    );
};

export default Landing;
