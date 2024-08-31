import React from 'react';
import { Link } from 'react-router-dom';
import book1 from '../Image_folder/book24.png';
import book2 from '../Image_folder/book2.png';
import book3 from '../Image_folder/book3.png';
import book4 from '../Image_folder/book4.png';
import book5 from '../Image_folder/book5.png';
import book6 from '../Image_folder/book6.png';
import book7 from '../Image_folder/book7.png';
import brain from '../Image_folder/brain.png';
import SearchBar from '../Components/SearchBar';

const Team = () => {
    return (
        <div className="max-w-5xl mx-auto rounded-lg overflow-hidden">
            {/* Search Bar */}
            <SearchBar />

            {/* Bookshelf Section with Brain Image Background */}
            <div className="relative w-full" style={{ paddingBottom: '70%' }}>
                <div 
                    className="absolute inset-0 bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${brain})`,
                        backgroundSize: '98%', // Ensures the image scales without cropping
                    }}
                >
                    <Link to="/alumni7" className="cursor-pointer">
                        <img
                            src={book7}
                            alt="Book"
                            className="absolute cursor-pointer"
                            style={{
                                width: '11%',
                                bottom: '64%',
                                left: '31%',
                            }}
                        />
                    </Link>
                    <Link to="/alumni6" className="cursor-pointer">
                        <img
                            src={book6}
                            alt="Book"
                            className="absolute cursor-pointer"
                            style={{
                                width: '11%',
                                bottom: '61%',
                                left: '44%',
                            }}
                        />
                    </Link>
                    <Link to="/alumni5" className="cursor-pointer">
                        <img
                            src={book5}
                            alt="Book"
                            className="absolute cursor-pointer"
                            style={{
                                width: '11%',
                                bottom: '48%',
                                left: '60%',
                            }}
                        />
                    </Link>
                    <Link to="/alumni2" className="cursor-pointer">
                        <img
                            src={book2}
                            alt="Book"
                            className="absolute cursor-pointer"
                            style={{
                                width: '11%',
                                bottom: '27%',
                                left: '60%',
                            }}
                        />
                    </Link>
                    <Link to="/alumni4" className="cursor-pointer">
                        <img
                            src={book4}
                            alt="Book"
                            className="absolute cursor-pointer"
                            style={{
                                width: '11%',
                                bottom: '38%',
                                left: '12%',
                            }}
                        />
                    </Link>
                    <Link to="/alumni3" className="cursor-pointer">
                        <img
                            src={book3}
                            alt="Book"
                            className="absolute cursor-pointer"
                            style={{
                                width: '10%',
                                bottom: '21%',
                                left: '37%',
                            }}
                        />
                    </Link>
                    <Link to="/current" className="cursor-pointer">
                        <img
                            src={book1}
                            alt="Book"
                            className="absolute cursor-pointer"
                            style={{
                                width: '11%',
                                bottom: '27%',
                                left: '74%',
                            }}
                        />
                    </Link>
                </div>
            </div>

            {/* Responsive Styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .relative {
                        padding-bottom: 100%; /* Increase padding for a taller aspect ratio */
                    }
                    .absolute img {
                        width: 12%; /* Make books slightly larger */
                    }
                    .absolute img[style*="bottom: 60%"] {
                        bottom: 70%; /* Adjust positions for smaller screens */
                        left: 25%;
                    }
                    .absolute img[style*="bottom: 58%"] {
                        bottom: 68%;
                        left: 35%;
                    }
                    .absolute img[style*="bottom: 49%"] {
                        bottom: 60%;
                        left: 45%;
                    }
                    .absolute img[style*="bottom: 34%"] {
                        bottom: 50%;
                        left: 45%;
                    }
                    .absolute img[style*="bottom: 41%"] {
                        bottom: 57%;
                        left: 10%;
                    }
                    .absolute img[style*="bottom: 30%"] {
                        bottom: 53%;
                        left: 25%;
                    }
                    .absolute img[style*="bottom: 33%"] {
                        bottom: 60%;
                        left: 55%;
                    }
                }

                @media (max-width: 480px) {
                    .relative {
                        padding-bottom: 120%; /* Further increase padding for smaller screens */
                    }
                    .absolute img {
                        width: 15%; /* Further enlarge books for readability */
                    }
                    .absolute img[style*="bottom: 70%"] {
                        bottom: 75%;
                        left: 20%;
                    }
                    .absolute img[style*="bottom: 68%"] {
                        bottom: 73%;
                        left: 30%;
                    }
                    .absolute img[style*="bottom: 60%"] {
                        bottom: 67%;
                        left: 40%;
                    }
                    .absolute img[style*="bottom: 50%"] {
                        bottom: 65%;
                        left: 45%;
                    }
                    .absolute img[style*="bottom: 57%"] {
                        bottom: 75%;
                        left: 5%;
                    }
                    .absolute img[style*="bottom: 53%"] {
                        bottom: 70%;
                        left: 15%;
                    }
                    .absolute img[style*="bottom: 60%"] {
                        bottom: 70%;
                        left: 50%;
                    }
                }
            `}</style>
        </div>
    );
};

export default Team;
