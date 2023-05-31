import heartfailure from "../Image_folder/GBHeartFailure.jpg"
import physics4 from "../Image_folder/TGC.gif"
import Aorta1 from "../Video_folder/celiac.mp4"
import Aorta2 from "../Image_folder/Aortic arch.png"
import Aorta3 from "../Video_folder/45_male_vid.mov"
import Aorta4 from "../Image_folder/Aorta Measurement_crop.JPG"
import Aorta5 from "../Image_folder/Dialation.gif"
import Hepato1 from "../Video_folder/Hepato1.mp4"
import Hepato2 from "../Video_folder/Hepato2.mp4"
import Hepato3 from "../Image_folder/Hepato3.gif"
import Hepato4 from "../Video_folder/Hepato4.mp4"

const physicsDictionary1 = {
    question: "A linear probe:",
    Image_or_Video: "None",
    choices: ["Has deeper penetration and high resolution", "Has shallow penetration and high resolution", "Has deeper penetration and low resolution", "Has shallow penetration and high resolution"],
    answer: "D",
    explanation: "While there is a range for each probe depending on manufacturer, the linear probe is used for structures such as musculoskeletal, vascular, nerve blocks, etc. which require higher frequency and better resolution.  As such, they do not penetrate the tissue far (superficial penetration).  They will have higher frequencies between 5-15 MHz.",
    topic: "physics"

};
const physicsDictionary2 = {
    question: "Diagnostic Ultrasound is found within the following ranges:",
    Image_or_Video: "None",
    choices: ["20-2000 Hertz (Hz)", ">20, 000 Hz", "2-20 MHz", "2-20 Volts"],
    answer: "D",
    explanation: "While there is a range for each probe depending on manufacturer, the linear probe is used for structures such as musculoskeletal, vascular, nerve blocks, etc. which require higher frequency and better resolution.  As such, they do not penetrate the tissue far (superficial penetration).  They will have higher frequencies between 5-15 MHz.",
    topic: "physics"

};
const physicsDictionary3 = {
    question: "A phased array probe has the following frequency:",
    Image_or_Video: "None",
    choices: ["0.5-3 MHz", "1-4 MHz", "3-11 MHz", "30-40 MHz"],
    answer: "C",
    explanation: "Diagnostic ultrasound is between 2-20 MHz. Audible sound is between 20-20,000 Hz and Ultrasound greater than 20,000 Hz.",
    topic: "physics"

};

const physicsDictionary4 = {
    question: "How would you improve this image?",
    Image_or_Video: physics4,
    choices: ["Adjust TGC", "Increase depth", "Increase gain", "Change probes"],
    answer: "A",
    explanation: "In this clip, there is significant posterior acoustic enhancement, an ultrasound artifact, deep to the bladder. By adjusting the time-gain compensation function on the ultrasound machine, the gain deep to the bladder can be selectively reduced. This would improve the visualization of the free fluid in this clip.",
    topic: "physics"

};

const physicsDictionary5 = {
    question: "Pair the correct definitions\nA.Amplitude\nB.Wavelength\nC.Period\nD.Frequency\nE.Velocity\nF.Power\n1. A sound wave’s strength, expressed as proportional to the square of the amplitude or watts\n2. Distance or length of a wave\n3. Number of cycles or wavelengths per second. Expressed as Hz.\n4. Frequency x Wavelength. Fixed in a given medium.\n5. Height or magnitude, measured in decibels or dB\n6. Amount of time for one cycle(or wave) to complete",
    Image_or_Video: "None",
    choices: ["A1, B2, C3, D4, E5, F6", "A2, B3, C6, D5, E1, F4", "A5, B2, C6, D3, E4, F1", "A3, B2, C4, D6, E5, F1", "A5, B1, C3, D2, E6, F4"],
    answer: "C",
    eplanation: "None",
    topic: "physics"

};


