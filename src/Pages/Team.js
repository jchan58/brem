import labImg from "../Image_folder/labMembers.jpeg";
import DrBrem from "../Image_folder/Brem.jpeg";
import Professor from "../Image_folder/Professor.jpeg";

const Team = () => {
    return (
        <div className="w-full relative">
            <div className="w-full h-[700px] bg-gray-900/90 relative">
                <img className="w-full h-full object-cover mix-blend-overlay" src={labImg} alt="/" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h2 className="text-3xl text-slate-300 uppercase">Team</h2>
                    <h3 className="text-5xl font-bold mt-6">Meet our lab members</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto relative">
                <div className="px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 relative gap-8 px-4 pt-12 sm:pt-20 text-black">
                        <div className="bg-white rounded-xl shadow-2xl text-center relative overflow-hidden">
                            <div className="p-8">
                                <div className="relative">
                                    <h2 className="font-bold text-3xl my-6">Dr. Brem</h2>
                                    <div className="relative">
                                        <img className="mx-auto" src={DrBrem} alt="Dr. Brem" />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 hover:transform hover:translate-y-0">
                                            <p className="text-white text-xl">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit aliquet sagittis id consectetur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-2xl text-center relative overflow-hidden">
                            <div className="p-8">
                                <div className="relative">
                                    <h2 className="font-bold text-3xl my-6">Professor Betty Tyler</h2>
                                    <div className="relative">
                                        <img className="mx-auto" src={Professor} alt="Professor Betty Tyler" />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 hover:transform hover:translate-y-0">
                                            <p className="text-white text-xl">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit aliquet sagittis id consectetur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-2xl text-center relative overflow-hidden">
                            <div className="p-8">
                                <div className="relative">
                                    <h2 className="font-bold text-3xl my-6">Residents</h2>
                                    <div className="relative">
                                        <ul>
                                        <li className="text-xl"> * Safwan Alomari</li>
                                        <li className="text-xl"> * Jayanidhi Kedda: GWU School of Medicine - 2023</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-2xl text-center relative overflow-hidden">
                            <div className="p-8">
                                <div className="relative">
                                    <h2 className="font-bold text-3xl my-6">Medical Student</h2>
                                    <div className="relative">
                                        <ul>
                                        <li className="text-xl"> * Divyaansh Raj: JHU School of Medicine - 2024</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;

