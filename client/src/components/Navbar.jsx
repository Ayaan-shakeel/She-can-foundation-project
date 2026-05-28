import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, HeartHandshake } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/logo.avif'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Features', path: '/features' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -16,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 24,
        stiffness: 220,
        staggerChildren: 0.06,
        delayChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: { duration: 0.18 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 22, stiffness: 220 }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-emerald-950/95 text-white backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        <Link
          to="/"
          className="flex items-center gap-3 min-w-0"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-emerald-300/30 bg-white shadow-sm">
            <img
              src={logo}
              alt="She Can Foundation logo"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <h1 className="truncate text-base font-extrabold tracking-wide text-white sm:text-lg">
              She Can Foundation
            </h1>
            <p className="hidden items-center gap-1 text-xs font-medium text-emerald-200 sm:flex">
              <HeartHandshake size={14} />
              Empowering change
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-emerald-900 shadow-md'
                    : 'text-emerald-100 hover:bg-emerald-800/70 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden absolute right-1 -translate-x-1/2">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-800/80 text-white shadow-lg transition-colors duration-300 hover:bg-emerald-700"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden border-t border-white/10 bg-emerald-900/95 px-4 pb-5 pt-4 backdrop-blur-xl"
          >
            <motion.div
              className="flex flex-col gap-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={itemVariants}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? 'bg-white text-emerald-900'
                          : 'bg-emerald-800/60 text-emerald-50 hover:bg-emerald-700'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    
 )
}