const AortaDictionary1 = {
    question: "What is the name of this sign when you see this vascular structure branching off the abdominal aorta as you scan in the transverse plane?",
    Image_or_Video: Aorta1,
    choices: ["Spine sign", "Seagull Sign", "Seashore Sign", "Sloth Sign"],
    answer: "B",
    explanation: "The first takeoff from the aorta is the celiac trunk which gives rise to the hepatic artery and splenic artery. This branch point gives off the appearance of a seagull flying and is known as the seagull sign. This is the landmark for the proximal aorta. You should measure cranial/proximal to this takeoff for your proximal abdominal aorta measurement.",
    topic: "Aorta"
};
const AortaDictionary2 = {
    question: "You are scanning a patient with chest pain. You obtain this view and your medical student asks you to identify structure number 2. What do you tell them?",
    Image_or_Video: Aorta2,
    choices: ["Left common carotid artery", "Left subclavian artery", "Brachiocephalic artery", "Left pulmonary artery"],
    answer: "A",
    explanation: "This is a suprasternal aortic arch view. This visualizes the aorta from above and you can often see the takeoff of 1) the brachiocephalic/innominate artery, 2) the left common carotid artery, and 3) the left subclavian artery. This view is useful in evaluating for dissections and aneursyms of the aortic arch.",
    topic: "Aorta"
};
const aortaDictionary3 = {
    question: "A 45-year old male with a history of illicit drug use presents with crushing chest pain and shortness of breath. You perform a focused POCUS and you note which of the following:",
    Image_or_Video: Aorta3,
    choices: ["Ascending Aortic Aneurysm", "Normal aortic branches", "Cardiac tamponade", "Type 1 Aortic dissection"],
    answer: "B",
    explanation: "This is a suprasternal notch view of the aorta arch which can assess the ascending and descending thoracic aorta and origins of the innominate artery, left common carotid artery, and left subclavian artery. There are no abnormal findings.",
    topic: "Aorta"
};

const aortaDictionary4 = {
    question: "What vessel is being measured in this still image?",
    Image_or_Video: Aorta4,
    choices: ["Splenic vein", "Left renal vein", "Superior mesenteric artery", "Abdominal aorta", "Inferior vena cava"],
    answer: "A",
    explanation: "When locating the abdominal aorta to measure (from outer wall to outer wall), you want to ensure you are measuring the correct vessel. The abdominal aorta should just be anterior to the vertebral stripe just adjacent to the inferior vena cava (IVC). The aorta is on the patient's left when compared to the IVC. At the level of the superior mesenter"
};
const aortaDictionary5 = {
    question: "A 76-year-old male patient with a history of hypertension presents to your ED with chest pain for the past hour. You perform a bedside cardiac ultrasound. What is the most definitive treatment for this patient's condition?",
    Image_or_Video: Aorta5,
    choices: ["Thrombolysis", "Emergent surgical consultation", "Cardiac catheterization", "Ensuring systolic blood pressure < 220 mmHg", "Pericardiocentesis"],
    answer: "B",
    explanation: "The clip shows an apical 4-chamber view with a dilated aortic outflow tract with a dissection flap noted within the flap.This represents a Type A aortic dissection and definitive management is with emergent surgical intervention(Choice B).There is no obvious finding of RV strain for acute pulmonary embolism nor is there a notable regional wall motion abnormality to suggest thrombolysis(Choice A) or cardiac catheterization(Choice C).Medical management of an aortic dissection, such as aggressive blood pressure control(Choice D).is appropriate for Type B aortic dissections but since this dissection flap is noted in the aortic root in the ascending portion of the aorta, this would not be sufficient.There is no pericardial effusion noted in the clip mandating a pericardiocentesis(Choice E) though this may be a consideration should the dissection reach the pericardium in the imminent future.",
    topic: "Aorta"
};

