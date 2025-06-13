import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" bg-[var(--primary)] text-[var(--secondary)]">
      <div className="max-w-[1260px] mx-auto px-3 flex md:flex-row flex-col-reverse md:items-center md:gap-0 gap-4">
        <div className="md:w-[60%] w-full">
          <div className="max-w-[600px]">
            <p className="md:text-7xl text-5xl text-white font-bold md:text-left text-center">
              MarkUp <span className="text-[var(--secondary)]">Media</span>
            </p>
            <p className="text-[#C6CDCA] md:text-lg text-center  mt-3">
              We don't just market - We deliver Image sending in few mins
            </p>
            <div className="flex md:flex-row flex-col gap-3 mt-4">
              <button className="bg-[var(--secondary)] text-black font-bold px-10 py-4 rounded-lg">
                Contact Us
              </button>
              <button className="bg-[var(--primary)] border text-gray-400 font-bold px-10 py-4 rounded-lg">
                About Us
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-[40%] w-full flex justify-center md:justify-end">
          <Image
            src="/herosection.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
