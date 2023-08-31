import React from "react";
import bg from "../Image_folder/lab_background.jpeg";
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Typed from 'react-typed';
import DrBrem from "../Image_folder/Brem.jpeg";
import Professor from "../Image_folder/Professor.jpeg";


const LandingPage = () => {
  const [gamePin, setGamePin] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const showLoginAlert = () => {
    alert('Please log in to create a game.');
    navigate('/login');
  };

  const handleCreateGame = () => {
    if (user) {
      navigate('/game');
    } else {
      showLoginAlert();
    }
  };

  const handleGamePinChange = (event) => {
    setGamePin(event.target.value);
  };
 
  const handlePlayGameClick = () => {
    if (gamePin.trim() === '') {
      alert('Please enter a game pin before clicking Play Game!');
    } else {
      navigate('/game');
    }
  };

  return (
    <div>
      <div className="relative w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <img className="w-full" src={bg} alt="/" />
        <div className="absolute lg:inset-0 flex flex-col justify-center items-center w-full px-2 py-8">
          <p className="text-3xl font-mono">Welcome to</p>
          <p className="py-3 text-4xl font-bold">
            <Typed
              strings={["Brem Lab!"]}
              typeSpeed={70}
              backSpeed={90}
              loop
            />
          </p>
          <div className="p-5">
          <p className="text-2xl font-mono">
            Established [year here], we research novel drug compounds and delivery methods 
            in the treatment of central nervous system cancers and related pathologies.
          </p>
          </div>
        </div>
        <div className="flex h-screen items-center justify-center bg-indigo-50 p-8">
        <div className="max-w-[1240px] mx-auto relative pt-2">
        <h3 className="text-5xl font-bold mt-6">Meet our Directors!</h3>
                <div className="px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 relative gap-8 px-4 pt-12 sm:pt-20 text-black">
                        <div className="bg-white rounded-xl shadow-2xl text-center relative overflow-hidden">
                            <div className="p-8">
                                <div className="relative">
                                    <h2 className="font-bold text-3xl my-6">Dr. Brem</h2>
                                    <div className="relative">
                                        <img className="mx-auto" src={DrBrem} alt="Dr. Brem" />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 hover:transform hover:translate-y-0">
                                            <p className="text-white text-xl">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit aliquet sagittis id consectetur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-2xl text-center relative overflow-hidden">
                            <div className="p-8">
                                <div className="relative">
                                    <h2 className="font-bold text-3xl my-6">Professor Betty Tyler</h2>
                                    <div className="relative">
                                        <img className="mx-auto" src={Professor} alt="Professor Betty Tyler" />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 hover:transform hover:translate-y-0">
                                            <p className="text-white text-xl">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit aliquet sagittis id consectetur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
