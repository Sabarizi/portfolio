import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FcDownload } from "react-icons/fc";
import logo from '../../../public/logo.png';

const Navbar = () => {
  return (
    <div className='z-50 sticky top-0'>
      <header className="text-white body-font bg-black ">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-orange-600 mb-4 md:mb-0">
    <Image src={logo} alt="logo" width={50} height={50} />
      <span className="ml-3 text-xl hover:underline cursor-pointer">My portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
   
       
      <Link href={"/"} className="mr-5 hover:text-yellow-500 hover:underline">Home</Link>
      <Link href={"#About"} className="mr-5 hover:text-yellow-500 hover:underline">About</Link>
      <Link href={"#Project"} className="mr-5 hover:text-yellow-500 hover:underline">Project</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-yellow-500 hover:underline">Contact</Link>
     
    </nav>
   
    <button className="inline-flex items-center  bg-gray-100 text-black border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md:mt-0">
       <a href='/resume.pdf'>
        Download CV 
    <FcDownload className='text-lg ml-2 inline-flex'/>
   </a>
    </button>
  
  </div>
</header>
    </div>
  )
}

export default Navbar
