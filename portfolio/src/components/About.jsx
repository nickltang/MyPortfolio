import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1d2127] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#86D4FF]'>
                        About
                    </p>
                </div>
                
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Hi, I'm Nick, nice to meet you. I’m a CS student at San Jose State University from Santa Clara, California.
                    </p>
                </div>
                <div>
                    <p className='border-t-4 border-transparent'>
                        Growing up, I was fascinated by the power of technology in streamlining everyday life— this excitement has fueled my passion towards creating meaningful products with seamless user experiences. Having interned as a Full Stack Software Engineer, I aim to bring energy and enthusiasm alongside rock-solid programming, organization, and communication skills in everything I do.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About