import React from "react";
import bg from "../Image_folder/lab_background.jpeg";
// import bg from "../Image_folder/ultrasound-scan.jpg";
// import jeopardy from "../Image_folder/jeopardy_image.jpg"
// import quiz from "../Image_folder/quiz.jpg"
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Typed from 'react-typed';


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
              strings={["Brem Lab"]}
              typeSpeed={70}
              backSpeed={90}
              loop
            />
          </p>
        </div>
        <div className="flex h-screen items-center justify-center bg-indigo-50 p-8">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:shadow-xl mx-3">
            {/* <img src={jeopardy} alt="plant" className="h-60 w-full" /> */}
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Jeopardy</p>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:shadow-xl mx-3">
            {/* <img src={quiz} alt="plant" className="h-60 w-full" /> */}
            <div className="p-5">
              <p className="text-medium mb-5 text-gray-700">Quiz</p>
              <button className="w-full rounded-md bg-indigo-600 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75 m-0">
                Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
