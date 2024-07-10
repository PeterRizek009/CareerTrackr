import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layouts/ScrollAnimationWrapper";



const Stats = () => {



    const scrollAnimation = useMemo(() => getScrollAnimation(), []);


    const data = [
        {
            icon: "fa fa-pencil-square",
            css: "bg-blue-200",
            title: 'User-friendly data entry',
            text: 'User-friendly data entry systems streamline the process of inputting information, ensuring ease and efficiency for users...'
        },
        {
            icon: "far fa-comments",
            css: "bg-red-200",
            title: 'Reporting Tool',
            text: 'The application empowers customers with comprehensive reporting capabilities,  extract valuable insights from their data ...'
        },
        {
            icon: "fa fa-pie-chart",
            css: "bg-green-200",
            title: 'Jobs Statistics',
            text: 'The application equips customers with insightful statistics presented through intuitive charts,facilitating easy comprehension ....'
        }
    ]
    return (

        <div className="max-w-screen-xl my-8 px-4 xl:px-8 mx-auto">
            <div className="w-full mx-auto">
                <h2 className="text-3xl text-center py-8 ">Career Trackr application is packed with <span>awesome features</span></h2>
            </div>
            <ScrollAnimationWrapper>
                <div className="flex max-w-screen-xl mx-auto items-center justify-between text-center py-8 flex-wrap md:flex-nowrap">
                    {data.map((el , index) => (
                        <motion.div className="md:w-1/3 w-full flex flex-col  justify-center m-6 md:mb-12" variants={scrollAnimation} key={index}>
                            <div className="text-4xl">
                                <span className={`p-4 ${el.icon} ${el.css}`} />
                            </div>
                            <div className="card-body my-4">
                                <h4 className="card-title text-xl py-2">{el.title}</h4>
                                <p className="text-gray-400 mx-auto">{el.text}</p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </ScrollAnimationWrapper>
        </div>






    );
}

export default Stats;