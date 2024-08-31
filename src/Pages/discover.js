import React from 'react';
import History from '../Components/History.js';
import Article from '../Components/Article.js';

const Discover = () => {
    return (
        <div className="relative bg-white">
            <div className="relative z-10">
                <History />
                <Article />
            </div>
        </div>
    );
};

export default Discover;
