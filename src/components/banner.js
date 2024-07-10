const Banner = () => {

    return (
        <div className="block  md:w-1/2  rounded-lg mx-auto  md:h-[180px] w-4/5 bg-gray-100 shadow-md">
            <div className="flex justify-between items-center px-8">
            <div className="flex flex-col text-left w-1/2 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0 ">
                <h1 className="text-black-600 md:text-lg text-base leading-relaxed font-medium py-6">
                    Subscribe Now for <br/> Get Special Features!
                </h1>
                <p>Let's subscribe with us and find the success.</p>
            </div>
            <button className="bg-red-600 text-gray-100 rounded-lg px-4 py-3  hover:shadow-lg" >Subscribe</button>
            </div>
        </div>

    );
}

export default Banner;
