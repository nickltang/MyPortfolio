/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

const Blog = () => {
  return (
    <div name='blog' className='w-full h-screen text-gray-300 bg-[#1d2127]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            {/* Heading */}
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#86D4FF]'>Blog</p>
                <p className='py-6'>// I use Medium to document my journey in software engineering-- follow me for articles on new projects, learning strategies, and more!</p>
            </div>

            {/* Articles */}
            <div>
                <p className='text-3xl inline'>I'm currently in the process of starting my Medium blog. <br />Stay tuned for updates!</p>
            </div>
        </div>
    </div>
  )
}

export default Blog