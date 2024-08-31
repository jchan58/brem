import React from 'react';
import Hero from '../Components/Hero.js';
import Content from '../Components/Content';

const HomePage = () => {
    return (
        <div className="relative bg-white">
          <div className="relative z-10">
            <Hero />
            <Content />
          </div>
        </div>
    );
};

export default HomePage;
