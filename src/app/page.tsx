import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Portfolio from "@/components/portfolio/Portfolio";
import Skills from "@/components/skills/Skills";

import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
