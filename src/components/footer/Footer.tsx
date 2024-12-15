import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#381a5f]">
      <div className="px-2 md:px-0 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold ">Okeke Eugenia</h1>

        <div className="flex space-x-6 mt-4">
          <a href="#" className="hover:text-gray-300">
            <FaLinkedin size={25} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter size={25} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
