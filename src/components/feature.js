import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layouts/ScrollAnimationWrapper";
import featureImage from '../assets/Resume-bro.png'



const features = [
    "Add unlimited Jobs record.",
    "Modify any Job record.",
    "Supercharged VPN",
    "No specific time limits."
]

const Feature = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (

        <div className="max-w-screen-xl my-8 px-4 xl:px-0 mx-auto md:h-[600px]">
            <ScrollAnimationWrapper>
                <div className="flex flex-col items-center md:flex-row  justify-center">
                    <div className="md:w-1/2 md:order-1 md:ml-6">
                        <motion.div className="h-full w-full" variants={scrollAnimation}>
                            <img src={featureImage} alt="header" className="mx-auto md:mx-0 w-full  md:max-w-lg" />
                        </motion.div>
                    </div>


                    <div className="md:w-3/5 md:order-2 text-left mx-auto h-full xl:px-8 mr-2">
                        <motion.div className="flex flex-col items-end justify-center" variants={scrollAnimation}>
                            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                                We Provide Many Features You Can Use
                            </h3>
                            <p className="my-2 text-black-500">
                                You can explore the features that we provide with fun and have their
                                own functions each feature.
                            </p>
                            <ul className="text-black-500 self-start list-inside ml-8">
                                {features.map((feature, index) => (
                                    <motion.li
                                        className="relative cursor-pointer p-1 circle-check custom-list"
                                        custom={{ duration: 2 + index }}
                                        variants={scrollAnimation}
                                        key={feature}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: {
                                                duration: .2
                                            }
                                        }}>

                                        {feature}
                                    </motion.li>
                                )
                                )}
                            </ul>
                        </motion.div>
                    </div>
                </div >
            </ScrollAnimationWrapper>
        </div>
    );
};

export default Feature;
