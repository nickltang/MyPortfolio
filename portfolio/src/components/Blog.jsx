import React from 'react'

const Blog = () => {
  return (
    <div name='blog' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            {/* Heading */}
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-white'>Blog</p>
                <p className='py-6'>// I write about my journey in software engineering on Medium</p>
            </div>

            {/* Articles */}
            <div>
                <p className='text-3xl inline'>I'm currently starting my Medium blog. Stay tuned for updates!</p>
            </div>
        </div>
    </div>
  )
}

export default Blog