import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AdminPanel() {
  const [enquiries, setEnquiries] = useState([])

  useEffect(() => {
    const getEnquiries = async () => {
      try {
        const res = await axios.get("http://localhost:7000/api/form/get-enquiries")
        if (res.data.status === 1) {
          setEnquiries(res.data.enquiries)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getEnquiries()
  }, [])

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-950 via-emerald-950 to-slate-900 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Dashboard
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Admin Panel
            </h1>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              Manage and review all website enquiries in one place.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
            <p className="text-sm text-slate-300">Total Enquiries</p>
            <h2 className="text-2xl font-bold text-emerald-300">
              {enquiries.length}
            </h2>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-white/10 text-sm uppercase tracking-wide text-emerald-200">
                <tr>
                  <th className="px-4 py-4 font-semibold sm:px-6">Name</th>
                  <th className="px-4 py-4 font-semibold sm:px-6">Email</th>
                  <th className="px-4 py-4 font-semibold sm:px-6">Message</th>
                  <th className="px-4 py-4 font-semibold sm:px-6">Date</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10">
                {enquiries.length > 0 ? (
                  enquiries.map((enquiry, index) => (
                    <tr
                      key={index}
                      className="transition duration-200 hover:bg-white/5"
                    >
                      <td className="px-4 py-4 text-sm font-medium text-white sm:px-6 sm:text-base">
                        {enquiry.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-300 sm:px-6 sm:text-base">
                        {enquiry.email}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-300 sm:px-6 sm:text-base">
                        <div className="max-w-65 wrap-break-word sm:max-w-md">
                          {enquiry.message}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-400 sm:px-6 sm:text-base">
                        {new Date(enquiry.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-4 py-10 text-center text-sm text-slate-400 sm:px-6 sm:text-base"
                    >
                      No enquiries found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}