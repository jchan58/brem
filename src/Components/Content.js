import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
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

                    .director-container {
                        margin: 20px 0;
                        background: #fff;
                        padding: 15px;
                        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                        border-radius: 8px;
                        overflow: hidden;
                        display: flex;
                        align-items: flex-start;
                        text-align: left;
                    }

                    .image-container {
                        width: 230px;
                        height: 250px;
                        margin-right: 20px;
                        border-radius: 8px;
                        background-position: center;
                        background-size: cover;
                        flex-shrink: 0;
                    }

                    .text-container {
                        max-height: 250px;
                        overflow-y: auto; /* Enable vertical scrolling */
                        flex: 1;
                        padding-right: 10px; /* Space for scrollbar */
                    }

                    .text-container h2 {
                        margin-bottom: 0.5rem;
                    }

                    .linkedin-icon {
                        color: #0077b5; /* LinkedIn blue */
                        font-size: 1.5rem;
                        margin-top: 10px;
                    }

                    .linkedin-icon:hover {
                        color: #005582; /* Darker LinkedIn blue on hover */
                    }

                    .text-container p {
                        margin: 0;
                        padding: 0;
                        text-align: justify;
                    }

                    @media (max-width: 768px) {
                        .director-container {
                            flex-direction: column;
                            align-items: center;
                        }

                        .image-container {
                            margin-right: 0;
                            margin-bottom: 20px;
                            width: 100%;
                            max-width: 230px;
                            height: auto;
                        }

                        .text-container {
                            max-height: none; /* Allow full height on mobile */
                            padding-right: 0; /* Remove padding for scrollbar */
                        }

                        .text-container h2 {
                            font-size: 1.5rem; /* Smaller title on mobile */
                        }

                        .linkedin-icon {
                            font-size: 1.75rem; /* Smaller icon on mobile */
                        }

                        .text-container p {
                            font-size: 0.875rem; /* Smaller text on mobile */
                        }
                    }

                    @media (min-width: 769px) {
                        .text-container h2 {
                            font-size: 2rem; /* Larger title on full screen */
                        }

                        .text-container p {
                            font-size: 1rem; /* Larger text on full screen */
                        }

                        .linkedin-icon {
                            font-size: 2rem; /* Larger icon on full screen */
                        }
                    }
                `}
            </style>
            <div className='bg-white font-serif py-20'>
                <div className='w-full text-center'>
                    <h1 className='text-3xl font-bold my-4 animate-fadeIn'>Our Directors</h1>
                </div>
                <div className="content-wrapper">
                    <div className='director-container animate-fadeIn'>
                        <img src={Brem} alt="Dr. Henry Brem" className='image-container'/>
                        <div className='text-container'>
                            <h2 className='mb-2'>Dr. Henry Brem, M.D.</h2>
                            <a 
                                href="https://www.linkedin.com/in/henry-brem-m-d-70374a53" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} className='linkedin-icon' />
                            </a>
                            <p>
                                Henry Brem has developed new tools and techniques that have changed the field of neurosurgery. Brem carried out the pivotal clinical study that introduced navigational imaging into the neurosurgical suite. His work led to the FDA's approval of the first image guidance computer system for intraoperative localization of tumors. Furthermore, he has changed the surgical armamentarium against brain tumors by inventing and developing Gliadel® wafers to intraoperatively deliver chemotherapy to brain tumors. His work with Bob Langer has shown that surgeons can accurately deliver potent therapies directly at the tumor site. Brem has changed the surgical treatment of brain tumors by introducing new approaches for targeted therapy. He developed new classes of polymers and microchips for drug delivery that are custom synthesized for the agent being developed. The polyanhydrides, which were the first new treatments for brain tumors that the FDA had approved in 23 years, have been shown in his laboratory to be biocompatible and potent. He then designed and led the clinical trials demonstrating safety and efficacy. He has published over 400 research papers, 58 book chapters, 11 patents, and an H index of 100 with over 42,000 citations. In addition to his academic work, he has worked closely with biotech companies to develop new technologies. The worldwide impact of the Hopkins Neurosurgery Department is reflected in 20 Neurosurgery Department Chairmen that have come from the Department between 2000 and 2023. Brem's teaching was recognized by the Hopkins Professors Award for Excellence in Teaching in 1996. In 1998, he was elected to the Institute of Medicine of the National Academy of Sciences. In 2000 he was awarded the Grass Award by the Society of Neurological Surgeons for meritorious research; in 2001 he received the Founders Award of the Controlled Release Society; in 2004 he received the New York University Distinguished Alumni Award; in 2005 he was co-recipient of the Society for Biomaterials Technology Innovation and Development Award and was named the Coleman Fellow in Life Sciences at Ben-Gurion University. In 2011 he delivered the commencement address for the Johns Hopkins University School of Medicine. He has been recognized by the Castle Connolly Guide each year from 2002 in “America’s Top Doctors”, and from 2005 – present in “America’s Top Doctors for Cancer”. In 2013, the Society for NeuroOncology and the Section on Tumors of the AANS/CNS named him as the recipient of the Abhijit Guha Award. In 2014, The Johns Hopkins University established the Henry Brem Endowed Chair in Neurosurgery. In 2015 Brem was selected to receive the Castle Connolly National Physician of the Year Award for Clinical Excellence. The award is given annually to five physicians whose dedication, talents, and skills have improved the lives of thousands of people throughout the world. In 2017, Brem was awarded the Albert Nelson Marquis Lifetime Achievement Award and the Johns Hopkins University Provost’s Award for Excellence in Faculty Mentoring. Brem was awarded the Andy Parsa Mentorship Award by the American Association of Neurological Surgeons and the Congress of Neurological Surgeons in 2018, and in 2019 was inducted into the Baltimore Jewish Hall of Fame by JCC of Greater Baltimore and awarded the Society of Neurological Surgeons Medical Student Teaching Award in 2021. Brem received the Johns Hopkins Sixth Annual Dean’s Distinguished Mentoring Award. Henry Brem has been selected as the “Honored Guest” for the 2024 Annual Meeting of the Congress of Neurological Surgeons in Houston. Brem’s devotion to patient care, clinical excellence, and translational science has brought together a unique group of neurosurgeons and investigators that have changed the field of neurosurgery. He continues his practice of complex brain surgery and leads the Johns Hopkins Neurosurgery Department.
                            </p>
                        </div>
                    </div>
                    <div className='director-container animate-fadeIn'>
                        <img src={Betty} alt="Professor Betty Tyler" className='image-container'/>
                        <div className='text-container'>
                            <h2 className='mb-2'>Professor Betty Tyler</h2>
                            <a 
                                href="https://www.linkedin.com/in/betty-tyler-34107147" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} className='linkedin-icon' />
                            </a>
                            <p>
                                Betty Tyler is a Professor of Neurosurgery at Johns Hopkins University. She runs a highly successful and productive laboratory and has an international reputation for stellar science in the field of translational research and local delivery of chemotherapeutic agents for brain tumor therapy. Ms. Tyler’s collaborative efforts with scientists within Johns Hopkins as well as with researchers throughout the United States have led to multiple scientific breakthroughs. In addition to publishing over 200 peer-reviewed articles she has mentored and taught over 400 neurosurgical residents, medical students, and undergraduate students in research design, surgical techniques, and statistical analysis. She directs her work toward therapeutic progress and mentoring new scientists, with the goal of bringing effective therapies to patients with brain tumors and making a difference in the brain cancer research field.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;
