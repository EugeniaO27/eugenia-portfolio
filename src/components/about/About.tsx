import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className=" bg-gradient-to-b from-black to-[#381a5f]">
      <div className="max-w-[1200px] mx-auto " id="about">
        <div className="text-white text-6xl w-[320px] mx-auto font-semibold p-4 mb-4">
          <h1>
            About <span className="text-orange-400"> Me</span>{" "}
          </h1>
        </div>
        <div className="px-2 md:px-0 grid md:grid-cols-8 gap-6 place-items-center">
          <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to bg-orange-700 
            opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row p-6">
              <Image
                src="/book.png"
                alt=""
                height={200}
                width={100}
                className="w-auto "
              />
              <div className="flex flex-col mt-4">
                <h2 className="text-2xl font-bold text-white/80 ">Education</h2>
                <p className="text-lg text-white/70 mt-2">
                  I hold a certification in Front-end Development and i am
                  focusing on
                  <br />
                  technologies like React, Next.js, and Tailwind CSS.
                </p>
              </div>
            </div>
          </div>

          <div
            className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 
          rounded-xl overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to bg-orange-700 
            opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row p-6">
              <Image
                src="/pc.png"
                alt=""
                height={200}
                width={100}
                className="w-auto h-[130px]"
              />
              <div className="flex flex-col mt-4">
                <h2 className="text-2xl font-bold text-white/80 ">
                  Problem-Solving
                </h2>
                <p className="text-lg text-white/70 mt-2">
                  I approach challanges with a logical and systematic <br />
                  mindset.
                </p>
              </div>
            </div>
          </div>

          <div
            className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 
          rounded-xl overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to bg-orange-700 
            opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row p-6">
              <Image
                src="/card.png"
                alt=""
                height={200}
                width={100}
                className="w-auto h-[130px]"
              />
              <div className="flex flex-col mt-4">
                <h2 className="text-2xl font-bold text-white/80 ">
                  Experience
                </h2>
                <p className="text-lg text-white/70 mt-2">
                  I have a diverse portfolio of <br /> projects.
                </p>
              </div>
            </div>
          </div>

          <div
            className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 
          rounded-xl overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to bg-orange-700 
            opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row p-6">
              <Image
                src="/finance.png"
                alt=""
                height={200}
                width={100}
                className="w-auto h-[130px]"
              />
              <div className="flex flex-col mt-4">
                <h2 className="text-2xl font-bold text-white/80 ">
                  Technical Skills
                </h2>
                <p className="text-lg text-white/70 mt-2">
                  As a Front-end Developer, i specialize in React <br />
                  JS, Next.js, and Tailwind CSS. My expertise extends to
                  creating <br /> responsive, user-friendly interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
