"use client";
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import profileImage from '../../../public/profile.jpg';

const Hero = () => {
  return (
    <section className="text-white bg-black body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">
            Hello I&apos;m 
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  'Nuzhat Saba',
                  'Web Developer',
                  'Student & Aspiring Developer',
                  'Creative Mind, Problem Solver'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mb-8 leading-relaxed">
            As a passionate web designer and developer, I specialize in creating innovative and responsive websites that deliver a seamless user experience. My expertise lies in front-end technologies such as HTML, CSS, and JavaScript, along with frameworks like React and Next.js. I am always eager to learn new technologies and improve my skills to stay ahead in the fast-evolving web development field. My goal is to transform creative ideas into functional, visually appealing websites that meet both client needs and user expectations.
          </p>
          <div className="flex justify-center">
            <Link href="#Contact">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image src={profileImage} alt="logo" width={300} height={300} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
