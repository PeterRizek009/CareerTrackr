import { Link } from "react-router-dom";


const Footer = () => {

    const Links  =  [
        {
            title : "About Us"
        },
        {
            title : "Blog"
        },
        {
            title : "Github"
        },


    ]

    const resources  =  [
        {
            title : "Terms & Conditions"
        },
        {
            title : "Privacy Policy"
        },
        {
            title : "Contact Us"
        },


    ]

    return (
        <div>
           
            <footer className="relative bg-red-100 pt-8 pb-6 mt-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-lg  leading-relaxed font-medium">Let's keep in touch!</h4>
                            <h5 className="text-md mt-0 mb-2 text-gray-500">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <button className="bg-white text-orange-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fa fa-globe" />
                                    </button>
                                    <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-linkedin" />
                                    </button>
                                    <button className="bg-white text-gray-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-github" />
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-gray-800 text-sm font-semibold mb-2">Useful Links</span>
                                    <ul className="list-unstyled">
                                        {Links.map((el , index) => (
                                            <li key={index}>
                                            <Link className="text-gray-600 hover:text-gray-400  block pb-2 text-sm" to="/">{el.title}</Link>
                                        </li>
                                        ))}
                                        
                                      
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-gray-800 text-sm font-semibold mb-2">Other Resources</span>
                                    <ul className="list-unstyled">
                                    {resources.map((el , index) => (
                                            <li key={index}>
                                            <Link className="text-gray-600 hover:text-gray-400  block pb-2 text-sm" to="/">{el.title}</Link>
                                        </li>
                                        ))}
                                     
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                   <hr className="my-6  border-gray-600" /> 
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-600 font-semibold py-1">
                                Copyright © <span id="get-current-year">2024</span><Link to="" className="text-gray-500 hover:text-gray-800" target="_blank">
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
}
export default Footer;