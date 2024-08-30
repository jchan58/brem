import React from 'react';
import tech from '../Image_folder/Picture3.jpg';
import drug from '../Image_folder/Picture5.png';
import ang from '../Image_folder/ang.jpg';
import edu from '../Image_folder/education.jpg';
import immuno from '../Image_folder/immuno.jpg';
import clin from '../Image_folder/clin.jpg';

const Article  = () => {
    return (
        <>  <style>
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
                            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); /* Enhanced 3D shadow */
                            border-radius: 8px; /* Optional: adds rounded corners */
                            background: #fff; /* Ensures text is readable against shadow */
                            padding: 15px;
                            text-align: center; /* Centering the title */
                        }

                        .text-container h2 {
                            margin-bottom: 1rem; /* Provide spacing between title and paragraph */
                        }

                        .text-container p {
                            text-align: left; /* Change to left alignment for a more consistent look */
                            margin: auto;
                            max-width: 80%;
                            padding: 0 10px;
                        }

                        .image-container {
                            width: 260px;
                            height: 250px;
                            border-radius: 8px;
                            background-position: center;
                            background-size: cover;
                            margin-top: 10px;
                        }

                        .director-container {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            width: 100%;
                            max-width: 340px; /* Adjust based on your preference */
                            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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
                    <h1 className='text-3xl font-bold my-4 animate-fadeIn'>Our Research </h1>
                </div>
                <div className="content-wrapper">
                    <div className='director-container animate-fadeIn'>
                        <img src={tech} alt="Angiogenesis" className='image-container'/>
                        <div className='text-container'>
                            <h2 className='text-2xl mb-2'>Angiogenesis</h2>
                            <p className='text-md'>
                            Investigating the migration, growth and differentiation of endothelial cells and blood vessels.
                              The lab has focused on leveraging angiogenesis to decrease tumor growth with in vitro and in vivo studies.
                               Experimental compounds include <a href="https://pubmed.ncbi.nlm.nih.gov/935859/#:~:text=A%20cartilage%20fraction%20isolated%20by,and%20consequently%20restricts%20tumor%20growth." className="underline text-blue-500 hover:text-blue-700">VEGF</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/1113064/" className="underline text-blue-500 hover:text-blue-700">cartilage</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/1702149/" className="underline text-blue-500 hover:text-blue-700">heparin</a>, cortisone acetate, <a href="https://pubmed.ncbi.nlm.nih.gov/1445318/" className="underline text-blue-500 hover:text-blue-700">tetracyclines</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/9661892/" className="underline text-blue-500 hover:text-blue-700">squalamine</a>, and <a href="https://pubmed.ncbi.nlm.nih.gov/16284573/" className="underline text-blue-500 hover:text-blue-700">endostatin</a>. 
                            </p>
                        </div>
                    </div>
                    <div className='director-container animate-fadeIn'>
                        <img src={drug} alt="Target Delivery" className='image-container'/>
                        <div className='text-container'>
                            <h2 className='text-2xl mb-2'>Target Delivery</h2>
                            <div className="text-center">
                                <p className='text-md'>
                                Allows for targeted delivery and controlled release at the site of tumor resection. 
                                Intracranial implantation of biodegradable <a href="https://pubmed.ncbi.nlm.nih.gov/9054951/#:~:text=First%2C%20increasing%20the%20ratio%20of,drug%20loaded%20into%20the%20polymer." className="underline text-blue-500 hover:text-blue-700">polymer</a>/<a href="https://www.pnas.org/doi/abs/10.1073/pnas.2204621120?doi=10.1073/pnas.2204621120" className="underline text-blue-500 hover:text-blue-700">hydrogels</a>/<a href="https://www.pnas.org/doi/10.1073/pnas.1313420110" className="underline text-blue-500 hover:text-blue-700">microchips</a>/nanoparticles to treat brain tumors. 
                                Studies include safety, biocompatibility, pharmacokinetics, biodistribution, and efficacy.  
                                The lab is also studying the tumor immune microenvironment. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='director-container animate-fadeIn'>
                        <img src={ang} alt="Technology" className='image-container'/>
                        <div className='text-container'>
                            <h2 className='text-2xl mb-2'>Technology</h2>
                            <p className='text-md'>
                            The Hunterian Neurosurgical Laboratory has developed Microchip Drug <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5217465/" className="underline text-blue-500 hover:text-blue-700">Delivery</a>, Gene Therapy – Viral and Non-viral based gene therapy for targeted therapeutic treatment of brain <a href="https://pubs.acs.org/doi/10.1021/nn504905q" className="underline text-blue-500 hover:text-blue-700">tumors</a>, 
                            High Intensity Focused <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8895244/" className="underline text-blue-500 hover:text-blue-700">Ultrasound</a> (HIFU) to transiently permeabilize the Blood Brain Barrier, 
                            Sonodynamic therapy, and Thermal ablation, and Low Intensity Focused Ultrasound (LIFU) 
                            for inhibition of tumor growth.
                            </p>
                        </div>
                    </div>
                    <div className='director-container animate-fadeIn'>
                        <img src={edu} alt="Education" className='image-container'/>
                        <div className='text-container'>
                            <h2 className='text-2xl mb-2'>Education</h2>
                            <p className='text-md'>
                            The lab has had over 500 learning trainees who have dedicated between 2 weeks and 3 years to learning microsurgical techniques and 
                            conducting  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5525379/" className="underline text-blue-500 hover:text-blue-700">preclinical translational research</a>.
                             We collaborate with many other laboratories dedicated to education and translational  <a href="https://pure.johnshopkins.edu/en/publications/the-johns-hopkins-hunterian-laboratory-philosophy-mentoring-stude-2" className="underline text-blue-500 hover:text-blue-700">research</a>.
                            </p>
                        </div>
                    </div>
                    <div className='director-container animate-fadeIn'>
                        <img src={immuno} alt="immuno" className='image-container'/>
                        <div className='text-container'>
                            <h2 className='text-2xl mb-2'>Immunotherapy</h2>
                            <p className='text-md'>
                            The laboratory is focused on a range of <a href="https://pubmed.ncbi.nlm.nih.gov/28003545/" className="underline text-blue-500 hover:text-blue-700">immunotherapeutic approaches</a> to treating brain tumors. The lab seeks to both identify novel <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5945499/" className="underline text-blue-500 hover:text-blue-700">treatment methods</a> and also characterize the underlying changes in the immune system that make for effective cancer treatment.
                            </p>
                        </div>
                    </div>
                    <div className='director-container animate-fadeIn'>
                        <img src={clin} alt="ClinicalResearch" className='image-container'/>
                        <div className='text-container'>
                            <h2 className='text-2xl mb-2'>Clinical Research</h2>
                            <p className='text-md'>
                            The preclinical laboratory research has translated into many <a href="https://pubmed.ncbi.nlm.nih.gov/7723496/" className="underline text-blue-500 hover:text-blue-700">multi-institutional clinical trials</a>. The trials <a href="https://pubmed.ncbi.nlm.nih.gov/24553385/" className="underline text-blue-500 hover:text-blue-700">based on laboratory data</a> have improved and expanded the range of therapeutic options for patients with brain tumors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Article