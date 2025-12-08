import { useEffect, useState } from "react";

// Simplified view of the demo modules page without the units list.
const AllModules = () => {
    const modules = ["1. INTRODUCTION TO TRANSLATIONAL NEUROSURGERY RESEARCH", "2. LABORATORY METHODS", "3. PRESENTATION OF EXPERIMENTAL OUTCOMES", "4. HNL-SPECIFIC MODULE"];
    const progress = [100, 67, 54, 12];
    const [displayProgress, setDisplayProgress] = useState([0, 0, 0, 0]);
    const radius = 38;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        // Trigger the arc animation shortly after mount.
        const timer = setTimeout(() => setDisplayProgress(progress), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex justify-center">
            <div className="scale-90 origin-top w-full">
                <p className="text-center text-4xl font-bold mb-10">Teaching & Training Modules for Translational Neurosurgery Research </p>
                <div className="flex flex-col items-center gap-6 w-full px-6">
                    {modules.map((label, idx) => {
                        const isComplete = progress[idx] === 100;
                        const handleClick = () => {
                            if (label.includes("LABORATORY METHODS")) {
                                window.location.href = "/demo-module-page";
                            }
                        };
                        return (
                            <button
                                key={idx}
                                type="button"
                                className="flex w-full max-w-3xl items-center justify-between border border-gray-300 rounded-lg px-4 py-3 text-left hover:border-indigo-500 transition"
                                onClick={handleClick}
                            >
                                <span className="text-lg font-semibold">{label}</span>
                                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                                    <svg width="96" height="96" viewBox="0 0 100 100">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r={radius}
                                            fill="none"
                                            stroke="#1e3a8a"
                                            strokeWidth="8"
                                            opacity="0.25"
                                        />
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r={radius}
                                            fill="none"
                                            stroke="#16a34a"
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            strokeDasharray={`${circumference} ${circumference}`}
                                            strokeDashoffset={circumference - (displayProgress[idx] / 100) * circumference}
                                            transform="rotate(-90 50 50)"
                                            style={{ transition: "stroke-dashoffset 1.2s ease" }}
                                        />
                                        {isComplete ? (
                                            <path
                                                d="M38 52 L46 60 L62 44"
                                                fill="none"
                                                stroke="#16a34a"
                                                strokeWidth="8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        ) : (
                                            <text
                                                x="50"
                                                y="50"
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                fontSize="18"
                                                fontWeight="700"
                                                fill="#1e3a8a"
                                            >
                                                {`${progress[idx]}%`}
                                            </text>
                                        )}
                                    </svg>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AllModules;
