import { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
    window.removeEventListener("scroll", toggleMenu);
  }

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      {/* ---------- Desktop Menu ----------- */}
      <div className="container mx-auto flex justify-between items-center py-4 md:px-20 lg:px-16 px-7 bg-transparent">
        <img src={assets.logo} alt="" className="" />
        <ul className="hidden md:flex gap-7 text-white ">
          <a href="#home" className="cursor-pointer hover:text-gray-400 font-semibold">
            Home
          </a>
          <a href="#about" className="cursor-pointer hover:text-gray-400 font-semibold ">
            About
          </a>
          <a href="#project" className="cursor-pointer hover:text-gray-400 font-semibold ">
            projects
          </a>
          <a href="#testimonials" className="cursor-pointer hover:text-gray-400 font-semibold">
            testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full font-semibold">Sign up</button>
        <img src={assets.menu_icon} onClick={toggleMenu} className="md:hidden w-7 cursor-pointer" alt="" />
      </div>
      {/* ---------- Desktop Menu ----------- */}

      {/* ---------- mobile menu ----------- */}
      <div className={`md:hidden ${isOpen ? "fixed w-full" : "h-0 w-0"}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className="flex justify-end  p-6 cursor-pointer">
          <img src={assets.cross_icon} onClick={toggleMenu} alt="" className="w-6" />
        </div>

        <ul className="flex flex-col items-center gap-2">
          <a href="#header" className="px-4 py-2 rounded-full inline-block">
            home
          </a>
          <a href="#about" className="px-4 py-2 rounded-full inline-block">
            about
          </a>
          <a href="#project" className="px-4 py-2 rounded-full inline-block">
            project
          </a>
          <a href="#testimonials" className="px-4 py-2 rounded-full inline-block">
            testimonials
          </a>
        </ul>
      </div>
      {/* ---------- mobile menu ----------- */}
    </div>
  );
};

export default Navbar;
