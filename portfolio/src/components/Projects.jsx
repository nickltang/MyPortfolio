/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { data } from '../data/data.js'

const Projects = () => {
    const projects = data

  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#1d2127]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            {/* Heading container*/}
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#86D4FF]'>Projects</p>
                <p className='py-6'>// Check out some of my recent projects!</p>
            </div>

            {/* Project grid container*/}
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                { projects.map((item, index) => ( 
                    <div 
                        key={index}
                        style={{ backgroundImage: `url(${item.image})` }} 
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div className='text-center'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    {item.name}
                                </span>
                                <br />
                                <span className='p-3 text-xs text-center tracking-wide text-white'>
                                    {item.description}
                                </span>
                            </div>
                            <div className='pt-3 text-center'>
                                { item.live === '' 
                                    ? <></>
                                    : (<a href={item.live} target='_blank' rel="noreferrer">
                                            <button 
                                                className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'
                                            >
                                                Live
                                            </button>
                                        </a>)
                                }
                                <a href={item.github} target='_blank' rel="noreferrer">
                                    <button 
                                        className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'
                                    >
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Projects