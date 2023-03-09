import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
var ReactRotatingText = require("react-rotating-text");

const Home = () => {
  const roles = ['I\'m a Full Stack Developer.', 'I\'m a Computer Science Student.', 'I\'m an Aspiring Tech Blogger.']

  return (
    <div name='home' className='w-full h-screen bg-[#1d2127]'>
        {/* Container */}
        <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#86D4FF]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Nick Tang</h1>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#9ea7c3]'>
              <ReactRotatingText items={roles}/>
            </h1>
            {/* <p className='text-[#9ea7c3] py-4 max-w-[700px]'>Blurb about my skills or whatever</p> */}
            <div>
                <Link to="projects" smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-4 flex items-center hover:bg-[#86D4FF] hover:border-[#86D4FF]'>
                            View Projects
                            <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'/>
                            </span>
                    </button>
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Home