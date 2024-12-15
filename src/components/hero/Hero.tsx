"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      <div
        className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
                        bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1>
            <span className="text-[#98B4CE]">Hi, {`I'm`}</span> <br />
            <span className="text-[#E48A57]">Eugenia Okeke</span>
          </h1>
        </div>
        <motion.div
          className="hidden md:block absolute left-[280px] top-[170px]"
          drag>
          <Image
            src="/icon1.png"
            alt=""
            width="190"
            height="190"
            className=""
            draggable="false"
          />
        </motion.div>
        <motion.div
          className="hidden md:block absolute right-[220px] top-[20px]"
          drag>
          <Image
            src="/icon2.png"
            alt=""
            width="150"
            height="150"
            className=""
            draggable="false"
          />
        </motion.div>

        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80 ">
          {`I'm`} a Frontend Developer focused on creating websites that
          provides the best experince for users.
        </p>
        <Image
          src="/profilepic.png"
          alt=""
          height={100}
          width={200}
          className="h-auto w-auto mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
