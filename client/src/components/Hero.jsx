import React from 'react'
import MainSection from '../assets/Mainsection.webp'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
    const navigate=useNavigate()
  return (
    <div className='min-h-screen bg-black/50 bg-center bg-no-repeat bg-size-[auto_100%] sm:bg-cover md:bg-cover lg:bg-cover flex flex-col items-center justify-center text-center p-6' style={{backgroundImage:`url(${MainSection})`}}>
        
        <h1 className='text-white font-semibold text-3xl sm-2xl mb-6 '>Empowering Women through technology and education</h1>
        <p className='text-lg text-gray-300 mb-10 ' >Creating opportunities, spreading awareness, and building a better future through community, learning, and digital innovation.</p>
   <button onClick={()=>navigate('/contact')} className='cursor-pointer bg-linear-to-br from-amber-400 via-orange-600 to-red-500 rounded-xl mb-5 lg:w-[20%] md:w-[35%] sm:w-full sm:py-3 sm:px-1  p-3 text-white font-semibold text-2xl hover:brightness-110 hover:from-amber-500 hover:via-orange-600 hover:to-red-300'>Join Us</button>
   <p className='text-lg text-gray-300 mb-10 '>Become a Volunteer</p>
  
    </div>
  )
}
