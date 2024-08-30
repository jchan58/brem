import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { peopleRoutes } from '../components/PeopleRoutes.js';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 0) {
            const filteredSuggestions = Object.keys(peopleRoutes).filter((name) =>
                name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (name) => {
        setQuery('');
        setSuggestions([]);
        navigate(peopleRoutes[name]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (suggestions.length > 0) {
            navigate(peopleRoutes[suggestions[0]]);
        }
    };

    return (
        
        <div className="p-4 black bg-opacity-100">
            {/* Header */}
            <h1 className="text-3xl font-bold text-center mb-8"> Decades in the Lab/Alumni</h1>

            {/* Search Form */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search for an alumni..."
                    className="w-full p-2 rounded border border-gray-600"
                />
                {suggestions.length > 0 && (
                    <ul className="bg-white mt-2 rounded shadow-lg">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="p-2 cursor-pointer hover:bg-gray-200"
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </form>
        </div>
    );
};

export default SearchBar;