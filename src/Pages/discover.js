import React from 'react';
import History from '../components/History.js';
import Article from '../components/Article.js';

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
