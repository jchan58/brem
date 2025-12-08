import { Heading } from "@radix-ui/themes";

// Duplicate of the demo module page without the units list.
const LogInPage = () => {
    const handleLogin = (event) => {
        event.preventDefault(); // non-functional form; always redirect
        window.location.href = "/all-modules";
    };

    return (
        <div className="flex flex-col items-center px-4 min-h-[70vh] justify-center">
            <style>{`
                .fade-in {
                    opacity: 0;
                    transform: translateY(8px);
                    animation: fadeInUp 0.8s ease forwards;
                }
                .delay-1 { animation-delay: 0.3s; }
                .delay-2 { animation-delay: 0.8s; }
                .delay-3 { animation-delay: 1.1s; }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <p className="text-center text-4xl font-bold mb-5 fade-in">Teaching & Training Modules for Translational Neurosurgery Research</p>
            <Heading size="5" mb="4" trim="start" weight="medium" className="text-center mb-8 fade-in delay-1">
                Developed by the Hunterian Neurosurgical Laboratory
                
            </Heading>

            <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4 fade-in delay-2">
                <div className="flex flex-col space-y-1">
                    <label htmlFor="username" className="text-sm font-semibold text-gray-700">Username</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter username"
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-900 text-white font-semibold py-2 rounded hover:bg-indigo-800 transition"
                >
                    Log In
                </button>
            </form>

            <div className="w-full max-w-sm my-6 border-t border-gray-300 fade-in delay-3" aria-hidden="true"></div>

            <button
                type="button"
                className="w-full max-w-sm border border-indigo-900 text-indigo-900 font-semibold py-2 rounded hover:bg-indigo-50 transition fade-in delay-3"
            >
                Create an Account
            </button>
        </div>
    );
};

export default LogInPage;
