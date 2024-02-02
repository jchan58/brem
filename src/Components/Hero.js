import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='bg-white h-screen flex flex-col justify-center items-center'>
            <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14'>
                The Brem Lab
            </h1>
           <Link className='py-6 px-10 bg-gradient-to-r from-blue-800 to-blue-400 rounded-full text-3xl text-white hover:bg-blue-300 transition duration-50 ease-in-out flex items-center animate-bounce'>Discover More 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 ml-4 mt-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
           </svg>
            </Link>
        </div>
    )
}

export default Hero
 