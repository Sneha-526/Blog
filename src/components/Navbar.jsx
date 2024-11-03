// import React from 'react'
import { NavLink } from 'react-router-dom'

import { FaBars, FaDribbble, FaFacebook, FaTwitter, FaXmark } from "react-icons/fa6";
import { useState } from 'react';

const Navbar = () => {
  const[isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/services", link: "Services"},
        {path: "/about", link: "About"},
        {path: "/blogs", link: "Blog"},
        {path: "/contact", link: "Contact"},        
    ]
  return (
    <div>
      <header className="bg-black text-white fixed top-0 left-0 right-0">
        <nav className="px-4 py-4 max-w-full mx-auto flex justify-between items-center m-0">
            <a href="/" className="text-xl font-bold text-white">Design <span className="text-orange-500">DK</span></a>

            <ul className='md:flex gap-12 text-lg hidden'>
              {
                navItems.map(({path, link}) => <li className='text-white' key={path}>
                <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
                </li>)
              }
            </ul>

            <div className='text-white lg:flex gap-4 items-center hidden'>
              <a href="/" className='hover:text-orange-500'><FaFacebook/></a>
              <a href="/" className='hover:text-orange-500'><FaDribbble/></a>
              <a href="/" className='hover:text-orange-500'><FaTwitter/></a>
              <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ese-in'>Log in</button>
            </div>

            <div className='md:hidden gap-'> 
              <button onClick={toggleMenu} className='cursor-pointer'>{
                  isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5' />
                }
                </button>
            </div>

            <div><ul className={`md:hidden gap-12  text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
              {
                navItems.map(({path, link}) => <li className='text-black' key={path}>
                <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                </li>)
              }
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
