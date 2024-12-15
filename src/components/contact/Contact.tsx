import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-black to-[#381a5f]">
      <div
        className="max-w-[1000px]  flex flex-col  lg:flex-row text-white/70 p-8 
        rounded-lg space-y-8 lg:space-y-0 lg:space-x-8"
        id="contact">
        <div className="flex justify-center items-center">
          <ul className="space-y-4">
            <li className="flex items-center">
              <Image
                src="/phone.png"
                alt="phone"
                height={110}
                width={50}
                className="mr-6"
              />
              <p className="text-xl ">+810 261 7384</p>
            </li>
            <li className="flex items-center">
              <Image
                src="/mail.png"
                alt="mail"
                height={110}
                width={50}
                className="mr-6"
              />
              <p className="text-xl mr-10 md:mr-0">amaraeugenia336@gmail.com</p>
            </li>
          </ul>
        </div>

        <div className="bg-white/10 p-6 rounded-xl max-w-[550px]">
          <h2 className="text-5xl font-bold text-orange-400 mb-4">
            Let{`'s`} Connect
          </h2>
          <p>Send me a message and let{`'s`} schedule a call!</p>
          <form className="space-y-4" action="http://getform.">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                type="text"
                placeholder="First Name"
              />
              <input
                className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                type="phone"
                placeholder="Phone Number"
              />
            </div>
            <textarea
              className="bg-black/70 rounded-xl w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your Message"
            />
            <button
              className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold 
          text-xl rounded-xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
