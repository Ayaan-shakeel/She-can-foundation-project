import React from 'react'
import Form from './components/Form'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Features from './pages/Features'
import Footer from './pages/Footer'
import {useEffect, useState} from 'react'
import PageLoader from './components/PageLoader'
import AdminPanel from './pages/AdminPanel'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <PageLoader/>

  return (
    <div className='bg-linear-to-br from-slate-950 via-emerald-950 to-teal-900'>
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/admin" element={<AdminPanel/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
