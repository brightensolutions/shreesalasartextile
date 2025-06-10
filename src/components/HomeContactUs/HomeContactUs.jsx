"use client"

import { useState } from "react"
import emailjs from "emailjs-com"
import { Send, Phone } from "lucide-react"

const HomeContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus("submitting")

    emailjs
      .send(
        "service_6mv7e74",
        "template_m7cw23b",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          mobileNumber: formData.mobileNumber,
          subject: formData.subject,
          message: formData.message,
        },
        "JykYQAmK0jyvbaoeP",
      )
      .then(
        (response) => {
          setFormStatus("success")
          setTimeout(() => {
            setFormData({
              firstName: "",
              lastName: "",
              mobileNumber: "",
              subject: "",
              message: "",
            })
            setFormStatus("idle")
          }, 3000)
        },
        (error) => {
          setFormStatus("error")
          setErrorMessage("Failed to send message, please try again later.")
          setTimeout(() => {
            setFormStatus("idle")
            setErrorMessage("")
          }, 3000)
        },
      )
  }

  return (
    <div className="relative">
      <div className="lg:max-w-[1440px] m-auto  px-[20px] py-16 relative z-20">
        {/* Get In Touch Section */}
        <div className="text-center mb-12">
          <h2 className="text-black text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We're here to help and answer any questions you might have</p>
        </div>

        {/* Department Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <ExportDepartmentCard
            department="Knits Department"
            company="(Shree Salasar Textiles)"
            contacts={[
              { name: "Harsh Daga", phone: "+91 9825055595" },
              { name: "Raghav Daga", phone: "+91 7229055595" },
            ]}
          />
          
          <ExportDepartmentCard
            department="Shirting & Suiting"
            company="(Hanuman Textiles)"
            contacts={[{ name: "Lalit Daga", phone: "+91 75728 55595" }]}
          />

          <ExportDepartmentCard
            department="Furnishing Department"
            company="(Maruti Furnishing)"
            contacts={[
              { name: "Vijay Mohata", phone: "+91 95742 55595" },
              { name: "Anuj Mohata", phone: "+91 97378 22630" },
            ]}
          />

          

          <ExportDepartmentCard
            department="Export Department"
            company=""
            contacts={[{ name: "Jayant Daga", phone: "+91 90543 45595" }]}
          />
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto border border-gray-200 bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-600 rounded-full p-2 text-white">
              <Send size={20} />
            </div>
            <h3 className="text-black text-2xl font-bold">Send Us a Message</h3>
          </div>

          {/* Form status messages */}
          {formStatus === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          {formStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-red-500"
                disabled={formStatus === "submitting"}
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-red-500"
                disabled={formStatus === "submitting"}
                required
              />
            </div>

            <div>
              <label htmlFor="mobileNumber" className="block text-gray-700 mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-red-500"
                disabled={formStatus === "submitting"}
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-red-500"
                disabled={formStatus === "submitting"}
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Message"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-red-500"
                disabled={formStatus === "submitting"}
                required
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="bg-black text-white py-3 px-6 rounded flex items-center justify-center gap-2 w-full hover:bg-gray-800 transition-colors disabled:bg-gray-600"
              >
                {formStatus === "submitting" ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Submit
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-96 w-[100%] bg-zinc-950 absolute z-10 -bottom-0 rounded-t-2xl" />
    </div>
  )
}

// Special card for Department with red header and curved bottom
const ExportDepartmentCard = ({ department, contacts, company }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
      {/* Top red section with curved bottom */}
      <div className="relative bg-red-600 text-white p-6 pb-8">
        <h3 className="font-bold text-xl text-center">{department}</h3>
        <p className="font-normal text-[15px] font-poppins mt-3 text-center">{company}</p>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-red-600"
          style={{
            borderBottomLeftRadius: "100%",
            borderBottomRightRadius: "100%",
            transform: "translateY(50%)",
          }}
        ></div>
      </div>

      {/* Bottom white section */}
      <div className="bg-white pt-8 p-6">
        <div className="relative">
          {contacts.map((contact, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <p className="font-medium text-lg text-gray-800">{contact.name}</p>
              <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 text-gray-700">
                <Phone size={14} />
                {contact.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeContactUs

