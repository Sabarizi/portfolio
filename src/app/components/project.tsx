import React from 'react';
import Image from 'next/image';
import calculator from '../../../public/calculator.png';
import todolist from '../../../public/todolist.png';
import dynmic from '../../../public/dynmic.png';
import g from '../../../public/g.png';

const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-300 body-font bg-gradient-to-r from-purple-900 via-black to-gray-900">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            
            <div className="flex flex-wrap w-full bg-gray-800 py-20 px-10 relative mb-8 rounded-lg shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300">
              <Image src={g} alt="Governor Sindh Website" width={1000} height={1000} className="rounded-lg hover:scale-105 transition-transform duration-300"/>
              <div className="text-center relative z-10 w-full">
                <h2 className="text-3xl text-white font-bold mb-4 drop-shadow-lg">Project of Governor Sindh Website</h2>
              </div>
            </div>
            
            <div className="flex -mx-2">
          
              
           
              <div className="px-2 w-full sm:w-1/2 mb-4">
                <div className="flex flex-wrap w-full bg-gray-900 py-10 px-5 relative rounded-lg shadow-lg hover:shadow-emerald-600/50 hover:scale-105 transition-transform duration-300">
                  <a href='https://milestone-5-kuftzjr9n-sabas-projects-f8d7207f.vercel.app/'>
                  <Image src={dynmic} alt="Todo list logo" width={800} height={800} className="rounded-lg"/>
                  <div className="text-center relative z-10 w-full mt-4">
                    <h2 className="text-xl text-white font-serif mb-2">My Dynamic Resume</h2>
                  </div></a>
                </div>
              </div>
              <div className="px-2 w-full sm:w-1/2 mb-4">
                <div className="flex flex-wrap w-full bg-gray-900 py-10 px-5 relative rounded-lg shadow-lg hover:shadow-emerald-600/50 hover:scale-105 transition-transform duration-300">
                <a href='https://calculator-sigma-murex-11.vercel.app/?vercelToolbarCode=WmSnTkSDzQrOJAr' >
                  <Image src={calculator} alt="Todo list logo" width={800} height={800} className="rounded-lg"/>
                  <div className="text-center relative z-10 w-full mt-4">
                    <h2 className="text-xl text-white font-serif mb-2">My Calculator</h2>
                  </div></a>
                </div>
              </div>
              <div className="px-2 w-full sm:w-1/2 mb-4">
                <div className="flex flex-wrap w-full bg-gray-900 py-10 px-5 relative rounded-lg shadow-lg hover:shadow-emerald-600/50 hover:scale-105 transition-transform duration-300">
                 <a href='https://todolist-react-et24rg5ra-sabas-projects-f8d7207f.vercel.app/'>
                  <Image src={todolist} alt="Todo list logo" width={800} height={800} className="rounded-lg"/>
                  <div className="text-center relative z-10 w-full mt-4">
                    <h2 className="text-xl text-white font-serif mb-2">My Todo List</h2>
                  </div></a>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
