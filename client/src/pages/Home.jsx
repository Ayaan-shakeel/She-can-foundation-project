import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from './About'
import Contact from './Contact'
import Features from './Features'

export default function Home() {
  return (
    <div className='bg-linear-to-br from-slate-950 via-emerald-950 to-teal-900'>
      
<Hero/>
<About/>
<Features/>
<Contact/>
    </div>
  )
}
