import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

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
