import Image from "next/image";
// Import a profile picture here or use any relevant image

import profile from'../../../public/profile.jpg';

export default function About() {
    return (
        <div id="About" className="relative bg-black h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <div className="wave-animation bg-gray-800 opacity-20"></div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-blue-200 to-gray-900 p-8 md:p-12 rounded-lg shadow-lg space-y-5 md:space-y-0 md:space-x-8 transform transition-all duration-500 ease-in-out hover:scale-105">
                
                {/* Profile Picture */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg animate-fade-in-up">
              
                <Image src={profile} alt="logo" width={300}  height={300} />
                </div>

                {/* Text Section */}
                <div className="space-y-5 text-center md:text-left animate-fade-in">
                    <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">About Me</h1>
                    <p className="sm:text-lg text-white">
                        As a dedicated and aspiring web developer, I am passionate about building functional, visually appealing, 
                        and user-friendly websites. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React and Next.js, 
                        I bring both creativity and technical skills to my projects. I love tackling complex problems, constantly improving my skills, 
                        and staying updated with the latest trends in web development. My journey is driven by a love for learning, curiosity, 
                        and a desire to craft intuitive, dynamic solutions that resonate with users.
                    </p>
                </div>
            </div>

          
        </div>
    );
}
