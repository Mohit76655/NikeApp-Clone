import { useState } from "react";

import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { close } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);

  return (
    
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
        <img src={headerLogo} 
        alt="Logo" 
        width={130}
        height={29}
        />
        </a>
        <ul className='flex-1 flex justify-center 
        items-center gap-16 max-lg:hidden z-20'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}
              className=' font-montserrat leading-normal 
              text-lg text-slate-gray hover:text-orange-600 hover:border-b-2 border-orange-400'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={toggle ? close : hamburger} alt="menu"
          width={25}
          height={25}
          onClick={() => setToggle(!toggle)}
          />
        <div
          className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-15 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-20`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col bg-slate-800 text-white p-5 rounded z-20">
            {navLinks.map((item, index) => (
              <li
                key={item.label}
                className={`font-poppins font-medium cursor-pointer text-[16px] z-50 ${
                  active === item.label ? "text-green" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(item.label)}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav;
