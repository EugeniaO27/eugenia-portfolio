"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E shop",
    desc: "E-Shop is an ecommerce web application that enables users to buy different electronic devices such as phones, laptops, watch, headphones e.t.c at their comfort of their homes.",
    devStack: "express.js, react,next.js, typescript, tailwind",
    link: "#",
    git: "#",
    src: "/mike.png",
  },
  {
    title: "Weather App",
    desc: "wheather app is a weather forecasting application designed to provide users with up-to-date and accurate information about current weather conditions and time of a given location.",
    devStack: "vanilla javascript, html, Css",
    link: "#",
    git: "#",
    src: "/weather.jpg",
  },
  {
    title: "TO-DO LIST",
    desc: " This is an app that contains all the tasks that needs to be done and can be ticked off accordingly.",
    devStack: " react, javascript, tailwind, Css",
    link: "#",
    git: "#",
    src: "/todo.jpg",
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-0"
      id="portfolio">
      <div className="text-white text-6xl w-[320px] mx-auto font-semibold my-12">
        <h1>
          Selected <span className="text-orange-400"> Projects</span>{" "}
        </h1>
      </div>
      <div className="px-2 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${
              index % 2 === 1 ? " md:flex-row-reverse gap-12" : " md:flex-row"
            }`}>
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">
                {" "}
                {`0${index + 1}`}
              </h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devStack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-2">
                <a href={project.link} className="mr-6">
                  Link
                </a>
                <a href={project.git}>Git</a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                width="500"
                height="350"
                className="object-cover border rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
