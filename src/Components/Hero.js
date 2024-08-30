import React from 'react';
import { Link } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import lab1 from '../Image_folder/image1.jpg';
import lab2 from '../Image_folder/image2.png';
import lab3 from '../Image_folder/image3.jpg';
import lab4 from '../Image_folder/together.jpg';
import lab5 from '../Image_folder/docs.png';
import lab6 from '../Image_folder/labs.png';

const images = [
    { url: lab1 },
    { url: lab2 },
    { url: lab3 },
    { url: lab4 },
    { url: lab5 },
    { url: lab6 }
];

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-white p-4'>
            <div className='mb-4 w-full'>
                <SimpleImageSlider
                    width="100%" 
                    height={window.innerWidth > 768 ? 520 : 250} // Larger height for desktop, smaller for mobile
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    style={{ maxWidth: "100%" }} // Add this line
                />
            </div>
            <Link to='/discover' className='mt-6 py-3 px-6 md:py-4 md:px-8 bg-gradient-to-r from-blue-800 to-blue-400 rounded-full text-lg md:text-2xl text-white hover:bg-blue-300 transition duration-300 ease-in-out flex items-center animate-bounce'>
                Discover More 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className='w-5 h-5 md:w-6 md:h-6 ml-2'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </Link>
        </div>
    );
}

export default Hero;
