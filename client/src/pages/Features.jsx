import React from 'react'
import Card from '../components/Card'
import education from '../assets/education.jpeg'
import digital from '../assets/digital.jpeg'
import community from '../assets/community.jpeg'

export default function Features() {
  return (
    <section className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="mb-4 inline-block rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-1 text-sm font-medium text-emerald-200">
            Our Core Values
          </p>
          <h1 className="text-4xl font-extrabold text-white sm:text-3xl lg:text-5xl">
            Features Section
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            Our work focuses on education, digital empowerment, and community support to create long-term impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h2 className="mb-6 text-center text-2xl font-bold text-white sm:text-3xl">
              Education
            </h2>
            <div className="overflow-hidden rounded-2xl bg-white/5">
              <img
                className="h-48 w-full object-cover"
                src={education}
                alt="Education support"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="mt-6 text-center text-lg font-medium leading-8 text-slate-300">
              Supporting learning and skill development opportunities.
            </p>
          </Card>

          <Card>
            <h2 className="mb-6 text-center text-2xl font-bold text-white sm:text-3xl">
              Digital Empowerment
            </h2>
            <div className="overflow-hidden rounded-2xl bg-white/5">
              <img
                className="h-48 w-full object-cover"
                src={digital}
                alt="Digital empowerment"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="mt-6 text-center text-lg font-medium leading-8 text-slate-300">
              Using technology to create awareness and accessibility.
            </p>
          </Card>

          <Card>
            <h2 className="mb-6 text-center text-2xl font-bold text-white sm:text-3xl">
              Community Support
            </h2>
            <div className="overflow-hidden rounded-2xl bg-white/5">
              <img
                className="h-48 w-full object-cover"
                src={community}
                alt="Community support"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="mt-6 text-center text-lg font-medium leading-8 text-slate-300">
              Building inclusive communities through collaboration and volunteering.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}