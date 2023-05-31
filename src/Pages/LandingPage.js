import React from "react";
import uni from "../Image_folder/heritage.png";
import wet_lab from "../Image_folder/wet_lab.jpeg";
import lab_members from "../Image_folder/lab.jpeg"
import quiz from "../Image_folder/quiz.jpg"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typed from 'react-typed';


const LandingPage = () => {
  const [gamePin, setGamePin] = useState('');
  const navigate = useNavigate();

  const handleGamePinChange = (event) => {
    setGamePin(event.target.value);
  };

  const handlePlayGameClick = () => {
    if (gamePin.trim() === '') {
      alert('Please enter a key word before searching!');
    } else {
      navigate('/game');
    }
  };

  return (
    <div>
      <div className="relative w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <img className="w-full" src={uni} alt="/"/>
        <div className="absolute lg:inset-0 flex flex-col justify-center items-center w-full px-2 py-8">
          <p className="text-3xl font-mon text-white">Welcome to</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold text-white">Brem Lab</h1>
          <p className="py-3 text-2xl font-mono text-white">
            <Typed
              strings={["Enter your key words:"]}
              typeSpeed={70}
              backSpeed={90}
              loop
            />
          </p>
          <input
            className="mt-1 p-1 border rounded px-[50px] py-[6px]"
            style={{ backgroundColor: 'white', textAlign: 'center' }}
            id="gamePin"
            type="text"
            value={gamePin}
            onChange={handleGamePinChange}
          />
          <button
            className="py-3 px-6 sm:w-[60%] my-6 font-mono text-white"
            style={{ backgroundColor: 'black' }}
            onClick={handlePlayGameClick}
          >
            Search Database
          </button>
        </div>
        <div className="flex h-screen items-center justify-center bg-indigo-50 p-8">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:shadow-xl mx-3">
            <img src={wet_lab} alt="plant" className="h-60 w-full" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Projects</p>
              <button className="w-full rounded-md bg-indigo-600 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75 m-0">
                Learn More
              </button>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:shadow-xl mx-3">
            <img src={lab_members} alt="plant" className="h-60 w-full" />
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Lab Members</p>
              <button className="w-full rounded-md bg-indigo-600 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75 m-0">
                Meet our members
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
