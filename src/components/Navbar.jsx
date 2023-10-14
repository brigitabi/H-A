import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);


  const handleNav = () => { 
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else { 
        document.body.style.overflow = 'scroll'
    }
  }

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20">
        {' '}
        HIRE & ADMIRE
      </h1>

      <HiOutlineMenu onClick={handleNav} className="z-20 cursor-pointer text-white" size={30} />
      <div
        className={
          nav
            ? 'ease-in dudration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8">Home</li>
          <li className="font-bold text-3xl p-8">Interior</li>
          <li className="font-bold text-3xl p-8">Exterior</li>
          <li className="font-bold text-3xl p-8"> Careers </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;