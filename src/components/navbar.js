import React from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.png'

const Navbar = () => {
  return (
    <div className='border-gray-400'>
      <nav className="bg-gray-100 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl  whitespace-nowrap uppercase">Career Trackr</span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" className="text-sm  text-gray-500  hover:underline">(555) 412-1234</a>

            {/* <a  className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a> */}
          </div>
        </div>
      </nav>
      <nav className="bg-gray-200">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <Link to="/" className="px-8 cursor-pointer text-xl font-mono uppercase text-gray-800 hover:underline" >
                Home
              </Link>

            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;