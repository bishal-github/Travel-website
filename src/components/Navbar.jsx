import React, { useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'

const Navbar = () => {
    const [nav, setNav] = useState(false);

const handleNav=()=>{
    setNav(!nav);
}

  return (
    <div className='absolute w-full flex justify-between p-4 items-center overflow-hidden'> 
        <h1 className='text-white
        font-bold text-2xl z-20'>Experiences</h1>
        <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={30} />
       <div className={nav ? 'fixed top-0 left-0 w-full h-screen bg-black/90 text-gray-300 px-4 py-7 flex-col z-10 ease-in duration-300' : 'absolute top-0 left-[-100%] h-screen z-10 ease-in duration-300'}>
         <ul className='fixed flex flex-col justify-center items-center w-full h-screen'>
            <li className='font-bold text-3xl p-8'>Home</li>
            <li className='font-bold text-3xl p-8'>Destinations</li>
            <li className='font-bold text-3xl p-8'>Reservations</li>
            <li className='font-bold text-3xl p-8'>Amenities</li>
            <li className='font-bold text-3xl p-8'>Rooms</li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar
