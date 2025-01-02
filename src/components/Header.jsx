import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <div className="navbar">
        <Navbar />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ ease: "easeOut", duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white "
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-10">Explore homes that fit your dreams</h2>
        <div className="space-x-6 mt-16">
          <a className=" border border-white px-8 py-3 rounded hover:bg-blue-500 hover:border-none" href="#project">
            Projects
          </a>
          <a className="bg-blue-500 px-8 py-3 rounded hover:bg-transparent hover:border hover:border-white" href="#contact">
            Contact us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
