import React from 'react';
import Brem from '../Image_folder/Brem.jpeg';
import Betty from '../Image_folder/B Tyler picture.jpg';

const Content = () => {
    return (
        <>
            <style>
                {`
                    @keyframes fadeIn {
                        0% { transform: translateY(20px); opacity: 0; }
                        100% { transform: translateY(0); opacity: 1; }
                    }

                    .animate-fadeIn {
                        animation: fadeIn 1.5s ease-out forwards;
                    }

                    .text-container {
                        max-height: 200px; /* Adjust based on your layout */
                        overflow-y: auto; /* Enables vertical scrolling */
                        margin-top: 20px;
                        box-shadow: 0 10px 20px rgba(0,0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); /* Enhanced 3D shadow */
                        border-radius: 8px; /* Optional: adds rounded corners */
                        background: #fff; /* Ensures text is readable against shadow */
                        padding: 15px;
                    }

                    .image-container img {
                        display: block; /* Removes bottom space */
                        width: 100%; /* Ensure it fills the container */
                        height: auto; /* Maintain aspect ratio */
                        border-radius: 8px; /* Matches text container border-radius */
                        padding-top: 10px;
                        height: 250px;
                        width: 250px;
                    }

                    .director-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 100%;
                        max-width: 340px; /* Adjust based on your preference */
                        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); /* 3D shadow for the whole card */
                        border-radius: 8px;
                        overflow: hidden; /* Ensures the shadow applies nicely */
                        margin: 20px;
                        background: #fff; /* Background for the whole container */
                    }

                    .content-wrapper {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 20px; /* Adds space between cards */
                    }
                `}
            </style>
            <div className='bg-white font-serif py-20'>
                <div className='w-full text-center'>
                    <h1 className='text-4xl font-bold my-4 animate-fadeIn'>Our Directors</h1>
                </div>
                <div className="content-wrapper">
                    <div className='director-container animate-fadeIn'>
                        <img src={Brem} alt="Dr. Henry Brem" className='image-container'/>
                        <div className='text-container'>
                            <h2 className='text-2xl mb-2'>Dr. Henry Brem, M.D.</h2>
                            <p className='text-md'>
                                Dr. Henry Brem is a renowned neurosurgeon known for his pioneering work in the treatment of brain tumors...
                            </p>
                        </div>
                    </div>
                    <div className='director-container animate-fadeIn'>
                        <img src={Betty} alt="Betty Tyler" className='image-container'/>
                        <div className='text-container'>
                            <h2 className='text-2xl mb-2'>Professor Betty Tyler</h2>
                            <p className='text-md'>
                            Betty Tyler is a Professor of Neurosurgery at Johns Hopkins University. She runs a highly successful and productive laboratory and has an international reputation for stellar science in the field of translational research and local delivery of chemotherapeutic agents for brain tumor therapy. Ms. Tyler’s collaborative efforts with scientists within Johns Hopkins as well as with researchers throughout the United States have led to multiple scientific breakthroughs. In addition to publishing over 200 peer-reviewed articles she has mentored and taught over 400 neurosurgical residents, medical students, and undergraduate students in research design, surgical techniques and statistical analysis. She directs her work toward therapeutic progress, and mentoring new scientists, with the goal of bringing effective therapies to patients with brain tumors and making a difference in the brain cancer research field.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;