const HepatoDictionary1 = {
    question: "A 55 year old female with history of hypertension and hyperlipidemia presents with right sided abdominal pain, nausea and vomiting for 2 days. You perform a POCUS. What is demonstrated in the image shown?",
    Image_or_Video: Hepato1,
    choices: ["WES sign", "SIN sign", "Porcelain sign", "Murphy's sign", "Shred Sign"],
    answer: "A",
    explanation: "The image demonstrates WES sign (wall-echo-shadow), where there is a large gallstone in a contracted gallbladder. In the video clip, the outer most layer is the gallbladder wall, followed by the hyperechoic gallstone and posterior shadowing. It is important to scan through the gallbladder in two planes either in the subcostal or subphrenic planes to ensure identifying the gallbladder and associated pathologies. ",
    topic: "Hepatobiliary"
};

const HepatoDictionary2 = {
    question: "Name the artifact that allows us to identify what is depicted in the image shown.",
    Image_or_Video: Hepato2,
    choices: ["side lobe artifact", "edge artifact", "posterior acoustic enhancement", "reverberation artifact", "shadowing"],
    answer: "E",
    explanation: "The image shown demonstrates a gallstone. Due to their hyperechoic nature and highly reflective surface, gallstones demonstrate posterior shadowing where no sound waves will penetrate past the surface.",
    topic: "Hepatobiliary"
};

const HepatoDictionary3 = {
    question: "40yo F w/ midepigastric and right upper quadrant pain presents to your ED.  You obtain this image on POCUS.  What is your interpretation?",
    Image_or_Video: Hepato3,
    choices: ["Short axis/transverse view the gallbladder with sludge", "Short axis/transverse view of the duodenum", "Short axis/transverse view of the gallbladder with a large gallstone", "Transverse view of a calcified aorta"],
    answer: "B",
    explanation: "The duodenum sits in a location very near to the gallbladder. It's tubular structure can often mimic the appearance of the gallbladder. Bowel gas can also have a similar appearance to gallstones, in that it can appear hyperechoic and have posterior shadowing. The gallbladder should however should end in a blind pouch and it's neck will be in the direct vicinity of the portal triad. Always ultrasound in 3 dimensions (short and long axis views) and use adjacent anatomy to clearly define your structure of interest. ",
    topic: "Hepatobiliary"
};

const HepatoDictionary4 = {
    question: "Match the correct condition with the artifact demonstrated.",
    Image_or_Video: Hepato4,
    choices: ["Adenomyomatosis and reverberation artifact", "Phrygian cap and mirror artifact", "Gallstones and posterior acoustic enhancement", "Polyp and beam width artifact"],
    answer: "A",
    explanation: "The answer is adenomyomatosis and reverberation artifact. In this condition, cholesterol crystals collect in the Rokitansky Aschoff sinuses"
};

const HepatoDictionary5 = {
    question: "A 76 year old female presents to the ED with progressive shortness of breath over the last two days and hypotension. Lung exam is significant for rales throughout. Abdominal exam is normal. You perform a RUSH bedside ultrasound exam and note this image. What is the most likely etiology of this patient’s pathology?",
    Image_or_Video: heartfailure,
    choices: ["Biliary obstruction", "Heart failure", "Pancreatitis", "Cholecystitis"],
    answer: "B",
    explanation: "While heart failure can cause congestive hepatopathy, it may also cause a thickened gallbladder wall.  You may also see a thickened gallbladder wall in fluid overload states such as cirrhosis.",
    topic: "Hepatobiliary"
};



const myDictionary = {
    Physics: [physicsDictionary1, physicsDictionary2, physicsDictionary3, physicsDictionary4, physicsDictionary5], 
    Aorta: [AortaDictionary1, AortaDictionary2, aortaDictionary3, aortaDictionary4, aortaDictionary5],
    Hepatobiliary: [HepatoDictionary1, HepatoDictionary2, HepatoDictionary3, HepatoDictionary4, HepatoDictionary5]
};



export default myDictionary;