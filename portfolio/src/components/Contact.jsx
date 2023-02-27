/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1d2127] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/07b89acb-2bab-4be6-8c87-900cb81ead03" className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#86D4FF] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - nicholasltang21@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='text' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message' />
            <button className='text-white border-2 hover:bg-[#86D4FF] hover:border-[#86D4FF] px-4 py-3 my-8 mx-auto flex items-center '>Let's collaborate!</button>
        </form>
    </div>
  )
}

export default Contact