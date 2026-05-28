import React from 'react'
import jointeam from '../assets/jointeam.avif'


export default function About() {
  return (
      <section className="min-h-screen  px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        
        <div className="mb-12 text-center">
          <p className="mb-3 inline-block rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-1 text-sm font-medium text-emerald-200">
            About Our Foundation
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-emerald-400 to-teal-300"></div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <h2 className="mb-5 text-2xl font-semibold leading-snug text-emerald-200 sm:text-3xl">
                Empowering women and students through education, awareness, and opportunity
              </h2>

              <p className="mb-4 text-base leading-8 text-slate-200 sm:text-lg">
                She Can Foundation is a youth-driven NGO dedicated to empowering women and students through education, digital awareness, skill development, and community initiatives.
              </p>

              <p className="mb-4 text-base leading-8 text-slate-300 sm:text-lg">
                We believe every individual deserves equal opportunities to learn, grow, and create a positive impact in society.
              </p>

              <p className="mb-6 text-base leading-8 text-slate-300 sm:text-lg">
                It is a private organization registered under the India Society Act, 1860.
              </p>

              <div className="rounded-2xl border border-emerald-300/15 bg-emerald-400/10 p-4 sm:p-5">
                <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
                  Our Volunteers
                </h3>
                <p className="text-sm leading-7 text-slate-200 sm:text-base">
                  Our volunteers are the backbone of our organization. They are passionate about making a difference in the lives of others and are committed to spreading the message of equality, inclusion, and empowerment.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <img
                className="h-70 w-full object-cover sm:h-95 lg:h-130"
                src={jointeam}
                alt="Volunteers working together at She Can Foundation"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}