import React from 'react';
import parchment from '../Image_folder/parchment.jpg';

const History = () => {
    return (
        <>
            <div
                className="max-w-2xl mx-auto p-6 rounded-lg shadow-2xl relative"
                style={{
                    backgroundImage: `url(${parchment})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h2 className="text-3xl md:text-4xl font-bold my-4 text-center text-black">
                    Legacy of Research
                </h2>
                <div className="text-lg md:text-xl mt-4 font-semibold text-black italic text-center space-y-4">
                    <p>
                        <strong>A Glimpse of History:</strong> The Hunterian Laboratory of the Johns Hopkins Hospital was conceived as an idea by Dr. William Welch and Dr. William Halsted and was inaugurated in 1904 under the leadership of Dr. Harvey Cushing. The primary aim behind this laboratory was to function as a space for medical students and residents to engage in research in anatomy, physiology, and pathology, get exposure to performing surgical procedures on animals, and receive mentorship and an early introduction to the foundations of surgical practice. The naming of the laboratory as “Hunterian” aligns well with this mission, since it refers to the English surgeon Dr. John Hunter, who pioneered the transformation of surgery into a science that dynamically integrates knowledge in anatomy, physiology, and pathology.
                    </p>
                    <p>
                        After Cushing, the Hunterian laboratory was led by his pupil Dr. Walter Dandy, who expanded the impact of neurosurgical research in the laboratory and invited more innovation. After the 1950s, the Hunterian laboratory went into a dormant phase until it was revived in 1984 by Dr. Henry Brem, who reemphasized the laboratory’s commitment to surgical excellence, scientific innovation, and impactful mentorship.
                    </p>
                    <p>
                        <strong>Mission:</strong> The current mission of the laboratory aligns perfectly with Cushing’s initial mission 120 years ago. The laboratory aims to mentor the next generation of young scientists and physicians and serve as a niche for residents, medical trainees, and undergraduate students to nurture their surgical skills and pursue their scientific curiosity. Moreover, the Hunterian Neurosurgical Laboratory is one of the pioneering research entities that aims to advance the treatment of brain cancers and improve the prognosis and quality of life of patients with brain tumors worldwide. The laboratory’s research efforts focus on creating representative animal models of brain cancer, discovering novel therapeutic agents against brain tumors, and advancing drug delivery techniques to the central nervous system.
                    </p>
                    <p>
                        <strong>Impact:</strong> The Hunterian laboratory was the incubator for some of the greatest advances in the field of medicine such as the use of physiological solutions to maintain homeostasis (Harvey Cushing), elucidating the anatomy and function of the pituitary gland and the birth of the field of endocrinology (Harvey Cushing), the preclinical work that led to the development of the “Blue Baby” operation (Alfred Blalock and Vivian Thomas), the preclinical development of the procedure for opening a stenotic mitral valve (Harvey Cushing, Gladys Henry, William MacCallum, Roy McClure, and Bertram Bernheim), the introduction of ventriculography, pneumoencephalography, and the use of contrast agents for brain imaging (Walter Dandy), the preclinical work that established the safety and efficacy of carmustine wafers (Gliadel) and led to their transition into clinical testing (Henry Brem), and several others…
                    </p>
                    <p>
                        Besides that, over the last 40 years alone, the Hunterian Neurosurgical Laboratory was a launching pad for more than 500 mentees who are now leading figures in their fields and innovating scientists/physicians that have contributed greatly to medicine, science, and humanity.
                    </p>
                </div>
            </div>
        </>
    );
}

export default History;
