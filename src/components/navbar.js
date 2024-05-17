import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import '../styles/navbar.css'


const Navbar = () => {



  const navList = [
    {
      name: "home",
      link: "/"
    },
    {
      name: "Jobs List",
      link: "/"
    },
    {
      name: "About us",
      link: "/"
    },
    {
      name: "contact us",
      link: "/"
    }

  ]


  return (
    <div className='border-gray-400'>
      <nav className="bg-gray-100 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl  uppercase font-cursive">Career Trackr</span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" className="text-sm  text-gray-500  hover:underline">(122) 123-1234</a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-200">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 space-x-8 py-2 rtl:space-x-reverse md:text-[15px] text-xs ">
              {navList.map((el , index) => (
                <Link to={el.link} className="md:py-2 md:px-5 p-1 cursor-pointer uppercase text-gray-800"
                  key={index}>
                  <span className="link link-underline link-underline-black py-1 hover:text-orange-600">{el.name}</span>
                </Link>
              ))}
              <button className=' tracking-wide md:py-2 md:px-5 p-1 border  border-red-500 text-red-500 outline-none md:rounded-full rounded-md capitalize hover:bg-red-400 hover:text-white transition-all hover:shadow-orange'>Sign In</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;