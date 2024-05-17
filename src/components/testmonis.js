import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layouts/ScrollAnimationWrapper";
import SliderComponent from "./slider";


const Testimoni = () => {


    const scrollAnimation = useMemo(() => getScrollAnimation(), []);



    return (
        <>
            <div className="max-w-screen-xl my-10 px-4 xl:px-8 mx-auto bg-white">
                <ScrollAnimationWrapper>
                    <motion.h3
                        variants={scrollAnimation}
                        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
                        Trusted by Thousands of Happy Customer{" "}
                    </motion.h3>
                    <motion.p
                        variants={scrollAnimation}
                        className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
                    >
                        These are the stories of our customers who have joined us with great
                        pleasure when using this crazy feature.
                    </motion.p>
                </ScrollAnimationWrapper>
       
            {/* <ScrollAnimationWrapper className="w-full flex flex-col py-12">
                <motion.div variants={scrollAnimation}>
                    <SliderComponent />
                </motion.div>
            </ScrollAnimationWrapper> */}
            <SliderComponent />


            </div>
        </>
    );
};

export default Testimoni;


