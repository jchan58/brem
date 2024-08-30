import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import LabIcon from '../Image_folder/emblem.png'; // Import the image for the banner

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Navigation Bar */}
            <nav className="flex justify-end items-center h-12 bg-indigo-900 text-white shadow-sm font-serif z-50" role="navigation">
                <div className="px-3 cursor-pointer md:hidden" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className="pr-4 md:block hidden">
                    <Link className="p-2 text-sm" to="/">Home</Link>
                    <Link className="p-2 text-sm" to="/team">Team</Link>
                    <Link className="p-2 text-sm" to="/discover">About</Link>
                    <Link className="p-2 text-sm" to="/database">Database</Link>
                    <Link className="p-2 text-sm" to="/contact">Contact</Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-indigo-900 text-white z-50`}>
                <div className="flex flex-col items-start px-3 py-2">
                    <Link className="block text-sm py-3 w-full hover:bg-indigo-700 border-b border-white" to="/" onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link className="block text-sm py-3 w-full hover:bg-indigo-700 border-b border-white" to="/team" onClick={toggleMenu}>
                        Team
                    </Link>
                    <Link className="block text-sm py-3 w-full hover:bg-indigo-700 border-b border-white" to="/discover" onClick={toggleMenu}>
                        About
                    </Link>
                    <Link className="block text-sm py-3 w-full hover:bg-indigo-700 border-b border-white" to="/database" onClick={toggleMenu}>
                        Database
                    </Link>
                    <Link className="block text-sm py-3 w-full hover:bg-indigo-700" to="/contact" onClick={toggleMenu}>
                        Contact
                    </Link>
                </div>
            </div>

            {/* White Banner with Shadow */}
            <div className="bg-white text-black">
                <div className="container mx-auto py-3 px-8 flex flex-col md:flex-row items-center">
                    <img 
                        src={LabIcon} 
                        alt="Lab Icon" 
                        className="w-40 h-32 md:w-32 md:h-24 lg:w-44 lg:h-32 mb-4 md:mb-0" 
                    />
                    <div className="border-l border-gray-600 h-40 md:h-32 mx-6 hidden md:block"></div> {/* Vertical line hidden on mobile */}
                    <h2 className="text-2xl font-bold text-center md:text-left md:text-xl md:font-normal lg:text-2xl">
                        The Johns Hopkins Hunterian Laboratory
                    </h2>
                </div>
            </div>
        </>
    );
}

export default NavBar;
