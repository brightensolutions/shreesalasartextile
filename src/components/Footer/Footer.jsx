import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { logo, logoWhite } from "../Images/Images"
import { FaInstagram, FaFacebookSquare, FaYoutube, FaPhoneSquare, FaWhatsapp } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"

const Footer = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState("")
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Our Product", path: "/products" },
    { name: "Event & Trade Show", path: "/events" },
    { name: "Blogs", path: "/blogs" },
    { name: "Career", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ]

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location])

  return (
    <>
      <div className="bg-[#0a0a0a] pt-[80px]">
        <div className="lg:max-w-[1440px] px-[20px] m-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[50px]">
            {/* Company Info */}
            <div className="text-left">
              <Link to="/">
                <img src={logo || "/placeholder.svg"} alt="shree salasar textiles" className="w-[250px]" />
              </Link>
              <p className="text-gray-300 mt-[15px] font-tomorrow text-left">
                We are committed to transform ourselves into a renowned textile company across the globe by establishing
                strong network of clients with support of our young & highly talented professionals, aiming for a turnover
                of 500 Crores by the year 2025.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-left">
              <h2 className="text-white font-bold font-tomorrow text-[22px] mb-[20px]">Quick Links</h2>
              <ul className="flex flex-col gap-y-[15px]">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`text-[16px] font-medium font-tomorrow transition duration-300 ${
                        activeLink === item.path ? "text-blue-500" : "text-gray-300"
                      } hover:text-blue-400`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-left">
              <h2 className="text-white font-bold font-tomorrow text-[22px] mb-[20px]">Contact Us</h2>
              <div className="flex flex-col gap-[25px]">
                {/* Social Media */}
                <div className="flex gap-[15px]">
                  <Link
                    to="https://www.instagram.com/daga_group.official/"
                    target="_blank"
                    className="text-[30px] text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    to="https://www.facebook.com/dagaagroup"
                    target="_blank"
                    className="text-[30px] text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    <FaFacebookSquare />
                  </Link>
                  <Link
                    to="https://youtu.be/tmJ5xlWRrl8?si=3NO3LK3xBFqNDX2c"
                    target="_blank"
                    className="text-[30px] text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    <FaYoutube />
                  </Link>
                </div>

                {/* Head Office */}
                <div>
                  <p className="text-white mb-[10px] font-bold">HEAD OFFICE</p>
                  <Link
                    to="https://www.google.com/maps/dir/21.140883,72.7825035/daga+group/"
                    target="_blank"
                    className="group"
                  >
                    <div className="flex items-start gap-[15px]">
                      <FaLocationDot className="text-[30px] text-gray-300 group-hover:text-blue-400 transition duration-300" />
                      <p className="font-roboto text-gray-300 text-[16px] group-hover:text-blue-400 transition duration-300">
                        6037, VIKAS LOGISTICS PARK,
                        <br />
                        KUMBHARIA, SURAT, GUJARAT 395010
                      </p>
                    </div>
                  </Link>

                  <div className="flex items-start gap-[15px] mt-[15px]">
                    <FaPhoneSquare className="text-[30px] text-gray-300" />
                    <div className="flex flex-col gap-[5px]">
                      <Link
                        to="tel:+919825055595"
                        className="font-roboto text-gray-300 text-[16px] hover:text-blue-400 transition duration-300"
                      >
                        +91 98250 55595
                      </Link>
                      <Link
                        to="tel:+917229055595"
                        className="font-roboto text-gray-300 text-[16px] hover:text-blue-400 transition duration-300"
                      >
                        +91 72290 55595
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Associate Office */}
                <div>
                  <p className="text-white mb-[10px] font-bold">ASSOCIATE OFFICE</p>
                  <div className="flex items-start gap-[15px]">
                    <FaLocationDot className="text-[30px] text-gray-300" />
                    <div>
                      <p className="font-roboto text-gray-300 text-[16px]">
                        X-941, SATSANG MARG, NEAR JHEEL CHOWK
                        <br />
                        GANDHI NAGAR DELHI - 110031
                      </p>
                      <Link
                        to="tel:+919318373466"
                        className="font-roboto text-gray-300 text-[16px] hover:text-blue-400 transition duration-300 block mt-[5px]"
                      >
                        +91 93183 73466
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-[25px] pb-[25px] border-t border-gray-800 mt-[25px]">
          <Link
            to="https://brightensolutions.com/"
            className="text-gray-300 font-tomorrow text-[16px] hover:text-blue-400 transition duration-300"
          >
            © {new Date().getFullYear()} Brighten Solutions. All rights reserved.
          </Link>
        </div>
      </div>

        {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* WhatsApp Numbers Popup */}
          <div className={`absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 transition-all duration-300 ${
            isWhatsAppOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}>
            <div className="flex flex-col gap-3 min-w-[200px]">
              <a 
                href="https://wa.me/919825055595" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                <FaWhatsapp className="text-xl" />
                <span>+91 98250 55595</span>
              </a>
              <a 
                href="https://wa.me/917229055595" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                <FaWhatsapp className="text-xl" />
                <span>+91 72290 55595</span>
              </a>
            </div>
          </div>

          {/* WhatsApp Button with Animation */}
          <button
            onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110 relative"
          >
            <FaWhatsapp className="text-3xl animate-bounce" />
            {/* Ripple Effect */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Footer
