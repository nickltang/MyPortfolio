import { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Logo from '../assets/logo.png'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const linkedinLink = 'https://www.linkedin.com/in/nickltang/'
    const githubLink = 'https://github.com/nickltang'
    const emailLink = 'mailto:nicholasltang21@gmail.com'
    const resumeLink = 'https://docs.google.com/document/d/1ZJe5hSh9HzTBKTImeuLSoPbEF50WdZmVh-IrIZw_laE/edit?usp=sharing'

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1d2127] text-gray-300'>
        <div>
            <Link to="home" smooth={true} duration={500}>
                <img src={Logo} alt="Logo" style={{width: '50px'}}/>
            </Link>
        </div>
        {/* menu */}
        <ul className='hidden md:flex'>
            <li className='border-b-4 border-[#1d2127] hover:border-[#86D4FF] duration-100'>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='border-b-4 border-[#1d2127] hover:border-[#86D4FF] duration-100'>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='border-b-4 border-[#1d2127] hover:border-[#86D4FF] duration-100'>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='border-b-4 border-[#1d2127] hover:border-[#86D4FF] duration-100'>
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='border-b-4 border-[#1d2127] hover:border-[#86D4FF] duration-100'>
                <Link to="blog" smooth={true} duration={500}>
                    Blog
                </Link>
            </li >
            <li className='border-b-4 border-[#1d2127] hover:border-[#86D4FF] duration-100'>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li >
        </ul>
        
        {/* Hamburger menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul 
            className={
                !nav 
                ? 'hidden' 
                : 'absolute top-0 left-0 w-full h-screen bg-[#1d2127] flex flex-col justify-center items-center'}
        >
            <li className='py-4 text-4xl border-b-4 border-[#1d2127] hover:border-[#86D4FF] duration-100'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-4 text-4xl border-b-4 border-[#1d2127] hover:border-[#86D4FF] duration-100'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-4 text-4xl border-b-4 border-[#1d2127] hover:border-[#86D4FF] duration-100'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-4 text-4xl border-b-4 border-[#1d2127] hover:border-[#86D4FF] duration-100'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='py-4 text-4xl border-b-4 border-[#1d2127] hover:border-[#86D4FF] duration-100'>
                <Link onClick={handleClick} to="blog" smooth={true} duration={500}>
                    Blog
                </Link>
            </li>
            <li className='py-4 text-4xl border-b-4 border-[#1d2127] hover:border-[#86D4FF] duration-100'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href={linkedinLink} target='_blank' rel="noreferrer">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href={githubLink} target='_blank' rel="noreferrer">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#CD3D30]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href={emailLink} target='_blank' rel="noreferrer">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' href={resumeLink} target='_blank' rel="noreferrer">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar