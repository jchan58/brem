import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUserPlus, faDonate } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <main className="flex-grow">
                <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg my-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* General Inquiries Section */}
                        <div className="flex flex-col justify-center items-center text-center p-6">
                            <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">General Inquiries</h3>
                            <p>
                                For general inquiries, please send an email to 
                                <a href="mailto:HunterianLab@jh.edu" className="text-blue-500 underline ml-1">HunterianLab@jh.edu</a>.
                            </p>
                        </div>

                        {/* Join the Lab Section */}
                        <div className="flex flex-col justify-center items-center text-center p-6">
                            <FontAwesomeIcon icon={faUserPlus} className="text-4xl text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">Join the Lab</h3>
                            <p>
                                If you are interested in joining the lab, please send an email along with your CV to 
                                <a href="mailto:HunterianLab@jh.edu" className="text-blue-500 underline ml-1">HunterianLab@jh.edu</a>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Donation Section */}
                <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg my-8">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faDonate} className="text-4xl text-green-500 mb-4" />
                        <h3 className="text-2xl font-semibold text-center mb-6">Support Our Research</h3>
                        <p className="mb-4">
                            Your generous donations help us advance our research and make a difference in the field of neurosurgery.
                        </p>
                        <a 
                            href="https://www.hopkinsmedicine.org/neurology-neurosurgery/research/translational-research-center" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block py-3 px-6 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300"
                        >
                            Donate Now
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Contact;
