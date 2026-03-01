import { FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black backdrop-blur-sm w-full flex justify-center ">
      <div className=" w-270 text-white/80  py-10 border-t border-white/20">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

           {/* Logo / Brand */}
          <div>
            <h1 className="text-2xl font-bold text-white">Cyber Bros</h1>
            <p className="text-white/60 mt-2 max-w-sm">
              Building modern, secure and high-performance digital solutions.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl">
            <a
              href="#"
              className="text-white/60 hover:text-pink-500 transition transform hover:scale-125"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="text-white/60 hover:text-white transition transform hover:scale-125"
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              className="text-white/60 hover:text-indigo-500 transition transform hover:scale-125"
            >
              <FaDiscord />
            </a>
          </div>

          {/* Policy Links */}
          <div className="flex gap-6 text-sm">
            
            <NavLink
              to="/TermsAndCondition"
              className="text-white/80 hover:text-white transition"
            >
              Terms & Conditions
            </NavLink>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Cyber Bros. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;