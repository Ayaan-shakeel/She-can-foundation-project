import React from 'react'
import { Link } from 'react-router-dom'
import { HeartHandshake,Mail } from 'lucide-react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-emerald-950 text-white">
      
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">

        {/* Left Section */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <HeartHandshake className="text-emerald-300" size={24} />

            <h2 className="text-xl font-bold">
              She Can Foundation
            </h2>
          </div>

          <p className="text-sm leading-6 text-emerald-100">
            Empowering students and communities through education,
            digital awareness, and meaningful opportunities.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-sm text-emerald-100">

            <Link to="/" className="transition hover:text-white">
              Home
            </Link>

            <Link to="/about" className="transition hover:text-white">
              About
            </Link>

            <Link to="/features" className="transition hover:text-white">
              Features
            </Link>

            <Link to="/contact" className="transition hover:text-white">
              Contact
            </Link>

          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Connect With Us
          </h3>

          <div className="flex gap-4">

            <a
              href="https://www.instagram.com/shecanfoundation.ngo"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-emerald-800 p-3 transition hover:bg-emerald-700"
            >
            <FaInstagram />
            </a>
            
            <a
            href="https://www.linkedin.com/company/shecanfoundation"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-emerald-800 p-3 transition hover:bg-emerald-700"
            >
            <IoLogoLinkedin />
              
            </a>

            <a
              href="mailto:support@shecanfoundation.org"
              className="rounded-full bg-emerald-800 p-3 transition hover:bg-emerald-700"
            >
              <Mail size={18} />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-emerald-200">
        © 2026 She Can Foundation. All rights reserved.
      </div>

    </footer>
  )
}