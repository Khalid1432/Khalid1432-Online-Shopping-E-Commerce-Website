import { NavLink } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-600">
      <div className="w-full max-w-[1440px] h-[95px] py-2 sm:py-0 sm:h-[60px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <h2 className="text-2xl lg:text-3xl text-white font-gantari select-none">
            <NavLink to="/"><span className="text-yellow-400">O</span>nline <span className="text-yellow-400">S</span>hopping</NavLink>
          </h2>
          <p className="text-sm lg:text-base font-inter text-white md:border-l-2 md:pl-6 md:ml-6">© 2024 onlineShopping —@onlineShopping</p>
        </div>

        <div className="flex gap-4 text-xl sm:text-2xl text-white">
          <NavLink to="https://www.facebook.com/" className="hover:opacity-80 duration-200 transition-all"><FaFacebookF/></NavLink>
          <NavLink to="https://x.com/i/flow/login" className="hover:opacity-80 duration-200 transition-all"><IoLogoTwitter/></NavLink>
          <NavLink to="https://www.instagram.com/" className="hover:opacity-80 duration-200 transition-all"><FaInstagram/></NavLink>
          <NavLink to="https://www.linkedin.com/" className="hover:opacity-80 duration-200 transition-all"><FaLinkedinIn/></NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
