import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderComponent = () => {

    var settings = {

        dots: true,
        customPaging: function (i) {
            return (
                <a className="">
                    <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
                </a>
            );
        },
        dotsClass: "slick-dots w-max absolute mt-20  ",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,

    };



    // const listTestimoni = [
    //     {
    //         name: "iezh Robert",
    //         city: "Warsaw",
    //         country: "Poland",
    //         rating: "4.5",
    //         testimoni: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    //         // Replace "path_to_image1.png" with the actual path to your image
    //     },
    //     {
    //         name: "Another Person",
    //         city: "Some City",
    //         country: "Some Country",
    //         rating: "4.0",
    //         testimoni: "Another great testimonial!"
    //         // Replace "path_to_image2.png" with the actual path to your image
    //     }
    // ];




    const [sliderRef, setSliderRef] = useState(null);

    return (
        <div className="w-3/4 mx-auto ">
            <Slider
                {...settings}
                arrows={false}
                ref={setSliderRef}
              
            >
                <div className="flex justify-between">
                    <div className="px-3">
                        <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-12 flex flex-col">
                            <h1>hello</h1>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-12 flex flex-col">
                            <h1>hello</h1>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-12 flex flex-col">
                            <h1>hello</h1>
                        </div>
                    </div>
                </div>


            </Slider >

            <div className="flex w-full items-center justify-end">
                <div className="flex flex-none justify-between w-auto mt-14">
                    <div
                        className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                        onClick={sliderRef?.slickPrev}
                    >
                        back
                    </div>
                    <div
                        className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                        onClick={sliderRef?.slickNext}
                    >
                        next
                    </div>
                </div>
            </div>
        </div >
    );

}

export default SliderComponent;