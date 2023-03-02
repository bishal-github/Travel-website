import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src='https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg' alt="" srcset="" />
      <div className='bg-black/30 top-0 left-0 w-full h-screen absolute' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] absolute m-auto p-4'>
            <p>All Inclusive</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Gateways</h1>
            <p className='max-w-[600px] text-xl drop-shadow-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In pariatur harum autem? Facilis cupiditate excepturi laboriosam, ipsam omnis cumque impedit!</p>
            <button className='border py-2 px-3 rounded-full bg-white text-black mt-2 font-bold'>Reserve Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
