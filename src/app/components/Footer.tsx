import React from 'react'
import Image from 'next/image'
import { FaFacebookSquare } from "react-icons/fa";
import logo from '../../../public/logo.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className="text-white body-font bg-black">
  <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-orange-600">
    <Image src={logo} alt="logo" width={50} height={50} />
      <span className="ml-3 text-xl ">Get in Touch</span>
    </a>
   
    <span className='inline-flex sm:ml-auto sm:ml justify-center sm:justify-start'>
    <Link href={'https://www.facebook.com/profile.php?id=100007323109465'} className='text-xl px-1 hover:bg-gray-600  '>
    <FaFacebookSquare /></Link>
    <Link href={'https://github.com/Sabarizi'} className='text-xl px-1 hover:bg-gray-600'
    ><FaGithub /></Link>
     <Link href={'https://www.linkedin.com/in/nuzhat-saba-162581284/'} className='text-xl px-1 hover:bg-gray-600'
    ><FaLinkedinIn /></Link>
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer
