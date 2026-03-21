import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center' style={{backgroundImage: "url('https://images.pexels.com/photos/4968568/pexels-photo-4968568.jpeg')"}}>
        <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-lg'>
            <h1 className='text-4xl font-bold text-center mb-6 '>Contact Us</h1>
            <p className='text-gray-600 text-center mb-4'>
                We would love to here from you! Please Fill out the form below or contact us directly.
            </p>
            <from className="space-y-4">
                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>
                        Name
                    </label>
                    <input type="text" required className='mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                </div>
                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>
                        Email 
                    </label>
                    <input type="email" required className='mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                </div>
                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>
                        Message
                    </label>
                    <textarea rows="4" required className='mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                </div>
                <button className='w-full bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition duration-300'>
                    Send Message
                </button>
            </from>
            <div className='mt-8 text-center'>
                <h2 className='text-lg font-semibold'>
                    Contect Information
                </h2>
                <div className='flext flex-col items-center space-y-2 mt-4'>
                    <div className='flex items-center'>
                        <FaPhone className='text-blue-500 mr-2'/>
                        <span className='text-gray-600'>+91 95164 31321 </span>
                    </div>
                    <div className='flex items-center'>
                        <FaEnvelope className='text-blue-500 mr-2'/>
                        <span className='text-gray-600'>Info@Kumarrohit$1175@gmail.com</span>
                    </div>
                    <div className='flex items-center'>
                        <FaMapMarkedAlt className='text-blue-500 mr-2'/>
                        <span className='text-gray-600'>123 New delhi,India</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact