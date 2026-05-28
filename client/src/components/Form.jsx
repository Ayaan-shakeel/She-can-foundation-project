import React, { useState } from 'react'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const emailReg=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
  return toast.error("Please fill all the fields")
}
if(formData.message.length > 50){
return toast.error("Message length should be less than 50")
}
if(!emailReg.test(formData.email)){
    return toast.error("Please enter a valid email")
}
      const response = await axios.post(
        "https://she-can-foundation-ev56.onrender.com/api/form/add-enquiry",
        formData
      )

      if (response.data.Status === 1) {
        toast.success("Form Submitted Successfully")
        setFormData({ name: "", email: "", message: "" })
      }
      else{
        toast.error("Something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
        <Toaster position='top-right' reverseOrder={false}/>
    <section className="min-h-screen  px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:p-8"
        >
        
          <div className="flex flex-col gap-5">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Contact Us
              </h2>
              <p className="mt-2 text-sm text-gray-300 sm:text-base">
                We would love to hear from you. Send your message below.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-white">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-white">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-2xl bg-linear-to-r from-emerald-500 to-green-400 px-5 py-3 text-base font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.01] hover:from-emerald-400 hover:to-green-300 active:scale-[0.99] sm:text-lg"
            >
              Submit
            </button>
          </div>
          
        </form>
      </div>
    </section>
    </>
  )
}